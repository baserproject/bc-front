<?php
/**
 * baserCMS :  Based Website Development Project <https://basercms.net>
 * Copyright (c) NPO baser foundation <https://baserfoundation.org/>
 *
 * @copyright     Copyright (c) NPO baser foundation
 * @link          https://basercms.net baserCMS Project
 * @since         5.0.0
 * @license       https://basercms.net/license/index.html MIT License
 */

/**
 * メールフォーム
 * 呼出箇所：メールフォーム
 *
 * @var \BcMail\View\MailFrontAppView $this
 * @checked
 * @noTodo
 * @unitTest
 */
$this->BcUpload->setTable('BcMail.MailMessages');
?>


<h2 class="bs-mail-title"><?php $this->BcBaser->contentsTitle() ?></h2>

<h3 class="bs-mail-title-sub"><?php echo __('入力フォーム') ?></h3>

<?php if ($this->Mail->descriptionExists()): ?>
	<div class="bs-mail-description"><?php $this->Mail->description() ?></div>
<?php endif ?>

<div class="bs-mail-form">
	<?php $this->BcBaser->flash() ?>
	<!-- /Elements/mail_form.php -->
	<?php $this->BcBaser->element('mail_form') ?>
</div>

