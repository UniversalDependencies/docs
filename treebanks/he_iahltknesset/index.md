---
layout: base
title:  'UD_Hebrew-IAHLTknesset'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Hebrew IAHLTknesset

Language: [Hebrew](/he/index.html) (code: `he`)<br/>
Family: Afro-Asiatic

This treebank has been part of Universal Dependencies since the UD v2.15 release.

The following people have contributed to making this treebank part of UD: Amir Zeldes, Avner Algom, Noam Ordan, Yifat Ben Moshe, Nick Howell, Shira Wigderson, Omer Strass, Israel Landau, Netanel Dahan, Yael Minerbi, Hilla Merhav, Emmanuelle Kowner, Shuli Wintner, Gili Goldin, Ella Rabinovhich, Vladimir Gurevich.

Repository: [UD_Hebrew-IAHLTknesset](https://github.com/UniversalDependencies/UD_Hebrew-IAHLTknesset)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udhe_iahltknesset215)<br />
Download all treebanks: [UD 2.15](/#download)

License: CC BY-SA 4.0

Genre: government, spoken

Questions, comments?
General annotation questions (either Hebrew-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Hebrew-IAHLTknesset/issues).
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

Publicly available IAHLT UD Hebrew Treebank's Knesset section (https://www.iahlt.org/)



UD_Hebrew-IAHLTknesset is a manually annotated UD Treebank of spoken Hebrew data, with approximately 67K words/2800 sentences taken from transcribed proceedings of the Israeli Parliament, the Knesset. The data contains a subset of sentences from the proceedings originally extracted for modeling factuality, and represent sometimes contiguous chunks of 100 parliament discussions, but not necessarily enitre or fully contiguous ones (see the document identifiers under `# newdoc id` annotations). Where possible, consecutive sentences are given in their original orders, but with possible gaps in the dialogue. Speaker names are provided as well.

## Compatible datasets

The HTB version used in the project was initially converted automatically, then a subset of the converted data was manually validated and adopted as a gold standard for training the model for UD parsing used in Hebrew-IAHLT. The entire parsed data has been manually edited to correct parsing errors, and was automatically QA'ed to apply corrections following updates in the schema. For a fork of UD_Hebrew-HTB (Ha'aretz newswire data) using the same annotation scheme, see:

https://github.com/IAHLT/UD_Hebrew

For an additional UD_Hebrew corpus with the same annotation scheme (Wikipedia articles), see:

https://github.com/UniversalDependencies/UD_Hebrew-IAHLTwiki

## NER annotations

The data additionally contains Named Entity annotations in the IAHLT scheme in the MISC annotation `Entity=`, illustrated in the following excerpt:

```CoNLL-U
## Acknowledgments

We would like to thank Gili Golden, Shuly Wintner, and Ella Rabinovich for making the original raw data available. We also thank all the people who contributed to this corpus: Amir Zeldes, Hilla Merhav, Israel Landau, Netanel Dahan, Nick Howell, Noam Ordan, Omer Strass, Shira Wigderson, Yael Minerbi and Yifat Ben Moshe.

## References

For academic citations of the IAHLT UD treebanks, please use:

Zeldes, Amir, Nick Howell, Noam Ordan and Yifat Ben Moshe (2022) [A Second Wave of UD Hebrew Treebanking and Cross-Domain Parsing](https://arxiv.org/abs/2210.07873). In: *Proceedings of EMNLP 2022*. Abu Dhabi, UAE, 4331-4344.

```bibtex
@InProceedings{ZeldesHowellOrdanBenMoshe2022,
author = {Amir Zeldes and Nick Howell and Noam Ordan and Yifat Ben Moshe},
booktitle = {Proceedings of {EMNLP} 2022},
title = {A Second Wave of {UD} {H}ebrew Treebanking and Cross-Domain Parsing},
year = {2022},
pages = {4331--4344},
address = {Abu Dhabi, UAE},
url = {https://aclanthology.org/2022.emnlp-main.292/},
}
```

For academic citations of the underlying Knesset corpus, please use:

Goldin, Gili, Nick Howell, Noam Ordan, Ella Rabinovich, and Shuly Wintner (2024) [The Knesset Corpus: An Annotated Corpus of Hebrew Parliamentary Proceedings](https://arxiv.org/abs/2405.18115).




# Statistics of UD Hebrew IAHLTknesset

## POS Tags

[ADJ](he_iahltknesset-pos-ADJ.html) – [ADP](he_iahltknesset-pos-ADP.html) – [ADV](he_iahltknesset-pos-ADV.html) – [AUX](he_iahltknesset-pos-AUX.html) – [CCONJ](he_iahltknesset-pos-CCONJ.html) – [DET](he_iahltknesset-pos-DET.html) – [INTJ](he_iahltknesset-pos-INTJ.html) – [NOUN](he_iahltknesset-pos-NOUN.html) – [NUM](he_iahltknesset-pos-NUM.html) – [PRON](he_iahltknesset-pos-PRON.html) – [PROPN](he_iahltknesset-pos-PROPN.html) – [PUNCT](he_iahltknesset-pos-PUNCT.html) – [SCONJ](he_iahltknesset-pos-SCONJ.html) – [SYM](he_iahltknesset-pos-SYM.html) – [VERB](he_iahltknesset-pos-VERB.html) – [X](he_iahltknesset-pos-X.html)

## Features

[Abbr](he_iahltknesset-feat-Abbr.html) – [Aspect](he_iahltknesset-feat-Aspect.html) – [Case](he_iahltknesset-feat-Case.html) – [Definite](he_iahltknesset-feat-Definite.html) – [Foreign](he_iahltknesset-feat-Foreign.html) – [Gender](he_iahltknesset-feat-Gender.html) – [HebBinyan](he_iahltknesset-feat-HebBinyan.html) – [Mood](he_iahltknesset-feat-Mood.html) – [Number](he_iahltknesset-feat-Number.html) – [NumType](he_iahltknesset-feat-NumType.html) – [Person](he_iahltknesset-feat-Person.html) – [Polarity](he_iahltknesset-feat-Polarity.html) – [Poss](he_iahltknesset-feat-Poss.html) – [Prefix](he_iahltknesset-feat-Prefix.html) – [PronType](he_iahltknesset-feat-PronType.html) – [Reflex](he_iahltknesset-feat-Reflex.html) – [Tense](he_iahltknesset-feat-Tense.html) – [Typo](he_iahltknesset-feat-Typo.html) – [VerbForm](he_iahltknesset-feat-VerbForm.html) – [VerbType](he_iahltknesset-feat-VerbType.html) – [Voice](he_iahltknesset-feat-Voice.html)

## Relations

[acl](he_iahltknesset-dep-acl.html) – [acl:relcl](he_iahltknesset-dep-acl-relcl.html) – [advcl](he_iahltknesset-dep-advcl.html) – [advmod](he_iahltknesset-dep-advmod.html) – [amod](he_iahltknesset-dep-amod.html) – [appos](he_iahltknesset-dep-appos.html) – [aux](he_iahltknesset-dep-aux.html) – [case](he_iahltknesset-dep-case.html) – [cc](he_iahltknesset-dep-cc.html) – [ccomp](he_iahltknesset-dep-ccomp.html) – [compound](he_iahltknesset-dep-compound.html) – [compound:affix](he_iahltknesset-dep-compound-affix.html) – [conj](he_iahltknesset-dep-conj.html) – [cop](he_iahltknesset-dep-cop.html) – [csubj](he_iahltknesset-dep-csubj.html) – [csubj:outer](he_iahltknesset-dep-csubj-outer.html) – [csubj:pass](he_iahltknesset-dep-csubj-pass.html) – [dep](he_iahltknesset-dep-dep.html) – [det](he_iahltknesset-dep-det.html) – [discourse](he_iahltknesset-dep-discourse.html) – [dislocated](he_iahltknesset-dep-dislocated.html) – [expl](he_iahltknesset-dep-expl.html) – [fixed](he_iahltknesset-dep-fixed.html) – [flat](he_iahltknesset-dep-flat.html) – [iobj](he_iahltknesset-dep-iobj.html) – [list](he_iahltknesset-dep-list.html) – [mark](he_iahltknesset-dep-mark.html) – [nmod](he_iahltknesset-dep-nmod.html) – [nmod:poss](he_iahltknesset-dep-nmod-poss.html) – [nmod:unmarked](he_iahltknesset-dep-nmod-unmarked.html) – [nsubj](he_iahltknesset-dep-nsubj.html) – [nsubj:outer](he_iahltknesset-dep-nsubj-outer.html) – [nsubj:pass](he_iahltknesset-dep-nsubj-pass.html) – [nummod](he_iahltknesset-dep-nummod.html) – [obj](he_iahltknesset-dep-obj.html) – [obl](he_iahltknesset-dep-obl.html) – [obl:unmarked](he_iahltknesset-dep-obl-unmarked.html) – [orphan](he_iahltknesset-dep-orphan.html) – [parataxis](he_iahltknesset-dep-parataxis.html) – [punct](he_iahltknesset-dep-punct.html) – [reparandum](he_iahltknesset-dep-reparandum.html) – [root](he_iahltknesset-dep-root.html) – [vocative](he_iahltknesset-dep-vocative.html) – [xcomp](he_iahltknesset-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 2883 sentences, 50499 tokens and 67007 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 8181 tokens (16%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 88 types of words that contain both letters and punctuation. Examples: צה"ל, ווד"לים, מע"מ, שיח', בג"ץ, חבר'ה, מנכ"ל, רמטכ"ל, ערוץ-7, ש"ס, שב"כ, אש"ף, א', ד"ר, דו"ח, ה', חו"ל, חל"ת, יו"ר, יש"ע, איו"ש, אל"ף, אלמ"בים, ב', בג"צים, ג'יהאד, כו', כנ"ר, ל"ג, מטכ"ל, מל"ג, ממ"ז, פרופ', צד"ל, תקש"ח, 120(ב)(2, vis-a-vis, אב"י, אי-מיילים, אל-חק, אלמ"ב, בית"ר, בית"רי, ג'ון, ג'סטות, גוז'נסקי, ד', דז'ה, ואל-חורייה, וות"ת</li>
</ul>

<ul>
<li>This corpus contains 15377 multi-word tokens. On average, one multi-word token consists of 2.07 syntactic words.</li>
<li>There are 6084 types of multi-word tokens. Examples: הכנסת, הזה, הזאת, הממשלה, אדוני, לי, ואני, היושב, ולא, להם, שיש, החוק, לנו, שלא, שהוא, שזה, בכל, וגם, האלה, לו, המדינה, הוועדה, אותו, שאני, שאנחנו, שהם, אותם, לכם, השר, בכנסת, לך, הדברים, שלנו, הציבור, שלו, וזה, בו, במדינת, שצריך, בנושא, בישראל, הזמן, היום, שאין, שלי, הבית, הדבר, היהודי, האוצר, החינוך.</li>
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
<li>This corpus contains 26 lemmas tagged as pronouns (PRON): אותו, איזה, איך, אינו, אנוכי, אני, אנכי, ה, הוא, הזה, היות, הינו, הללו, זה, זהו, י, יי, כולו, כך, כן, מה, מי, מישהו, מתי, עצמו, עצמכם</li>
</ul>

<ul>
<li>This corpus contains 22 lemmas tagged as determiners (DET): איזה, איזשהו, אף, ה, המון, הרבה, כול, כלל, כלשהו, כמה, לא, מדי, מין, מיני, מספיק, מספר, מעט, עוד, קצת, רוב, שאר, שום</li>
</ul>

<ul>
<li>Out of the above, 2 lemmas occurred sometimes as PRON and sometimes as DET: איזה, ה</li>
</ul>

<ul>
<li>This corpus contains 14 lemmas tagged as auxiliaries (AUX): אינו, איננו, אמור, היה, זכאי, חייב, יכל, מוכן, מוכרח, מסוגל, עלול, עשוי, עתיד, צריך</li>
</ul>

<ul>
<li>Out of the above, 5 lemmas occurred sometimes as AUX and sometimes as VERB: אמור, היה, חייב, יכל, צריך</li>
</ul>

<ul>
<li>There are 2 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: להיות</li>
    <li>VERB: לעשות, להיות, להגיד, לדבר, לומר, לתת, לראות, להגיע, לבוא, להביא</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>AUX: יכול, יכולים, יכולה, אינו, אינם, איננו, אינה, אינני, יכולות, צריך</li>
    <li>VERB: רוצה, אומר, חושב, יודע, רוצים, מדברים, יודעים, נמצאים, מדובר, מבקש</li>
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
      <li>ADJ: ראשונה, רבה, קודמת, גדולה, אחרת, מקומיות, אחרונות, ערבית, ציבורית, טובה</li>
      <li>AUX: היתה, הייתה, צריכה, יכולה, תהיה, אינה, היו, אמורה, הייתי, יכולות</li>
      <li>AUX-Part: יכולה, אינה, יכולות, איננה, אמורה, אינן, מוכנה, מוכרחה</li>
      <li>DET: איזו, איזושהי, כלשהי</li>
      <li>NOUN: ממשלה, מדינה, וועדה, מדינת, שנים, שנה, ידי, דרך, בעיה, פעם</li>
      <li>NUM: אחת, ארבע, שלוש, שתי, מאות, חמש, עשר, עשרות, שמונה, תשע</li>
      <li>PRON: ה, זאת, היא, אני, זו, הן, י, ן, אותה, את</li>
      <li>PROPN: קורונה, ועדת, כנסת, שבע, ארנונה, ארץ, באר, ברית, הגנה, הגנת</li>
      <li>VERB: אומרת, היתה, חושבת, הייתה, היו, תהיה, רוצה, יודעת, נמצאת, מבקשת</li>
      <li>VERB-Part: אומרת, חושבת, רוצה, יודעת, נמצאת, מבקשת, עומדת, פועלת, יושבת, מגיעה</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Fem,Masc
    <ul>
      <li>AUX: יוכלו</li>
      <li>NOUN: פני, אוכלוסייה, אנוש, טבע, ישע, סופ, עצם, פנים, ציפורי</li>
      <li>PRON: אני, י, נו, אנחנו, אלו, ך, עצמי</li>
      <li>VERB: אמרתי, באו, קיבלתי, שמעתי, אמרת, אסביר, דיברו, הבנו, נצליח, עשיתי</li>
      <li>VERB-Part: רוצה</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: חשוב, נכון, יהודי, גדול, טוב, שני, ראשון, אחרים, אחר, בר</li>
      <li>AUX: היה, יכול, צריך, צריכים, יכולים, יהיה, היו, הייתי, היינו, חייבים</li>
      <li>AUX-Part: יכול, יכולים, אינו, אינם, איננו, אינני, צריך, אינך, אמור, אמורים</li>
      <li>DET: איזשהו, איזושהי, איזשהם, אלו</li>
      <li>NOUN: ראש, חוק, דבר, יושב, חברי, שר, חבר, נושא, אדונ, דברים</li>
      <li>NUM: אחד, שני, אלפי, מיליון, שלושה, ארבעה, חצי, מיליארד, עשרה, שבעה</li>
      <li>PRON: זה, אני, ו, הם, הוא, אנחנו, י, נו, אתה, ם</li>
      <li>PROPN: לבן, קנאביס, כחול, בג"ץ, אוצר, בנק, בית, חוץ, חוק, ליכוד</li>
      <li>SYM: %</li>
      <li>VERB: צריך, רוצה, אומר, חושב, יודע, רוצים, מדברים, יודעים, היה, נמצאים</li>
      <li>VERB-Part: רוצה, אומר, חושב, יודע, רוצים, מדברים, יודעים, נמצאים, מדובר, מבקש</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Dual
    <ul>
      <li>NOUN: שנתיים, חודשיים, ביניים, יומיים, שבועיים, פעמיים</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: אחרים, רבים, חדשים, מקומיות, אחרונות, ערבים, חשובים, שונים, אחרונים, נוספים</li>
      <li>AUX: צריכים, יכולים, היו, היינו, חייבים, נוכל, יהיו, יוכלו, אינם, אמורים</li>
      <li>AUX-Part: יכולים, אינם, יכולות, אינן, איננו, אמורים, מסוגלים, עלולים, צריכים</li>
      <li>DET: איזשהם, אלו</li>
      <li>NOUN: חברי, דברים, אנשים, שנים, ילדים, ידי, ימים, בחירות, סטודנטים, אזרחי</li>
      <li>NUM: אלפי, מאות, עשרות, עשרה, אלפים, מיליארדים, מיליוני, שני, עשרת, שתיהן</li>
      <li>PRON: הם, אנחנו, נו, ם, אלה, כם, אתם, הן, אותם, ן</li>
      <li>PROPN: דרעים, זיקים, רביצים, ווד"לים, חיים, כבלים, כספים, מועצות, תותחנים</li>
      <li>SYM: %</li>
      <li>VERB: היו, רוצים, מדברים, יודעים, נמצאים, עושים, אומרים, הולכים, רואים, מבינים</li>
      <li>VERB-Part: רוצים, מדברים, יודעים, נמצאים, עושים, אומרים, הולכים, רואים, מבינים, מנסים</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Plur,Sing
    <ul>
      <li>NOUN: %, אוכלוסייה, בהילות, רגל</li>
      <li>SYM: %</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: חשוב, נכון, יהודי, גדול, טוב, שני, ראשון, קשה, ראשונה, אחר</li>
      <li>AUX: היה, יכול, צריך, היתה, הייתי, יהיה, הייתה, צריכה, תהיה, יכולה</li>
      <li>AUX-Part: יכול, יכולה, אינו, אינה, איננו, אינני, צריך, אינך, איננה, אמור</li>
      <li>DET: איזשהו, איזו, איזושהי, כלשהי</li>
      <li>NOUN: ראש, ממשלה, חוק, דבר, יושב, שר, מדינה, נושא, חבר, אדונ</li>
      <li>NUM: אחד, מיליון, חצי, עשר, אחת, מיליארד, אלף, חמישית, שני, מאית</li>
      <li>PRON: זה, אני, י, ו, הוא, ה, זאת, היא, אתה, ך</li>
      <li>PROPN: קורונה, לבן, קנאביס, כחול, בג"ץ, אוצר, בנק, בית, ועדת, חוץ</li>
      <li>SYM: %</li>
      <li>VERB: רוצה, צריך, אומר, חושב, יודע, היה, אמר, מדובר, מבקש, אומרת</li>
      <li>VERB-Part: רוצה, אומר, חושב, יודע, מדובר, מבקש, אומרת, מדבר, נמצא, קורה</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>ADP: את, אות, אית</li>
      <li>PRON: ן, ני, ה, כם, אתה, נו</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>ADP: של</li>
      <li>PRON: י, ו, ה, נו, ם, ך, הם, ן, כם, הו</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Cons
    <ul>
      <li>ADJ: בר, בעלי, חדורי, ארוך, בעל, בת, חסר, חסרי, חסרת, יוצאי</li>
      <li>DET: כל, כמה, הרבה, שום, כול, איזה, אף, המון, מיני, מספר</li>
      <li>NOUN: חברי, חבר, יושב, ראש, מדינת, שר, ידי, בית, הצעת, חברת</li>
      <li>NUM: שני, אלפי, מאות, שתי, אחת, עשרות, אחד, חצי, מיליוני, עשרת</li>
      <li>PROPN: משרד, מדינת, חוק, ועדת, וועדת, ארץ, הר, תל, ראש, יום</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>ADP: ב, ל, כ, ה</li>
      <li>DET: ה, כול</li>
      <li>PRON: י, ו, ה, נו, ם, אותם, ך, הם, אותה, אותו</li>
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
      <li>ADV: לא, אי, אין, אל, בלתי</li>
      <li>AUX: אינו, אינה, אינם, איננו, אינני, אינך, איננה, אינן</li>
      <li>AUX-Part: אינו, אינם, איננו, אינה, אינני, אינך, איננה, אינן</li>
      <li>VERB: אין</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>VERB: יש, היו, היה, הייתה, יהיה, להיות, יהיו, ישנן, היתה, ישנם</li>
      <li>VERB-Inf: להיות</li>
      <li>VERB-Part: ישנן, ישנם</li>
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
      <li>VERB-Inf: לעשות</li>
      <li>VERB-Part: אומר, מעורב, בוחר, חוזרים, חוסכים, יושב, מגיעים, מדובר, מוטל, מוצאים</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>VERB: בואו, שב, בוא, תאמינו, תגידו, תן, תנו, לך, עזבו, אמץ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Irr
    <ul>
      <li>AUX: היו, הייתי, היה</li>
      <li>VERB: רוצה, מדובר, נותנים, עובר, אומר, אומרים, בא, יוצא, יושבת, לומר</li>
      <li>VERB-Inf: לומר</li>
      <li>VERB-Part: רוצה, מדובר, נותנים, עובר, אומר, אומרים, יוצא, יושבת, מביאה, מסביר</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>AUX: יהיה, תהיה, נוכל, יהיו, יוכלו, יוכל, תהיו, נהיה, תוכל, אוכל</li>
      <li>VERB: יהיה, תהיה, יהיו, יקרה, נמשיך, נעשה, אשמח, יבוא, נעסוק, נצליח</li>
      <li>VERB-Part: אומר, מיוצגת</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX: היה, היתה, היו, הייתי, הייתה, היינו, היית, הייתם, יכולתי</li>
      <li>VERB: היו, היה, אמר, אמרתי, היתה, הייתה, שמעתי, הגיע, נעשה, אמרו</li>
      <li>VERB-Part: רוצה, אומר, מעורב, בוחר, חוזרים, חוסכים, יושב, יושבת, מוטל, מוצאים</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX-Part: יכולים, יכול, יכולה, מסוגלים</li>
      <li>VERB: רוצה, אומר, חושב, יודע, רוצים, מדברים, יודעים, נמצאים, מבקש, אומרת</li>
      <li>VERB-Part: רוצה, אומר, חושב, יודע, רוצים, מדברים, יודעים, נמצאים, מבקש, אומרת</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Act
    <ul>
      <li>VERB: רוצה, לעשות, אומר, חושב, יודע, היו, להיות, רוצים, להגיד, מדברים</li>
      <li>VERB-Inf: לעשות, להיות, להגיד, לדבר, לומר, לתת, לראות, להגיע, לבוא, להביא</li>
      <li>VERB-Part: רוצה, אומר, חושב, יודע, רוצים, מדברים, יודעים, מבקש, אומרת, עושים</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Act,Mid
    <ul>
      <li>VERB-Part: נכנסים</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Mid
    <ul>
      <li>VERB: נמצאים, נמצא, להתייחס, נמצאת, נעשה, נראה, להיכנס, להתגבר, מתנהל, נדמה</li>
      <li>VERB-Inf: להתייחס, להיכנס, להתגבר, להילחם, להיזהר, להשתתף, להתגונן, להתווכח, להתפלל, להינשא</li>
      <li>VERB-Part: נמצאים, נמצא, נמצאת, נראה, מתנהל, נדמה, מתחברים, מתנהלים, נפגשים, נקרא</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Mid,Pass
    <ul>
      <li>VERB: נדונו, פוענחו</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>VERB: מדובר, נעשה, ניתן, מעורב, קשור, ידוע, משולמים, נקבעו, בוצעו, דובר</li>
      <li>VERB-Inf: להיבנות, להיפתר, להיראות</li>
      <li>VERB-Part: מדובר, מעורב, קשור, ידוע, ניתן, משולמים, דרוש, כתוב, מחולקים, מנותקים</li>
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
      <li>ADP: ב, ל, כ, ה</li>
      <li>DET: ה</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>PRON: זה, זאת, אלה, כך, זו, אלו, כן, הללו, זהו, איזו</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Emp
    <ul>
      <li>PRON: עצמו, עצמה, עצמם</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: איזשהו, איזושהי, איזו, כלשהי, איזשהם</li>
      <li>PRON: מישהו, איזושהי, כן, איזו</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>ADV: איך, למה, האם, איפה, מדוע, מה, כיצד, לאן, היכן, מתי</li>
      <li>DET: איזו, אלו, כמה</li>
      <li>PRON: מה, מי, מתי, מהי, מהם, מיהו</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>DET: אף</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>PRON: אני, י, ו, הם, הוא, אנחנו, נו, ה, היא, אתה</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>ADV: למה, איפה, איך, מתי, היכן, מדוע, מה</li>
      <li>DET: כמה</li>
      <li>PRON: מה, מי, איזה, איך, מהו</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
      <li>DET: כל, כול, כמה</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: אחד, שני, אחת, שלוש, שמונה, ארבעה, עשר, שלושה, שתי, אלפי</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>ADJ: שני, ראשון, ראשונה, שלישי, שנייה, 19, 90, עשרים, שלישית, שניה</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>PRON: י, ו, ה, נו, ם, ך, הם, ן, כם, הו</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>PRON: עצמם, עצמנו, עצמו, עצמה, עצמי, עצמכם, עצמך, עצמן</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX: הייתי, היינו, נוכל, אינני, יכולתי, נהיה, אוכל, איננו, יהיה, יכולנו</li>
      <li>AUX-Part: אינני, איננו</li>
      <li>PRON: אני, י, אנחנו, נו, עצמנו, אנו, עצמי, ני, כולנו, אנוכי</li>
      <li>VERB: רוצה, חושב, אומר, יודע, מבקש, אמרתי, מדברים, מקווה, חושבת, רוצים</li>
      <li>VERB-Part: רוצה, חושב, אומר, יודע, מבקש, מדברים, מקווה, חושבת, רוצים, אומרת</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX: היית, הייתם, אינך, תהיה, תהיו</li>
      <li>AUX-Part: אינך</li>
      <li>PRON: אתה, ך, כם, אתם, את, עצמכם, עצמך</li>
      <li>VERB: בואו, יודע, אמרת, עושים, רוצים, מדבר, יודעים, אומר, שב, תאמינו</li>
      <li>VERB-Part: יודע, עושים, רוצים, מדבר, יודעים, אומר, אומרת, רוצה, הולכים, הופך</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX: היה, היתה, היו, יהיה, הייתה, תהיה, יהיו, יוכלו, יוכל, יכול</li>
      <li>AUX-Part: יכול, יכולה, יכולים, אינם, אינה, אינו, אינן, איננו, מסוגלים</li>
      <li>PRON: זה, ו, הם, הוא, ה, זאת, היא, ם, אלה, זו</li>
      <li>VERB: היו, היה, אומר, אמר, מדובר, רוצה, נמצאים, אומרים, יודעים, קורה</li>
      <li>VERB-Part: אומר, מדובר, רוצה, נמצאים, אומרים, יודעים, קורה, מדברים, נמצא, רוצים</li>
    </ul>
  </li>
</ul>




<h3>Other Features</h3>


<ul>
  <li><a>Abbr</a>
    <ul>
      <li>Yes
        <ul>
          <li>ADJ: אלמ"בים, בית"רי</li>
          <li>NOUN: מע"מ, מנכ"ל, רמטכ"ל, דו"ח, חו"ל, חל"ת, יו"ר, בג"ץ, בג"צים, ממ"ז</li>
          <li>NUM: אל"ף, כ"ט</li>
          <li>PROPN: צה"ל, ש"ס, אש"ף, בג"ץ, יש"ע, שב"כ, ד"ר, כנ"ר, מטכ"ל, צד"ל</li>
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
          <li>X: אללה, על, הבאב, הא, פר, Life, blue, of, out, the</li>
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
          <li>VERB: להגיד, להגיע, להביא, להבין, מבין, מבינים, הגיע, מודה, מניח, מסכים</li>
          <li>VERB-Inf: להגיד, להגיע, להביא, להבין, להעביר, להזכיר, להקים, להעלות, להמשיך, להגיש</li>
          <li>VERB-Part: מבין, מבינים, מודה, מניח, מסכים, מכירים, מציע, מכיר, מביאים, מגיע</li>
        </ul>
      </li>
      <li>HIFIL,HITPAEL
        <ul>
          <li>VERB-Inf: להגזים</li>
        </ul>
      </li>
      <li>HIFIL,PIEL
        <ul>
          <li>VERB: הסכמת</li>
        </ul>
      </li>
      <li>HITPAEL
        <ul>
          <li>VERB: להתייחס, להתמודד, יצטרכו, להתגבר, להתחיל, להתפלל, מתכוון, מתנהל, מתנהלים, להשתלט</li>
          <li>VERB-Inf: להתייחס, להתמודד, להתגבר, להתחיל, להתפלל, להשתלט, להשתתף, להתגונן, להתווכח, להסתדר</li>
          <li>VERB-Part: מתכוון, מתנהל, מתנהלים, מצטרף, מתחברים, מתכוונים, מתנהג, מתעסקים, מתקיימים, מידרדר</li>
        </ul>
      </li>
      <li>HUFAL
        <ul>
          <li>AUX-Part: מוכרח</li>
          <li>VERB: הוכח, הופקעו, הוגש, הוגשו, הושבע, מובן, מוטרד, מותר, הובא, הובאה</li>
          <li>VERB-Part: מובן, מוטרד, מותר, מובלים, מובנת, מודרים, מוזכר, מוטל, מוכח, מוכפל</li>
        </ul>
      </li>
      <li>NIFAL
        <ul>
          <li>VERB: נמצאים, נמצא, נעשה, ניתן, נראה, נמצאת, להיכנס, נקרא, להילחם, נדמה</li>
          <li>VERB-Inf: להיכנס, להילחם, להיזהר, להינשא, ליהנות, להיאבק, להיאחז, להיבנות, להיגמר, להיכנע</li>
          <li>VERB-Part: נמצאים, נמצא, נראה, נמצאת, נקרא, נדמה, ניתן, נכנס, נפגשים, נקראת</li>
        </ul>
      </li>
      <li>NITPAEL
        <ul>
          <li>VERB: נשתנה, נתבקשתי, נתגנבה, נתקהלו</li>
        </ul>
      </li>
      <li>PAAL
        <ul>
          <li>AUX: היה, להיות, היתה, היו, הייתי, יכול, יהיה, הייתה, תהיה, היינו</li>
          <li>AUX-Inf: להיות</li>
          <li>AUX-Part: יכול, יכולה, יכולים</li>
          <li>VERB: רוצה, לעשות, אומר, חושב, צריך, יודע, היו, להיות, רוצים, יודעים</li>
          <li>VERB-Inf: לעשות, להיות, לומר, לתת, לראות, לבוא, לצאת, ללכת, לשמוע, לעמוד</li>
          <li>VERB-Part: רוצה, אומר, חושב, יודע, רוצים, יודעים, אומרת, עושים, אומרים, קורה</li>
        </ul>
      </li>
      <li>PIEL
        <ul>
          <li>VERB: מדברים, לדבר, מבקש, מדבר, לשנות, מקווה, לאפשר, לקבל, מנסים, לטפל</li>
          <li>VERB-Inf: לדבר, לשנות, לאפשר, לקבל, לטפל, לקיים, לקדם, לנסות, לסיים, לשלם</li>
          <li>VERB-Part: מדברים, מבקש, מדבר, מקווה, מנסים, מבקשים, מבקשת, מאחל, מנסה, מקבל</li>
        </ul>
      </li>
      <li>PUAL
        <ul>
          <li>AUX-Part: מסוגלים</li>
          <li>VERB: מדובר, מעורב, משולמים, בוצעו, דובר, מחולקים, אושר, חולקו, ייושם, יפוצו</li>
          <li>VERB-Part: מדובר, מעורב, משולמים, מחולקים, מאוחדים, מגובה, מחוסנים, מכוונת, ממולאות, מנותקים</li>
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
          <li>ADV: אי, בלתי, בין, אנטי, חד, דה, דו, סופר, סוציאל, על</li>
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
          <li>ADJ: פרד</li>
          <li>ADP: בפנ, הם, כמן, לידי, ה</li>
          <li>ADV: הינה, מדיי</li>
          <li>DET: איזושהי, אלו</li>
          <li>NOUN: אימא, ועדת, חבר, יד, כפ, כשרויות, עינ, שמים, תופעות</li>
          <li>PRON: ה</li>
          <li>PROPN: ד', מפשטים</li>
          <li>SCONJ: כשאשר, מאיו</li>
          <li>VERB: ייצאו, היתה, הרמת, לתבוע, מחייב, מציע, נהייה, נקבע, נקראה</li>
          <li>VERB-Inf: לתבוע</li>
          <li>VERB-Part: מחייב, מציע, נהייה</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>VerbType</a>
    <ul>
      <li>Mod
        <ul>
          <li>AUX: יכול, צריך, צריכים, צריכה, יכולים, חייבים, חייב, נוכל, יוכלו, יכולה</li>
          <li>AUX-Part: יכול, יכולים, יכולה, יכולות, צריך, אמור, אמורה, אמורים, חייב, מוכן</li>
          <li>VERB: אפשר, צריך, ניתן, מחייב, צריכים, יכול, אסור, אוכל, אין, אמורות</li>
          <li>VERB-Inf: לאפשר, לחייב</li>
          <li>VERB-Part: מחייב, ניתן, יכול, אמורות, אסור, מוכנה, מותר, מחייבים, צריך, צריכות</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 5 lemmas as copulas (<a>cop</a>). Examples: היה, הוא, זה, אינו, איננו.</li>
</ul>

<ul>
<li>This corpus uses 14 lemmas as auxiliaries (<a>aux</a>). Examples: יכל, צריך, היה, חייב, אינו, אמור, מוכן, מוכרח, עלול, מסוגל, איננו, עתיד, זכאי, עשוי.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (963)</li>
      <li>VERB--NOUN-ADP(מ) (1)</li>
      <li>VERB--NOUN-ADP(מן) (1)</li>
      <li>VERB--NOUN-ADP(מעל) (1)</li>
      <li>VERB--PRON (397)</li>
      <li>VERB--PRON-ADP(כ) (2)</li>
      <li>VERB--PRON-ADP(מתוך) (1)</li>
      <li>VERB-Inf--NOUN (89)</li>
      <li>VERB-Inf--PRON (144)</li>
      <li>VERB-Part--NOUN (366)</li>
      <li>VERB-Part--PRON (1242)</li>
      <li>VERB-Part--PRON-ADP(מ) (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (248)</li>
      <li>VERB--NOUN-ADP(את) (237)</li>
      <li>VERB--PRON (23)</li>
      <li>VERB--PRON-ADP(את) (116)</li>
      <li>VERB--PRON-Acc (3)</li>
      <li>VERB--PRON-Acc-ADP(את) (1)</li>
      <li>VERB-Inf--NOUN (306)</li>
      <li>VERB-Inf--NOUN-ADP(את) (277)</li>
      <li>VERB-Inf--PRON (20)</li>
      <li>VERB-Inf--PRON-ADP(את) (145)</li>
      <li>VERB-Inf--PRON-Acc (6)</li>
      <li>VERB-Part--NOUN (198)</li>
      <li>VERB-Part--NOUN-ADP(את) (201)</li>
      <li>VERB-Part--NOUN-ADP(מ) (2)</li>
      <li>VERB-Part--PRON (34)</li>
      <li>VERB-Part--PRON-ADP(את) (99)</li>
      <li>VERB-Part--PRON-Acc (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB-Inf--PRON-Acc (1)</li>
    </ul>
  </li>
</ul>



<h3>Verbs with Reflexive Core Objects</h3>

<ul>
  <li>This corpus contains 13 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: התאים עצמנו, מצא עצמם, בדק עצמנו, מצא עצמי, מצא עצמך, נמצא עצמנו, פרנס עצמם, ראה עצמכם, שאל עצמי, שאל עצמך, שאל עצמנו, שיקם עצמם, שירת עצמנו</li>
    <ul>
      <li>Out of those, 1 lemmas occurred more than once, but never without a reflexive dependent. Examples: התאים</li>
    </ul>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 9 relation subtypes: <a>acl:relcl</a>, <a>compound:affix</a>, <a>csubj:outer</a>, <a>csubj:pass</a>, <a>nmod:poss</a>, <a>nmod:unmarked</a>, <a>nsubj:outer</a>, <a>nsubj:pass</a>, <a>obl:unmarked</a></li>
<li>The following 2 relation types are not used in this corpus at all: <a>clf</a>, <a>goeswith</a></li>
</ul>
