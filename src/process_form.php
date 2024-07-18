<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $phone = htmlspecialchars($_POST['phone']);
    $email = htmlspecialchars($_POST['email']);

    // 管理者に送信するメールの設定
    $to = "zaurus.tokyo@gmail.com";
    $subject = "全力ストレッチ採用本部より問い合わせがありました。";
    $message = "全力ストレッチ採用本部より問い合わせがありました。\n以下問い合わせ内容です。\n\nお名前: $name\n電話番号: $phone\nメールアドレス: $email";
    $headers = "From: no-reply@zn-stretch.com";

    // 管理者へのメール送信
    if (mail($to, $subject, $message, $headers)) {
        echo "メールが送信されました。";

        // 自動返信メールの設定
        $auto_reply_subject = "お問い合わせありがとうございます";
        $auto_reply_message = "$name 様\n\nこの度はお問い合わせいただきありがとうございます。以下の内容でお問い合わせを受け付けました。\n\n" .
                              "お名前: $name\n電話番号: $phone\nメールアドレス: $email\n\n" .
                              "弊社から折り返しご連絡いたしますので、しばらくお待ちください。\n\n" .
                              "------------------------------\n" .
                              "全力ストレッチ 採用本部\n" .
                              "------------------------------";
        $auto_reply_headers = "From: no-reply@zn-stretch.com";

        // 自動返信メール送信
        mail($email, $auto_reply_subject, $auto_reply_message, $auto_reply_headers);
    } else {
        echo "メールの送信に失敗しました。";
    }
}
?>