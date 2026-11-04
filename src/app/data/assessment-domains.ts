import { AssessmentDomain } from "../models/assessment.model";

export const ASSESSMENT_DOMAINS: AssessmentDomain[] = [
  {
    "id": "domain_1",
    "title": "مجال الحركات الدقيقة",
    "shortTitle": "الحركات الدقيقة",
    "icon": "✍️",
    "strands": [
      {
        "title": "1. التنسيق الحركي الثنائي",
        "items": [
          {
            "id": "domain_1_item_1",
            "itemNumber": "1-",
            "paperNumber": "1-",
            "text": "يستخدم اليدين للتعامل مع الأشياء، حيث تؤدي كل يد حركة مختلفة",
            "raw": "1- يستخدم اليدين للتعامل مع الأشياء، حيث تؤدي كل يد حركة مختلفة (ص)",
            "isCutoff": true,
            "maxScore": 2,
            "subItemIds": [
              "domain_1_item_2"
            ]
          },
          {
            "id": "domain_1_item_2",
            "itemNumber": "1.1",
            "paperNumber": "1-1",
            "text": "يمسك شيئاً بأي من يديه بينما تتعامل اليد الأخرى مع الشيء",
            "raw": "1-1 يمسك شيئاً بأي من يديه بينما تتعامل اليد الأخرى مع الشيء",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_1_item_1"
          },
          {
            "id": "domain_1_item_3",
            "itemNumber": "2-",
            "paperNumber": "2-",
            "text": "يقص أشكالاً ذات حواف منحنية",
            "raw": "2- يقص أشكالاً ذات حواف منحنية (ص)",
            "isCutoff": true,
            "maxScore": 2,
            "subItemIds": [
              "domain_1_item_4",
              "domain_1_item_5"
            ]
          },
          {
            "id": "domain_1_item_4",
            "itemNumber": "2.1",
            "paperNumber": "1-2",
            "text": "يقص أشكالاً ذات حواف مستقيمة",
            "raw": "1-2 يقص أشكالاً ذات حواف مستقيمة",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_1_item_3"
          },
          {
            "id": "domain_1_item_5",
            "itemNumber": "2.2",
            "paperNumber": "2-2",
            "text": "يقص ورقة إلى نصفين",
            "raw": "2-2 يقص ورقة إلى نصفين",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_1_item_3"
          }
        ]
      },
      {
        "title": "2. الكتابة الناشئة",
        "items": [
          {
            "id": "domain_1_item_6",
            "itemNumber": "1-",
            "paperNumber": "1-",
            "text": "يكتب باستخدام مسكة الأصابع الثلاثة",
            "raw": "1-  يكتب باستخدام مسكة الأصابع الثلاثة (ص)",
            "isCutoff": true,
            "maxScore": 2,
            "subItemIds": [
              "domain_1_item_7"
            ]
          },
          {
            "id": "domain_1_item_7",
            "itemNumber": "1.1",
            "paperNumber": "1-1",
            "text": "يستخدم مسكة الأصابع الثلاثة لإمساك أداة الكتابة",
            "raw": "1-1  يستخدم مسكة الأصابع الثلاثة لإمساك أداة الكتابة",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_1_item_6"
          },
          {
            "id": "domain_1_item_8",
            "itemNumber": "2-",
            "paperNumber": "2-",
            "text": "يطبع حروفا مزيفة",
            "raw": "2- يطبع حروفا مزيفة (ص)",
            "isCutoff": true,
            "maxScore": 2,
            "subItemIds": [
              "domain_1_item_9",
              "domain_1_item_10",
              "domain_1_item_11"
            ]
          },
          {
            "id": "domain_1_item_9",
            "itemNumber": "2.1",
            "paperNumber": "1-2",
            "text": "يرسم باستخدام أشكال تمثيلية",
            "raw": "1-2 يرسم باستخدام أشكال تمثيلية",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_1_item_8"
          },
          {
            "id": "domain_1_item_10",
            "itemNumber": "2.2",
            "paperNumber": "2-2",
            "text": "ينسخ أشكالاً معقدة",
            "raw": "2-2 ينسخ أشكالاً معقدة",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_1_item_8"
          },
          {
            "id": "domain_1_item_11",
            "itemNumber": "2.3",
            "paperNumber": "2-3",
            "text": "ينسخ أشكالاً بسيطة",
            "raw": "2-3 ينسخ أشكالاً بسيطة",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_1_item_8"
          },
          {
            "id": "domain_1_item_12",
            "itemNumber": "3-",
            "paperNumber": "3-",
            "text": "يطبع اسمه الأول",
            "raw": "3- يطبع اسمه الأول (ص)",
            "isCutoff": true,
            "maxScore": 2,
            "subItemIds": [
              "domain_1_item_13",
              "domain_1_item_14",
              "domain_1_item_15"
            ]
          },
          {
            "id": "domain_1_item_13",
            "itemNumber": "3.1",
            "paperNumber": "1-3",
            "text": "يطبع ثلاثة حروف",
            "raw": "1-3  يطبع ثلاثة حروف",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_1_item_12"
          },
          {
            "id": "domain_1_item_14",
            "itemNumber": "3.2",
            "paperNumber": "2-3",
            "text": "ينسخ اسمه الأول",
            "raw": "2-3  ينسخ اسمه الأول",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_1_item_12"
          },
          {
            "id": "domain_1_item_15",
            "itemNumber": "3.3",
            "paperNumber": "3-3",
            "text": "ينسخ ثلاثة حروف",
            "raw": "3-3  ينسخ ثلاثة حروف",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_1_item_12"
          }
        ]
      }
    ]
  },
  {
    "id": "domain_2",
    "title": "مجال الحركات الكبيرة",
    "shortTitle": "الحركات الكبيرة",
    "icon": "🏃",
    "strands": [
      {
        "title": "1. التوازن والقدرة على الحركة",
        "items": [
          {
            "id": "domain_2_item_1",
            "itemNumber": "1-",
            "paperNumber": "1-",
            "text": "يجري متفادياً العوائق",
            "raw": "1-  يجري متفادياً العوائق (ص)",
            "isCutoff": true,
            "maxScore": 2,
            "subItemIds": [
              "domain_2_item_2"
            ]
          },
          {
            "id": "domain_2_item_2",
            "itemNumber": "1.1",
            "paperNumber": "1-1",
            "text": "يجري",
            "raw": "1-1 يجري",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_2_item_1"
          },
          {
            "id": "domain_2_item_3",
            "itemNumber": "2-",
            "paperNumber": "2-",
            "text": "يصعد السلم وينزله بحركة متناوبة للقدمين",
            "raw": "2- يصعد السلم وينزله بحركة متناوبة للقدمين (ص)",
            "isCutoff": true,
            "maxScore": 2,
            "subItemIds": [
              "domain_2_item_4"
            ]
          },
          {
            "id": "domain_2_item_4",
            "itemNumber": "2.1",
            "paperNumber": "2-1",
            "text": "يصعد السلم وينزله",
            "raw": "2-1 يصعد السلم وينزله",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_2_item_3"
          }
        ]
      },
      {
        "title": "2. مهارات اللعب",
        "items": [
          {
            "id": "domain_2_item_5",
            "itemNumber": "1-",
            "paperNumber": "1-",
            "text": "يقفز إلى الأمام",
            "raw": "1- يقفز إلى الأمام (ص)",
            "isCutoff": true,
            "maxScore": 2,
            "subItemIds": [
              "domain_2_item_6",
              "domain_2_item_7",
              "domain_2_item_8"
            ]
          },
          {
            "id": "domain_2_item_6",
            "itemNumber": "1.1",
            "paperNumber": "١-١",
            "text": "يقفز في المحل",
            "raw": "١-١ يقفز في المحل",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_2_item_5"
          },
          {
            "id": "domain_2_item_7",
            "itemNumber": "1.2",
            "paperNumber": "1-2",
            "text": "يقفز من على رصيف",
            "raw": "1-2 يقفز من على رصيف",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_2_item_5"
          },
          {
            "id": "domain_2_item_8",
            "itemNumber": "1.3",
            "paperNumber": "١-3",
            "text": "يتوازن على إحدى القدمين",
            "raw": "١-3 يتوازن على إحدى القدمين",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_2_item_5"
          },
          {
            "id": "domain_2_item_9",
            "itemNumber": "2-",
            "paperNumber": "2-",
            "text": "ينطط الكرة على الأرض ويتلقفها ويركلها ويرميها",
            "raw": "2- ينطط الكرة على الأرض ويتلقفها ويركلها ويرميها (ص)",
            "isCutoff": true,
            "maxScore": 2,
            "subItemIds": [
              "domain_2_item_10",
              "domain_2_item_11",
              "domain_2_item_12",
              "domain_2_item_13"
            ]
          },
          {
            "id": "domain_2_item_10",
            "itemNumber": "2.1",
            "paperNumber": "1-2",
            "text": "ينطط الكرة على الأرض",
            "raw": "1-2  ينطط الكرة على الأرض",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_2_item_9"
          },
          {
            "id": "domain_2_item_11",
            "itemNumber": "2.2",
            "paperNumber": "2-2",
            "text": "يمسك الكرة",
            "raw": "2-2  يمسك الكرة",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_2_item_9"
          },
          {
            "id": "domain_2_item_12",
            "itemNumber": "2.3",
            "paperNumber": "3-2",
            "text": "يركل الكرة",
            "raw": "3-2  يركل الكرة",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_2_item_9"
          },
          {
            "id": "domain_2_item_13",
            "itemNumber": "2.4",
            "paperNumber": "4-2",
            "text": "يرمي الكرة",
            "raw": "4-2  يرمي الكرة",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_2_item_9"
          },
          {
            "id": "domain_2_item_14",
            "itemNumber": "3-",
            "paperNumber": "3 -",
            "text": "يثب",
            "raw": "3 - يثب (ص)",
            "isCutoff": true,
            "maxScore": 2,
            "subItemIds": [
              "domain_2_item_15"
            ]
          },
          {
            "id": "domain_2_item_15",
            "itemNumber": "3.1",
            "paperNumber": "1-3",
            "text": "يحجل",
            "raw": "1-3  يحجل",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_2_item_14"
          },
          {
            "id": "domain_2_item_16",
            "itemNumber": "3-",
            "paperNumber": "-4",
            "text": "يركب دراجة ثنائية ويوجهها",
            "raw": "-4  يركب دراجة ثنائية ويوجهها (ص)",
            "isCutoff": true,
            "maxScore": 2,
            "subItemIds": [
              "domain_2_item_17"
            ]
          },
          {
            "id": "domain_2_item_17",
            "itemNumber": "3.1",
            "paperNumber": "1-4",
            "text": "يقود دراجة ثنائية مزودة بعجلتي تدريب ويوجهها",
            "raw": "1-4  يقود دراجة ثنائية مزودة بعجلتي تدريب ويوجهها",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_2_item_16"
          }
        ]
      }
    ]
  },
  {
    "id": "domain_3",
    "title": "المجال التكيفي",
    "shortTitle": "المجال التكيفي",
    "icon": "🥣",
    "strands": [
      {
        "title": "1. وقت الطعام",
        "items": [
          {
            "id": "domain_3_item_1",
            "itemNumber": "1-",
            "paperNumber": "1-",
            "text": "يأكل ويشرب أطعمة مختلفة باستخدام أدوات المائدة الملائمة مع دلق أقل قدر ممكن",
            "raw": "1- يأكل ويشرب أطعمة مختلفة باستخدام أدوات المائدة الملائمة مع دلق أقل قدر ممكن (ص)",
            "isCutoff": true,
            "maxScore": 2,
            "subItemIds": [
              "domain_3_item_2",
              "domain_3_item_3",
              "domain_3_item_4",
              "domain_3_item_5",
              "domain_3_item_6"
            ]
          },
          {
            "id": "domain_3_item_2",
            "itemNumber": "1.1",
            "paperNumber": "1-1",
            "text": "يضع كمية ملائمة من الطعام في الفم، ويمضغ مع غلق الفم، ويبلع قبل أخذ قضمة أخرى",
            "raw": "1-1 يضع كمية ملائمة من الطعام في الفم، ويمضغ مع غلق الفم، ويبلع قبل أخذ قضمة أخرى",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_3_item_1"
          },
          {
            "id": "domain_3_item_3",
            "itemNumber": "1.2",
            "paperNumber": "1-2",
            "text": "يتناول كمية ملائمة من السائل من كوب ويعيده إلى السطح",
            "raw": "1-2 يتناول كمية ملائمة من السائل من كوب ويعيده إلى السطح",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_3_item_1"
          },
          {
            "id": "domain_3_item_4",
            "itemNumber": "1.3",
            "paperNumber": "1-3",
            "text": "يأكل أطعمة مختلفة القوام",
            "raw": "1-3 يأكل أطعمة مختلفة القوام",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_3_item_1"
          },
          {
            "id": "domain_3_item_5",
            "itemNumber": "1.4",
            "paperNumber": "1-4",
            "text": "يختار أطعمة مختلفة ويأكلها",
            "raw": "1-4 يختار أطعمة مختلفة ويأكلها",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_3_item_1"
          },
          {
            "id": "domain_3_item_6",
            "itemNumber": "1.5",
            "paperNumber": "1-5",
            "text": "يأكل بأدوات المائدة",
            "raw": "1-5 يأكل بأدوات المائدة",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_3_item_1"
          },
          {
            "id": "domain_3_item_7",
            "itemNumber": "2-",
            "paperNumber": "2-",
            "text": "يعد الطعام ويوزعه",
            "raw": "2- يعد الطعام ويوزعه (ص)",
            "isCutoff": true,
            "maxScore": 2,
            "subItemIds": [
              "domain_3_item_8",
              "domain_3_item_9",
              "domain_3_item_10",
              "domain_3_item_11"
            ]
          },
          {
            "id": "domain_3_item_8",
            "itemNumber": "2.1",
            "paperNumber": "2-1",
            "text": "يعد الطعام للأكل",
            "raw": "2-1 يعد الطعام للأكل",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_3_item_7"
          },
          {
            "id": "domain_3_item_9",
            "itemNumber": "2.2",
            "paperNumber": "2-2",
            "text": "يستخدم السكين لفرد الطعام",
            "raw": "2-2 يستخدم السكين لفرد الطعام",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_3_item_7"
          },
          {
            "id": "domain_3_item_10",
            "itemNumber": "2.3",
            "paperNumber": "2-3",
            "text": "يصب السائل في آنية مختلفة",
            "raw": "2-3 يصب السائل في آنية مختلفة",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_3_item_7"
          },
          {
            "id": "domain_3_item_11",
            "itemNumber": "2.4",
            "paperNumber": "2-4",
            "text": "يوزع الطعام بأدوات المائدة",
            "raw": "2-4 يوزع الطعام بأدوات المائدة",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_3_item_7"
          }
        ]
      },
      {
        "title": "2. البطاقة الشخصية",
        "items": [
          {
            "id": "domain_3_item_12",
            "itemNumber": "1-",
            "paperNumber": "1-",
            "text": "يؤدي كل وظائف استخدام المرحاض",
            "raw": "1- يؤدي كل وظائف استخدام المرحاض (ص)",
            "isCutoff": true,
            "maxScore": 2,
            "subItemIds": [
              "domain_3_item_13",
              "domain_3_item_14",
              "domain_3_item_15"
            ]
          },
          {
            "id": "domain_3_item_13",
            "itemNumber": "1.1",
            "paperNumber": "1-1",
            "text": "يستخدم ورق المرحاض، وينظف المرحاض ويغسل يديه بعد استخدام المرحاض",
            "raw": "1-1 يستخدم ورق المرحاض، وينظف المرحاض ويغسل يديه بعد استخدام المرحاض",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_3_item_12"
          },
          {
            "id": "domain_3_item_14",
            "itemNumber": "1.2",
            "paperNumber": "1-2",
            "text": "يستخدم المرحاض",
            "raw": "1-2 يستخدم المرحاض",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_3_item_12"
          },
          {
            "id": "domain_3_item_15",
            "itemNumber": "1.3",
            "paperNumber": "1-3",
            "text": "يبدي الحاجة إلى استخدام المرحاض",
            "raw": "1-3 يبدي الحاجة إلى استخدام المرحاض",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_3_item_12"
          },
          {
            "id": "domain_3_item_16",
            "itemNumber": "2-",
            "paperNumber": "2-",
            "text": "يغتسل ويتزين",
            "raw": "2- يغتسل ويتزين (ص)",
            "isCutoff": true,
            "maxScore": 2,
            "subItemIds": [
              "domain_3_item_17",
              "domain_3_item_18",
              "domain_3_item_19",
              "domain_3_item_20",
              "domain_3_item_21"
            ]
          },
          {
            "id": "domain_3_item_17",
            "itemNumber": "2.1",
            "paperNumber": "1-2",
            "text": "يستخدم المنديل لتنظيف الأنف",
            "raw": "1-2 يستخدم المنديل لتنظيف الأنف",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_3_item_16"
          },
          {
            "id": "domain_3_item_18",
            "itemNumber": "2.2",
            "paperNumber": "2-2",
            "text": "يغسل أسنانه بالفرشاة",
            "raw": "2-2 يغسل أسنانه بالفرشاة",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_3_item_16"
          },
          {
            "id": "domain_3_item_19",
            "itemNumber": "2.3",
            "paperNumber": "3-2",
            "text": "يستحم ويجفف نفسه",
            "raw": "3-2 يستحم ويجفف نفسه",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_3_item_16"
          },
          {
            "id": "domain_3_item_20",
            "itemNumber": "2.4",
            "paperNumber": "4-2",
            "text": "يمشط شعره بالفرشاة أو المشط",
            "raw": "4-2 يمشط شعره بالفرشاة أو المشط",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_3_item_16"
          },
          {
            "id": "domain_3_item_21",
            "itemNumber": "2.5",
            "paperNumber": "2-5",
            "text": "يغسل وجهه ويجففه",
            "raw": "2-5 يغسل وجهه ويجففه",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_3_item_16"
          }
        ]
      },
      {
        "title": "(ج) ارتداء الملابس وخلعها",
        "items": [
          {
            "id": "domain_3_item_22",
            "itemNumber": "1-",
            "paperNumber": "1-",
            "text": "يفك أربطة الملابس",
            "raw": "1- يفك أربطة الملابس (ص)",
            "isCutoff": true,
            "maxScore": 2,
            "subItemIds": [
              "domain_3_item_23",
              "domain_3_item_24",
              "domain_3_item_25"
            ]
          },
          {
            "id": "domain_3_item_23",
            "itemNumber": "1.1",
            "paperNumber": "1-1",
            "text": "يفك الأزرار / الإبزيمات / الاشرطة اللاصقة بالملابس",
            "raw": "1-1 يفك الأزرار / الإبزيمات / الاشرطة اللاصقة بالملابس",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_3_item_22"
          },
          {
            "id": "domain_3_item_24",
            "itemNumber": "1.2",
            "paperNumber": "1-2",
            "text": "يفك الأربطة من نوع الخيوط",
            "raw": "1-2 يفك الأربطة من نوع الخيوط",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_3_item_22"
          },
          {
            "id": "domain_3_item_25",
            "itemNumber": "1.3",
            "paperNumber": "1-3",
            "text": "يفك سحابة",
            "raw": "1-3 يفك سحابة",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_3_item_22"
          },
          {
            "id": "domain_3_item_26",
            "itemNumber": "2-",
            "paperNumber": "2-",
            "text": "يختار ملابس ملائمة ويلبسها لنفسه في الأوقات المناسبة",
            "raw": "2- يختار ملابس ملائمة ويلبسها لنفسه في الأوقات المناسبة (ص)",
            "isCutoff": true,
            "maxScore": 2,
            "subItemIds": [
              "domain_3_item_27",
              "domain_3_item_28",
              "domain_3_item_29",
              "domain_3_item_30",
              "domain_3_item_31"
            ]
          },
          {
            "id": "domain_3_item_27",
            "itemNumber": "2.1",
            "paperNumber": "2-1",
            "text": "يرتدي السروال التحتي الطويل",
            "raw": "2-1 يرتدي السروال التحتي الطويل",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_3_item_26"
          },
          {
            "id": "domain_3_item_28",
            "itemNumber": "2.2",
            "paperNumber": "2-2",
            "text": "يرتدي ملابساَ تفتح من الأمام",
            "raw": "2-2 يرتدي ملابساَ تفتح من الأمام",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_3_item_26"
          },
          {
            "id": "domain_3_item_29",
            "itemNumber": "2.3",
            "paperNumber": "2-3",
            "text": "يرتدي الملابس التي تلبس من الرأس",
            "raw": "2-3 يرتدي الملابس التي تلبس من الرأس",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_3_item_26"
          },
          {
            "id": "domain_3_item_30",
            "itemNumber": "2.4",
            "paperNumber": "4-2",
            "text": "يرتدي الحذاء",
            "raw": "4-2 يرتدي الحذاء",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_3_item_26"
          },
          {
            "id": "domain_3_item_31",
            "itemNumber": "2.5",
            "paperNumber": "5-2",
            "text": "يرتدي السروال التحتي أو الشورت أو التنورة",
            "raw": "5-2 يرتدي السروال التحتي أو الشورت أو التنورة",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_3_item_26"
          },
          {
            "id": "domain_3_item_32",
            "itemNumber": "3-",
            "paperNumber": "3-",
            "text": "يغلق أربطة الملابس",
            "raw": "3- يغلق أربطة الملابس (ص)",
            "isCutoff": true,
            "maxScore": 2,
            "subItemIds": [
              "domain_3_item_33",
              "domain_3_item_34",
              "domain_3_item_35"
            ]
          },
          {
            "id": "domain_3_item_33",
            "itemNumber": "3.1",
            "paperNumber": "3-1",
            "text": "يغلق الأربطة من نوع الخيوط",
            "raw": "3-1 يغلق الأربطة من نوع الخيوط",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_3_item_32"
          },
          {
            "id": "domain_3_item_34",
            "itemNumber": "3.2",
            "paperNumber": "3-2",
            "text": "يغلق الازرار / الإبزيمات/ الأشرطة اللاصقة",
            "raw": "3-2 يغلق الازرار / الإبزيمات/ الأشرطة اللاصقة",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_3_item_32"
          },
          {
            "id": "domain_3_item_35",
            "itemNumber": "3.3",
            "paperNumber": "3-3",
            "text": "يغلق سحابة",
            "raw": "3-3 يغلق سحابة",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_3_item_32"
          }
        ]
      }
    ]
  },
  {
    "id": "domain_4",
    "title": "المجال المعرفي",
    "shortTitle": "المجال المعرفي",
    "icon": "🧩",
    "strands": [
      {
        "title": "1. المفاهيم",
        "items": [
          {
            "id": "domain_4_item_1",
            "itemNumber": "1-",
            "paperNumber": "1-",
            "text": "يظهر فهم مفاهيم اللون والشكل والحجم",
            "raw": "1- يظهر فهم مفاهيم اللون والشكل والحجم (ص)",
            "isCutoff": true,
            "maxScore": 2,
            "subItemIds": [
              "domain_4_item_2",
              "domain_4_item_3",
              "domain_4_item_4"
            ]
          },
          {
            "id": "domain_4_item_2",
            "itemNumber": "1.1",
            "paperNumber": "1-1",
            "text": "يظهر فهم ثمانية ألوان مختلفة",
            "raw": "1-1 يظهر فهم ثمانية ألوان مختلفة",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_4_item_1"
          },
          {
            "id": "domain_4_item_3",
            "itemNumber": "1.2",
            "paperNumber": "1-2",
            "text": "يظهر فهم خمسة أشكال مختلفة",
            "raw": "1-2 يظهر فهم خمسة أشكال مختلفة",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_4_item_1"
          },
          {
            "id": "domain_4_item_4",
            "itemNumber": "1.3",
            "paperNumber": "1-3",
            "text": "يظهر فهم ستة مفاهيم مختلفة للحجم",
            "raw": "1-3 يظهر فهم ستة مفاهيم مختلفة للحجم",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_4_item_1"
          },
          {
            "id": "domain_4_item_5",
            "itemNumber": "2-",
            "paperNumber": "2-",
            "text": "يظهر فهم مفاهيم النوعية والكمية",
            "raw": "2- يظهر فهم مفاهيم النوعية والكمية (ص)",
            "isCutoff": true,
            "maxScore": 2,
            "subItemIds": [
              "domain_4_item_6",
              "domain_4_item_7"
            ]
          },
          {
            "id": "domain_4_item_6",
            "itemNumber": "2.1",
            "paperNumber": "2-1",
            "text": "يظهر فهم عشرة مفاهيم نوعية مختلفة",
            "raw": "2-1 يظهر فهم عشرة مفاهيم نوعية مختلفة",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_4_item_5"
          },
          {
            "id": "domain_4_item_7",
            "itemNumber": "2.2",
            "paperNumber": "2-2",
            "text": "يظهر فهم ثمانية مفاهيم كمية مختلفة",
            "raw": "2-2 يظهر فهم ثمانية مفاهيم كمية مختلفة",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_4_item_5"
          },
          {
            "id": "domain_4_item_8",
            "itemNumber": "3-",
            "paperNumber": "3-",
            "text": "يظهر فهم مفاهيم العلاقات المكانية والزمنية",
            "raw": "3- يظهر فهم مفاهيم العلاقات المكانية والزمنية (ص)",
            "isCutoff": true,
            "maxScore": 2,
            "subItemIds": [
              "domain_4_item_9",
              "domain_4_item_10"
            ]
          },
          {
            "id": "domain_4_item_9",
            "itemNumber": "3.1",
            "paperNumber": "3-1",
            "text": "يظهر فهم اثني عشرة مفهوماً مختلفاً من مفاهيم العلاقات المكانية",
            "raw": "3-1 يظهر فهم اثني عشرة مفهوماً مختلفاً من مفاهيم العلاقات المكانية",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_4_item_8"
          },
          {
            "id": "domain_4_item_10",
            "itemNumber": "3.2",
            "paperNumber": "3-2",
            "text": "يظهر فهم سبعة مفاهيم مختلفة من مفاهيم العلاقات الزمنية",
            "raw": "3-2 يظهر فهم سبعة مفاهيم مختلفة من مفاهيم العلاقات الزمنية",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_4_item_8"
          }
        ]
      },
      {
        "title": "2. التصنيف",
        "items": [
          {
            "id": "domain_4_item_11",
            "itemNumber": "1-",
            "paperNumber": "1-",
            "text": "يصنف الأشياء أو الأشخاص أو الأحداث في مجموعات على أساس محكات محددة",
            "raw": "1- يصنف الأشياء أو الأشخاص أو الأحداث في مجموعات على أساس محكات محددة (ص)",
            "isCutoff": true,
            "maxScore": 2,
            "subItemIds": [
              "domain_4_item_12",
              "domain_4_item_13",
              "domain_4_item_14"
            ]
          },
          {
            "id": "domain_4_item_12",
            "itemNumber": "1.1",
            "paperNumber": "1-1",
            "text": "يصنف الأشياء أو الأشخاص أو الأحداث في مجموعات على أساس الفئة",
            "raw": "1-1 يصنف الأشياء أو الأشخاص أو الأحداث في مجموعات على أساس الفئة",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_4_item_11"
          },
          {
            "id": "domain_4_item_13",
            "itemNumber": "1.2",
            "paperNumber": "1-2",
            "text": "يضع الأشياء في مجموعات أساس الوظيفة",
            "raw": "1-2 يضع الأشياء في مجموعات أساس الوظيفة",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_4_item_11"
          },
          {
            "id": "domain_4_item_14",
            "itemNumber": "1.3",
            "paperNumber": "1-3",
            "text": "يضع الأشياء في مجموعات على أساس خاصية مادية",
            "raw": "1-3 يضع الأشياء في مجموعات على أساس خاصية مادية",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_4_item_11"
          }
        ]
      },
      {
        "title": "(ج) الترتيب",
        "items": [
          {
            "id": "domain_4_item_15",
            "itemNumber": "1-",
            "paperNumber": "1-",
            "text": "يتبع توجيهات لا تعطى كثيراً مكونة من ثلاث خطوات مرتبطة أو أكثر",
            "raw": "1- يتبع توجيهات لا تعطى كثيراً مكونة من ثلاث خطوات مرتبطة أو أكثر (ص)",
            "isCutoff": true,
            "maxScore": 2,
            "subItemIds": [
              "domain_4_item_16"
            ]
          },
          {
            "id": "domain_4_item_16",
            "itemNumber": "1.1",
            "paperNumber": "1-1",
            "text": "يتبع توجيهات تعطى كثيراً مكونة من ثلاث خطوات مرتبطة أو أكثر",
            "raw": "1-1 يتبع توجيهات تعطى كثيراً مكونة من ثلاث خطوات مرتبطة أو أكثر",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_4_item_15"
          },
          {
            "id": "domain_4_item_17",
            "itemNumber": "2-",
            "paperNumber": "2-",
            "text": "يرتب الأشياء وفقاً للطول أو الحجم",
            "raw": "2- يرتب الأشياء وفقاً للطول أو الحجم (ص)",
            "isCutoff": true,
            "maxScore": 2,
            "subItemIds": [
              "domain_4_item_18"
            ]
          },
          {
            "id": "domain_4_item_18",
            "itemNumber": "2.1",
            "paperNumber": "2-1",
            "text": "يدخل مجموعة مرتبة من الأشياء في أخرى",
            "raw": "2-1 يدخل مجموعة مرتبة من الأشياء في أخرى",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_4_item_17"
          },
          {
            "id": "domain_4_item_19",
            "itemNumber": "3-",
            "paperNumber": "3-",
            "text": "يعيد سرد حدث بالترتيب",
            "raw": "3- يعيد سرد حدث بالترتيب (ص)",
            "isCutoff": true,
            "maxScore": 2,
            "subItemIds": [
              "domain_4_item_20"
            ]
          },
          {
            "id": "domain_4_item_20",
            "itemNumber": "3.1",
            "paperNumber": "3-1",
            "text": "يكمل قصة أو حدث مألوف بالترتيب",
            "raw": "3-1 يكمل قصة أو حدث مألوف بالترتيب",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_4_item_19"
          }
        ]
      },
      {
        "title": "(د)تذكر الاحداث",
        "items": [
          {
            "id": "domain_4_item_21",
            "itemNumber": "1-",
            "paperNumber": "1-",
            "text": "يتذكر الأحداث التي وقعت في اليوم نفسه بلا محثات سياقية",
            "raw": "1- يتذكر الأحداث التي وقعت في اليوم نفسه بلا محثات سياقية (ص)",
            "isCutoff": true,
            "maxScore": 2,
            "subItemIds": [
              "domain_4_item_22",
              "domain_4_item_23"
            ]
          },
          {
            "id": "domain_4_item_22",
            "itemNumber": "1.1",
            "paperNumber": "1-1",
            "text": "يتذكر الأحداث التي وقعت في اليوم نفسه عند إعطائه محثات سياقية",
            "raw": "1-1 يتذكر الأحداث التي وقعت في اليوم نفسه عند إعطائه محثات سياقية",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_4_item_21"
          },
          {
            "id": "domain_4_item_23",
            "itemNumber": "1.2",
            "paperNumber": "2-1",
            "text": "يتذكر الأحداث بعد أن تقع مباشرة",
            "raw": "2-1 يتذكر الأحداث بعد أن تقع مباشرة",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_4_item_21"
          }
        ]
      },
      {
        "title": "(هـ) حل المشكلات",
        "items": [
          {
            "id": "domain_4_item_24",
            "itemNumber": "1-",
            "paperNumber": "1-",
            "text": "يقيم حلولاً للمشكلات",
            "raw": "1- يقيم حلولاً للمشكلات (ص)",
            "isCutoff": true,
            "maxScore": 2,
            "subItemIds": [
              "domain_4_item_25",
              "domain_4_item_26"
            ]
          },
          {
            "id": "domain_4_item_25",
            "itemNumber": "1.1",
            "paperNumber": "1-1",
            "text": "يقترح حلولاً مقبولة للمشكلات",
            "raw": "1-1 يقترح حلولاً مقبولة للمشكلات",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_4_item_24"
          },
          {
            "id": "domain_4_item_26",
            "itemNumber": "1.2",
            "paperNumber": "1-2",
            "text": "يحدد وسيلة إلى هدف",
            "raw": "1-2 يحدد وسيلة إلى هدف",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_4_item_24"
          },
          {
            "id": "domain_4_item_27",
            "itemNumber": "2-",
            "paperNumber": "2-",
            "text": "يصدر أحكاماً ويجيب بطريقة ملائمة عن أسئلة تتطلب التفكير في الأشياء أو المواقف أو الأشخاص",
            "raw": "2- يصدر أحكاماً ويجيب بطريقة ملائمة عن أسئلة تتطلب التفكير في الأشياء أو المواقف أو الأشخاص (ص)",
            "isCutoff": true,
            "maxScore": 2,
            "subItemIds": [
              "domain_4_item_28",
              "domain_4_item_29",
              "domain_4_item_30"
            ]
          },
          {
            "id": "domain_4_item_28",
            "itemNumber": "2.1",
            "paperNumber": "2-1",
            "text": "يعطي أسباباً لاستنتاجاته",
            "raw": "2-1 يعطي أسباباً لاستنتاجاته",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_4_item_27"
          },
          {
            "id": "domain_4_item_29",
            "itemNumber": "2.2",
            "paperNumber": "2-2",
            "text": "يصنع تنبؤاً حول الأحداث المستقبلية أو الافتراضية",
            "raw": "2-2 يصنع تنبؤاً حول الأحداث المستقبلية أو الافتراضية",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_4_item_27"
          },
          {
            "id": "domain_4_item_30",
            "itemNumber": "2.3",
            "paperNumber": "2-3",
            "text": "يعطي سبباً ممكناً لحدث ما",
            "raw": "2-3 يعطي سبباً ممكناً لحدث ما",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_4_item_27"
          }
        ]
      },
      {
        "title": "(و)اللعب",
        "items": [
          {
            "id": "domain_4_item_31",
            "itemNumber": "1-",
            "paperNumber": "1-",
            "text": "يشارك في اللعب التخيلي التعاوني",
            "raw": "1- يشارك في اللعب التخيلي التعاوني (ص)",
            "isCutoff": true,
            "maxScore": 2,
            "subItemIds": [
              "domain_4_item_32",
              "domain_4_item_33",
              "domain_4_item_34"
            ]
          },
          {
            "id": "domain_4_item_32",
            "itemNumber": "1.1",
            "paperNumber": "1-1",
            "text": "يمثل الأدوار أو الشخصيات",
            "raw": "1-1 يمثل الأدوار أو الشخصيات",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_4_item_31"
          },
          {
            "id": "domain_4_item_33",
            "itemNumber": "1.2",
            "paperNumber": "1-2",
            "text": "يخطط ويمثل حدثاً أو موضوعاً أو محور قصة يسهل التعرف عليه",
            "raw": "1-2 يخطط ويمثل حدثاً أو موضوعاً أو محور قصة يسهل التعرف عليه",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_4_item_31"
          },
          {
            "id": "domain_4_item_34",
            "itemNumber": "1.3",
            "paperNumber": "1-3",
            "text": "يستخدم أشياء تخيلية",
            "raw": "1-3 يستخدم أشياء تخيلية",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_4_item_31"
          },
          {
            "id": "domain_4_item_35",
            "itemNumber": "2-",
            "paperNumber": "2-",
            "text": "يشارك في الألعاب ذات القواعد",
            "raw": "2- يشارك في الألعاب ذات القواعد (ص)",
            "isCutoff": true,
            "maxScore": 2,
            "subItemIds": [
              "domain_4_item_36",
              "domain_4_item_37"
            ]
          },
          {
            "id": "domain_4_item_36",
            "itemNumber": "2.1",
            "paperNumber": "2-1",
            "text": "يحافظ على المشاركة",
            "raw": "2-1 يحافظ على المشاركة",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_4_item_35"
          },
          {
            "id": "domain_4_item_37",
            "itemNumber": "2.2",
            "paperNumber": "2-2",
            "text": "يتبع قواعد اللعبة",
            "raw": "2-2 يتبع قواعد اللعبة",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_4_item_35"
          }
        ]
      },
      {
        "title": "(ز)ما قبل الرياضيات",
        "items": [
          {
            "id": "domain_4_item_38",
            "itemNumber": "1-",
            "paperNumber": "1-",
            "text": "يعد عشرين شيئاً على الأقل",
            "raw": "1- يعد عشرين شيئاً على الأقل (ص)",
            "isCutoff": true,
            "maxScore": 2,
            "subItemIds": [
              "domain_4_item_39",
              "domain_4_item_40"
            ]
          },
          {
            "id": "domain_4_item_39",
            "itemNumber": "1.1",
            "paperNumber": "1-1",
            "text": "يعد عشرة أشياء على الأقل",
            "raw": "1-1 يعد عشرة أشياء على الأقل",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_4_item_38"
          },
          {
            "id": "domain_4_item_40",
            "itemNumber": "1.2",
            "paperNumber": "2-1",
            "text": "يعد ثلاثة أشياء",
            "raw": "2-1 يعد ثلاثة أشياء",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_4_item_38"
          },
          {
            "id": "domain_4_item_41",
            "itemNumber": "2-",
            "paperNumber": "2-",
            "text": "يظهر فهم الأعداد المكتوبة",
            "raw": "2- يظهر فهم الأعداد المكتوبة (ص)",
            "isCutoff": true,
            "maxScore": 2,
            "subItemIds": [
              "domain_4_item_42",
              "domain_4_item_43"
            ]
          },
          {
            "id": "domain_4_item_42",
            "itemNumber": "2.1",
            "paperNumber": "2-1",
            "text": "يسمي الأعداد المكتوبة حتى 10",
            "raw": "2-1 يسمي الأعداد المكتوبة حتى 10",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_4_item_41"
          },
          {
            "id": "domain_4_item_43",
            "itemNumber": "2.2",
            "paperNumber": "2-2",
            "text": "يتعرف على الأعداد المكتوبة",
            "raw": "2-2 يتعرف على الأعداد المكتوبة",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_4_item_41"
          }
        ]
      },
      {
        "title": "(ح)الوعي الصوتي والقراءة الناشئة",
        "items": [
          {
            "id": "domain_4_item_44",
            "itemNumber": "1-",
            "paperNumber": "1-",
            "text": "يظهر مهارات الوعي الصوتي",
            "raw": "1- يظهر مهارات الوعي الصوتي (ص)",
            "isCutoff": true,
            "maxScore": 2,
            "subItemIds": [
              "domain_4_item_45",
              "domain_4_item_46",
              "domain_4_item_47",
              "domain_4_item_48"
            ]
          },
          {
            "id": "domain_4_item_45",
            "itemNumber": "1.1",
            "paperNumber": "1-1",
            "text": "يستخدم مهارات التقفية",
            "raw": "1-1 يستخدم مهارات التقفية",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_4_item_44"
          },
          {
            "id": "domain_4_item_46",
            "itemNumber": "1.2",
            "paperNumber": "1-2",
            "text": "يقسم الجمل والكلمات",
            "raw": "1-2 يقسم الجمل والكلمات",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_4_item_44"
          },
          {
            "id": "domain_4_item_47",
            "itemNumber": "1.3",
            "paperNumber": "1-3",
            "text": "يمزج أصوات ومقاطع مفردة",
            "raw": "1-3 يمزج أصوات ومقاطع مفردة",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_4_item_44"
          },
          {
            "id": "domain_4_item_48",
            "itemNumber": "1.4",
            "paperNumber": "1-4",
            "text": "يميز الأصوات الواحدة والمختلفة في بداية الكلمات ونهايتها",
            "raw": "1-4 يميز الأصوات الواحدة والمختلفة في بداية الكلمات ونهايتها",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_4_item_44"
          },
          {
            "id": "domain_4_item_49",
            "itemNumber": "2-",
            "paperNumber": "2-",
            "text": "يستخدم اقترانات الحروف - الأصوات لنطق الكلمات وكتابتها",
            "raw": "2- يستخدم اقترانات الحروف - الأصوات لنطق الكلمات وكتابتها (ص)",
            "isCutoff": true,
            "maxScore": 2,
            "subItemIds": [
              "domain_4_item_50",
              "domain_4_item_51"
            ]
          },
          {
            "id": "domain_4_item_50",
            "itemNumber": "2.1",
            "paperNumber": "2-1",
            "text": "يكتب الكلمات باستخدام أصوات الحروف",
            "raw": "2-1 يكتب الكلمات باستخدام أصوات الحروف",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_4_item_49"
          },
          {
            "id": "domain_4_item_51",
            "itemNumber": "2.2",
            "paperNumber": "2-2",
            "text": "ينطق الكلمات",
            "raw": "2-2 ينطق الكلمات",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_4_item_49"
          },
          {
            "id": "domain_4_item_52",
            "itemNumber": "3-",
            "paperNumber": "3-",
            "text": "يقرأ الكلمات بالنظر",
            "raw": "3- يقرأ الكلمات بالنظر (ص)",
            "isCutoff": true,
            "maxScore": 2,
            "subItemIds": [
              "domain_4_item_53"
            ]
          },
          {
            "id": "domain_4_item_53",
            "itemNumber": "3.1",
            "paperNumber": "3-1",
            "text": "يتعرف على أسماء الحروف",
            "raw": "3-1 يتعرف على أسماء الحروف",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_4_item_52"
          }
        ]
      }
    ]
  },
  {
    "id": "domain_5",
    "title": "مجال التواصل الاجتماعي",
    "shortTitle": "التواصل الاجتماعي",
    "icon": "💬",
    "strands": [
      {
        "title": "1. تفاعلات التواصل الاجتماعي",
        "items": [
          {
            "id": "domain_5_item_1",
            "itemNumber": "1-",
            "paperNumber": "1-",
            "text": "يستخدم الكلمات أو العبارات أو الجمل للإخبار، توجيه الأسئلة والتعبير عن التوقع والتخيل والانفعال",
            "raw": "1- يستخدم الكلمات أو العبارات أو الجمل للإخبار، توجيه الأسئلة والتعبير عن التوقع والتخيل والانفعال (ص)",
            "isCutoff": true,
            "maxScore": 2,
            "subItemIds": [
              "domain_5_item_2",
              "domain_5_item_3",
              "domain_5_item_4",
              "domain_5_item_5",
              "domain_5_item_6",
              "domain_5_item_7",
              "domain_5_item_8"
            ]
          },
          {
            "id": "domain_5_item_2",
            "itemNumber": "1.1",
            "paperNumber": "1-1",
            "text": "يستخدم الكلمات أو العبارات أو الجمل للتعبير عن نتائج متوقعة",
            "raw": "1-1 يستخدم الكلمات أو العبارات أو الجمل للتعبير عن نتائج متوقعة",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_5_item_1"
          },
          {
            "id": "domain_5_item_3",
            "itemNumber": "1.2",
            "paperNumber": "1-2",
            "text": "يستخدم الكلمات أو العبارات أو الجمل الوصف  أشياء أو أشخاص أو أحداث متخيلة",
            "raw": "1-2 يستخدم الكلمات أو العبارات أو الجمل الوصف  أشياء أو أشخاص أو أحداث متخيلة",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_5_item_1"
          },
          {
            "id": "domain_5_item_4",
            "itemNumber": "1.3",
            "paperNumber": "1-3",
            "text": "يستخدم الكلمات أو العبارات أو الجمل لتسمية انفعالاته وانفعالات الآخرين",
            "raw": "1-3 يستخدم الكلمات أو العبارات أو الجمل لتسمية انفعالاته وانفعالات الآخرين",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_5_item_1"
          },
          {
            "id": "domain_5_item_5",
            "itemNumber": "1.4",
            "paperNumber": "1-4",
            "text": "يستخدم الكلمات أو العبارات أو الجمل لوصف الأحداث الماضية",
            "raw": "1-4 يستخدم الكلمات أو العبارات أو الجمل لوصف الأحداث الماضية",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_5_item_1"
          },
          {
            "id": "domain_5_item_6",
            "itemNumber": "1.5",
            "paperNumber": "1-5",
            "text": "يستخدم الكلمات أو العبارات أو الجمل لإعطاء أوامر وطلبات إلى الآخرين",
            "raw": "1-5 يستخدم الكلمات أو العبارات أو الجمل لإعطاء أوامر وطلبات إلى الآخرين",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_5_item_1"
          },
          {
            "id": "domain_5_item_7",
            "itemNumber": "1.6",
            "paperNumber": "1-6",
            "text": "يستخدم الكلمات أو العبارات أو الجمل للحصول على المعلومات",
            "raw": "1-6 يستخدم الكلمات أو العبارات أو الجمل للحصول على المعلومات",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_5_item_1"
          },
          {
            "id": "domain_5_item_8",
            "itemNumber": "1.7",
            "paperNumber": "1-7",
            "text": "يستخدم الكلمات أو العبارات أو الجمل للإخبار",
            "raw": "1-7 يستخدم الكلمات أو العبارات أو الجمل للإخبار",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_5_item_1"
          },
          {
            "id": "domain_5_item_9",
            "itemNumber": "2-",
            "paperNumber": "2-",
            "text": "يستخدم قواعد المحادثة",
            "raw": "2- يستخدم قواعد المحادثة (ص)",
            "isCutoff": true,
            "maxScore": 2,
            "subItemIds": [
              "domain_5_item_10",
              "domain_5_item_11",
              "domain_5_item_12",
              "domain_5_item_13",
              "domain_5_item_14",
              "domain_5_item_15"
            ]
          },
          {
            "id": "domain_5_item_10",
            "itemNumber": "2.1",
            "paperNumber": "2-1",
            "text": "يتناوب دوري المتحدث /المستمع",
            "raw": "2-1 يتناوب دوري المتحدث /المستمع",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_5_item_9"
          },
          {
            "id": "domain_5_item_11",
            "itemNumber": "2.2",
            "paperNumber": "2-2",
            "text": "يستجيب إلى تغييرات الموضوع التي يبدأها الآخرون",
            "raw": "2-2 يستجيب إلى تغييرات الموضوع التي يبدأها الآخرون",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_5_item_9"
          },
          {
            "id": "domain_5_item_12",
            "itemNumber": "2.3",
            "paperNumber": "2-3",
            "text": "يسأل أسئلة طلباً للتوضيح",
            "raw": "2-3 يسأل أسئلة طلباً للتوضيح",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_5_item_9"
          },
          {
            "id": "domain_5_item_13",
            "itemNumber": "2.4",
            "paperNumber": "2-4",
            "text": "يرد على الأسئلة العرضية",
            "raw": "2-4 يرد على الأسئلة العرضية",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_5_item_9"
          },
          {
            "id": "domain_5_item_14",
            "itemNumber": "2.5",
            "paperNumber": "2-5",
            "text": "يبدأ موضوعات مرتبطة بالسياق",
            "raw": "2-5 يبدأ موضوعات مرتبطة بالسياق",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_5_item_9"
          },
          {
            "id": "domain_5_item_15",
            "itemNumber": "2.6",
            "paperNumber": "2-6",
            "text": "يستجيب للموضوعات التي يبدأها الآخرون",
            "raw": "2-6 يستجيب للموضوعات التي يبدأها الآخرون",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_5_item_9"
          },
          {
            "id": "domain_5_item_16",
            "itemNumber": "3-",
            "paperNumber": "3-",
            "text": "يؤدي أدوار التواصل الاجتماعي ويغيرها",
            "raw": "3- يؤدي أدوار التواصل الاجتماعي ويغيرها (ص)",
            "isCutoff": true,
            "maxScore": 2,
            "subItemIds": [
              "domain_5_item_17",
              "domain_5_item_18"
            ]
          },
          {
            "id": "domain_5_item_17",
            "itemNumber": "3.1",
            "paperNumber": "3-1",
            "text": "يغير الصوت لنقل المعنى",
            "raw": "3-1 يغير الصوت لنقل المعنى",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_5_item_16"
          },
          {
            "id": "domain_5_item_18",
            "itemNumber": "3.2",
            "paperNumber": "2.",
            "text": "يستخدم توجه بدني ملائم اجتماعياً",
            "raw": "2. يستخدم توجه بدني ملائم اجتماعياً",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_5_item_16"
          }
        ]
      },
      {
        "title": "2. إنتاج الكلمات والعبارات والجمل",
        "items": [
          {
            "id": "domain_5_item_19",
            "itemNumber": "1-",
            "paperNumber": "1-",
            "text": "يستخدم الأفعال النحوية",
            "raw": "1- يستخدم الأفعال النحوية (ص)",
            "isCutoff": true,
            "maxScore": 2,
            "subItemIds": [
              "domain_5_item_20",
              "domain_5_item_21",
              "domain_5_item_22",
              "domain_5_item_23",
              "domain_5_item_24",
              "domain_5_item_25"
            ]
          },
          {
            "id": "domain_5_item_20",
            "itemNumber": "1.1",
            "paperNumber": "1-1",
            "text": "يستخدم الأفعال المساعدة",
            "raw": "1-1 يستخدم الأفعال المساعدة",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_5_item_19"
          },
          {
            "id": "domain_5_item_21",
            "itemNumber": "1.2",
            "paperNumber": "1-2",
            "text": "يستخدم الفعل الرابط \" يكون\" to be",
            "raw": "1-2 يستخدم الفعل الرابط \" يكون\" to be",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_5_item_19"
          },
          {
            "id": "domain_5_item_22",
            "itemNumber": "1.3",
            "paperNumber": "1-3",
            "text": "يستخدم أشكال الفعل للمفرد الغائب",
            "raw": "1-3 يستخدم أشكال الفعل للمفرد الغائب",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_5_item_19"
          },
          {
            "id": "domain_5_item_23",
            "itemNumber": "1.4",
            "paperNumber": "1-4",
            "text": "يستخدم الأفعال غير المنتظمة للزمن الماضي",
            "raw": "1-4 يستخدم الأفعال غير المنتظمة للزمن الماضي",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_5_item_19"
          },
          {
            "id": "domain_5_item_24",
            "itemNumber": "1.5",
            "paperNumber": "1-5",
            "text": "يستخدم الأفعال المنتظمة للزمن الماضي",
            "raw": "1-5 يستخدم الأفعال المنتظمة للزمن الماضي",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_5_item_19"
          },
          {
            "id": "domain_5_item_25",
            "itemNumber": "1.6",
            "paperNumber": "1-6",
            "text": "يستخدم لاحقة الزمن المضارع ing",
            "raw": "1-6 يستخدم لاحقة الزمن المضارع ing",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_5_item_19"
          },
          {
            "id": "domain_5_item_26",
            "itemNumber": "2-",
            "paperNumber": "2-",
            "text": "يستخدم زوائد الأسماء وتصريفاتها",
            "raw": "2- يستخدم زوائد الأسماء وتصريفاتها (ص)",
            "isCutoff": true,
            "maxScore": 2,
            "subItemIds": [
              "domain_5_item_27",
              "domain_5_item_28",
              "domain_5_item_29"
            ]
          },
          {
            "id": "domain_5_item_27",
            "itemNumber": "2.1",
            "paperNumber": "2-1",
            "text": "يستخدم لاحقة الملكية",
            "raw": "2-1 يستخدم لاحقة الملكية",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_5_item_26"
          },
          {
            "id": "domain_5_item_28",
            "itemNumber": "2.2",
            "paperNumber": "2-2",
            "text": "يستخدم أسماء الجمع غير المنتظم",
            "raw": "2-2 يستخدم أسماء الجمع غير المنتظم",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_5_item_26"
          },
          {
            "id": "domain_5_item_29",
            "itemNumber": "2.3",
            "paperNumber": "2-3",
            "text": "يستخدم أسماء الجمع المنتظم",
            "raw": "2-3 يستخدم أسماء الجمع المنتظم",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_5_item_26"
          },
          {
            "id": "domain_5_item_30",
            "itemNumber": "3-",
            "paperNumber": "3-",
            "text": "يسأل أسئلة",
            "raw": "3- يسأل أسئلة (ص)",
            "isCutoff": true,
            "maxScore": 2,
            "subItemIds": [
              "domain_5_item_31",
              "domain_5_item_32",
              "domain_5_item_33",
              "domain_5_item_34",
              "domain_5_item_35",
              "domain_5_item_36"
            ]
          },
          {
            "id": "domain_5_item_31",
            "itemNumber": "3.1",
            "paperNumber": "1-3",
            "text": "يسأل أسئلة نعم لا",
            "raw": "1-3 يسأل أسئلة نعم لا",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_5_item_30"
          },
          {
            "id": "domain_5_item_32",
            "itemNumber": "3.2",
            "paperNumber": "2-3",
            "text": "يسأل أسئلة بتقديم موضع الفعل المساعد",
            "raw": "2-3 يسأل أسئلة بتقديم موضع الفعل المساعد",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_5_item_30"
          },
          {
            "id": "domain_5_item_33",
            "itemNumber": "3.3",
            "paperNumber": "3-3",
            "text": "يسأل أسئلة \"متى\"",
            "raw": "3-3 يسأل أسئلة \"متى\"",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_5_item_30"
          },
          {
            "id": "domain_5_item_34",
            "itemNumber": "3.4",
            "paperNumber": "4-3",
            "text": "يسأل أسئلة \"لماذا\" و\"من\" و\"كيف\"",
            "raw": "4-3 يسأل أسئلة \"لماذا\" و\"من\" و\"كيف\"",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_5_item_30"
          },
          {
            "id": "domain_5_item_35",
            "itemNumber": "3.5",
            "paperNumber": "5-3",
            "text": "يسأل أسئلة \"ماذا\" و\"كيف\"",
            "raw": "5-3 يسأل أسئلة \"ماذا\" و\"كيف\"",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_5_item_30"
          },
          {
            "id": "domain_5_item_36",
            "itemNumber": "3.6",
            "paperNumber": "6-3",
            "text": "يسأل أسئلة باستخدام نبرة الصوت الصاعدة",
            "raw": "6-3 يسأل أسئلة باستخدام نبرة الصوت الصاعدة",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_5_item_30"
          },
          {
            "id": "domain_5_item_37",
            "itemNumber": "4-",
            "paperNumber": "4-",
            "text": "يستخدم الضمائر",
            "raw": "4- يستخدم الضمائر (ص)",
            "isCutoff": true,
            "maxScore": 2,
            "subItemIds": [
              "domain_5_item_38",
              "domain_5_item_39",
              "domain_5_item_40",
              "domain_5_item_41",
              "domain_5_item_42"
            ]
          },
          {
            "id": "domain_5_item_38",
            "itemNumber": "4.1",
            "paperNumber": "1-4",
            "text": "يستخدم ضمائر الفاعل",
            "raw": "1-4 يستخدم ضمائر الفاعل",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_5_item_37"
          },
          {
            "id": "domain_5_item_39",
            "itemNumber": "4.2",
            "paperNumber": "2-4",
            "text": "يستخدم ضمائر المفعول",
            "raw": "2-4 يستخدم ضمائر المفعول",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_5_item_37"
          },
          {
            "id": "domain_5_item_40",
            "itemNumber": "4.3",
            "paperNumber": "3-4",
            "text": "يستخدم ضمائر الملكية",
            "raw": "3-4 يستخدم ضمائر الملكية",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_5_item_37"
          },
          {
            "id": "domain_5_item_41",
            "itemNumber": "4.4",
            "paperNumber": "4-4",
            "text": "يستخدم ضمائر التنكير",
            "raw": "4-4 يستخدم ضمائر التنكير",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_5_item_37"
          },
          {
            "id": "domain_5_item_42",
            "itemNumber": "4.5",
            "paperNumber": "5-4",
            "text": "يستخدم أسماء الإشارة",
            "raw": "5-4 يستخدم أسماء الإشارة",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_5_item_37"
          },
          {
            "id": "domain_5_item_43",
            "itemNumber": "5-",
            "paperNumber": "5-",
            "text": "يستخدم الكلمات الوصفية",
            "raw": "5- يستخدم الكلمات الوصفية (ص)",
            "isCutoff": true,
            "maxScore": 2,
            "subItemIds": [
              "domain_5_item_44",
              "domain_5_item_45",
              "domain_5_item_46",
              "domain_5_item_47",
              "domain_5_item_48",
              "domain_5_item_49"
            ]
          },
          {
            "id": "domain_5_item_44",
            "itemNumber": "5.1",
            "paperNumber": "1-5",
            "text": "يستخدم الصفات",
            "raw": "1-5 يستخدم الصفات",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_5_item_43"
          },
          {
            "id": "domain_5_item_45",
            "itemNumber": "5.2",
            "paperNumber": "5-2",
            "text": "يستخدم الصفات لعمل المقارنات",
            "raw": "5-2 يستخدم الصفات لعمل المقارنات",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_5_item_43"
          },
          {
            "id": "domain_5_item_46",
            "itemNumber": "5.3",
            "paperNumber": "3-5",
            "text": "يستخدم الظروف",
            "raw": "3-5 يستخدم الظروف",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_5_item_43"
          },
          {
            "id": "domain_5_item_47",
            "itemNumber": "5.4",
            "paperNumber": "4-5",
            "text": "يستخدم حروف الجر",
            "raw": "4-5 يستخدم حروف الجر",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_5_item_43"
          },
          {
            "id": "domain_5_item_48",
            "itemNumber": "5.5",
            "paperNumber": "5-5",
            "text": "يستخدم الروابط",
            "raw": "5-5 يستخدم الروابط",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_5_item_43"
          },
          {
            "id": "domain_5_item_49",
            "itemNumber": "5.6",
            "paperNumber": "5-6",
            "text": "يستخدم أدوات التعريف والتنكير",
            "raw": "5-6 يستخدم أدوات التعريف والتنكير",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_5_item_43"
          }
        ]
      }
    ]
  },
  {
    "id": "domain_6",
    "title": "المجال الاجتماعي",
    "shortTitle": "المجال الاجتماعي",
    "icon": "👥",
    "strands": [
      {
        "title": "1. التفاعل مع الاخرين",
        "items": [
          {
            "id": "domain_6_item_1",
            "itemNumber": "1-",
            "paperNumber": "١-",
            "text": "يتفاعل مع الآخرين كشركاء في اللعب",
            "raw": "١- يتفاعل مع الآخرين كشركاء في اللعب (ص)",
            "isCutoff": true,
            "maxScore": 2,
            "subItemIds": [
              "domain_6_item_2",
              "domain_6_item_3",
              "domain_6_item_4",
              "domain_6_item_5",
              "domain_6_item_6"
            ]
          },
          {
            "id": "domain_6_item_2",
            "itemNumber": "1.1",
            "paperNumber": "١-١",
            "text": "يستجيب للآخرين الذين في حالة خطر أو احتياج",
            "raw": "١-١ يستجيب للآخرين الذين في حالة خطر أو احتياج",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_6_item_1"
          },
          {
            "id": "domain_6_item_3",
            "itemNumber": "1.2",
            "paperNumber": "2-1",
            "text": "يحقق القرب من الآخرين ويحافظ على استمراريته",
            "raw": "2-1يحقق القرب من الآخرين ويحافظ على استمراريته",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_6_item_1"
          },
          {
            "id": "domain_6_item_4",
            "itemNumber": "1.3",
            "paperNumber": "1-3",
            "text": "يتناوب الأدوار مع الآخرين",
            "raw": "1-3 يتناوب الأدوار مع الآخرين",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_6_item_1"
          },
          {
            "id": "domain_6_item_5",
            "itemNumber": "1.4",
            "paperNumber": "1-4",
            "text": "يبادر بإلقاء التحية على الآخرين",
            "raw": "1-4 يبادر بإلقاء التحية على الآخرين",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_6_item_1"
          },
          {
            "id": "domain_6_item_6",
            "itemNumber": "1.5",
            "paperNumber": "1-5",
            "text": "يستجيب إلى المبادأة الانفعالية من الآخرين",
            "raw": "1-5 يستجيب إلى المبادأة الانفعالية من الآخرين",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_6_item_1"
          },
          {
            "id": "domain_6_item_7",
            "itemNumber": "2-",
            "paperNumber": "٢-",
            "text": "يبدأ نشاطاً تعاونياً",
            "raw": "٢- يبدأ نشاطاً تعاونياً (ص)",
            "isCutoff": true,
            "maxScore": 2,
            "subItemIds": [
              "domain_6_item_8",
              "domain_6_item_9",
              "domain_6_item_10"
            ]
          },
          {
            "id": "domain_6_item_8",
            "itemNumber": "2.1",
            "paperNumber": "2-1",
            "text": "ينضم إلى الآخرين وينخرط في نشاط تعاوني",
            "raw": "2-1 ينضم إلى الآخرين وينخرط في نشاط تعاوني",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_6_item_7"
          },
          {
            "id": "domain_6_item_9",
            "itemNumber": "2.2",
            "paperNumber": "٢-٢",
            "text": "يواصل المشاركة التعاونية مع الآخرين",
            "raw": "٢-٢ يواصل المشاركة التعاونية مع الآخرين",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_6_item_7"
          },
          {
            "id": "domain_6_item_10",
            "itemNumber": "2.3",
            "paperNumber": "٢-3",
            "text": "يتشارك في الأشياء ويتبادلها مع الآخرين",
            "raw": "٢-3 يتشارك في الأشياء ويتبادلها مع الآخرين",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_6_item_7"
          },
          {
            "id": "domain_6_item_11",
            "itemNumber": "3-",
            "paperNumber": "٣-",
            "text": "يحل النزاعات بأفضل استراتيجية فعالة",
            "raw": "٣- يحل النزاعات بأفضل استراتيجية فعالة (ص)",
            "isCutoff": true,
            "maxScore": 2,
            "subItemIds": [
              "domain_6_item_12",
              "domain_6_item_13",
              "domain_6_item_14"
            ]
          },
          {
            "id": "domain_6_item_12",
            "itemNumber": "3.1",
            "paperNumber": "3-1",
            "text": "يتفاوض لحل النزاعات",
            "raw": "3-1 يتفاوض لحل النزاعات",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_6_item_11"
          },
          {
            "id": "domain_6_item_13",
            "itemNumber": "3.2",
            "paperNumber": "3-2",
            "text": "يستخدم استراتيجيات بسيطة لحل النزاعات",
            "raw": "3-2 يستخدم استراتيجيات بسيطة لحل النزاعات",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_6_item_11"
          },
          {
            "id": "domain_6_item_14",
            "itemNumber": "3.3",
            "paperNumber": "٣-٣",
            "text": "يدعي الملكية ويدافع عنها",
            "raw": "٣-٣ يدعي الملكية ويدافع عنها",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_6_item_11"
          }
        ]
      },
      {
        "title": "2. المشاركة",
        "items": [
          {
            "id": "domain_6_item_15",
            "itemNumber": "1-",
            "paperNumber": "1-",
            "text": "يبدأ نشاطات ملائمة للعمر ويكملها",
            "raw": "1- يبدأ نشاطات ملائمة للعمر ويكملها (ص)",
            "isCutoff": true,
            "maxScore": 2,
            "subItemIds": [
              "domain_6_item_16",
              "domain_6_item_17"
            ]
          },
          {
            "id": "domain_6_item_16",
            "itemNumber": "1.1",
            "paperNumber": "١-١",
            "text": "يستجيب لطلب إنهاء النشاط",
            "raw": "١-١ يستجيب لطلب إنهاء النشاط",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_6_item_15"
          },
          {
            "id": "domain_6_item_17",
            "itemNumber": "1.2",
            "paperNumber": "1-2",
            "text": "يستجيب لطلب بدء النشاط",
            "raw": "1-2 يستجيب لطلب بدء النشاط",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_6_item_15"
          },
          {
            "id": "domain_6_item_18",
            "itemNumber": "2-",
            "paperNumber": "٢-",
            "text": "يلاحظ ويستمع ويشارك في أثناء نشاطات المجموعة الصغيرة",
            "raw": "٢- يلاحظ ويستمع ويشارك في أثناء نشاطات المجموعة الصغيرة (ص)",
            "isCutoff": true,
            "maxScore": 2,
            "subItemIds": [
              "domain_6_item_19",
              "domain_6_item_20",
              "domain_6_item_21",
              "domain_6_item_22"
            ]
          },
          {
            "id": "domain_6_item_19",
            "itemNumber": "2.1",
            "paperNumber": "2-1",
            "text": "يتفاعل بطريقة ملائمة مع الأشياء في أثناء نشاطات المجموعة الصغيرة",
            "raw": "2-1يتفاعل بطريقة ملائمة مع الأشياء في أثناء نشاطات المجموعة الصغيرة",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_6_item_18"
          },
          {
            "id": "domain_6_item_20",
            "itemNumber": "2.2",
            "paperNumber": "٢-٢",
            "text": "يستجيب للتوجيهات بطريقة ملائمة في أثناء نشاطات المجموعة الصغيرة",
            "raw": "٢-٢ يستجيب للتوجيهات بطريقة ملائمة في أثناء نشاطات المجموعة الصغيرة",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_6_item_18"
          },
          {
            "id": "domain_6_item_21",
            "itemNumber": "2.3",
            "paperNumber": "2-3",
            "text": "ينظر إلى الشيء أو الشخص أو الحدث الملائم في أثناء نشاطات المجموعة الصغيرة",
            "raw": "2-3 ينظر إلى الشيء أو الشخص أو الحدث الملائم في أثناء نشاطات المجموعة الصغيرة",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_6_item_18"
          },
          {
            "id": "domain_6_item_22",
            "itemNumber": "2.4",
            "paperNumber": "2-3",
            "text": "يظل مع المجموعة في أثناء نشاطات المجموعة الصغيرة",
            "raw": "2-3 يظل مع المجموعة في أثناء نشاطات المجموعة الصغيرة",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_6_item_18"
          },
          {
            "id": "domain_6_item_23",
            "itemNumber": "3-",
            "paperNumber": "٣-",
            "text": "يلاحظ ويستمع ويشارك في أثناء نشاطات المجموعة الكبيرة",
            "raw": "٣- يلاحظ ويستمع ويشارك في أثناء نشاطات المجموعة الكبيرة (ص)",
            "isCutoff": true,
            "maxScore": 2,
            "subItemIds": [
              "domain_6_item_24",
              "domain_6_item_25",
              "domain_6_item_26",
              "domain_6_item_27"
            ]
          },
          {
            "id": "domain_6_item_24",
            "itemNumber": "3.1",
            "paperNumber": "3-1",
            "text": "يتفاعل بطريقة ملائمة مع الأشياء في أثناء نشاطات المجموعة الكبيرة",
            "raw": "3-1 يتفاعل بطريقة ملائمة مع الأشياء في أثناء نشاطات المجموعة الكبيرة",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_6_item_23"
          },
          {
            "id": "domain_6_item_25",
            "itemNumber": "3.2",
            "paperNumber": "3-2",
            "text": "يستجيب للتوجيهات بطريقة ملائمة في أثناء نشاطات المجموعة الكبيرة",
            "raw": "3-2 يستجيب للتوجيهات بطريقة ملائمة في أثناء نشاطات المجموعة الكبيرة",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_6_item_23"
          },
          {
            "id": "domain_6_item_26",
            "itemNumber": "3.3",
            "paperNumber": "٣-٣",
            "text": "ينظر إلى الشيء أو الشخص أو الحدث الملائم في أثناء نشاطات المجموعة الكبيرة",
            "raw": "٣-٣ ينظر إلى الشيء أو الشخص أو الحدث الملائم في أثناء نشاطات المجموعة الكبيرة",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_6_item_23"
          },
          {
            "id": "domain_6_item_27",
            "itemNumber": "3.4",
            "paperNumber": "3-4",
            "text": "يظل مع المجموعة في أثناء نشاطات المجموعة الكبيرة",
            "raw": "3-4 يظل مع المجموعة في أثناء نشاطات المجموعة الكبيرة",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_6_item_23"
          }
        ]
      },
      {
        "title": "(ج) التفاعل مع البيئة",
        "items": [
          {
            "id": "domain_6_item_28",
            "itemNumber": "1-",
            "paperNumber": "-1",
            "text": "يلبي احتياجاته البدنية بطرق ملائمة اجتماعياً",
            "raw": "-1 يلبي احتياجاته البدنية بطرق ملائمة اجتماعياً (ص)",
            "isCutoff": true,
            "maxScore": 2,
            "subItemIds": [
              "domain_6_item_29",
              "domain_6_item_30",
              "domain_6_item_31"
            ]
          },
          {
            "id": "domain_6_item_29",
            "itemNumber": "1.1",
            "paperNumber": "1-1",
            "text": "يلبي احتياجاته البدنية عندما يكون متضايقاً أو مريضاً أو مجروحاً أو متعباً",
            "raw": "1-1يلبي احتياجاته البدنية عندما يكون متضايقاً أو مريضاً أو مجروحاً أو متعباً",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_6_item_28"
          },
          {
            "id": "domain_6_item_30",
            "itemNumber": "1.2",
            "paperNumber": "1-2",
            "text": "يلبي احتياجات بدنية قابلة للملاحظة",
            "raw": "1-2 يلبي احتياجات بدنية قابلة للملاحظة",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_6_item_28"
          },
          {
            "id": "domain_6_item_31",
            "itemNumber": "1.3",
            "paperNumber": "1-3",
            "text": "يلبي الاحتياجات البدنية للجوع والعطش",
            "raw": "1-3 يلبي الاحتياجات البدنية للجوع والعطش",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_6_item_28"
          },
          {
            "id": "domain_6_item_32",
            "itemNumber": "2-",
            "paperNumber": "2-",
            "text": "يتبع قواعد السياق المحددة خارج البيت والفصل",
            "raw": "2- يتبع قواعد السياق المحددة خارج البيت والفصل (ص)",
            "isCutoff": true,
            "maxScore": 2,
            "subItemIds": [
              "domain_6_item_33",
              "domain_6_item_34"
            ]
          },
          {
            "id": "domain_6_item_33",
            "itemNumber": "2.1",
            "paperNumber": "2-1",
            "text": "يطلب الإذن من البالغين",
            "raw": "2-1يطلب الإذن من البالغين",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_6_item_32"
          },
          {
            "id": "domain_6_item_34",
            "itemNumber": "2.2",
            "paperNumber": "2-2",
            "text": "يتبع القواعد المتبعة في البيت وفي الفصل",
            "raw": "2-2 يتبع القواعد المتبعة في البيت وفي الفصل",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_6_item_32"
          }
        ]
      },
      {
        "title": "(د) معرفة الذات والآخرين",
        "items": [
          {
            "id": "domain_6_item_35",
            "itemNumber": "1-",
            "paperNumber": "1-",
            "text": "يعبر عما يحب وما يكره",
            "raw": "1- يعبر عما يحب وما يكره (ص)",
            "isCutoff": true,
            "maxScore": 2,
            "subItemIds": [
              "domain_6_item_36",
              "domain_6_item_37"
            ]
          },
          {
            "id": "domain_6_item_36",
            "itemNumber": "1.1",
            "paperNumber": "1-1",
            "text": "يبدأ النشاطات المفضلة",
            "raw": "1-1 يبدأ النشاطات المفضلة",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_6_item_35"
          },
          {
            "id": "domain_6_item_37",
            "itemNumber": "1.2",
            "paperNumber": "1-2",
            "text": "يختار النشاطات و/ أو الأشياء",
            "raw": "1-2 يختار النشاطات و/ أو الأشياء",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_6_item_35"
          },
          {
            "id": "domain_6_item_38",
            "itemNumber": "2-",
            "paperNumber": "2-",
            "text": "يفهم كيف تنعكس سلوكياته وأفكاره ومشاعره على الآخرين",
            "raw": "2- يفهم كيف تنعكس سلوكياته وأفكاره ومشاعره على الآخرين (ص)",
            "isCutoff": true,
            "maxScore": 2,
            "subItemIds": [
              "domain_6_item_39",
              "domain_6_item_40"
            ]
          },
          {
            "id": "domain_6_item_39",
            "itemNumber": "2.1",
            "paperNumber": "2-1",
            "text": "يتعرف على مشاعر الآخرين وانفعالاتهم",
            "raw": "2-1 يتعرف على مشاعر الآخرين وانفعالاتهم",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_6_item_38"
          },
          {
            "id": "domain_6_item_40",
            "itemNumber": "2.2",
            "paperNumber": "2-2",
            "text": "يتعرف على مشاعره وانفعالاته",
            "raw": "2-2 يتعرف على مشاعره وانفعالاته",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_6_item_38"
          },
          {
            "id": "domain_6_item_41",
            "itemNumber": "3-",
            "paperNumber": "3-",
            "text": "يسرد المعلومات التعريفية عن نفسه وعن الآخرين",
            "raw": "3- يسرد المعلومات التعريفية عن نفسه وعن الآخرين (ص)",
            "isCutoff": true,
            "maxScore": 2,
            "subItemIds": [
              "domain_6_item_42",
              "domain_6_item_43",
              "domain_6_item_44",
              "domain_6_item_45",
              "domain_6_item_46",
              "domain_6_item_47"
            ]
          },
          {
            "id": "domain_6_item_42",
            "itemNumber": "3.1",
            "paperNumber": "3-1",
            "text": "يذكر عنوانه",
            "raw": "3-1 يذكر عنوانه",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_6_item_41"
          },
          {
            "id": "domain_6_item_43",
            "itemNumber": "3.2",
            "paperNumber": "3-2",
            "text": "يذكر رقم هاتفه",
            "raw": "3-2 يذكر رقم هاتفه",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_6_item_41"
          },
          {
            "id": "domain_6_item_44",
            "itemNumber": "3.3",
            "paperNumber": "3-3",
            "text": "يذكر عيد ميلاده",
            "raw": "3-3 يذكر عيد ميلاده",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_6_item_41"
          },
          {
            "id": "domain_6_item_45",
            "itemNumber": "3.4",
            "paperNumber": "3-4",
            "text": "يسمي الأشقاء ويقول اسمه كاملاً",
            "raw": "3-4 يسمي الأشقاء ويقول اسمه كاملاً",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_6_item_41"
          },
          {
            "id": "domain_6_item_46",
            "itemNumber": "3.5",
            "paperNumber": "3-4",
            "text": "يذكر جنسه وجنس الآخرين",
            "raw": "3-4 يذكر جنسه وجنس الآخرين",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_6_item_41"
          },
          {
            "id": "domain_6_item_47",
            "itemNumber": "3.6",
            "paperNumber": "3-5",
            "text": "يذكر اسمه وعمره",
            "raw": "3-5 يذكر اسمه وعمره",
            "isCutoff": false,
            "maxScore": 2,
            "parentItemId": "domain_6_item_41"
          }
        ]
      }
    ]
  }
];
