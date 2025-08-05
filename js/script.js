document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript loaded.");

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
    if (container) {
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

    const modal = document.getElementById("planModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");
    const selectedPlanInput = document.getElementById("selectedPlan");
    const closeBtn = document.querySelector(".close");

    if (container && modal && modalTitle && modalDescription && closeBtn) {
        container.addEventListener("click", function (e) {
            if (e.target.classList.contains("plan-select")) {
                const planName = e.target.parentElement.querySelector("h3").textContent;
                const detail = planDetails[planName];
                if (detail) {
                    modalTitle.textContent = detail.title;
                    modalDescription.textContent = detail.description;
                    selectedPlanInput.value = planName;
                    modal.style.display = "block";
                }
            }
        });

        closeBtn.addEventListener("click", function () {
            modal.style.display = "none";
        });

        window.addEventListener("click", function (event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    }

    const form = document.getElementById("modalForm");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = form.name.value;
            const email = form.email.value;
            const message = form.message.value;
            const plan = form.plan.value;

            console.log("【申し込み内容】");
            console.log("名前:", name);
            console.log("メール:", email);
            console.log("プラン:", plan);
            console.log("要望:", message);

            // フォーム非表示
            modalTitle.style.display = "none";
            modalDescription.style.display = "none";
            form.style.display = "none";

            // サクセスメッセージ要素作成
            const successMessage = document.createElement("p");
            successMessage.textContent = "お申し込みありがとうございます！";
            successMessage.style.textAlign = "center";
            successMessage.style.fontSize = "1.2rem";
            successMessage.style.fontWeight = "bold";
            successMessage.style.color = "#28a745";
            successMessage.style.marginTop = "1rem";
            successMessage.id = "submission-success";

            // モーダル内に追加
            const modalContent = document.querySelector(".modal-content");
            if (modalContent && !document.getElementById("submission-success")) {
                modalContent.appendChild(successMessage);
            }

            // 必要ならフォームリセット（次回のために）
            form.reset();
        });
    }

    // ESCキーでモーダルを閉じる
    window.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && modal.style.display === "block") {
            modal.style.display = "none";
        }
    });
});




document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const contactSection = document.querySelector(".contact");
    const contactTitle = contactSection.querySelector("h1");
    const contactIntro = contactSection.querySelector("p");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            // ログ出力（確認用）
            console.log("【お問い合わせ送信】");
            console.log("名前:", contactForm.name.value);
            console.log("メール:", contactForm.email.value);
            console.log("内容:", contactForm.message.value);

            // フォームと見出し・説明文を非表示
            contactForm.style.display = "none";
            if (contactTitle) contactTitle.style.display = "none";
            if (contactIntro) contactIntro.style.display = "none";

            // サクセスメッセージ作成・挿入
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

            // フォーム内容をリセット（次回に備えて）
            contactForm.reset();
        });
    }



    const joinForm = document.getElementById("joinForm");
    const successBox = document.getElementById("joinSuccessMessage");

    if (joinForm && successBox) {
        joinForm.addEventListener("submit", function (e) {
            e.preventDefault();

            // ログ（任意）
            console.log("申し込み:", joinForm.name.value, joinForm.email.value);

            // フォーム非表示、メッセージ表示
            joinForm.style.display = "none";
            if (contactTitle) contactTitle.style.display = "none";
            successBox.style.display = "block";
        });
    }
});

