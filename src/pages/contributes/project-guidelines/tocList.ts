import type { CardListData } from 'astro-pure/types';

const baseUrl = '/contributes/project-guidelines';

export const projectGuidelinesTocList: CardListData = {
	title: 'فهرست مطالب',
	list: [
		{
			title: 'گیت (Git)',
			link: `${baseUrl}/git`,
			children: [
				{
					title: 'برخی از قوانین Git',
					link: `${baseUrl}/git#برخی-از-قوانین-git`,
				},
				{
					title: 'گردش کار گیت (Git Workflow)',
					link: `${baseUrl}/git#گردش-کار-گیت-git-workflow`,
				},
				{
					title: 'نگارش بهتر متن کامیت‌ها',
					link: `${baseUrl}/git#نگارش-بهتر-متن-کامیتها`,
				},
			],
		},
		{
			title: 'مستندات (Documentation)',
			link: `${baseUrl}/documentation`,
		},
		{
			title: 'متغیرهای محیطی (Environments)',
			link: `${baseUrl}/environments`,
			children: [
				{
					title: 'ایجاد محیط‌های توسعه‌ی یکپارچه (Consistent Dev Environments)',
					link: `${baseUrl}/environments#ایجاد-محیطهای-توسعهی-یکپارچه-consistent-dev-environments`,
				},
				{
					title: 'وابستگی‌های یکسان و هماهنگ (Consistent Dependencies)',
					link: `${baseUrl}/environments#وابستگیهای-یکسان-و-هماهنگ-consistent-dependencies`,
				},
			],
		},
		{
			title: 'وابستگی‌ها (Dependencies)',
			link: `${baseUrl}/dependencies`,
		},
		{
			title: 'تست کردن (Testing)',
			link: `${baseUrl}/testing`,
		},
		{
			title: 'ساختار و نام‌گذاری (Structure and Naming)',
			link: `${baseUrl}/structure-and-naming`,
		},
		{
			title: 'سبک کدنویسی (Code Style)',
			link: `${baseUrl}/code-style`,
			children: [
				{
					title: 'برخی اصول Code Style',
					link: `${baseUrl}/code-style#برخی-اصول-code-style`,
				},
				{
					title: 'اعمال استانداردهای کدنویسی',
					link: `${baseUrl}/code-style#اعمال-استانداردهای-کدنویسی`,
				},
			],
		},
		{
			title: 'ثبت وقایع (Logging)',
			link: `${baseUrl}/logging`,
		},
		{
			title: 'ای‌پی‌آی (API)',
			link: `${baseUrl}/api`,
			children: [
				{
					title: 'طراحی API',
					link: `${baseUrl}/api#طراحی-api`,
				},
				{
					title: 'امنیت ای‌پی‌آی (API security)',
					link: `${baseUrl}/api#امنیت-ایپیآی-api-security`,
				},
				{
					title: 'مستندسازی ای‌پی‌آی (API documentation)',
					link: `${baseUrl}/api#مستندسازی-ایپیآی-api-documentation`,
				},
			],
		},
		{
			title: 'دسترس‌پذیری (Accessibility)',
			link: `${baseUrl}/accessibility-a11y`,
		},
		{
			title: 'مجوزها (Licensing)',
			link: `${baseUrl}/licensing`,
		},
	],
};
