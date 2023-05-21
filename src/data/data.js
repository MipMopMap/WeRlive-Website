import roundwerlivelogo from "../assets/logocolor.png";

const JOBS_ARRAY = [
  {
    icon: roundwerlivelogo,
    company: "WeRlive",
    title: "Head of architecture",
    jobDescription: (
      <div>
        <h3>Head of architecture</h3>
        <p>
          ראש צוות ארכיטקטורה ארגונית. במסגרת התפקיד אחראי לתכנון ארכיטקטורות
          וניהול ארכיטקטים טכנולוגיים.
        </p>
        <p>
          הצוות הינו ארגוני ובעל ממשקי עבודה עם הארכיטקטים של הפתרונות (solution
          architect) עם גופי התשתיות אבטחת מידע והפיתוח. התפקיד הינו HO.
        </p>
        <h3>ידע וניסיון</h3>
        <ul>
          <li>
            <p>ניסיון ניהולי</p>
          </li>
          <li>
            <p>
              לפחות 5 שנות ניסיון בתכנון ארכיטקטורות טכנולוגיות וטופולוגיות
              תשתיות כולל ענן בארגונים גדולים
            </p>
          </li>
          <li>
            <p>ניסיון בתכנון פתרונות מאובטחים מול דרישות א״מ</p>
          </li>
          <li>
            <p>ידע טכנולוגי רוחבי ובעיקר ידע והכרות מעמיקה עם עולם התשתיות</p>
          </li>
          <br />
          <li>
            <p>ידע וניסיון בתכנון ארכיטקטורות מבוססות Kubernetes</p>
          </li>
        </ul>
        <h3>מיומנויות נוספות</h3>
        <ul>
          <li>
            <p>מנטור, מוביל בעל ראיה מערכתית</p>
          </li>
          <li>
            <p>יחסי אנוש מצוינים</p>
          </li>
        </ul>
        <h3>יכולת התבטאות גבוהה בכתב ובעל פה</h3>
        <ul>
          <li>
            <p>יכולת למידה עצמית גבוהה, רעב לטכנולוגיה וחדשנות</p>
          </li>
          <li>
            <p>מודעות שירות גבוהה</p>
          </li>
        </ul>
      </div>
    ),
    position: "Lead",
    location: "Tel Aviv",
    jobNumber: "W#10005",
    id: "head-of-architecture",
  },
  {
    icon: roundwerlivelogo,
    company: "WeRlive",
    title: "Network & Cyber Security Specialist",
    jobDescription: (
      <div>
        <h3>Network & Cyber Security Specialist</h3>
        <h3>דרישות התפקיד</h3>
        <ul>
          <li>
            <p> ניסיון של שנה בתחום לפחות (עדיפות לשנתיים)</p>
          </li>
          <li>
            <p>הבנה בעולמות הROUTING\SWITCHING ברמת לפחות CCNA</p>
          </li>
          <li>
            <p>מערכות גלישה מאובטחת: Fire Glass, ERICOM</p>
          </li>
          <li>
            <p>
              מערכות סינון תוכן:, Forcepoint WEB Forcepoint EMAL, Cisco Umbrella
            </p>
          </li>
          <li>
            <p>מערכת ניטור ובקרה על תעבורת רשת, התנהגות</p>
          </li>
          <li>
            <p>
              אנומליות וחולשות: PaloAlto Cortex, Kaspersky EDR, Forcepoint
              Insider Threat,NESSUS מערכות אנטי וירוס:, Trend Micro Deep
              Security SMEX, Kaspersky Endpoint + Storage
            </p>
          </li>
          <li>
            <p>מערכות מניעת דלף מידע: Forcepoint DLP</p>
          </li>
          <li>
            <p>
              הגנה על תעבורת הרשת וחלוקת עומסים: Check Point, F5 (LTM+ASM),
              Fortinet
            </p>
          </li>
          <li>
            <p>מערכות Pulse Secure, Checkpoint, :VPN Fortinet</p>
          </li>
          <li>
            <p>מערכות הלבנה: VOTIRO</p>
          </li>
          <li>
            <p>
              היכרות עם עולם ה-SWITCHING וה-ROUTING: מתגי ונתבי HP , CISCO הבנת
              פרוטוקולי IP\TCP
            </p>
          </li>
          <li>
            <p>יכולת להוביל פרויקטים</p>
          </li>
          <li>
            <p>עבודה בצוות</p>
          </li>
          <li>
            <p>יחסי אנוש טובים</p>
          </li>
          <li>
            <p>רמת אנגלית מספיקה לניהול שיחה עם יצרנים בחו"ל</p>
          </li>
          <li>
            <p>
              מוכנות לעבודה בשעות לא שגרתיות ותורנויות סופי שבוע (בדרך כלל לא
              קורה שיש צורך לעבוד בסופי שבוע)
            </p>
          </li>
          <li>
            <p>משמרות מ 7:30 בבוקר פעם בשבוע, ועד פעם בשבוע 18:00</p>
          </li>
          <li>
            <p>תורן (זמינות מהבית) ערב פעם בשבוע</p>
          </li>
          <li>
            <p>תורן (זמינות מהבית) סוף שבוע פעם בחודש</p>
          </li>
        </ul>
      </div>
    ),
    position: "Cyber",
    location: "Tel Aviv",
    jobNumber: "W#10001",
    id: "Network-cyber-security",
  },
  {
    icon: roundwerlivelogo,
    company: "WeRlive",
    title: "Kafka Engineer",
    jobDescription: (
      <div id="ltr">
        <h3>Kafka Engineer</h3>
        <p>
          Our client in the finance sector is seeking an Apache Kafka Engineer
          for their systems, a strategic team focused on building a
          high-throughput, low-latency, fault-tolerant enterprise data streaming
          platform using Apache Kafka. This new platform will enable our primary
          initiatives for the future.
        </p>
        <h3>Qualifications</h3>
        <ul>
          <li>
            <p>Implementation knowledge of Kafka connectors.</p>
          </li>
          <li>
            <p>Java knowledge with Kafka custom connector implementation.</p>
          </li>
          <li>
            <p>
              Knowledge of real time data pipelines by developing Kafka
              producers and streaming applications for consuming.
            </p>
          </li>
          <li>
            <p>
              Implement to reprocess the failure messages in Kafka using offset
            </p>
          </li>
          <li>
            <p>
              Knowledge of Spring Kafka API calls to process the messages
              smoothly on Kafka Cluster setup with state store, Processer API
              with Kafka Streams, KTable
            </p>
          </li>
          <li>
            <p>Responsible to maintain appropriate documentation with code.</p>
          </li>
          <li>
            <p>Responsible to create custom Transformation for Connect</p>
          </li>
          <li>
            <p>
              Responsible to create custom UDFs for KSQL and create Testing
              modules for each
            </p>
          </li>
          <li>
            <p>
              Responsible to configure monitoring features in Connect, KSQL, C3
              & Replicator
            </p>
          </li>
          <li>
            <p>
              Responsible to integrate and monitor cloud metrics API with
              on-prem monitoring solutions
            </p>
          </li>
        </ul>
      </div>
    ),
    position: "System",
    location: "Tel Aviv",
    jobNumber: "W#10002",
    id: "kafka-engineer",
  },
  {
    icon: roundwerlivelogo,
    company: "WeRlive",
    title: "S - MF System Programmer",
    jobDescription: (
      <div>
        <h3>S - MF System Programmer</h3>
        <ul>
          <li>
            <p>
              ניסיון והכרות מעמיקה עם סביבות מ"ה z/OS ומערכות תשתית משיקות -
              חובה
            </p>
          </li>
          <li>
            <p>
              ניסיון וידע מעשי בהתקנה, שדרוגים ותחזוקה למ"ה ומוצרים נלווים -
              חובה
            </p>
          </li>
          <li>
            <p>לפחות 5 שנות ניסיון מוכח בתחום</p>
          </li>
          <li>
            <p>ניסיון בעבודה מול DB2 - יתרון</p>
          </li>
          <li>
            <p>ניסיון עבודה מול CICS - יתרון</p>
          </li>
          <li>
            <p>ניסיון וידע ב Cobol, Assembler - יתרון</p>
          </li>
          <li>
            <p>ידע במערכות ניטור וביצוע שיפור ביצועים - יתרון</p>
          </li>
        </ul>
      </div>
    ),
    position: "System",
    location: "Tel Aviv",
    jobNumber: "W#10003",
    id: "senior-mainframe-system",
  },
  {
    icon: roundwerlivelogo,
    company: "WeRlive",
    title: "Network Cyber Security Expert",
    jobDescription: (
      <div>
        <h3>Network Cyber Security Expert</h3>
        <ul>
          <li>
            <p>ניסיון של שנה לפחות - עדיפות לשנתיים </p>
          </li>
          <li>
            <p>הבנה בעולמות Switching/routing ברמת CCNA לפחות</p>
          </li>
          <li>
            <p>מערכות גלישה מאובטחת Fire glass, ERICOM</p>
          </li>
          <li>
            <p>
              מערכות סינון תוכן Forcepoint WEB, forcepoint EMAL, Cisco Umbrella
            </p>
          </li>
          <li>
            <p>
              מערכת ניטור ובקרה על תעבורת רשת. התנהגותאנומליות וחולשות PaloAlto
              Cortex Kaspersky EDR Forcepoint Insider Threat NESSUS
            </p>
          </li>
          <li>
            <p>
              מערכת אנטי וירוס Trend Micro Deep Security, SMEX, Kaspersky
              Endpoint + Storage Carbon Balck
            </p>
          </li>
          <li>
            <p>מערכות מניעת דלף מידע Forcepoint DLP</p>
          </li>
          <li>
            <p>מערכות הלבנה VOTIRO</p>
          </li>
        </ul>
        <h3>חובה</h3>
        <ul>
          <li>
            <p>
              הגנה על תעבורת הרשת וחלוקת עומסים: Check Point, F5 (LTM+ASM)
              Fortinet
            </p>
          </li>
          <li>
            <p>מערכות VPN: Pulse Secure, Checkpoint, Fortinet</p>
          </li>
          <li>
            <p>היכרות עם עולם ה-SWITCHING וה-ROUTING: מתגי ונתבי HP CISCO</p>
          </li>
          <li>
            <p>הבנת פרוטוקולי TCP/IP</p>
          </li>
          <br />
          <li>
            <p>יכולת להוביל פרויקטים</p>
          </li>
          <li>
            <p>עבודה בצוות</p>
          </li>
          <li>
            <p>יחסי אנוש טובים</p>
          </li>
          <li>
            <p>רמת אנגלית מספיקה לניהול שיחה עם יצרנים בחו״ל</p>
          </li>
          <li>
            <p>
              מוכנות לעבודה בשעות לא שגרתיות ותורנויות סופי שבוע (בדרך כלל לא
              קורה שיש צורך לעבוד בסופי שבוע)
            </p>
          </li>
          <li>
            <p>משמרות מ7:30 בבוקר פעם בשבועת ועד 18:00 פעם בשבוע</p>
          </li>
          <li>
            <p>תורן (זמינות מהבית) ערב פעם בשבוע </p>
          </li>
          <li>
            <p>תורן (זמינות מהבית) סוף שבוע פעם בחודש</p>
          </li>
        </ul>
      </div>
    ),
    position: "Cyber",
    location: "Tel Aviv",
    jobNumber: "W#10004",
    id: "network-cyber-security-expert",
  },
];

export { JOBS_ARRAY };
