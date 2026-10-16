/*
 * METEORA — 유성운의 갤럭시 공유 기본 설정
 * 기본 메시지/일정/메일/날씨 설정은 사이트 방문자가 앱에서 직접 수정할 수 없습니다.
 * 방문자 답장·체크한 리마인더·개인 일정·통화 기록은 각 방문자 브라우저에 개별 저장됩니다.
 * 공유 기본값을 변경하려면 저장소 소유자가 이 파일을 편집하고 Commit changes 해야 합니다.
 * 날씨: Open-Meteo Current Weather API (Seoul widget + Seoul/Jeju weather app).
 */
window.METEORA_CONFIG = {
  character: {
    name: "유성운", rank: "A급 헌터", organization: "수집상", guildMaster: "비사벌",
    description: "부모님 없이 홀로 지내는 수집상 소속 A급 헌터. 게이트 대응과 보고서 업무가 겹쳐 야근과 철야가 잦다."
  },
  weather: { region: "서울", temperature: "연결 중", condition: "실시간 날씨 연결 중" },
  wallpaper: { home: null, lock: null },
  emailAddress: "ysw.a@soojipsang.guild",
  browserSearches: [
    { query: "길드장이 괴롭힘", time: "어제" },
    { query: "직장 내 괴롭힘 신고", time: "어제" },
    { query: "퇴사하는 법", time: "3일 전" },
    { query: "수집상 퇴사 절차", time: "3일 전" },
    { query: "A급 헌터 야간 근무 거부", time: "지난주" }
  ],
  homeGreeting: "보고서 제출 완료. 이제 10분만 쉬자, 성운아 ✦",
  notifications: [
    { app: "카카오톡 · 비사벌", message: "성운아, 귀환 보고 확인했어? 끝나면 연락 남겨." },
    { app: "메시지 · 수집상 출동관리", message: "A급 헌터 유성운 님, 야간 출동 기록이 접수되었습니다." },
    { app: "회사 메일 · 정산팀", message: "[수집상] 북부 게이트 정산 보고서 보완 요청" }
  ],
  calendarEvents: [
    { dayOffset: 0, time: "20:30", title: "북부 게이트 잔류 마력 수치 확인" },
    { dayOffset: 0, time: "22:00", title: "비사벌 길드장에게 출동 결과 보고" },
    { dayOffset: 1, time: "06:10", title: "수집상 야간 출동 브리핑" },
    { dayOffset: 1, time: "09:00", title: "귀환 후 마력 잔류 검사" },
    { dayOffset: 2, time: "14:30", title: "헌터관리협회 정기 서류 제출" },
    { dayOffset: 3, time: "23:40", title: "A급 게이트 현장 지원 대기" }
  ],
  reminders: [
    { id: "gear", title: "장비 상태 확인 및 반납", detail: "수집상 장비실", due: "오늘" },
    { id: "report", title: "북부 게이트 보고서 수정", detail: "잔류 마력 수치 첨부", due: "오늘 23:30" },
    { id: "return", title: "귀환 확인 메시지 보내기", detail: "비사벌 길드장에게", due: "업무 종료 전" },
    { id: "meal", title: "식사와 수분 챙기기", detail: "또 거르지 말 것", due: "오늘" },
    { id: "inspection", title: "마력 잔류 검사 예약 확인", detail: "수집상 본부", due: "내일 09:00" }
  ],
  phoneContacts: [
    { name: "지오", number: "010-0000-0410", detail: "개인 연락처", specialCall: "geo" },
    { name: "비사벌", number: "010-0000-2049", detail: "수집상 · 길드장", specialCall: "bishabal" },
    { name: "수집상 출동관리", number: "02-0000-1024", detail: "업무 연락", specialCall: "work" },
    { name: "강지훈", number: "010-0000-0917", detail: "수집상 동료", specialCall: "default" }
  ],
  kakaoChats: [
    {
      id: "geo", name: "지오", avatar: "지", color: "#ded8f8", preview: "오늘도 무사히 귀환하셨습니까?", time: "오후 11:41", unread: 1,
      messages: [
        { from: "them", sender: "지오", text: "유성운 씨, 아직 사무실이십니까?", time: "오후 11:35" },
        { from: "me", text: "마무리할 보고서가 조금 남았습니다.", time: "오후 11:37" },
        { from: "them", sender: "지오", text: "그렇습니까. 너무 늦지 않게 돌아가십시오.", time: "오후 11:41" }
      ]
    },
    {
      id: "guildmaster", name: "비사벌", avatar: "비", color: "#d8d5f6", preview: "보고서보다 귀환이 먼저다.", time: "오후 11:18", unread: 1,
      messages: [
        { from: "them", sender: "비사벌", text: "성운아, 보고서는 나중에 해도 되니까 먼저 귀환 확인부터 올려.", time: "오후 11:12" },
        { from: "me", text: "잔류 마력 수치만 정리하고 복귀하겠습니다.", time: "오후 11:14" },
        { from: "them", sender: "비사벌", text: "측정은 관제팀에 넘겨. A급이라고 혼자 다 떠안지 말고.", time: "오후 11:18" }
      ]
    },
    {
      id: "jihoon", name: "강지훈", avatar: "지", color: "#d7e5e2", preview: "너 아직 사무실이야?", time: "오후 9:57", unread: 0,
      messages: [
        { from: "them", sender: "강지훈", text: "너 아직 사무실이야? 관제실 불 아직 켜져 있던데.", time: "오후 9:53" },
        { from: "me", text: "보고서 마감하고 있어. 조금 있으면 갈게.", time: "오후 9:57" }
      ]
    },
    {
      id: "collect-raid", name: "수집상 공략 3팀", avatar: "3", color: "#d8e4f7", isGroup: true, memberCount: 6, preview: "북부 게이트 수치 공유합니다.", time: "오후 10:46", unread: 3,
      messages: [
        { from: "them", sender: "박예린", text: "북부 게이트 잔류 마력 수치 공유합니다. 예상보다 12% 높습니다.", time: "오후 10:41" },
        { from: "them", sender: "정태오", text: "A급 추가 투입 여부 확인 부탁드립니다.", time: "오후 10:44" },
        { from: "them", sender: "박예린", text: "유성운 헌터님, 현장 보고서에 측정값 추가해 주시면 감사하겠습니다.", time: "오후 10:46" }
      ]
    },
    {
      id: "guild-work", name: "길드업무방 · 북부 게이트", avatar: "업", color: "#e6ddf5", isGroup: true, memberCount: 9, preview: "[비사벌] 현장 인원 귀환 확인", time: "오후 11:05", unread: 2,
      messages: [
        { from: "them", sender: "비사벌", text: "현장 인원 귀환 여부를 이 방에 남겨. 누락 없이 확인한다.", time: "오후 10:59" },
        { from: "them", sender: "관제팀", text: "1·2조 전원 귀환 확인했습니다.", time: "오후 11:02" },
        { from: "them", sender: "비사벌", text: "성운, 네 조도 확인되면 체크 남겨.", time: "오후 11:05" }
      ]
    },
    {
      id: "hunter-notice", name: "헌터 공통 공지방", avatar: "공", color: "#dce8f1", isGroup: true, memberCount: 24, preview: "내일 협회 출입증 갱신 안내", time: "오후 6:32", unread: 1,
      messages: [
        { from: "them", sender: "협회 공지봇", text: "[공지] 헌터관리협회 출입증 갱신 대상자는 내일 18시까지 온라인 서류를 제출해 주세요.", time: "오후 6:28" },
        { from: "them", sender: "길드원 민서", text: "이번에는 사진도 다시 올려야 한대요.", time: "오후 6:32" }
      ]
    },
    {
      id: "night-shift", name: "수집상 야간 출동반", avatar: "야", color: "#e3e3f8", isGroup: true, memberCount: 5, preview: "교대 인원 변경됐습니다.", time: "오후 8:21", unread: 1,
      messages: [
        { from: "them", sender: "출동관리", text: "금일 야간 지원 인원은 2조에서 3조로 변경됐습니다.", time: "오후 8:17" },
        { from: "them", sender: "강지훈", text: "성운아, 네 이름도 그대로 올라가 있더라. 확인해 봐.", time: "오후 8:21" }
      ]
    }
  ],
  smsChats: [
    {
      id: "dispatch-sms", name: "수집상 출동관리", avatar: "수", color: "#dfe5f1", preview: "야간 출동 조 편성이 변경됐습니다.", time: "오후 9:24", unread: 1,
      messages: [ { from: "them", sender: "수집상 출동관리", text: "[수집상 출동관리] 야간 출동 조 편성이 변경됐습니다. 세부 내용은 사내 포털을 확인해 주세요.", time: "오후 9:24" } ]
    },
    {
      id: "gate-control", name: "게이트 관제실", avatar: "관", color: "#dce9f6", preview: "북부 게이트 반응 수치가 상승했습니다.", time: "오후 10:06", unread: 0,
      messages: [ { from: "them", sender: "게이트 관제실", text: "북부 게이트 반응 수치가 상승했습니다. 현장 인원은 안전 구역에서 대기해 주세요.", time: "오후 10:06" } ]
    },
    {
      id: "guild-sms", name: "비사벌 · 긴급 연락", avatar: "비", color: "#e6dff6", preview: "확인하면 짧게 답장해.", time: "오후 11:02", unread: 1,
      messages: [ { from: "them", sender: "비사벌", text: "상황 확인했어. 귀환하면 메시지 하나만 남겨.", time: "오후 11:02" } ]
    },
    {
      id: "official-sms", name: "헌터관리협회", avatar: "협", color: "#e5e7ec", preview: "등록 자료 확인 요청", time: "오후 4:10", unread: 0,
      messages: [ { from: "them", sender: "헌터관리협회", text: "[헌터관리협회] A급 헌터 유성운 님, 현장 기록 확인을 위해 출동 보고 자료를 제출해 주세요.", time: "오후 4:10" } ]
    }
  ],
  incomingSimulation: {
    enabled: true, firstDelaySeconds: 18, minIntervalSeconds: 34, maxIntervalSeconds: 43, maxEventsPerSession: 5,
    events: [
      { type: "message", app: "kakao", chatId: "guildmaster", sender: "비사벌", text: "성운아, 아직 회사냐? 확인하면 바로 답해." },
      {
        type: "call", name: "비사벌", number: "010-0000-2049", title: "수집상 · 길드장", autoHangup: true,
        transcriptLines: [
          { speaker: "비사벌", text: "성운아, 어디야? 아직 귀환 보고가 안 올라왔는데." },
          { speaker: "유성운", text: "수집상 본부입니다. 보고서 수정 중입니다." },
          { speaker: "비사벌", text: "보고서는 내일 해. 장비 반납하고 귀환해. 내가 승인할 테니까." },
          { speaker: "유성운", text: "…알겠습니다. 정리하고 들어가겠습니다." },
          { speaker: "비사벌", text: "도착하면 메시지 하나만 남겨. 기다리고 있을 테니." }
        ]
      },
      { type: "message", app: "messages", chatId: "dispatch-sms", sender: "수집상 출동관리", text: "[수집상 출동관리] 야간 추가 지원 요청이 등록되었습니다. 가능 여부를 회신해 주세요." },
      {
        type: "call", name: "지오", number: "010-0000-0410", title: "개인 연락처", autoHangup: true,
        transcriptLines: [
          { speaker: "지오", text: "유성운 씨, 아직 깨어 계시는군요." },
          { speaker: "유성운", text: "지오? 이 시간에 무슨 일입니까?" },
          { speaker: "지오", text: "장시간 근무 중이라고 들었습니다. 따뜻한 것이라도 챙겨 드십시오." },
          { speaker: "지오", text: "너무 무리하지 마십시오. 무사히 돌아오셔야 합니다." }
        ]
      },
      { type: "message", app: "kakao", chatId: "jihoon", sender: "강지훈", text: "야, 관제실 불 아직 켜져 있던데. 또 야근이냐? 밥은 먹었어?" }
    ]
  },
  emails: [
    { id: "mail-raid-report", sender: "비사벌 · 길드장", avatar: "비", color: "#d8d5f6", time: "오후 11:42", subject: "[수집상] 북부 게이트 출동 보고 보완", body: "유성운 헌터.\n\n보고서 확인했다. 잔류 마력 측정값과 현장 인원 귀환 시간을 추가해 줘.\n\n그리고 오늘은 여기까지 하고 복귀해. 남은 정산은 내일 관제팀과 같이 처리한다.\n\n- 비사벌" },
    { id: "mail-shift", sender: "수집상 출동관리", avatar: "수", color: "#dfe5f1", time: "오후 9:16", subject: "야간 근무 편성표 변경 안내", body: "유성운 헌터님, 게이트 반응 수치 상승으로 야간 지원 대기 시간이 변경되었습니다. 세부 내용은 수집상 내부 포털의 가상 편성표를 확인해 주세요.\n\n본 메일은 Meteora 세계관 체험용 가상 메일입니다." },
    { id: "mail-pay", sender: "수집상 정산팀", avatar: "정", color: "#f2e5d9", time: "오후 5:08", subject: "A급 헌터 출동 수당 및 보고서 확인", body: "금일 출동 수당 정산을 위해 현장 보고서 보완이 필요합니다. 확인 항목은 게이트 등급, 잔류 마력 수치, 파티 귀환 여부입니다.\n\n내일 오전 9시 전까지 등록 부탁드립니다." },
    { id: "mail-association", sender: "헌터관리협회 등록팀", avatar: "협", color: "#e5e7ec", time: "오후 3:20", subject: "A급 헌터 정기 등록 자료 확인", body: "유성운 헌터님, 정기 등록 자료 중 현장 활동 기록의 최종 확인이 필요합니다. 기한 내 확인 후 제출해 주시기 바랍니다.\n\n- 헌터관리협회 등록팀" }
  ]
};
