https://leetcode.com/problems/two-best-non-overlapping-events/description


/**
 * @param {number[][]} events
 * @return {number}
 */
var maxTwoEvents = function(events) {
    const n = events.length;

    // 1. 끝나는 시간(endTime) 기준으로 오름차순 정렬
    // 끝나는 시간이 같다면 시작 시간 등은 크게 중요하지 않지만, 안정적인 처리를 위해 둬도 무방합니다.
    events.sort((a, b) => a[1] - b[1]);

    // 2. Prefix Max 배열 생성 (앞에서부터 최대값 채우기)
    // maxVals[i] = 인덱스 0부터 i까지의 이벤트 중 가장 큰 value
    // 즉, "i번째 이벤트가 끝난 시점까지 봤을 때 가장 가치 높은 단일 이벤트 값"
    const maxVals = new Array(n);
    maxVals[0] = events[0][2];

    for (let i = 1; i < n; i++) {
        maxVals[i] = Math.max(maxVals[i - 1], events[i][2]);
    }

    let globalMax = 0;

    // 3. 각 이벤트를 "두 번째 이벤트"로 가정하고 순회
    for (let i = 0; i < n; i++) {
        const [start, end, value] = events[i];

        // 기본값: 현재 이벤트 하나만 선택했을 때의 가치
        let currentTotal = value;

        // 이진 탐색: 나의 시작 시간(start)보다 "이전에 끝난" 이벤트 찾기
        // 조건: events[mid].endTime < start
        // 만족하는 것 중 가장 오른쪽(인덱스가 큰) 녀석을 찾아야 함 (최신)
        let left = 0;
        let right = i - 1;
        let bestPrevIndex = -1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (events[mid][1] < start) {
                // 겹치지 않음! (조건 만족)
                // 더 늦게 끝나는(인덱스가 더 큰) 녀석이 있나 확인하기 위해 오른쪽으로 이동
                bestPrevIndex = mid;
                left = mid + 1;
            } else {
                // 겹침! (조건 불만족)
                // 시간을 더 앞으로 당겨야 하므로 왼쪽으로 이동
                right = mid - 1;
            }
        }

        // 겹치지 않는 이전 이벤트가 있다면, 그 시점까지의 최대값(Prefix Max)을 더함
        if (bestPrevIndex !== -1) {
            currentTotal += maxVals[bestPrevIndex];
        }

        globalMax = Math.max(globalMax, currentTotal);
    }

    return globalMax;
};
