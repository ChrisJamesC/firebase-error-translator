const translations = {
	"auth/claims-too-large": "提供給權利要求淨荷setCustomUserClaims()超過了1000個字節的最大允許大小。",
	"auth/email-already-exists": "提供的電子郵件已被現有用戶使用。每個用戶必須有一個唯一的電子郵件。",
	"auth/id-token-expired": "提供的 Firebase ID 令牌已過期。",
	"auth/id-token-revoked": "Firebase ID 令牌已被撤銷。",
	"auth/insufficient-permission": "用於初始化 Admin SDK 的憑據沒有足夠的權限來訪問請求的身份驗證資源。請參閱建立一個火力地堡項目有關如何生成具有相應權限的憑證，並用它來驗證管理的SDK文檔。",
	"auth/internal-error": "身份驗證服務器在嘗試處理請求時遇到意外錯誤。錯誤消息應包含來自包含附加信息的身份驗證服務器的響應。如果錯誤仍然存在，請將此問題報告給我們的錯誤報告支持渠道。",
	"auth/invalid-argument": "向身份驗證方法提供了無效參數。錯誤消息應包含附加信息。",
	"auth/invalid-claims": "提供給自定義聲明屬性setCustomUserClaims()無效。",
	"auth/invalid-continue-uri": "繼續 URL 必須是有效的 URL 字符串。",
	"auth/invalid-creation-time": "創建時間必須是有效的 UTC 日期字符串。",
	"auth/invalid-credential": "用於對 Admin SDK 進行身份驗證的憑據不能用於執行所需的操作。某些身份驗證方法如createCustomToken()和verifyIdToken()所需要的SDK與證書憑證被初始化，而不是刷新令牌或應用程序的默認憑證。見初始化SDK如何管理的SDK使用證書憑證的認證文件。",
	"auth/invalid-disabled-field": "對於所提供的價值disabled的用戶屬性是無效的。它必須是一個布爾值。",
	"auth/invalid-display-name": "對於所提供的值displayName的用戶屬性是無效的。它必須是一個非空字符串。",
	"auth/invalid-dynamic-link-domain": "未為當前項目配置或授權提供的動態鏈接域。",
	"auth/invalid-email": "對於所提供的價值email的用戶屬性是無效的。它必須是字符串電子郵件地址。",
	"auth/invalid-email-verified": "對於所提供的價值emailVerified用戶屬性無效。它必須是一個布爾值。",
	"auth/invalid-hash-algorithm": "哈希算法必須匹配支持算法列表中的字符串之一。",
	"auth/invalid-hash-block-size": "散列塊大小必須是有效數字。",
	"auth/invalid-hash-derived-key-length": "散列派生密鑰長度必須是有效數字。",
	"auth/invalid-hash-key": "散列鍵必須是有效的字節緩衝區。",
	"auth/invalid-hash-memory-cost": "哈希內存成本必須是有效數字。",
	"auth/invalid-hash-parallelization": "哈希並行化必須是有效數字。",
	"auth/invalid-hash-rounds": "散列輪數必須是有效數字。",
	"auth/invalid-hash-salt-separator": "散列算法鹽分隔符字段必須是有效的字節緩衝區。",
	"auth/invalid-id-token": "提供的 ID 令牌不是有效的 Firebase ID 令牌。",
	"auth/invalid-last-sign-in-time": "上次登錄時間必須是有效的 UTC 日期字符串。",
	"auth/invalid-page-token": "在令牌所提供的下一個頁面listUsers()是無效的。它必須是有效的非空字符串。",
	"auth/invalid-password": "對於所提供的價值password的用戶屬性是無效的。它必須是至少包含六個字符的字符串。",
	"auth/invalid-password-hash": "密碼哈希必須是有效的字節緩衝區。",
	"auth/invalid-password-salt": "密碼鹽必須是有效的字節緩衝區",
	"auth/invalid-phone-number": "對於所提供的價值phoneNumber無效。它必須是符合 E.164 標準的非空標識符字符串。",
	"auth/invalid-photo-url": "對於所提供的價值photoURL用戶屬性無效。它必須是字符串 URL。",
	"auth/invalid-provider-data": "providerData 必須是有效的 UserInfo 對像數組。",
	"auth/invalid-provider-id": "providerId 必須是有效的受支持的提供者標識符字符串。",
	"auth/invalid-oauth-responsetype": "只有一個確切的OAuth responseType應設置為true。",
	"auth/invalid-session-cookie-duration": "會話 cookie 持續時間必須是 5 分鐘到 2 週之間的有效數字（以毫秒為單位）。",
	"auth/invalid-uid": "所提供的uid必須是一個非空字符串，最多128個字符。",
	"auth/invalid-user-import": "要導入的用戶記錄無效。",
	"auth/maximum-user-count-exceeded": "已超過允許導入的最大用戶數。",
	"auth/missing-android-pkg-name": "如果需要安裝 Android 應用程序，則必須提供 Android 包名稱。",
	"auth/missing-continue-uri": "請求中必須提供有效的繼續 URL。",
	"auth/missing-hash-algorithm": "使用密碼散列導入用戶需要提供散列算法及其參數。",
	"auth/missing-ios-bundle-id": "該請求缺少 iOS Bundle ID。",
	"auth/missing-uid": "甲uid標識符是必需的當前操作。",
	"auth/missing-oauth-client-secret": "啟用 OIDC 代碼流需要 OAuth 配置客戶端密鑰。",
	"auth/operation-not-allowed": "您的 Firebase 項目已禁用提供的登錄提供程序。從啟用登錄方法的火力地堡控制台部分。",
	"auth/phone-number-already-exists": "所提供的phoneNumber是已經通過現有的用戶使用。每個用戶必須有唯一的phoneNumber 。",
	"auth/project-not-found": "未找到用於初始化 Admin SDK 的憑據的 Firebase 項目。請參閱建立一個火力地堡項目有關如何為您的項目憑證，並用它來驗證管理的SDK文檔。",
	"auth/reserved-claims": "提供給一個或多個自定義用戶的權利要求setCustomUserClaims()被保留。例如， OIDC如（分，IAT，ISS，EXP，AUD，auth_time等）特定的權利要求不應該被用作自定義聲明密鑰。",
	"auth/session-cookie-expired": "提供的 Firebase 會話 cookie 已過期。",
	"auth/session-cookie-revoked": "Firebase 會話 cookie 已被撤銷。",
	"auth/uid-already-exists": "所提供的uid已經在通過現有的用戶使用。每個用戶必須有一個唯一的uid 。",
	"auth/unauthorized-continue-uri": "繼續 URL 的域未列入白名單。在 Firebase 控制台中將域列入白名單。",
	"auth/user-not-found": "沒有與提供的標識符對應的現有用戶記錄。",

	"else": "服務器錯誤.",
}

export default translations