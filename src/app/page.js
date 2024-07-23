import Image from "next/image";
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-stretch justify-start tracking-wider">
      <header className="container flex flex-col items-center justify-center gap-2 pt-2 pb-10">
        <Image src="/images/ggnegev-ltd-logo.png" alt="Logo" width={182} height={100} />
        <h1 className="text-center text-xl sm:text-2xl">חברת גג הנגב בע"מ, מורשים לפינוי אסבסט מהמשרד לאיכות הסביבה </h1>
        <p className="text-center text-2xl sm:text-3xl">
          <span>לייעוץ ללא עלות וללא התחייבות: </span>
          <a className="inline text-3xl text-primary font-semibold text-nowrap" href="tel:0505256711">050-5256711</a>
        </p>
      </header>

      <div className="relative">
        <Image src="/images/image1.jpg" alt="Hero" width={1920} height={1080} />
        <div className="absolute inset-0 container py-2 flex flex-col items-center justify-center gap-3">
          <h2 className="text-xl sm:text-4xl text-center font-semibold text-white bg-black/70 px-3 py-2 rounded-sm">פינוי אסבסט</h2>
          <p className="text-lg sm:text-2xl text-center text-white bg-black/70 px-3 py-2 rounded-sm sm:mb-6">פינוי אסבסט בצורה חוקית ובטוחה</p>
          <div className="fixed bottom-0 border-t sm:static sm:border-none flex items-center justify-center lg:gap-4 w-full md:max-w-lg">
            <Button asChild dir="ltr" variant="ghost" className="rounded-none lg:rounded w-full bg-white text-[#23b33a] hover:text-[#20a536] text-lg gap-1 items-center">
              <a target="_blank" href="https://wa.me/972505256711" aria-label="Chat on WhatsApp">
                <svg className="size-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 175.216 175.552">
                  <path fill="currentColor" d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.313-6.179 22.558 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.517 31.126 8.523h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.928z" />
                  <path fill="#fff" fillRule="evenodd" d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647" />
                </svg>
                WhatsApp
              </a>
            </Button>
            <Button dir="ltr" asChild className="rounded-none lg:rounded w-full text-lg gap-2 items-center">
              <a href="tel:0505256711">
                <svg className="size-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                050-5256711
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="py-8 bg-[#f8f8f8]">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="-mx-6 sm:mx-0">
            <div className="mb-6">
              <ul className="text-lg space-y-6">
                <li className="flex items-top gap-2">
                  <svg className="min-w-6 size-6 sm:min-w-8 sm:size-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
                  </svg>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-semibold mb-3">
                      קבלן אסבסט מס' 41691
                    </h2>
                    <p>
                      לחברה אישורים לפינוי האסבסט מטעם המשרד לאיכות הסביבה לביצוע עבודות פירוק ופינוי אסבסט
                    </p>
                  </div>
                </li>
                <li className="flex items-top gap-2">
                  <svg className="min-w-6 size-6 sm:min-w-8 sm:size-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                  </svg>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-semibold mb-3">
                      מקצוענות
                    </h2>
                    <p>
                      אמינות, מקצועיות, איכות ושקיפות אל מול לקוחות החברה
                    </p>
                  </div>
                </li>
                <li className="flex items-top gap-2">
                  <svg className="min-w-6 size-6 sm:min-w-8 sm:size-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                  </svg>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-semibold mb-3">
                      יעילות
                    </h2>
                    <p>
                      עמידה בלוחות זמנים, זמינות מיידית, עבודה מהירה ומקצועית
                    </p>
                  </div>
                </li>
                <li className="flex items-top gap-2">
                  <svg className="min-w-6 size-6 sm:min-w-8 sm:size-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                  </svg>
                  <div className="">
                    <h2 className="text-xl sm:text-2xl font-semibold mb-3">
                      מחוייבות לשירות
                    </h2>
                    <p>
                      "גג הנגב" אחראית לאיכות השירות ומחוייבת לשרות מקצועי, מוביל ואיכותי, עבור כל לקוח מלקוחות החברה. החברה פועלת בהתאם לדרישות החוק ולדרישות הלקוח.
                    </p>
                  </div>
                </li>
                <li className="flex items-top gap-2">
                  <svg className="min-w-6 size-6 sm:min-w-8 sm:size-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                  <div className="">
                    <h2 className="text-xl sm:text-2xl font-semibold mb-3">
                      יעוץ ללא עלות וללא התחייבות
                    </h2>
                    <p>
                      חייגו עכשיו <a className="inline text-primary font-semibold text-nowrap underline underline-offset-2" href="tel:0505256711"> 050-5256711 </a> לקבלת שיחת יעוץ טלפונית ללא עלות וללא התחייבות
                    </p>
                  </div>
                </li>

              </ul>

            </div>
          </div>

          <div className="-mx-6 sm:mx-0">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-3">
                מורשים לפינוי אסבסט
              </h2>
              <p className="mb-3 text-lg">
                <span className="inline text-primary font-semibold">
                  חברת גג הנגב בע"מ
                </span>
                <span> </span>
                <span>
                  הינה החברה המובילה בתחום פינוי אסבסט, חלוצה בתחום פינוי, סילוק וסקר אסבסט ומעניקה מענה מקצועי ומקיף, עבור מגוון לקוחותיה, בהתאם לצורכי הלקוח ולדרישות החוק. החברה הוקמה בשנת 1960 ומאז ועד היום צברה מוניטין וניסיון רב בתחום.
                </span>
              </p>
              <p className="mb-3 text-lg">
                החברה שמה לה למטרה לספק שרותי קבלן אסבסט הכוללים פירוק אסבסט, פינוי אסבסט, פירוק אסבסט לאחר שריפה וסקר אסבסט מקצועיים. כלל השירותים והמוצרים המסופקים על ידי החברה אמינים, איכותיים ומובילים בענף, ומבוצעים על ידי בעלי מקצוע מוסמכים ומוכשרים לביצוע העבודה.
              </p>
            </div>

            <div>
              <h2 className="text-2xl mb-4">
                <span className="inline text-primary font-semibold">
                  גג הנגב
                </span>
                <span> - </span>
                <span className="font-semibold">בחירה מצילת חיים</span>
              </h2>
              <h3 className="text-3xl sm:text-4xl mb-3">
                ארבעת השלבים לפינוי אסבסט
              </h3>
              <ul className="list-decimal list-inside space-y-4 text-lg">
                <li>
                  ראשית יש לקבל היתר לפינוי האזבסט מהמשרד לאיכות הסביבה לפני תחילת עבודה של קבלן אסבסט על הפרויקט.
                </li>
                <li>
                  פירוק אסבסט על ידי עובדים מיומנים בזמן קצר.
                </li>
                <li>
                  פינוי אסבסט מהאתר – את האסבסט יש לארוז בשקים ייעודים, ולהובילו לאתר קבורה מורשה אסבסט.
                </li>
                <li>
                  שנה אפשרות של החלפת גגות אזבסט ישנים לגגות חדשים עם תחליפים לאסבסט כגון: פנלים מבודדים, לוחות איסכורית, לוחות פי.וי.סי, אלומיניום.
                </li>
              </ul>
            </div>

          </div>

        </div>
      </div>

      <div className="flex-1 bg-primary text-white">
        <div className="container py-6 lg:py-8">
          <div className="flex flex-col items-center justify-center gap-3">
            <span className="text-xl lg:text-3xl font-extralight">יש לכם שאלה?</span>
            <span className="text-2xl lg:text-4xl">צרו איתנו קשר עכשיו לקבלת פרטים נוספים</span>
            <a className="inline text-3xl lg:text-4xl text-nowrap underline underline-offset-2 font-mono font-extralight" href="tel:0505256711">050-5256711</a>
          </div>
        </div>
      </div>


      <div className=" bg-white py-6 sm:py-10">
        <div className="container mb-6 sm:mb-10">
          <p className="text-center text-lg sm:text-xl font-semibold -mx-4 sm:mx-0">
            מאז הוקמה
            <span className="inline text-primary font-semibold"> גג הנגב </span>
            בשנות ה- 60 ועד היום, רכשה החברה לקוחות רבים ומגוונים אותם היא מלווה במקצועיות חסרת פשרות.
            לקוחות החברה נהנים בין היתר מעבודות מקצועיות, ממיומנות חסרת פשרות, מעמידה בלוחות זמנים ומיחסי אנוש בלתי מתפשרים.
          </p>
        </div>
        <div className="grid grid-cols-5 sm:flex flex-wrap items-center justify-center">
          <Image src="/images/clients/client1.jpg" alt="client-logo-1" width={180} height={144} />
          <Image src="/images/clients/client2.jpg" alt="client-logo-2" width={180} height={144} />
          <Image src="/images/clients/client3.jpg" alt="client-logo-3" width={180} height={144} />
          <Image src="/images/clients/client4.jpg" alt="client-logo-4" width={180} height={144} />
          <Image src="/images/clients/client5.jpg" alt="client-logo-5" width={180} height={144} />
          <Image src="/images/clients/client6.jpg" alt="client-logo-6" width={180} height={144} />
          <Image src="/images/clients/client7.jpg" alt="client-logo-7" width={180} height={144} />
          <Image src="/images/clients/client8.jpg" alt="client-logo-8" width={180} height={144} />
          <Image src="/images/clients/client9.jpg" alt="client-logo-9" width={180} height={144} />
          <Image src="/images/clients/client10.jpg" alt="client1-logo-0" width={180} height={144} />
          <Image src="/images/clients/client11.jpg" alt="client1-logo-1" width={180} height={144} />
          <Image src="/images/clients/client12.jpg" alt="client1-logo-2" width={180} height={144} />
          <Image src="/images/clients/client13.jpg" alt="client1-logo-3" width={180} height={144} />
          <Image src="/images/clients/client14.jpg" alt="client1-logo-4" width={180} height={144} />
          <Image src="/images/clients/client15.jpg" alt="client1-logo-5" width={180} height={144} />
        </div>
      </div>


      <div className="flex-1 pb-14 sm:pb-0 bg-[#f8f8f8] border-t">
        <div className="container py-6 lg:py-8">
          <div className="">
            <p className="text-3xl font-light">גג הנגב בע"מ</p>
            <p className="text-xl font-semibold">רח' המגן 22 ב', מזכרת בתיה, ת.ד: 2504</p>
            <a className="text-xl block text-nowrap underline underline-offset-2 font-mono" href="mailto:ggnegev1@gmail.com">ggnegev1@gmail.com</a>
          </div>
        </div>
      </div>
    </main>
  );
}
