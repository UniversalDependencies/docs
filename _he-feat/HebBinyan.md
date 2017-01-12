---
layout: feature
title: 'HebBinyan'
shortdef: 'HebBinyan'
---

The `HebBinyan` feature is used for tagging the Hebrew binyanim system. Broadly speaking, a binyan (lit. "building") is a paradigm template, one of which must be assigned to each lexical [verb](he-pos/VERB) and follows it along the entire inflectional paradigm (across [person](he-feat/Person), [gender](he-feat/Gender), and [tense](he-feat/Tense)). Five of the binyanim carry a loose semantic interpretation which is not obligatory. Two others are obligatory morphological passivizations of their active counterparts. As a result, Hebrew verbs do not need an explicit [voice](u-feat/Voice) feature.

### `PAAL`

A binyan used for most "basic" Hebrew verbs.

#### Examples:

* הילד <b>ספר</b> עד שלוש _ha-yeled <b>safar</b> ad šaloš_ "the child <b>counted</b> to three"
* הילד <b>יספור</b> עד שלוש _ha-yeled <b>yispor</b> ad šaloš_ "the child <b>will count</b> to three"

### `NIFAL`

A binyan used often for passive forms of `PAAL`, but not necessarily.

#### Examples:

* הילדים <b>נספרו</b> _ha-yeladim <b>nisperu</b>_ "the children <b>were counted</b>"
* הילדים <b>ייספרו</b> _ha-yeladim <b>yisafru</b>_ "the children <b>will be counted</b>"
* אבא <b>נשאר</b> בבית _aba <b>niš'ar</b> ba-bayit_ "Father <b>is staying</b> home"

### `HIFIL`

A binyan loosely associated with causing an action to be taken.

#### Examples:

* השרה <b>הלהיבה</b> את הקהל _ha-sara <b>hilhiva</b> et ha-qahal_ "the minister(f.) <b>excited</b> the audience" (interpreted as "caused the audience to be excited")
* התלמיד <b>יקליד</b> את התשובות _ha-talmid <b>yaqlid</b> et ha-tšuvot_ "the student <b>will type</b> the answers" (no causative interpretation)

### `HUFAL`

The obligatory passivization of `HIFIL`.

#### Examples:

* הקהל <b>הולהב</b> על-ידי השרה _ha-qahal <b>hulhav</b> al-yedei ha-sara_ "the audience <b>was excited</b> by the minister(f.)"

### `PIEL`

A binyan loosely associated with "intensive" actions. In Modern Hebrew, this is the default binyan for verb neologisms.

#### Examples:

* אני <b>מצפה</b> להסבר _ani <b>metsappe/metsappa</b> le-hesber_ "I expect an explanation" (cf. _ani <b>tsofe-`PAAL`</b> gešem_ "I anticipate rain")
* סבתא <b>סיפרה</b> לי את הסיפור _savta <b>sippra</b> li et ha-sippur_ "grandmother <b>told</b> me the story"
* המחשב <b>מקמפל</b> את הקוד _ha-maxšev <b>meqampel</b> et ha-qod_ "the computer <b>is compiling</b> the code" (calque neologism)

### `PUAL`

The obligatory passivization of `PIEL`.

#### Examples:

* הסיפור <b>יסופר</b> לי על-ידי סבתא _ha-sippur <b>yesuppar</b> li al-yedei savta_ "the story <b>will be told</b> to me by grandmother"
* הקוד <b>קומפל</b> על-ידי המחשב _ha-qod <b>qumpal</b> al-yedei ha-maxšev_ "the code <b>was compiled</b> by the computer"

### `HITPAEL`

A binyan used, inter alia, for reciprocal and reflexive verbs.

#### Examples:

* אח שלי <b>הסתפר</b> אתמול _ax šeli <b>histapper</b> etmol_ "my brother <b>got a haircut</b> yesterday"
* הנאהבים <b>התנשקו</b> _ha-ne'ehavim <b>hitnaššqu</b>_ "the lovers <b>kissed</b>" (each other)
* הקוד <b>התקמפל</b> _ha-qod <b>hitqampel</b>_ "the code <b>compiled</b>"
