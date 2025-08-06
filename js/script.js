document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript loaded.");

    initializePlanCards();
    initializeModalBehavior();
    initializePlanForm();
    initializeContactForm();
    initializeJoinForm();
    initializeLoader();
});

/** ========== プランカードの生成 ========== */
function initializePlanCards() {
    const planDetails = {
        BASIC: {
            title: "BASIC プラン",
            description: "¥7,980/月 - 24時間ジム利用のみ。シンプルにトレーニングしたい方向けのベーシックプランです。",
            summary: "24時間のジム利用"
        },
        STANDARD: {
            title: "STANDARD プラン",
            description: "¥11,800/月 - パーソナルトレーニングやグループクラス（月2回）を含む、標準的なプランです。",
            summary: "スタンダードなメンバーシップ"
        },
        PREMIUM: {
            title: "PREMIUM プラン",
            description: "¥16,800/月 - すべてのサービスを含むフルサポートプラン。ゲスト同伴・回数無制限のグループクラス参加可。",
            summary: "ベストなメンバーシップ"
        }
    };

    const container = document.getElementById("planCardsContainer");
    if (!container) return;

    Object.keys(planDetails).forEach((key) => {
        const card = document.createElement("div");
        card.className = "plan-card";
        if (key === "PREMIUM") card.classList.add("premium");

        card.innerHTML = `
            <h3>${key}</h3>
            <p>${planDetails[key].summary}</p>
            <button class="plan-select">JOIN</button>
        `;

        container.appendChild(card);
    });
}

/** ========== モーダルの開閉制御 ========== */
function initializeModalBehavior() {
    const modal = document.getElementById("planModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");
    const selectedPlanInput = document.getElementById("selectedPlan");
    const closeBtn = document.querySelector(".close");
    const container = document.getElementById("planCardsContainer");

    if (!modal || !modalTitle || !modalDescription || !selectedPlanInput || !closeBtn || !container) return;

    container.addEventListener("click", function (e) {
        if (e.target.classList.contains("plan-select")) {
            const planName = e.target.closest(".plan-card").querySelector("h3").textContent;
            const details = {
                BASIC: {
                    title: "BASIC プラン",
                    description: "¥7,980/月 - 24時間ジム利用のみ。シンプルにトレーニングしたい方向けのベーシックプランです。",
                },
                STANDARD: {
                    title: "STANDARD プラン",
                    description: "¥11,800/月 - パーソナルトレーニングやグループクラス（月2回）を含む、標準的なプランです。",
                },
                PREMIUM: {
                    title: "PREMIUM プラン",
                    description: "¥16,800/月 - すべてのサービスを含むフルサポートプラン。ゲスト同伴・回数無制限のグループクラス参加可。",
                }
            };
            const detail = details[planName];
            if (detail) {
                modalTitle.textContent = detail.title;
                modalDescription.textContent = detail.description;
                selectedPlanInput.value = planName;
                modal.style.display = "block";
            }
        }
    });

    closeBtn.addEventListener("click", () => modal.style.display = "none");
    window.addEventListener("click", (event) => {
        if (event.target === modal) modal.style.display = "none";
    });

    window.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && modal.style.display === "block") {
            modal.style.display = "none";
        }
    });
}

/** ========== モーダル内フォーム送信処理 ========== */
function initializePlanForm() {
    const form = document.getElementById("modalForm");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");

    if (!form || !modalTitle || !modalDescription) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        console.log("【申し込み内容】", {
            name: form.name.value,
            email: form.email.value,
            plan: form.plan.value,
            message: form.message.value
        });

        form.style.display = "none";
        modalTitle.style.display = "none";
        modalDescription.style.display = "none";

        const successMessage = document.createElement("p");
        successMessage.textContent = "お申し込みありがとうございます！";
        successMessage.style.textAlign = "center";
        successMessage.style.fontSize = "1.2rem";
        successMessage.style.fontWeight = "bold";
        successMessage.style.color = "#28a745";
        successMessage.style.marginTop = "1rem";

        const modalContent = document.querySelector(".modal-content");
        if (modalContent) modalContent.appendChild(successMessage);

        form.reset();
    });
}

/** ========== お問い合わせフォーム送信処理 ========== */
function initializeContactForm() {
    const contactForm = document.getElementById("contactForm");
    const contactSection = document.querySelector(".contact-section") || document.querySelector(".contact");

    if (!contactForm || !contactSection) return;

    const contactTitle = contactSection.querySelector("h1");
    const contactIntro = contactSection.querySelector("p");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        console.log("【お問い合わせ送信】", {
            name: contactForm.name.value,
            email: contactForm.email.value,
            message: contactForm.message.value
        });

        contactForm.style.display = "none";
        if (contactTitle) contactTitle.style.display = "none";
        if (contactIntro) contactIntro.style.display = "none";

        const successMessage = document.createElement("div");
        successMessage.innerHTML = `
            <h2>お問い合わせありがとうございました。</h2>
            <p>ご記入いただいた内容は無事送信されました。</p>
            <a href="index.html">トップページに戻る</a>
        `;
        successMessage.classList.add("thanks-message");
        successMessage.style.textAlign = "center";
        successMessage.style.marginTop = "2rem";

        contactSection.appendChild(successMessage);
        contactForm.reset();
    });
}

/** ========== join.html の申し込みフォーム送信処理 ========== */
function initializeJoinForm() {
    const joinForm = document.getElementById("joinForm");
    const successBox = document.getElementById("joinSuccessMessage");

    // JOINページにだけ存在する <h1> の取得
    const joinSection = document.querySelector("main .contact");
    const joinTitle = joinSection ? joinSection.querySelector("h1") : null;

    if (joinForm && successBox) {
        joinForm.addEventListener("submit", function (e) {
            e.preventDefault();

            console.log("申し込み:", joinForm.name.value, joinForm.email.value);

            // フォームと見出しを非表示
            joinForm.style.display = "none";
            if (joinTitle) joinTitle.style.display = "none";

            // サクセスメッセージを表示
            successBox.style.display = "block";

            joinForm.reset();
        });
    }

}


/** ========== ローディング画面処理 ========== */
function initializeLoader() {
    window.addEventListener("load", function () {
        const loader = document.getElementById("loading-screen");
        if (loader) {
            console.log("全リソース読み込み完了 - ローディング非表示処理開始");
            loader.classList.add("fade-out");
            setTimeout(() => {
                loader.style.display = "none";
                console.log("ローディング画面を非表示にしました");
            }, 600);
        } else {
            console.warn("ローディング画面の要素が見つかりません");
        }
    });
}
