---
layout: base
title:  'UD_Hebrew-IAHLTwiki'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Hebrew IAHLTwiki

Language: [Hebrew](/he/index.html) (code: `he`)<br/>
Family: Afro-Asiatic, Semitic

This treebank has been part of Universal Dependencies since the UD v2.10 release.

The following people have contributed to making this treebank part of UD: Amir Zeldes, Avner Algom, Noam Ordan, Yifat Ben Moshe, Shira Wigderson.

Repository: [UD_Hebrew-IAHLTwiki](https://github.com/UniversalDependencies/UD_Hebrew-IAHLTwiki)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udhe_iahltwiki213)<br />
Download all treebanks: [UD 2.13](/#download)

License: CC BY-SA 4.0

Genre: wiki

Questions, comments?
General annotation questions (either Hebrew-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Hebrew-IAHLTwiki/issues).
If you want to collaborate, please contact [amir&nbsp;•&nbsp;zeldes&nbsp;(æt)&nbsp;georgetown&nbsp;•&nbsp;edu].
Development of the treebank happens directly in the UD repository, so you may submit bug fixes as pull requests against the dev branch.

| Annotation | Source |
|------------|--------|
| Lemmas | annotated manually |
| UPOS | annotated manually, natively in UD style |
| XPOS | not available |
| Features | annotated manually, natively in UD style |
| Relations | annotated manually, natively in UD style |

## Description

Publicly available subset of the IAHLT UD Hebrew Treebank's Wikipedia section (https://www.iahlt.org/)



The UD Hebrew-IAHLTWiki treebank consists of 5,000 contemporary Hebrew sentences representing a variety of texts originating from Wikipedia entries, compiled by the [Israeli Association of Human Language Technology](https://www.iahlt.org/). It includes various text domains, such as: biography, law, finance, health, places, events and miscellaneous. The schema for the UD Hebrew-IAHLT treebank, from which the publicly available UD Hebrew-IAHLTWiki subset is derived, is based on the conversion of the Hebrew Treebank (HTB) into the latest UD V2 and is checked against the Universal Dependencies validator as of UD release V2.10, in addition to a range of additional validations using the grewv tool.

The HTB version used in the project was initially converted automatically, then a subset of the converted data was manually validated and adopted as a gold standard for training the model for UD parsing used in Hebrew-IAHLT. The entire parsed data has been manually edited to correct parsing errors, and was automatically QA'ed to apply corrections following updates in the schema.

## Acknowledgments

We would like to thank all the people who contributed to this corpus: Amir Zeldes, Hilla Merhav, Israel Landau, Netanel Dahan, Nick Howell, Noam Ordan, Omer Strass, Shira Wigderson, Yael Minerbi, Yifat Ben Moshe

## References

To cite this dataset please refer to the following paper:

Zeldes, Amir, Nick Howell, Noam Ordan and Yifat Ben Moshe (2022) [A Second Wave of UD Hebrew Treebanking and Cross-Domain Parsing](https://arxiv.org/abs/2210.07873). In: *Proceedings of EMNLP 2022*. Abu Dhabi, UAE.

```
@InProceedings{ZeldesHowellOrdanBenMoshe2022,
author = {Amir Zeldes and Nick Howell and Noam Ordan and Yifat Ben Moshe},
booktitle = {Proceedings of {EMNLP} 2022},
title = {A SecondWave of UD Hebrew Treebanking and Cross-Domain Parsing},
year = {2022},
address = {Abu Dhabi, UAE},
}
```



# Statistics of UD Hebrew IAHLTwiki

## POS Tags

[ADJ](he_iahltwiki-pos-ADJ.html) – [ADP](he_iahltwiki-pos-ADP.html) – [ADV](he_iahltwiki-pos-ADV.html) – [AUX](he_iahltwiki-pos-AUX.html) – [CCONJ](he_iahltwiki-pos-CCONJ.html) – [DET](he_iahltwiki-pos-DET.html) – [INTJ](he_iahltwiki-pos-INTJ.html) – [NOUN](he_iahltwiki-pos-NOUN.html) – [NUM](he_iahltwiki-pos-NUM.html) – [PRON](he_iahltwiki-pos-PRON.html) – [PROPN](he_iahltwiki-pos-PROPN.html) – [PUNCT](he_iahltwiki-pos-PUNCT.html) – [SCONJ](he_iahltwiki-pos-SCONJ.html) – [SYM](he_iahltwiki-pos-SYM.html) – [VERB](he_iahltwiki-pos-VERB.html) – [X](he_iahltwiki-pos-X.html)

## Features

[Abbr](he_iahltwiki-feat-Abbr.html) – [Aspect](he_iahltwiki-feat-Aspect.html) – [Case](he_iahltwiki-feat-Case.html) – [Definite](he_iahltwiki-feat-Definite.html) – [Foreign](he_iahltwiki-feat-Foreign.html) – [Gender](he_iahltwiki-feat-Gender.html) – [HebBinyan](he_iahltwiki-feat-HebBinyan.html) – [Mood](he_iahltwiki-feat-Mood.html) – [Number](he_iahltwiki-feat-Number.html) – [NumType](he_iahltwiki-feat-NumType.html) – [Person](he_iahltwiki-feat-Person.html) – [Polarity](he_iahltwiki-feat-Polarity.html) – [Poss](he_iahltwiki-feat-Poss.html) – [Prefix](he_iahltwiki-feat-Prefix.html) – [PronType](he_iahltwiki-feat-PronType.html) – [Reflex](he_iahltwiki-feat-Reflex.html) – [Tense](he_iahltwiki-feat-Tense.html) – [Typo](he_iahltwiki-feat-Typo.html) – [VerbForm](he_iahltwiki-feat-VerbForm.html) – [VerbType](he_iahltwiki-feat-VerbType.html) – [Voice](he_iahltwiki-feat-Voice.html)

## Relations

[acl](he_iahltwiki-dep-acl.html) – [acl:relcl](he_iahltwiki-dep-acl-relcl.html) – [advcl](he_iahltwiki-dep-advcl.html) – [advmod](he_iahltwiki-dep-advmod.html) – [amod](he_iahltwiki-dep-amod.html) – [appos](he_iahltwiki-dep-appos.html) – [aux](he_iahltwiki-dep-aux.html) – [case](he_iahltwiki-dep-case.html) – [cc](he_iahltwiki-dep-cc.html) – [ccomp](he_iahltwiki-dep-ccomp.html) – [compound](he_iahltwiki-dep-compound.html) – [compound:affix](he_iahltwiki-dep-compound-affix.html) – [conj](he_iahltwiki-dep-conj.html) – [cop](he_iahltwiki-dep-cop.html) – [csubj](he_iahltwiki-dep-csubj.html) – [csubj:outer](he_iahltwiki-dep-csubj-outer.html) – [csubj:pass](he_iahltwiki-dep-csubj-pass.html) – [dep](he_iahltwiki-dep-dep.html) – [det](he_iahltwiki-dep-det.html) – [discourse](he_iahltwiki-dep-discourse.html) – [dislocated](he_iahltwiki-dep-dislocated.html) – [expl](he_iahltwiki-dep-expl.html) – [fixed](he_iahltwiki-dep-fixed.html) – [flat](he_iahltwiki-dep-flat.html) – [goeswith](he_iahltwiki-dep-goeswith.html) – [list](he_iahltwiki-dep-list.html) – [mark](he_iahltwiki-dep-mark.html) – [nmod](he_iahltwiki-dep-nmod.html) – [nmod:npmod](he_iahltwiki-dep-nmod-npmod.html) – [nmod:poss](he_iahltwiki-dep-nmod-poss.html) – [nmod:tmod](he_iahltwiki-dep-nmod-tmod.html) – [nsubj](he_iahltwiki-dep-nsubj.html) – [nsubj:outer](he_iahltwiki-dep-nsubj-outer.html) – [nsubj:pass](he_iahltwiki-dep-nsubj-pass.html) – [nummod](he_iahltwiki-dep-nummod.html) – [obj](he_iahltwiki-dep-obj.html) – [obl](he_iahltwiki-dep-obl.html) – [obl:npmod](he_iahltwiki-dep-obl-npmod.html) – [obl:tmod](he_iahltwiki-dep-obl-tmod.html) – [orphan](he_iahltwiki-dep-orphan.html) – [parataxis](he_iahltwiki-dep-parataxis.html) – [punct](he_iahltwiki-dep-punct.html) – [reparandum](he_iahltwiki-dep-reparandum.html) – [root](he_iahltwiki-dep-root.html) – [vocative](he_iahltwiki-dep-vocative.html) – [xcomp](he_iahltwiki-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 5039 sentences, 103390 tokens and 140950 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 17847 tokens (17%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 322 types of words that contain both letters and punctuation. Examples: אונר"א, או"ם, מק"ם, צה"ל, בג"ץ, דו"ח, מעו"ף, ש"ח, ד"ר, מז'ור, פרופ', ג'ון, נ"ט, צ'רצ'ילים, ק"מ, א"י, חו"ל, mg/dl, אצ"ל, יו"ר, ע"פ, צ'יין, ג'ודו, ג'ודוקא, ח"כ, מנכ"ל, עות'מאנית, ק"ג, יענקל'ה, מח"ט, מפ"ם, עו"ד, פק"ם, תנ"ך, 236ב1(ב, אברג'יל, ב', ד', ה', חר"ג, יש"ע, עות'מאני, ABA', ABABA', אברמוביץ', אולארצ'יק, ג', ג'וחדר, ג'יימס, דו"חות</li>
</ul>

<ul>
<li>This corpus contains 34686 multi-word tokens. On average, one multi-word token consists of 2.08 syntactic words.</li>
<li>There are 13067 types of multi-word tokens. Examples: המשפט, בשנת, העליון, הראשון, בו, בישראל, בבית, הוועדה, הבנקים, הכנסת, באופן, המדינה, באותה, בשם, המנדט, במהלך, הכנסייה, האלבום, מסוג, היהודי, וכן, השיר, בדם, הברית, בארץ, הקבר, הממשלה, החוק, העולם, שלא, באזור, בה, ושומרון, הבריטי, המאה, שבו, ולא, הארץ, שלו, אותו, הבנק, הבריטים, החולים, הראשונה, השופט, לכך, באלבום, בסוף, ועל, לו.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 16 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a>, <a>X</a></li>
<li>This corpus does not use the following tags: PART</li>
</ul>

<ul>
</ul>

<ul>
<li>This corpus contains 33 lemmas tagged as pronouns (PRON): You, Your, ַזֶּה, אותה, אותו, איזה, אילו, אלה, אנוכי, דם, דנן, ה, הוא, הלה, הללו, ו, זה, זהו, כולו, כך, כלשהו, כמה, כן, לה, מה, מי, מישהו, משהו, נאום, ספר, עלי, עצמו, ערך</li>
</ul>

<ul>
<li>This corpus contains 37 lemmas tagged as determiners (DET): a, the, ְהַ, א, איזה, אילו, אל, אף, ב, ה, הַ, הָ, הוא, הרבה, יותר, יתר, כול, כולו, כל, כלל, כמה, כמות, לא, לה, מדי, מחצית, מיטב, מירב, מספיק, מספר, מעט, מרבית, עוד, רוב, שאר, שום, שורה</li>
</ul>

<ul>
<li>Out of the above, 7 lemmas occurred sometimes as PRON and sometimes as DET: איזה, אילו, ה, הוא, כולו, כמה, לה</li>
</ul>

<ul>
<li>This corpus contains 16 lemmas tagged as auxiliaries (AUX): אינו, אמור, היה, זכאי, חייב, יכל, מוכן, מוכרח, מועד, מסוגל, עלול, עשוי, עתיד, צפוי, צריך, רשאי</li>
</ul>

<ul>
<li>Out of the above, 8 lemmas occurred sometimes as AUX and sometimes as VERB: אמור, היה, זכאי, חייב, יכל, מוכן, עשוי, צריך</li>
</ul>

<ul>
<li>There are 2 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: להיות</li>
    <li>VERB: לקבל, לגרום, למנוע, לבצע, ליצור, להופיע, לתת, למצוא, לאפשר, לדון</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>AUX: יכול, אינה, אינו, יכולה, אינם, יכולים, אינן, איננו, איננה, יכולות</li>
    <li>VERB: ניתן, כולל, מדובר, מהווה, מכונה, נמצא, נראה, עולה, גורם, נמצאים</li>
  </ul>
  </li>
</ul>

<h3>Nominal Features</h3>


<ul>
  <li><a>Gender</a></li>
</ul>

<ul>
  <li>Fem
    <ul>
      <li>ADJ: ראשונה, ישראלית, שונות, רבות, שנייה, מערבית, יהודית, חדשה, אחרות, פלסטינית</li>
      <li>AUX: הייתה, אינה, היו, יכולה, תהיה, אינן, איננה, עלולה, עשויה, תוכל</li>
      <li>AUX-Part: אינה, יכולה, אינן, איננה, יכול, יכולות, צפויה, תוכל</li>
      <li>DET: כמות, מחצית</li>
      <li>NOUN: שנת, ידי, סוכרת, שנים, כנסייה, שנה, ארץ, שנות, מדינה, וועדה</li>
      <li>NUM: שתי, אחת, שלוש, מאה, ארבע, מאות, עשרות, חמש, שלושים, אחדות</li>
      <li>PRON: ה, היא, זו, הן, זאת, אותה, ן, אלו, עצמה, ך</li>
      <li>PROPN: מכפלה, מערת, חירות, כנסיית, ועדת, חטיבה, קפלת, בורסה, ברית, חקיקה</li>
      <li>VERB: החלה, הוקמה, נערכה, הגיעה, הייתה, כללה, החליטה, מהווה, ביצעה, קיבלה</li>
      <li>VERB-Part: מהווה, נמצאת, משמשת, גורמת, גורמות, מכילה, עולה, עומדת, כוללת, מיועדת</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Fem,Masc
    <ul>
      <li>AUX: היו, יהיו</li>
      <li>NOUN: פני</li>
      <li>NUM: שלושים, ארבעים</li>
      <li>PRON: אלו, אני, י, נו, עצמי</li>
      <li>VERB: החלו, נערכו, עמדו, הגיעו, טענו, החזיקו, הפכו, הראו, השתתפו, יצטרכו</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: עליון, ראשון, נוסף, רבים, יהודי, שונים, אחרים, גרעיני, בריטי, ישראלי</li>
      <li>AUX: היה, היו, אינו, אינם, יכול, יהיה, יכולים, עלול, איננו, צריך</li>
      <li>AUX-Part: אינו, יכול, אינם, יכולים, איננו, מוכנה, רשאי</li>
      <li>DET: שאר, מספר, כולם</li>
      <li>NOUN: בית, משפט, חוק, אלבום, חלק, שימוש, שיר, פי, דם, שירים</li>
      <li>NUM: אחד, שני, מיליון, שלושה, ארבעה, חמישה, שניים, ששת, חצי, אלף</li>
      <li>PRON: ו, הם, ם, הוא, זה, אלה, אלו, אותו, עצמו, נו</li>
      <li>PROPN: בנק, אמפטמין, אדם, אוצר, מעו"ף, כבוד, קבר, ילדי, ניירות, ערך</li>
      <li>SYM: %, =</li>
      <li>VERB: ניתן, כתב, הלחין, יצא, זכה, החל, כולל, היו, כלל, נמצא</li>
      <li>VERB-Inf: נוגע</li>
      <li>VERB-Part: ניתן, כולל, מדובר, נמצא, נראה, מכונה, גורם, נמצאים, כוללים, משמש</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Dual
    <ul>
      <li>NOUN: שנתיים, יומיים, שעתיים, פעמיים, שניים, דלתיים, חודשיים, טעמי, שבועיים</li>
      <li>NUM: שני</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: רבים, שונים, אחרים, נוספים, שונות, רבות, אחרות, חדשים, גדולים, חדשות</li>
      <li>AUX: היו, אינם, יכולים, אינן, עלולים, יהיו, יכלו, צריכים, יכולות, עלולות</li>
      <li>AUX-Part: אינם, יכולים, אינן, יכולות</li>
      <li>DET: כולם</li>
      <li>NOUN: ידי, שנים, שירים, ילדים, בנקים, שנות, חולים, תרופות, יהודים, חברי</li>
      <li>NUM: מאות, עשרות, שתי, אלפי, שני, מאה, שלוש, שלושה, שניים, עשרה</li>
      <li>PRON: הם, ם, הן, אלו, אלה, ן, נו, עצמם, הללו, אותם</li>
      <li>PROPN: ילדי, ניירות, ארצות, פועלים, ימי, יהודים, ימים, כלניות, מריות, נגידי</li>
      <li>SYM: %</li>
      <li>VERB: היו, החלו, הגיעו, קיבלו, טענו, פעלו, השתתפו, נכללו, נמצאו, המשיכו</li>
      <li>VERB-Part: נמצאים, כוללים, סובלים, טוענים, גורמות, גורמים, מצביעים, כוללות, מייצרים, משפיעים</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Plur,Sing
    <ul>
      <li>NOUN: %</li>
      <li>SYM: %</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: עליון, ראשון, נוסף, יהודי, גרעיני, ראשונה, ישראלית, בריטי, ישראלי, קצר</li>
      <li>AUX: היה, הייתה, אינו, אינה, יכול, יכולה, יהיה, תהיה, עלול, צריך</li>
      <li>AUX-Part: יכול, אינה, אינו, יכולה, איננו, איננה, מוכנה, צפויה, רשאי, תוכל</li>
      <li>DET: מספר, כמות, מחצית</li>
      <li>NOUN: בית, שנת, משפט, חוק, אלבום, חלק, שימוש, סוכרת, שיר, דם</li>
      <li>NUM: אחד, אחת, מיליון, אלף, חצי, מאה, מיליארד, ארבעה, עשר, עשרת</li>
      <li>PRON: ו, ה, הוא, זה, היא, זו, זאת, אותה, י, אותו</li>
      <li>PROPN: בנק, אמפטמין, מכפלה, מערת, אדם, אוצר, מעו"ף, חירות, כבוד, קבר</li>
      <li>SYM: %, =</li>
      <li>VERB: ניתן, כתב, הלחין, יצא, זכה, החל, כולל, כלל, נמצא, החלה</li>
      <li>VERB-Inf: נוגע</li>
      <li>VERB-Part: ניתן, כולל, מדובר, מהווה, מכונה, נמצא, נראה, עולה, גורם, משמש</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>ADP: את, אות, אֶת, אֹת, של</li>
      <li>PRON: ו, אותה, ם, אותו, ה, ני, הו, וֹ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>ADP: של</li>
      <li>PRON: ו, ה, ם, הם, ן, הן, י, נו, ך, הּ</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Cons
    <ul>
      <li>ADJ: חסר, בן, בעלי, בני, בעלת, דלת, בעל, חסרי, קצר, ארוכי</li>
      <li>DET: כל, רוב, מספר, כמה, מרבית, כלל, שאר, הרבה, יתר, שום</li>
      <li>NOUN: בית, שנת, ידי, פי, שנות, סוג, חוק, בתי, חברי, ראש</li>
      <li>NUM: שני, שתי, ששת, אלפי, שלוש, שלושת, אחד, עשרות, מאות, אחת</li>
      <li>PROPN: ארץ, מלחמת, כנסיית, בנק, ארצות, מערת, קפלת, תל, בית, ועדת</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>ADP: ב, ל, כ, אות</li>
      <li>DET: ה, אל, הַ, ְהַ, א, ב, הָ, כולם, לה</li>
      <li>PRON: ו, ה, ם, אותה, הם, ן, אותו, הן, י, נו</li>
    </ul>
  </li>
</ul>

<h3>Degree and Polarity</h3>



<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>ADV: לא, אי, בלתי, אין</li>
      <li>AUX: אינו, אינה, אינם, אינן, איננו, איננה, אינך</li>
      <li>AUX-Part: אינה, אינו, אינם, אינן, איננו, איננה</li>
      <li>VERB: אין</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>AUX: היה, היו, הייתה, להיות, תהיה, יהיה, הייתי, יהיו, היינו, תהיינה</li>
      <li>AUX-Inf: להיות</li>
      <li>PRON: הוא, היא, הם, הן, י, ם</li>
      <li>VERB: יש, היו, היה, הייתה, ישנם, ישנה, ישנו, ישנן, יהיו, להיות</li>
      <li>VERB-Inf: להיות</li>
    </ul>
  </li>
</ul>


<h3>Verbal Features</h3>


<ul>
  <li><a>Aspect</a></li>
</ul>

<ul>
  <li>Prog
    <ul>
      <li>VERB: ניתן, פוגעת, גורם, גורמים, דורכת, הולכת, הסעירה, ידוע, כותבים, כרוכה</li>
      <li>VERB-Part: ניתן, פוגעת, גורם, גורמים, דורכת, הולכת, ידוע, כותבים, כרוכה, מאפשרת</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>VERB: סע, ראו, צא, הכניסי, עוף, קח, שמור, בואו, בואי, האר</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>AUX: יהיה, תהיה, יהיו, תוכל, יוכל, יוכלו, תהא, אהיה, יָוכְלוּ, יהא</li>
      <li>AUX-Part: תוכל</li>
      <li>VERB: יהיה, תשלם, יאפשר, יהיו, ייתכן, יקבלו, ישלמו, תוביל, תכניס, יפעיל</li>
      <li>VERB-Part: תלויה</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX: היה, היו, הייתה, הייתי, יכלו, היינו, יָכְלוּ, יכול, יכלה</li>
      <li>VERB: כתב, הלחין, יצא, זכה, החל, היו, החלו, כלל, החלה, הוציא</li>
      <li>VERB-Part: אוהב, גונח, גורמים, ידוע, כותבים, כרוכה, מהווה, מוכר, מופקדת, מותש</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX: אינו, אינם, יכולים, יכול, יכולה, אינה, אינן, איננו, איננה, מוכנה</li>
      <li>AUX-Part: יכולה, יכולים, מוכנה, צפויה</li>
      <li>VERB: ניתן, כולל, מדובר, מהווה, מכונה, נמצא, נראה, עולה, גורם, נמצאים</li>
      <li>VERB-Inf: נוגע</li>
      <li>VERB-Part: ניתן, כולל, מדובר, מהווה, מכונה, נמצא, נראה, עולה, גורם, נמצאים</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Act
    <ul>
      <li>VERB: כתב, הלחין, יצא, זכה, החל, כולל, החלו, כלל, החלה, הוציא</li>
      <li>VERB-Inf: לקבל, לגרום, למנוע, לבצע, ליצור, לתת, למצוא, לאפשר, לדון, להביא</li>
      <li>VERB-Part: כולל, מהווה, עולה, גורם, כוללים, סובלים, משמש, משמשת, מתאר, פוגע</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Mid
    <ul>
      <li>VERB: נמצא, נקרא, נראה, נערכה, נעשה, נחשב, נכללו, נמצאים, נוצר, להימנע</li>
      <li>VERB-Inf: להימנע, להיות, להתגבר, להתפתח, להופיע, להיוועץ, להיכנס, להימשך, להיעשות, להשתתף</li>
      <li>VERB-Part: נמצא, נראה, נמצאים, נמצאת, נחשב, נוסף, נחשבת, נקרא, נקראת, מתגוררים</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>VERB: ניתן, מדובר, הוקמה, מכונה, נקבע, נעשה, הוקם, בוצעו, בוצע, נערך</li>
      <li>VERB-Inf: להיעשות, להילקח, להינתן, להחשב, להיבחר, להידחות, להידרש, להילמד, להימכר, להיעבר</li>
      <li>VERB-Part: ניתן, מדובר, מכונה, דרוש, מוטל, מוקדשת, מזוהה, מיועדת, מתוארים, אמור</li>
    </ul>
  </li>
</ul>


<h3>Pronouns, Determiners, Quantifiers</h3>


<ul>
  <li><a>PronType</a></li>
</ul>

<ul>
  <li>Art
    <ul>
      <li>ADP: ב, ל, כ, אות</li>
      <li>DET: ה, אל, הַ, ְהַ, א, ב, הָ, לה</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>PRON: זה, זו, זאת, כך, אלו, כן, אלה, הללו, זהו, זוהי</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Emp
    <ul>
      <li>PRON: עצמו, עצמה, עצמם, כולה, עצמך, עצמן, עצמי</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>PRON: כלשהו, כלשהי, כלשהם, כלשהן, כמה, מה, מישהו, משהו</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>ADV: כיצד, כמה, האם, למה, מדוע</li>
      <li>PRON: מה, מי, אילו, מהו, מהם</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>PRON: ו, ה, הם, ם, הוא, היא, הן, אותה, ן, י</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: שני, אחד, שתי, אחת, שלושה, שלוש, מיליון, ארבע, ארבעה, חמישה</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>ADJ: ראשון, ראשונה, שני, שנייה, 20, חמישית, שלישי, 19, רביעי, ראשונות</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>PRON: ו, ה, ם, הם, ן, הן, י, נו, ך, הּ</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>PRON: עצמו, עצמה, עצמם, עצמך, עצמן, אותה, עצמי, עצמנו</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX: הייתי, איננו, אהיה, היינו, נהיה</li>
      <li>PRON: י, נו, אני, אנחנו, ני, אנו, אנוכי, עצמי, עצמנו</li>
      <li>VERB: טענו, אוהב, מרגיש, נתנו, רואה, אהבנו, אמרתי, הלכתי, יצאנו, כיהנו</li>
      <li>VERB-Part: אוהב, מרגיש, רואה, מתגעגע, עומדת, רוצים, אוכלים, זוכרים, מאירה, מבין</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX: אינך</li>
      <li>PRON: ך, אתה, את, ה, ךָ, כם, עצמך</li>
      <li>VERB: סע, ראו, נחתם, באת, צא, בוכה, הכניסי, ירשת, נתן, עוף</li>
      <li>VERB-Part: בוכה, דורכת, הולכת, יודעת, יכולה, מופקדת, מורכבת, עושה, קם</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX: היה, היו, הייתה, אינו, אינם, אינה, יהיה, יכול, תהיה, יהיו</li>
      <li>AUX-Part: יכול, יכולה, אינה, אינו, אינם, יכולים, מוכנה, צפויה, תוכל</li>
      <li>PRON: ו, ה, הם, ם, הוא, זה, היא, זו, הן, זאת</li>
      <li>VERB: ניתן, כתב, הלחין, יצא, זכה, החל, היו, החלו, כולל, כלל</li>
      <li>VERB-Inf: נוגע</li>
      <li>VERB-Part: ניתן, כולל, מדובר, מהווה, מכונה, נמצא, נראה, עולה, גורם, נמצאים</li>
    </ul>
  </li>
</ul>




<h3>Other Features</h3>


<ul>
  <li><a>Abbr</a>
    <ul>
      <li>Yes
        <ul>
          <li>ADJ: א"י, נ"ל, אי"ת, להט"בים, להט"בית, לפנה"ס, צה"לי, תנ"כי</li>
          <li>ADP: נ', ע"פ, ע"ש</li>
          <li>ADV: לפנה"ס</li>
          <li>NOUN: מק"ם, דו"ח, ש"ח, בג"ץ, נ"ט, ק"מ, חו"ל, ד"ר, יו"ר, מנכ"ל</li>
          <li>PROPN: אונר"א, או"ם, צה"ל, אצ"ל, מעו"ף, א"י, חר"ג, יש"ע, לח"י, בג"ץ</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Foreign</a>
    <ul>
      <li>Yes
        <ul>
          <li>X: the, District, Pottery, אלגרו, Allegro, Bank, Commissioner, Palestine, Penicillium, Studio</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>HebBinyan</a>
    <ul>
      <li>HIFIL
        <ul>
          <li>VERB: הלחין, החל, החלו, החלה, הוציא, הגיעו, הגיע, הקליט, הגיעה, הביא</li>
          <li>VERB-Inf: להופיע, להביא, להגיע, להמשיך, להעביר, להעניק, להוסיף, להחזיר, להרחיב, להשקיע</li>
          <li>VERB-Part: מגיע, מופיע, מציג, מכילה, מצביעים, מביא, מוביל, מכיל, משפיעים, מביאה</li>
        </ul>
      </li>
      <li>HITPAEL
        <ul>
          <li>VERB: השתתף, השתתפו, להשתמש, התנגדו, התברר, התקבלה, הצטרף, הצטרפו, התבטא, התפרסם</li>
          <li>VERB-Inf: להשתמש, להתגבר, להשתתף, להתמודד, להתפלל, להתרחש, להשתלט, להתפתח, להתקדם, להתקיים</li>
          <li>VERB-Part: מתבצע, משתנה, מתחייב, מתייחסת, משתמש, מתגוררים, מתקיימות, מתרחש, מסתיימת, מצטבר</li>
        </ul>
      </li>
      <li>HUFAL
        <ul>
          <li>VERB: הוקמה, הוקם, הוצגו, הושגו, הוחלט, הועברו, הוגשו, הועלה, הוקמו, מוטל</li>
          <li>VERB-Part: מוטל, מוקדשת, מורכב, מופרש, מורכבת, מוצגת, מוקדש, מוגדר, מוזכר, מוזרם</li>
        </ul>
      </li>
      <li>NIFAL
        <ul>
          <li>VERB: ניתן, נמצא, נקבע, נעשה, נערכה, נקרא, נערך, נראה, נחשב, נאמר</li>
          <li>VERB-Inf: להימנע, להיוועץ, להיכנס, להיעשות, לגשת, להחשב, להילחם, להילקח, להימשך, להינתן</li>
          <li>VERB-Part: ניתן, נמצא, נראה, נמצאים, נחשב, נמצאת, נקראת, נוסף, נחשבת, ניתנים</li>
        </ul>
      </li>
      <li>NITPAEL
        <ul>
          <li>VERB: נתגלו, נתגלתה, נתקבלה, להתעניין, משתמע, נשתמר, נתברר, נתקבלו</li>
          <li>VERB-Inf: להתעניין</li>
          <li>VERB-Part: משתמע</li>
        </ul>
      </li>
      <li>PAAL
        <ul>
          <li>AUX: היה, היו, הייתה, להיות, יהיה, תהיה, הייתי, יהיו, היות, תהא</li>
          <li>AUX-Inf: להיות</li>
          <li>VERB: כתב, יצא, זכה, היו, כולל, כלל, היה, שר, אמר, טען</li>
          <li>VERB-Inf: לגרום, למנוע, ליצור, לתת, למצוא, לדון, לעמוד, לעשות, לכתוב, לפגוע</li>
          <li>VERB-Part: כולל, עולה, גורם, כוללים, סובלים, פוגע, גורמת, טוענים, קובע, חוזר</li>
        </ul>
      </li>
      <li>PIEL
        <ul>
          <li>VERB: ניצח, לקבל, מהווה, קיבל, פרסם, קיבלו, שימש, לבצע, תיאר, ביצעה</li>
          <li>VERB-Inf: לקבל, לבצע, לאפשר, לשלם, לקיים, לסייע, לשמש, לחוקק, לטפל, לנהל</li>
          <li>VERB-Part: מהווה, משמש, משמשת, מתאר, מסמל, מאפשר, מייצרים, מכהנים, מציין, מציינת</li>
        </ul>
      </li>
      <li>PUAL
        <ul>
          <li>VERB: מדובר, מכונה, בוצעו, בוצע, כונה, מונתה, פורסם, מונה, מיועדת, בוצעה</li>
          <li>VERB-Inf: לחוקק</li>
          <li>VERB-Part: מדובר, מכונה, מיועדת, מזוהה, מתוארים, מבוסס, מתוארכת, מתואר, מבוססת, מחולקת</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Prefix</a>
    <ul>
      <li>Yes
        <ul>
          <li>ADV: אי, בלתי, בטא, גראם, פוסט, תת, דו, בינ, דה, קדם</li>
          <li>NUM: 6, ה</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Typo</a>
    <ul>
      <li>Yes
        <ul>
          <li>ADJ: אורינטליסטית, אמריקני, מונומטאלי, מזרחית, מינהלית, מקומית, עולמי, קשה, ששית</li>
          <li>ADP: אחר, לפני, עמ</li>
          <li>ADV: מיד, מינהלית, מספיקות</li>
          <li>AUX: הייתה, היה, אמור</li>
          <li>CCONJ: אלה</li>
          <li>DET: ב</li>
          <li>NOUN: כל, לדה, מסים, מעין, נייטרון, נייטרליות, צד, אב, אמר, דוחו"ת</li>
          <li>NUM: ארבע</li>
          <li>PRON: הם, זה, אותם, ה, ו, ם, ן</li>
          <li>PROPN: דפטריה, קרית</li>
          <li>PUNCT: '</li>
          <li>VERB: איפשר, איפשרה, איפשרו, אירע, בוצע, הגיע, הובהר, הופרדה, היקנו, יאלצו</li>
          <li>VERB-Part: מעידה, מקנה, נתמך</li>
          <li>X: א</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>VerbType</a>
    <ul>
      <li>Cop
        <ul>
          <li>AUX: היה, הייתה, היו, תהיה, יהיה, להיות, יהיו, אינה, אינו, הייתי</li>
          <li>AUX-Inf: להיות</li>
        </ul>
      </li>
      <li>Mod
        <ul>
          <li>AUX: יכולים, יכולה, יכול, תוכל, עלול, עלולים, צריך, מוכן, מסוגלת, עשויה</li>
          <li>AUX-Part: יכולה, יכולים, יכול, צפויה, רשאי</li>
          <li>VERB: ניתן, אפשר, יש, ייתכן, אין, אסור, זכאים, יכול, ניתנות, צריך</li>
          <li>VERB-Part: ניתן, יכול, ניתנות</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 4 lemmas as copulas (<a>cop</a>). Examples: היה, הוא, אינו, זה.</li>
</ul>

<ul>
<li>This corpus uses 16 lemmas as auxiliaries (<a>aux</a>). Examples: אינו, יכל, היה, עלול, צריך, עשוי, אמור, רשאי, מסוגל, מוכן, צפוי, חייב, זכאי, מוכרח, מועד, עתיד.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (2264)</li>
      <li>VERB--NOUN-ADP(את) (3)</li>
      <li>VERB--NOUN-ADP(מ) (1)</li>
      <li>VERB--NOUN-ADP(משום) (1)</li>
      <li>VERB--PRON (217)</li>
      <li>VERB-Inf--NOUN (115)</li>
      <li>VERB-Inf--PRON (19)</li>
      <li>VERB-Part--NOUN (820)</li>
      <li>VERB-Part--PRON (159)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (758)</li>
      <li>VERB--NOUN-ADP(אֶת) (1)</li>
      <li>VERB--NOUN-ADP(את) (571)</li>
      <li>VERB--NOUN-ADP(ב) (1)</li>
      <li>VERB--NOUN-ADP(יותר) (1)</li>
      <li>VERB--NOUN-ADP(כמו)-ADP(את) (1)</li>
      <li>VERB--NOUN-ADP(ל) (1)</li>
      <li>VERB--NOUN-ADP(מ) (2)</li>
      <li>VERB--PRON (13)</li>
      <li>VERB--PRON-ADP(את) (70)</li>
      <li>VERB--PRON-Acc (7)</li>
      <li>VERB--PRON-Acc-ADP(יד) (1)</li>
      <li>VERB--PRON-Gen-ADP(את) (2)</li>
      <li>VERB-Inf--NOUN (354)</li>
      <li>VERB-Inf--NOUN-ADP(את) (349)</li>
      <li>VERB-Inf--NOUN-ADP(את)-ADP(כ) (1)</li>
      <li>VERB-Inf--PRON (21)</li>
      <li>VERB-Inf--PRON-ADP(את) (31)</li>
      <li>VERB-Inf--PRON-Acc (29)</li>
      <li>VERB-Part--NOUN (304)</li>
      <li>VERB-Part--NOUN-ADP(את) (238)</li>
      <li>VERB-Part--NOUN-ADP(ל) (1)</li>
      <li>VERB-Part--NOUN-ADP(מ) (1)</li>
      <li>VERB-Part--PRON (13)</li>
      <li>VERB-Part--PRON-ADP(את) (33)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
    </ul>
  </li>
</ul>



<h3>Verbs with Reflexive Core Objects</h3>

<ul>
  <li>This corpus contains 11 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: העמיד עצמו, הציג עצמו, הקריב עצמה, הקריב עצמו, חש עצמם, טמן עצמו, כיבד עצמה, מצא עצמו, מצא עצמם, שכפל עצמה, תפש עצמו</li>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 11 relation subtypes: <a>acl:relcl</a>, <a>compound:affix</a>, <a>csubj:outer</a>, <a>csubj:pass</a>, <a>nmod:npmod</a>, <a>nmod:poss</a>, <a>nmod:tmod</a>, <a>nsubj:outer</a>, <a>nsubj:pass</a>, <a>obl:npmod</a>, <a>obl:tmod</a></li>
<li>The following 2 relation types are not used in this corpus at all: <a>iobj</a>, <a>clf</a></li>
</ul>
