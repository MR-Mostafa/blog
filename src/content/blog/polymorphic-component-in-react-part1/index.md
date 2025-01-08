---
title: ایجاد کامپوننت‌های Polymorphic در ری‌اکت - بخش اول
description: 'Polymorphic Component به کامپوننت‌هایی گفته می‌شوند که از طریق یک ورودی می‌توان تعیین کرد که در زمان رندرِ کامپوننت، چه المنتی از المنت‌های HTML در DOM رندر شود'
publishDate: 2023-10-23 10:00:00
tags: ['react', 'پلی مورفیسم', 'کامپوننت چندریختی', 'typeScript', 'polymorphic', 'پلی مورفیک', 'ری‌اکت']
heroImage: { src: './cover.webp', color: '#030a15', alt: 'Polymorphic React Components With TypeScript' }
---

**قبل از شروع مقاله بهتره سه نکته رو بیان کنم:**
- برای اینکه این آموزش/مقاله حوصله سر بر نشه، احتمالا چندقسمتی خواهد شد و سعی می‌کنم مفاهیم رو تا جایی که در توان و دانشم هست به صورت ساده و روان بیان کنم.
- مورد بعدی اینکه ساخت این سبک کامپوننت‌ها در جاوااسکریپت مشکل چندانی نداره ولی وقتی نیاز باشه به صورت Type Safety پیاده‌سازی بشه، یکم مباحثش در خصوص تعیین و نحوه تعریف تایپ‌ها دارای پیچدگی می‌شه.
- سوم اینکه چون مبنای این آموزش بر اساس تایپ‌اسکریپت و ری‌اکت هست پس نیاز هست که شما حداقل با [تایپ‌اسکریپت](https://www.typescriptlang.org/) و [ری‌اکت](https://react.dev/learn) آشنا باشید.


## اصلا Polymorphic Componentها چی هستند؟
اگر از UI Liberyهایی نظر [MUI](https://mui.com/)، [React Bootstrap](https://react-bootstrap.github.io/)، [Mantine](https://mantine.dev/) و ... استفاده کرده باشید، حتما با این نوع کامپوننت‌ها مواجه شده‌اید و حتی ممکنه در پروژه‌هاتون ازش استفاده کرده باشید، هرچند ممکنه از نظر مفهومی با اصلاح آن آشنا نباشید.

```tsx title="یک کامپوننت Polymorphic در لایبری MUI"
// [!code word:component="label"]
export default function InputFileUpload() {
  return (
    <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
      Upload file
      <VisuallyHiddenInput type="file" />
    </Button>
  );
}
```

<br />

**در این بخش می خواییم در این مورد صحبت کنیم که:**
- اولاً Polymorphic Componentها چی هستن؟
- دوماً چه ویژگی‌هایی دارند؟

<hr class="hr-dotted flex " />

قبل از پاسخ به سوال اول بهتره این رو توضیح بدیم که Polymorphism چی هست. برای پاسخ به این سوال من از مقاله‌ای که در [بلاگ فرادرس](https://b.fdrs.ir/58j) در این مورد منتشر شده کمک می‌گیرم:

> باید گفت که پلی مورفیسم (Polymorphism | چندریختی) واژه‌ای یونانی به حساب می‌آید، در لغت به معنی «داشتن چندین شکل و فُرم مختلف» است. در کل اصطلاح Polymorphism یعنی:<br/>
> شرایط رخ دادن و به وقوع پیوستن در فُرم‌های مختلف<br/>
> در علوم کامپیوتر و برنامه نویسی شی گرا ، شی دارای چند ریختی به شیئی گفته می‌شود که می‌تواند چندین فُرم و شکل را به خود بگیرد.<br/>
> برای اینکه بتوان مشخص کرد که آیا یک شی دارای حالت چندریختی یا به اصطلاح «پلی مورفیک» (Polymorphic) هست یا خیر، می‌توان یک آزمایش ساده انجام داد. در صورتی که آزمون‌های «is-a» (آیا هست؟) یا «instanceof» (نمونه‌ای از) برای آن شی موفقیت‌آمیز باشند، آن شی چندریختی دارد و به اصطلاح «پلی مورفیک» است.<br/>
> به بیان ساده، چندریختی یا پلی مورفیسم (Polymorphism) در برنامه نویسی، استفاده از یک بلوک کد و تغییر «نسخه» آن بلوک کد، بر اساس نوع ورودی‌ها است. اصطلاح پلی مورفیسم یا چندریختی در برنامه نویسی و علوم کامپیوتر به این معنا است که می‌توان به اشیایی با انواع مختلف از طریق رابط و واسطی یکسان دسترسی داشت.

حالا با دونستن معنی Polymorphism می‌تونیم حدس بزنیم در لایبری ری‌اکت به چه کامپوننت‌هایی Polymorphic Component می‌گن. در واقع Polymorphic Component به کامپوننت‌هایی گفته می‌شوند که از طریق یک پراپس/ورودی (معمولا به نام "as" یا "component") می‌توان تعیین کرد که در زمان رندرِ کامپوننت، چه المنتی از المنت‌های HTML در DOM رندر شود.


```tsx title="Polymorphic Button Component"
// [!code word:as="button"]
// [!code word:as="a"]
// [!code word:as="div"]
const ExampleButton = () => {
  return (
    <>
      <Button as="button" onClick={() => console.log('Button clicked!')}>
        Click me!
      </Button>

      <Button as="a" href="https://example.com">
        Go to Example
      </Button>

      <Button as="div" onClick={() => console.log('Div clicked!')}>
        I'm a div
      </Button>
    </>
  );
};
```

یعنی به جای اینکه از چندین کامپوننت جداگانه برای نمایش المنت‌های مختلف استفاده کنیم، یک کامپوننت را با استفاده از پارامترهای متفاوت ورودی، سفارشی‌سازی کنیم. مثلاً فرض کنید یک کامپوننت با نام "Button.tsx" داریم که برای نمایش دکمه‌ها استفاده می‌شود. با استفاده از Polymorphic Component می‌توانیم این کامپوننت را به گونه‌ای پیاده‌سازی کنیم که نوع المنت دکمه به عنوان ورودی قابل تنظیم باشد. (مثلا تگ "a" باشد یا تگ "button" و ...)

<hr class="hr-dotted flex " />

## ویژگی‌ها/ملزومات یک Polymorphic Component:
برای اینکه بتونیم بگیم یک کامپوننت، Polymorphic یا چندریختی/چندشکلی هست، حداقل باید دارای چهار ویژگی‌/ملزومات زیر باشد: (پیشنهاد می‌کنم که این ویژگی‌ها رو حتما به‌خاطر بسپارید یا در جایی یادداشت کنید، چون در بخش‌های بعدی هر کدوم از این موارد رو باید پیاده‌سازی کنیم)

1.  کامپوننت‌مان باید یک پراپس به عنوان ورودی جهت تعیین نوع المنت قبول کند. (در این مقاله ما از نام "as" استفاده می کنیم)
2.  مقداری که به پراپس "as" پاس می‌دهیم باید در DOM رندر شود. (مثلا تگ span)
3.  کامپوننت باید موارد زیر نیز پشتیبانی کند:
    *   اتریبیوت‌های سراسری/گلوبال مانند id یا class و ...
    *   از اتریبیوت‌های مختص با المنت تعیین شده، مانند src در تگ img یا href در تگ a و ...
    *   پراپس‌های کاستوم/سفارشی در کامپوننت‌های دیگر یا Third Party مثلا کامپوننت [Link](https://nextjs.org/docs/pages/api-reference/components/link) در فریم‌ورک NextJs پراپس‌هایی مانند replace یا prefetch و ... را دارد.
4.  در هنگام توسعه به صورت Type Safety پیاده‌سازی شده باشد، در نتیجه؛ تایپ‌اسکریپت در موراد زیر باید خطا نمایش دهد:
    *   اگر مقدار پاس داده شده به پراپرتی as از نوع المنت‌های معتبر در HTML نباشد. (مثلا المنت test در HTML معتبر نیست و در نتیجه نمی‌توان از آن استفاده کرد)
    *   اگر از اتریبیوتِ اشتباهی که مختص به آن المنت نیست، استفاده شود. مثلا تگ img اتریبیوت href را ندارد.
    *   اگر مقدار ref اشتباهی به کامپوننت پاس داده شود. (در مورد کامپوننت‌هایی که قابلیت [forwardRef](https://react.dev/reference/react/forwardRef) را دارند.) مثلا کامپوننت ما یک button است ولی مقدار ref به یک المنتی غیر از button اشاره می‌کند.

<hr class="hr-dotted flex " />

بنظرم برای بخش اول تا همین‌جا کافی هست. مابقی موارد رو در بخش‌های دیگه سعی می‌کنم توضیح بدم.

اگر مورد خاصی برای بخش اول بهتر هست گفته بشه که از قلم افتاده یا اشتباهی در نگارش وجود داره ممنون می‌شم از طریق نظرات بهم اطلاع بدید تا ویرایش لازم رو انجام بدم.


<hr class="hr-dotted flex " />

ضمنا منابعی که من برای نوشتن این مجموعه مقالات استفاده کردم فعلا موارد زیر هست:
*   [پلی مورفیسم در برنامه نویسی چیست؟ – مفهوم به زبان ساده + مثال](https://b.fdrs.ir/58j)
*   [Build strongly typed polymorphic components with React and TypeScript](https://blog.logrocket.com/build-strongly-typed-polymorphic-components-react-typescript/)
*   [React polymorphic components with TypeScript](https://isamatov.com/polymorphic-components-react-typescript/)
*   [React “Polymorphic Components” With TypeScript](https://betterprogramming.pub/react-polymorphic-components-with-typescript-real-practice-example-94c8a205d079)
*   [Polymorphic React components with TypeScript](https://jarocki.me/notes/polymorphic-react-components)
*   [Build Polymorphic Components with React and Typescript](https://www.udemy.com/course/build-polymorphic-components-with-react-and-typescript/?couponCode=NEWYEARCAREER)
