<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $webhookurl = "votre-webhook-url";
    
    $pseudo = $_POST['pseudo'];
    $email = $_POST['email'];
    $sujet = $_POST['sujet'];
    $message = $_POST['message'];
    
    $json_data = json_encode([
        "username" => "Eagle Space Bot",
        "embeds" => [
            [
                "title" => "📨 Nouveau Message",
                "color" => hexdec("2B87D1"),
                "fields" => [
                    [
                        "name" => "👤 Pseudo",
                        "value" => $pseudo,
                        "inline" => true
                    ],
                    [
                        "name" => "📧 Email",
                        "value" => $email,
                        "inline" => true
                    ],
                    [
                        "name" => "📝 Sujet",
                        "value" => $sujet,
                        "inline" => true
                    ],
                    [
                        "name" => "💬 Message",
                        "value" => $message,
                        "inline" => false
                    ]
                ],
                "footer" => [
                    "text" => "Eagle Space Company • Contact System"
                ],
                "timestamp" => date("c", strtotime("now"))
            ]
        ]
    ], JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);

    $ch = curl_init($webhookurl);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-type: application/json'));
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $json_data);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
    curl_setopt($ch, CURLOPT_HEADER, 0);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    
    $response = curl_exec($ch);
    curl_close($ch);
    
    // Modification du chemin de redirection pour pointer vers la racine
    header("Location: ../contact.html?status=success");
}
?>