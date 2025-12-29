/**
 * https://leetcode.com/problems/pyramid-transition-matrix
 * @param {string} bottom - 피라미드의 맨 아랫줄 문자열
 * @param {string[]} allowed - 사용 가능한 [왼쪽, 오른쪽, 위] 패턴 리스트
 * @return {boolean} - 꼭대기까지 쌓을 수 있는지 여부
 */
var pyramidTransition = function (bottom, allowed) {
    
    // 1. [데이터 구조화] "왼쪽+오른쪽" 2글자를 키로, 위에 올 수 있는 "후보 문자들"을 배열로 저장
    // 예: "AA": ["B", "C"] 형태
    const patterns = allowed.reduce((acc, [left, right, top]) => {
        const key = left + right;
        acc[key] = (acc[key] || []);
        acc[key].push(top);
        return acc;
    }, {});

    // 2. [메모이제이션] 이미 확인한 '층(문자열)'의 결과를 저장해 중복 계산 방지
    // 키: "AAB", 값: true/false
    const memo = new Map();

    /**
     * [층 단위 재귀 함수]
     * 현재 층을 완성하고, 그 다음 윗층으로 올라가는 역할
     */
    const canSolve = (curr) => {
        // 꼭대기(길이 1)에 도달했다면 피라미드 건설 성공!
        if (curr.length === 1) return true;
        
        // 이 층 구성은 이미 검사해본 적이 있다면 저장된 결과를 반환
        if (memo.has(curr)) return memo.get(curr);

        // 현재 층(curr)을 기반으로 다음 층(nextRow)을 한 칸씩 쌓기 시작
        const result = buildRow(curr, "", 0);
        
        // 현재 층에서 꼭대기까지 갈 수 있는지 여부를 메모리에 기록
        memo.set(curr, result);
        return result;
    }

    /**
     * [칸 단위 재귀 함수] - 백트래킹의 핵심
     * 현재 층(curr)의 블록들을 조합해 바로 윗층(nextRow) 한 줄을 만드는 역할
     * @param {string} curr - 기준이 되는 아래층
     * @param {string} nextRow - 현재 만들어지고 있는 윗층 문자열
     * @param {number} idx - 아래층에서 검사할 블록의 시작 인덱스
     */
    const buildRow = (curr, nextRow, idx) => {
        // 윗층의 길이가 아래층보다 1 작게 완성되었다면 (한 줄 완성)
        if (nextRow.length === curr.length - 1) {
            // 완성된 줄을 '현재 층'으로 삼아 다시 윗층 쌓기 시도 (층 단위 재귀 호출)
            return canSolve(nextRow);
        }

        // 현재 검사 중인 두 블록(왼쪽, 오른쪽)으로 만들 수 있는 패턴 키 생성
        const key = curr[idx] + curr[idx + 1];
        const currentPattens = patterns[key] || [];

        // 가능한 모든 후보 문자('char')를 하나씩 대입해보며 탐색
        for (const char of currentPattens) {
            // 후보 문자를 윗층에 추가하고, 다음 칸(idx + 1)을 채우러 이동
            if (buildRow(curr, nextRow + char, idx + 1)) {
                // 이 경로로 끝까지 도달하는 데 성공했다면 즉시 true 반환 (가지치기)
                return true;
            }
        }
        
        // 모든 후보를 써봤지만 윗층을 완성할 수 없다면 false
        return false;
    }

    // 맨 처음 바닥(bottom)부터 피라미드 쌓기 시작
    return canSolve(bottom);
};
