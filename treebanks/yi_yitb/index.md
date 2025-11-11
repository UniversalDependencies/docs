---
layout: base
title:  'UD_Yiddish-YiTB'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Yiddish YiTB

Language: [Yiddish](/yi/index.html) (code: `yi`)<br/>
Family: IE

This treebank has been part of Universal Dependencies since the UD v2.17 release.

The following people have contributed to making this treebank part of UD: Kirk Andrews.

Repository: [UD_Yiddish-YiTB](https://github.com/UniversalDependencies/UD_Yiddish-YiTB)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udyi_yitb217)<br />
Download all treebanks: [UD 2.17](/#download)

License: CC BY-SA 4.0

Genre: grammar-examples, learner-essays, bible, wiki, fiction, nonfiction, spoken, web

Questions, comments?
General annotation questions (either Yiddish-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Yiddish-YiTB/issues).
If you want to collaborate, please contact [m&nbsp;•&nbsp;kirkandrews&nbsp;(æt)&nbsp;gmail&nbsp;•&nbsp;com].
Development of the treebank happens directly in the UD repository, so you may submit bug fixes as pull requests against the dev branch.

| Annotation | Source |
|------------|--------|
| Lemmas | assigned by a program, not checked manually |
| UPOS | annotated manually, natively in UD style |
| XPOS | not available |
| Features | not available |
| Relations | annotated manually, natively in UD style |

## Description

YiTB is a treebank of linguistically annotated Yiddish data in the Universal Dependencies framework, created via a bootstraping machine learning method. A total of 27,872 tokens are currently in the treebank from a variety of sources and textual genres.



Yiddish is classified as a West Germanic language, although it includes many elements from Semitic and Slavic languages as well. It is written in a modified Hebrew alphabet. Yiddish is structurally similiar to German, but it also consists of many interesting structures not found in other Germanic languages, such as periphrastic verbs.

There are a total of 27,872 tokens in the treebank. Roughly 60% of these stem from the Tatoeba source and consist of short sentences provided by both native and non-native speakers of Yiddish. It must be noted that there are occasional grammatical errors in these sentences, such as the use of the auxiliary _zayn_ 'be' instead of _hobn_ 'have' in past tense constructions of periphrastic verbs formed with the verb _zayn_, as well as incorrect syntax of periphrastic verbs which have an underlying complement-head (OV) order and do not follow the typical order expected of an SVO language like Yiddish. This appears to be a common mistake of intermediate L2 Yiddish speakers. The remainder 40% of tokens stem from a variety of native speaker texts and genres. The various source texts and genres are shown below.

Lemmas and transliterations into Latin script are provided as well by self-made models but are not 100% accurate. The transliteration model, which can be accessed [here](https://huggingface.co/shoowadoo/galkhesnet), was trained on wiktionary and transliterated Bible data. The lemmatization model was trained on wiktionary data and can be found [here](https://huggingface.co/shoowadoo/yiddish-lemmas). Translations are not provided at this time, but a model trained on Tatoeba sentences and parallel Bible verses is accessible [here](https://huggingface.co/shoowadoo/m2m100-finetuned-yi-to-en_418M_2). Morphological features are also not included at this time.

| Source | Author | Genre | Added | Split |
|-------|-------|-------|-------|-------|
| tatoeba.org | Various | grammar/learner | 2.17 | all |
| Book of Exodus | Yehoyesh translation | bible | 2.17 | all |
| Beethoven's Moonlight Sonata | Shloyme Bas­tom­s­ki | fiction | 2.17 | train |
| Yiddish proverbs | Various | proverb | 2.17 | all |
| Haggadahs and Elijah the Prophet | Proste Yiddish | web | 2.17 | test |
| Bulletin No. 3: At the Border | Various | nonfiction | 2.17 | test |
| A Story with a Cat and Yiddish Dialects | Proste Yiddish | web | 2.17 | dev |
| Sholem Aleichem | Proste Yiddish | web | 2.17 | train |
| Hirshke Glik | Shmerke Kaczerginski | nonfiction | 2.17 | dev |
| Book of Proverbs | Yehoyesh translation | bible | 2.17 | test |
| Shavuot and an Old Joke | Proste Yiddish | web | 2.17 | test |
| Bankrupt | Katie Brown | fiction | 2.17 | train |
| Jews and Yiddish | Nokhem Shtif | nonfiction | 2.17 | train |
| Fathers and Children | Chaim Malitz | nonfiction | 2.17 | train |
| Wikipedia | Various | nonfiction | 2.17 | train |
| A Foolish Child | Jacob Dinezon | fiction | 2.17 | test |
| From the Land of Consumption | Shloyme Gilbert | fiction | 2.17 | dev |
| The Four Questions | Traditional | liturgical | 2.17 | test |
| A Bit of Clarity and Simplicity Regarding the Language Question | Hillel Zeitlin | nonfiction | 2.17 | train |
| Song of Songs | Yehoyesh translation | bible | 2.17 | train |


## Acknowledgments

To the best of our knowledge, the source texts used for the creation of this treebank are either in the public domain or are an orphan work for which no copyright holder can be found. If you hold the copyright to any of the texts used in this treebank and would like their removal, please contact us at the email below.


# Statistics of UD Yiddish YiTB

## POS Tags

[ADJ](yi_yitb-pos-ADJ.html) – [ADP](yi_yitb-pos-ADP.html) – [ADV](yi_yitb-pos-ADV.html) – [AUX](yi_yitb-pos-AUX.html) – [CCONJ](yi_yitb-pos-CCONJ.html) – [DET](yi_yitb-pos-DET.html) – [INTJ](yi_yitb-pos-INTJ.html) – [NOUN](yi_yitb-pos-NOUN.html) – [NUM](yi_yitb-pos-NUM.html) – [PART](yi_yitb-pos-PART.html) – [PRON](yi_yitb-pos-PRON.html) – [PROPN](yi_yitb-pos-PROPN.html) – [PUNCT](yi_yitb-pos-PUNCT.html) – [SCONJ](yi_yitb-pos-SCONJ.html) – [VERB](yi_yitb-pos-VERB.html) – [X](yi_yitb-pos-X.html)

## Features

[ExtPos](yi_yitb-feat-ExtPos.html) – [Typo](yi_yitb-feat-Typo.html)

## Relations

[acl](yi_yitb-dep-acl.html) – [acl:relcl](yi_yitb-dep-acl-relcl.html) – [advcl](yi_yitb-dep-advcl.html) – [advcl:relcl](yi_yitb-dep-advcl-relcl.html) – [advmod](yi_yitb-dep-advmod.html) – [amod](yi_yitb-dep-amod.html) – [appos](yi_yitb-dep-appos.html) – [aux](yi_yitb-dep-aux.html) – [aux:pass](yi_yitb-dep-aux-pass.html) – [case](yi_yitb-dep-case.html) – [cc](yi_yitb-dep-cc.html) – [ccomp](yi_yitb-dep-ccomp.html) – [compound](yi_yitb-dep-compound.html) – [compound:lvc](yi_yitb-dep-compound-lvc.html) – [compound:prt](yi_yitb-dep-compound-prt.html) – [compound:redup](yi_yitb-dep-compound-redup.html) – [conj](yi_yitb-dep-conj.html) – [cop](yi_yitb-dep-cop.html) – [csubj](yi_yitb-dep-csubj.html) – [dep](yi_yitb-dep-dep.html) – [det](yi_yitb-dep-det.html) – [det:poss](yi_yitb-dep-det-poss.html) – [discourse](yi_yitb-dep-discourse.html) – [dislocated](yi_yitb-dep-dislocated.html) – [expl](yi_yitb-dep-expl.html) – [expl:pv](yi_yitb-dep-expl-pv.html) – [fixed](yi_yitb-dep-fixed.html) – [flat](yi_yitb-dep-flat.html) – [flat:foreign](yi_yitb-dep-flat-foreign.html) – [flat:name](yi_yitb-dep-flat-name.html) – [goeswith](yi_yitb-dep-goeswith.html) – [iobj](yi_yitb-dep-iobj.html) – [mark](yi_yitb-dep-mark.html) – [nmod](yi_yitb-dep-nmod.html) – [nmod:poss](yi_yitb-dep-nmod-poss.html) – [nsubj](yi_yitb-dep-nsubj.html) – [nsubj:outer](yi_yitb-dep-nsubj-outer.html) – [nsubj:pass](yi_yitb-dep-nsubj-pass.html) – [nummod](yi_yitb-dep-nummod.html) – [obj](yi_yitb-dep-obj.html) – [obl](yi_yitb-dep-obl.html) – [obl:agent](yi_yitb-dep-obl-agent.html) – [obl:arg](yi_yitb-dep-obl-arg.html) – [orphan](yi_yitb-dep-orphan.html) – [parataxis](yi_yitb-dep-parataxis.html) – [punct](yi_yitb-dep-punct.html) – [reparandum](yi_yitb-dep-reparandum.html) – [root](yi_yitb-dep-root.html) – [vocative](yi_yitb-dep-vocative.html) – [xcomp](yi_yitb-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 3054 sentences, 27488 tokens and 27879 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 4377 tokens (16%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 196 types of words that contain both letters and punctuation. Examples: מדינת־ישׂראל, שלום־עליכם, ניו־יאָרק, שלום־עליכמען, ארץ־ישׂראל, באָבע־זיידע, מאַמע־לשון, בני־ישׂראל, ד״ר, הר־הבית, חיי־שעה, יונגער־מאַן, לשון־קודש, עם־ישׂראל, אַלף־בית, אַריכת־ימים, געשטאַפּאָ־מאַן, גרויס־עלטערן, ד“ר, חיי־עולם, טאַטע־מאַמע, טעלעפֿאָן־נומער, ייִדיש־גריכיש, ייִדיש־קינד, ייִדיש־שפּאַניש, ישו־הנוצרי, יש״ו, כּישוף־מאַכערין, לבֿנה־ליכט, לבֿנה־סאָנאַטע, מזרח־סלאַווישע, מלוכה־שפּראַך, מלחמה־העלד, מערבֿ־ייִדישע, משה־רבינו, קריפּטאָ־מזומנים, שומר־מיצוות, תּרגום־לשון, 15־יעריקער, 8–טן, prosteyiddish@gmail.com, א"ב, אַזכּרה־אַקטן, אַל־אַקסאַ־פּלאַץ, אַלף־בת, אַנטי־ייִדישע, אַנטי־פֿאַשיסטישן, אַרבעטס־פּלאַץ, אאַז"װ, אויגן־דאָקטער</li>
</ul>

<ul>
<li>This corpus contains 391 multi-word tokens. On average, one multi-word token consists of 2.00 syntactic words.</li>
<li>There are 73 types of multi-word tokens. Examples: ס׳איז, כ׳בין, פֿונעם, כ׳האָב, צום, האָסטו, אויפֿן, ביסטו, נישטאָ, מיטן, בײַם, ס׳זענען, ס'איז, אינעם, אױפֿן, זאָלסטו, לאָמיר, ס׳רובֿ, קענסטו, כ'בין, לאָמיך, מ׳האָט, ס׳וועט, רעדסטו, ווילסטו, וועסטו, כ'האָב, כ׳וועל, כ׳לערן, װעסטו, וואָלטסטו, כ׳הייס, כ׳וויל, ס'װעט, ס′איז, פֿאַרשטײסטו, אַם, אויפען, אונטערן, איבערן, ביזן, בלייבסטו, בײַן, גלייבסטו, געדענקסטו, ווייסטו, זעסטו, כ'וועל, כ'לעב, כ'פֿײַף.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 16 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>VERB</a>, <a>X</a></li>
<li>This corpus does not use the following tags: SYM</li>
</ul>

<ul>
<li>This corpus contains 6 word types tagged as particles (PART): הלוואַי, ניט, נישט, סך, צו, צי</li>
</ul>

<ul>
<li>This corpus contains 23 lemmas tagged as pronouns (PRON): _, אַלעמען, אַלץ, איך, איר, אײַער, גאָרנישט, דו, וואָס, וואס, זי, זיי, זיך, זײ, מיר, מען, עמעץ, עס, עפּעס, ער, װאָס, װעלך, װער</li>
</ul>

<ul>
<li>This corpus contains 36 lemmas tagged as determiners (DET): _, אַ, אַזאַ, אונדזער, אונדזערע, איטלעך, איין, אירן, אירע, אײַער, אײַרע, אײנער, דאָזיק, דיין, דיינען, דער, דײַן, וועמע, וועמען, ווײניק, זייער, זעלביק, זײַן, זײַער, זײער, יעדערער, יענער, מיינע, מיינען, מער, מײַן, מײַנע, סאַמע, קײַן, קײנער, רובֿ</li>
</ul>

<ul>
<li>Out of the above, 2 lemmas occurred sometimes as PRON and sometimes as DET: _, אײַער</li>
</ul>

<ul>
<li>This corpus contains 16 lemmas tagged as auxiliaries (AUX): _, דאַרפֿן, האָבן, וועלן, ווערן, זאָלן, זײַן, טאָרן, מוזן, מעגן, פֿלעגן, קענען, קערן, װאָלט, װעלן, װערן</li>
</ul>

<ul>
<li>Out of the above, 9 lemmas occurred sometimes as AUX and sometimes as VERB: _, דאַרפֿן, האָבן, וועלן, זײַן, פֿלעגן, קענען, קערן, װערן</li>
</ul>

<ul>
<li>This corpus does not use the VerbForm feature.</li>
</ul>

<h3>Nominal Features</h3>








<h3>Degree and Polarity</h3>





<h3>Verbal Features</h3>







<h3>Pronouns, Determiners, Quantifiers</h3>










<h3>Other Features</h3>


<ul>
  <li><a>ExtPos</a>
    <ul>
      <li>ADP
        <ul>
          <li>DET: אַ</li>
        </ul>
      </li>
      <li>ADV
        <ul>
          <li>ADP: אין</li>
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
          <li>ADV: דער</li>
          <li>NOUN: קאַֹװע</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 1 lemmas as copulas (<a>cop</a>). Examples: זײַן.</li>
</ul>

<ul>
<li>This corpus uses 14 lemmas as auxiliaries (<a>aux</a>). Examples: האָבן, זײַן, װעלן, קענען, זאָלן, וועלן, דאַרפֿן, װאָלט, מוזן, טאָרן, מעגן, פֿלעגן, _, קערן.</li>
<li>This corpus uses 3 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: װערן, זײַן, ווערן.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (447)</li>
      <li>VERB--PRON (1354)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (828)</li>
      <li>VERB--PRON (274)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--PRON (2)</li>
    </ul>
  </li>
</ul>

<h3>Reflexive Verbs</h3>

<ul>
  <li>This corpus contains 149 lemmas that occur at least once with an <a>expl:pv</a> child. Examples: לערנען זיך, פֿילן זיך, טאָן זיך, טרעפֿן זיך, באַטראַכטן זיך, אַנטוויקלען זיך, באַוויז זיך, באַזעצן זיך, דערהערן זיך, זעצן זיך, לייגן זיך, לײַגן זיך, פֿאַרשטיין זיך, שפּילן זיך, אָנהויבן זיך, באַקענען זיך, בײַטן זיך, דערוויסן זיך, דערנענטערן זיך, האַלטן זיך, הײַבן זיך, וואַשן זיך, לאָזן זיך, מאַכן זיך, נעמען זיך, ענדערן זיך, פֿאַראינטערעסירן זיך, פֿאַרקילן זיך, פֿירן זיך, פֿרעגן זיך, צוגעהערן זיך, קוקן זיך, שטעל זיך, שטעלן זיך, אַוועקלײַגן זיך, אַוועקצוזעצן זיך, אַוועקשטעלן זיך, אַראַביש זיך, אַראָפּלאָזן זיך, אַראָפּנידערן זיך, אַרויסרײַסן זיך, אַרײַנגיסן זיך, אַרײַנקוועטש זיך, אָנלען זיך, אָננעמען זיך, אָפּוואַשן זיך, אָפּטײלען זיך, אָפּלאָזן זיך, אָפּצוגעבן זיך, אויסטיילן זיך</li>
</ul>



<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 15 relation subtypes: <a>acl:relcl</a>, <a>advcl:relcl</a>, <a>aux:pass</a>, <a>compound:lvc</a>, <a>compound:prt</a>, <a>compound:redup</a>, <a>det:poss</a>, <a>expl:pv</a>, <a>flat:foreign</a>, <a>flat:name</a>, <a>nmod:poss</a>, <a>nsubj:outer</a>, <a>nsubj:pass</a>, <a>obl:agent</a>, <a>obl:arg</a></li>
<li>The following 2 relation types are not used in this corpus at all: <a>clf</a>, <a>list</a></li>
</ul>
