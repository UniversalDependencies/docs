---
layout: base
title:  'UD_Gorani-Hawrami'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Gorani Hawrami

Language: [Gorani](/hac/index.html) (code: `hac`)<br/>
Family: IE

This treebank has been part of Universal Dependencies since the UD v2.19 release.

The following people have contributed to making this treebank part of UD: Amirhossein Mojiri Foroushani, Zaniar Ghaderi.

Repository: [UD_Gorani-Hawrami](https://github.com/UniversalDependencies/UD_Gorani-Hawrami)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udhac_hawrami219)<br />
Download all treebanks: [UD 2.19](/#download)

License: CC BY-SA 4.0

Genre: spoken

Questions, comments?
General annotation questions (either Gorani-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Gorani-Hawrami/issues).
If you want to collaborate, please contact [amojiry&nbsp;(æt)&nbsp;gmail&nbsp;•&nbsp;com, zaniargh42&nbsp;(æt)&nbsp;gmail&nbsp;•&nbsp;com].
Development of the treebank happens directly in the UD repository, so you may submit bug fixes as pull requests against the dev branch.

| Annotation | Source |
|------------|--------|
| Lemmas | annotated manually in non-UD style, automatically converted to UD |
| UPOS | annotated manually in non-UD style, automatically converted to UD |
| XPOS | not available |
| Features | annotated manually in non-UD style, automatically converted to UD |
| Relations | annotated manually in non-UD style, automatically converted to UD |

## Description

UD Gorani-Hawrami is a preliminary conversion of one spoken Hewramî narrative, ZB (_zaroɫe û bizê_, “The baby and the goat”), from Masoud Mohammadirad’s published Hewramî recordings and glossed text.



This is the first Universal Dependencies treebank of Gorani (ISO 639-3: `hac`), in the Hawrami / Hewramî variety. The current release contains a single complete oral narrative, kept in source order rather than shuffled. Sentence ids `hwr-rec-zb-001`–`hwr-rec-zb-061` correspond one-to-one to source annotation units ZB.1–ZB.61. Those units are intonation units from the source recording, so one UD sentence may contain more than one clause.

The underlying text and interlinear morphology come from:

* Masoud Mohammadirad, _A corpus of Hewramî recordings, time-aligned with transcription and translation_ (2025), Zenodo, [10.5281/zenodo.15419952](https://doi.org/10.5281/zenodo.15419952). Audio timing follows the ELAN alignment in that archive. The archive is not redistributed here.
* Masoud Mohammadirad, _Echoes of the past: Hewramî narratives_ (Language Science Press, 2025), [10.5281/zenodo.17140764](https://doi.org/10.5281/zenodo.17140764). This published glossed edition is the canonical transcription and the source of the English translation. It is licensed CC BY 4.0.

Persian translations (`text_fa`) were added in the [Hawrami corpus](https://github.com/zaniarghaderi/hawrami-corpus) project and still need human review. Lemmas and UD tags are mapped from the published interlinear glossing and glossary. Dependency trees are a machine-assisted first conversion. The CoNLL-U comments mark the layer as preliminary silver data; it is not gold annotation.

The treebank has 61 sentences and about 520 words, below the threshold for a train/dev/test split. All sentences are in `hac_hawrami-ud-test.conllu`. There is no separate training or development file.

## Acknowledgments

The source recordings, transcription, and interlinear glossing were created by Masoud Mohammadirad. The Universal Dependencies conversion was prepared by Amirhossein Mojiri Foroushani and Zaniar Ghaderi in the [Hawrami corpus](https://github.com/zaniarghaderi/hawrami-corpus) project. We thank Masoud Mohammadirad for publishing the Hewramî narrative and its glossed analysis.

## References

* Mohammadirad, Masoud. 2025. _Echoes of the past: Hewramî narratives_. Language Science Press. [https://doi.org/10.5281/zenodo.17140764](https://doi.org/10.5281/zenodo.17140764)
* Mohammadirad, Masoud. 2025. _A corpus of Hewramî recordings, time-aligned with transcription and translation_. Zenodo. [https://doi.org/10.5281/zenodo.15419952](https://doi.org/10.5281/zenodo.15419952)


# Statistics of UD Gorani Hawrami

## POS Tags

[ADJ](hac_hawrami-pos-ADJ.html) – [ADP](hac_hawrami-pos-ADP.html) – [ADV](hac_hawrami-pos-ADV.html) – [AUX](hac_hawrami-pos-AUX.html) – [CCONJ](hac_hawrami-pos-CCONJ.html) – [DET](hac_hawrami-pos-DET.html) – [INTJ](hac_hawrami-pos-INTJ.html) – [NOUN](hac_hawrami-pos-NOUN.html) – [NUM](hac_hawrami-pos-NUM.html) – [PART](hac_hawrami-pos-PART.html) – [PRON](hac_hawrami-pos-PRON.html) – [PROPN](hac_hawrami-pos-PROPN.html) – [PUNCT](hac_hawrami-pos-PUNCT.html) – [VERB](hac_hawrami-pos-VERB.html) – [X](hac_hawrami-pos-X.html)

## Features

[Case](hac_hawrami-feat-Case.html) – [Definite](hac_hawrami-feat-Definite.html) – [Degree](hac_hawrami-feat-Degree.html) – [Gender](hac_hawrami-feat-Gender.html) – [Mood](hac_hawrami-feat-Mood.html) – [Number](hac_hawrami-feat-Number.html) – [Person](hac_hawrami-feat-Person.html) – [Polarity](hac_hawrami-feat-Polarity.html) – [PronType](hac_hawrami-feat-PronType.html) – [Reflex](hac_hawrami-feat-Reflex.html) – [Tense](hac_hawrami-feat-Tense.html) – [VerbForm](hac_hawrami-feat-VerbForm.html) – [Voice](hac_hawrami-feat-Voice.html)

## Relations

[advmod](hac_hawrami-dep-advmod.html) – [amod](hac_hawrami-dep-amod.html) – [aux](hac_hawrami-dep-aux.html) – [case](hac_hawrami-dep-case.html) – [cc](hac_hawrami-dep-cc.html) – [conj](hac_hawrami-dep-conj.html) – [dep](hac_hawrami-dep-dep.html) – [det](hac_hawrami-dep-det.html) – [discourse](hac_hawrami-dep-discourse.html) – [nsubj](hac_hawrami-dep-nsubj.html) – [nummod](hac_hawrami-dep-nummod.html) – [obj](hac_hawrami-dep-obj.html) – [obl](hac_hawrami-dep-obl.html) – [parataxis](hac_hawrami-dep-parataxis.html) – [punct](hac_hawrami-dep-punct.html) – [root](hac_hawrami-dep-root.html) – [xcomp](hac_hawrami-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 61 sentences and 520 tokens.</li>
</ul>

<ul>
<li>This corpus contains 108 tokens (21%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus does not contain words that contain both letters and punctuation.</li>
</ul>

<ul>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 15 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>VERB</a>, <a>X</a></li>
<li>This corpus does not use the following tags: SCONJ, SYM</li>
</ul>

<ul>
<li>This corpus contains 3 word types tagged as particles (PART): her, ter, êtir</li>
</ul>

<ul>
<li>This corpus contains 11 lemmas tagged as pronouns (PRON): ađ, ađê, ew, ewê, hin, min, wê, çêş, êđ, îđ, ħîç</li>
</ul>

<ul>
<li>This corpus contains 8 lemmas tagged as determiners (DET): a, ane, beʕzê, ew, girđ, herçê, î, îne</li>
</ul>

<ul>
<li>Out of the above, 1 lemmas occurred sometimes as PRON and sometimes as DET: ew</li>
</ul>

<ul>
<li>This corpus contains 2 lemmas tagged as auxiliaries (AUX): bî, bîyê</li>
</ul>

<ul>
</ul>

<ul>
<li>There are 2 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: bo, ba, baw, bîye</li>
    <li>VERB: maço, mê, hen, milo, bero, mila, waro, bera, miđyo, mênê</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>AUX: bîyebê, bîyen, bîyêne, bîyênêw</li>
    <li>VERB: menen, aman, ardenû, berdenû, jinîyen, kerdebo, kêştebêş, luwan, luwεnêrew, menêne</li>
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
      <li>AUX-Part: bîyêne</li>
      <li>NOUN: awê, şewê, awî, çawre, saɫê, bawşîşane, bizê, bizêçe, dastanû, kinaçê</li>
      <li>NUM: yuwe</li>
      <li>VERB-Part: menêne</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: sîyaw, çoɫû</li>
      <li>ADP: werew, çewî, çîđî</li>
      <li>ADV: îsey</li>
      <li>AUX-Part: bîyebê, bîyen</li>
      <li>NOUN: qiřoɫû, xway, wextîyekey, wextê, wextî, xwa, şê, kîlowê, asmanî, beřû</li>
      <li>NUM: yoyç, yoyşa</li>
      <li>PRON: ađî, ewî, çêşî</li>
      <li>PROPN: germîyanî, ʕeladînî, ʕeladînîwe</li>
      <li>VERB-Part: menen, aman, ardenû, berdenû, jinîyen, kerdebo, kêştebêş, luwan, watebo</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>AUX-Fin: ba, baw</li>
      <li>AUX-Part: bîyênêw</li>
      <li>NOUN: kîlowê, bizê, saɫê, zaroɫê, hardîşa, kuřekêş, kuřêş, meşeyxane, saɫane, ħeywanê</li>
      <li>PRON: ađê</li>
      <li>VERB-Fin: mila, bera, mênê, bijyawe, bilmê, bizanmê, ginawe, ginmê, kera, melama</li>
      <li>VERB-Part: luwεnêrew, menênêw</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADP: çewî, çîđî</li>
      <li>ADV: îsey</li>
      <li>AUX-Fin: bo</li>
      <li>AUX-Part: bîyebê</li>
      <li>NOUN: wextîyekey, şewê, kuřekey, zaroɫeke, heywane, heywanekeyş, jenêç, nerekey, nerekeyne, nerekeyû</li>
      <li>PRON: ađî, ewî, çêşî</li>
      <li>PROPN: germîyanî, ʕeladînî, ʕeladînîwe</li>
      <li>VERB-Fin: maço, mê, milo, bero, waro, miđyo, nîşore, berî, bowe, gino</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>ADP: çewî, çîđî</li>
      <li>ADV: îsey</li>
      <li>NOUN: wextîyekey, şewê, kuřekey, heywanekeyş, jenêç, meşeyxane, nerekey, nerekeyne, nerekeyû, qiřoɫekey</li>
      <li>PRON: ađî, ewî, çêşî</li>
      <li>PROPN: germîyanî, ʕeladînî, ʕeladînîwe</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>NOUN: kîlowê, bizê, saɫê, zaroɫeke, zaroɫê, hardîşa, heywane, kuřekêş, kuřêş, pîyake</li>
      <li>PRON: ađê</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>NOUN: wextîyekey, heywandare, kuřekey, zaroɫeke, heywanekeyş, jenekê, kuřekêş, meřekê, nerekey, nerekeyne</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADJ: ezemêç, kuçê</li>
      <li>ADV: firê</li>
      <li>NOUN: wextê, hewrê, hînêwe, waranê, şewê, bizêw, darê, darêwe, darêwew, derê</li>
    </ul>
  </li>
</ul>

<h3>Degree and Polarity</h3>


<ul>
  <li><a>Degree</a></li>
</ul>

<ul>
  <li>Cmp
    <ul>
      <li>ADJ: zilterû, zîyater, ʕalter</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>VERB-Fin: mekiryo, mekiryoyç, melama, nimênêş</li>
    </ul>
  </li>
</ul>


<h3>Verbal Features</h3>



<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX-Fin: bo, ba, baw, bîye</li>
      <li>VERB-Fin: maço, mê, hen, milo, bero, mila, waro, bera, miđyo, mênê</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sub
    <ul>
      <li>AUX-Fin: bo</li>
      <li>VERB-Fin: berî, bilmê, bizanmê, xinîkno</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX-Fin: bîye</li>
      <li>AUX-Part: bîyebê, bîyen, bîyêne</li>
      <li>VERB-Fin: piřa, berd, berde, kewt, piřnaşre, wisiş</li>
      <li>VERB-Part: menen, aman, ardenû, berdenû, jinîyen, kerdebo, kêştebêş, luwan, luwεnêrew, menêne</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX-Fin: bo, ba, baw</li>
      <li>VERB-Fin: maço, mê, milo, bero, mila, waro, bera, miđyo, mênê, nîşore</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>VERB-Fin: mekiryo, mekiryoyç</li>
    </ul>
  </li>
</ul>


<h3>Pronouns, Determiners, Quantifiers</h3>


<ul>
  <li><a>PronType</a></li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>ADP: pa, powe, çî</li>
      <li>DET: a, î, îne, ana, ane, aneşa, ew, înem</li>
      <li>PRON: hinû, êđ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: beʕzêçiş, beʕzêş</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>DET: herçêşa</li>
      <li>PRON: çêş, çêşî</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>PRON: ħîç</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>PRON: ađ, ađê, ewêç, min, îđîçşa, ađî, ewî, wêşû</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
      <li>DET: girđ</li>
    </ul>
  </li>
</ul>



<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>PRON: wêşû</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>VERB-Fin: bilmê, bizanmê, ginmê</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>VERB-Fin: berî</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX-Fin: bo, ba, baw</li>
      <li>AUX-Part: bîyebê, bîyênêw</li>
      <li>VERB-Fin: maço, mê, milo, bero, mila, waro, bera, miđyo, mênê, nîşore</li>
      <li>VERB-Part: luwεnêrew, menênêw</li>
    </ul>
  </li>
</ul>




<h3>Other Features</h3>


<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus does not contain copulas.</li>
</ul>

<ul>
<li>This corpus uses 2 lemmas as auxiliaries (<a>aux</a>). Examples: bî, bîyê.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB-Fin--NOUN (13)</li>
      <li>VERB-Fin--NOUN-Nom (2)</li>
      <li>VERB-Fin--PRON (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB-Fin--NOUN (9)</li>
      <li>VERB-Fin--NOUN-Nom (2)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus does not use relation subtypes.</li>
<li>The following 20 relation types are not used in this corpus at all: <a>iobj</a>, <a>csubj</a>, <a>ccomp</a>, <a>vocative</a>, <a>expl</a>, <a>dislocated</a>, <a>advcl</a>, <a>cop</a>, <a>mark</a>, <a>nmod</a>, <a>appos</a>, <a>acl</a>, <a>clf</a>, <a>fixed</a>, <a>flat</a>, <a>compound</a>, <a>list</a>, <a>orphan</a>, <a>goeswith</a>, <a>reparandum</a></li>
</ul>
