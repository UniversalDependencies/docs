---
layout: base
title:  'UD_Nenets-Tundra'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Nenets Tundra

Language: [Nenets](/yrk/index.html) (code: `yrk`)<br/>
Family: Uralic

This treebank has been part of Universal Dependencies since the UD v2.16 release.

The following people have contributed to making this treebank part of UD: Morgane Bona, Bruno Guillaume, Sylvain Kahane, Aleksandra Miletić, Nikolett Mus, Daniel Zeman.

Repository: [UD_Nenets-Tundra](https://github.com/UniversalDependencies/UD_Nenets-Tundra)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udyrk_tundra218)<br />
Download all treebanks: [UD 2.18](/#download)

License: CC BY-SA 4.0

Genre: spoken

Questions, comments?
General annotation questions (either Nenets-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Nenets-Tundra/issues).
If you want to collaborate, please contact [mus&nbsp;•&nbsp;nikolett&nbsp;(æt)&nbsp;gmail&nbsp;•&nbsp;com].
Development of the treebank happens directly in the UD repository, so you may submit bug fixes as pull requests against the dev branch.

| Annotation | Source |
|------------|--------|
| Lemmas | annotated manually |
| UPOS | annotated manually, natively in UD style |
| XPOS | not available |
| Features | annotated manually, natively in UD style |
| Relations | annotated manually, natively in UD style |

## Description

The Tundra Nenets UD treebank is converted from the [Tundra Nenets mSUD treebank](https://github.com/surfacesyntacticud/mSUD_Nenets-Tundra). The conversion from mSUD to UD is performed automatically followed by a comprehensive manual revision to ensure compliance with the UD annotation standards.



The treebank currently comprises 171 manually annotated sentences (approximately 11 minutes of recorded speech). The data were collected during a fieldwork session conducted in Moscow in 2017 with a native speaker of Tundra Nenets (Yamal dialect). The session elicited semi-spontaneous speech through visual stimulus–based tasks, including a modified version of the [HCRC Map Task] (https://groups.inf.ed.ac.uk/maptask/maptasknxt.html) and the the so-called Pear Story narrative task (Chafe, 1980).

The spoken data were transcribed by the native speaker using standard Tundra Nenets orthography rather than phonetic or IPA-based notation. Sentence segmentation builds on the original transcription and follows a combined prosodic and semantic approach, in which intonational boundaries are treated as sentence boundaries only when they correspond to semantically complete units; otherwise, adjacent material is merged. The recordings were manually time-aligned at both sentence and lexeme levels in Praat to support morphological and syntactic analysis. The transcription reflects normalized forms and does not capture phonetic variation or morphophonological processes (e.g. sandhi), although the audio data are available for reference.

Annotation focuses on spoken-language phenomena relevant to word-level analysis, especially word boundary identification. An inductive approach was adopted, identifying recurrent phenomena in the data and assigning dedicated tags, informed by spoken UD practices and adapted to the typological properties of Tundra Nenets. The dataset consists mainly of narrative monologues and lacks interactional features such as overlap. Spoken phenomena are divided into non-lexical items (e.g. noises, pauses, hesitation markers), assigned discourse relations, and lexical disruptions (e.g. unfinished words, false starts, repetitions), which affect syntactic structure; pauses are treated either as punctuation or discourse elements depending on function.

Lemmatization preserves dialectal variation due to the absence of a unified written standard. Only inflectional morphology is segmented from stems, while derivational morphology is retained; inflectional suffixes remain in their surface forms, and linking vowels are treated as part of the stem. POS tagging and morphological analysis were performed manually, with inflectional features segmented and glossed following established descriptive traditions and a tagset based on the Leipzig Glossing Rules, adapted to Tundra Nenets.

To account for its complex morphology and syntactic encoding, annotation is based on the morphologically enhanced Surface-Syntactic Universal Dependencies (mSUD) framework (Guillaume et al., 2024). Within the UniDive COST Action (CA21167), UD is extended with a layer for Information Structure roles (e.g. topic and focus). In Tundra Nenets, topicality is reflected in agreement: when a verb agrees with a topical object, the object is annotated as ISRole=Top and the corresponding verbal agreement as ISMarker[Top]=Agr.

The original Cyrillic transcription was transliterated into Latin script, taking into account language-specific properties. Conversion from mSUD to UD is performed in two stages, first from mSUD to SUD and then from SUD to UD, using iteratively applied Grew (Guillaume, 2021) rules.

This treebank is described in detail in Mus et al. (2025), where further information on annotation decisions and linguistic analysis can be found.

## Acknowledgments

The development of this treebank was supported by two research projects: Autogramm: Induction of Descriptive Grammar from Annotated Corpora (ANR-21-CE38-0017), and ThEA: Theoretical and Experimental Approaches to Dialectal Variation and Contact-Induced Change – A Case Study of Tundra Nenets (NKFIH FK 129235). These projects contributed to both the data collection and the creation of the treebank. In addition, this work was supported by COST Action CA21167 —Universality, diversity and idiosyncrasy in language technology ([UniDive](https://unidive.lisn.upsaclay.fr/)).

## References
Chafe, Wallace L. (ed.) 1980. _The pear stories: Cognitive, cultural, and linguistic aspects of narrative production. Advances in Discourse Processes_, vol. III. Ablex, Norwood, NJ, USA.

Guillaume, Bruno. 2021. Graph matching and graph rewriting: GREW tools for corpus exploration, maintenance and conversion. In _Proceedings of the 16th Conference of the European Chapter of the Association for Computational Linguistics: System Demonstrations_, pp. 168–175, Online. Association for Computational Linguistics.

Guillaume, Bruno, Gerdes, Kim, Guiller, Kirian, Kahane, Sylvain and Li, Yixuan. 2024. Joint annotation of morphology and syntax in dependency treebanks. In _Proceedings of the 2024 Joint International Conference on Computational Linguistics, Language Resources and Evaluation_ (LREC-COLING 2024), pp. 9568–9577, Torino, Italia. ELRA and ICCL.

Mus, Nikolett, Guillaume, Bruno, Kahane, Sylvain and Zeman, Daniel. 2025. Creating a multi-layer Treebank for Tundra Nenets. In _Proceedings of the 10th International Workshop on Computational Linguistics for Uralic Languages_, pp. 77-86. 2025.



# Statistics of UD Nenets Tundra

## POS Tags

[ADJ](yrk_tundra-pos-ADJ.html) – [ADP](yrk_tundra-pos-ADP.html) – [ADV](yrk_tundra-pos-ADV.html) – [AUX](yrk_tundra-pos-AUX.html) – [DET](yrk_tundra-pos-DET.html) – [INTJ](yrk_tundra-pos-INTJ.html) – [NOUN](yrk_tundra-pos-NOUN.html) – [NUM](yrk_tundra-pos-NUM.html) – [PRON](yrk_tundra-pos-PRON.html) – [PUNCT](yrk_tundra-pos-PUNCT.html) – [VERB](yrk_tundra-pos-VERB.html) – [X](yrk_tundra-pos-X.html)

## Features

[Number](yrk_tundra-feat-Number.html) – [Person](yrk_tundra-feat-Person.html) – [PronType](yrk_tundra-feat-PronType.html) – [VerbForm](yrk_tundra-feat-VerbForm.html)

## Relations

[acl](yrk_tundra-dep-acl.html) – [advcl](yrk_tundra-dep-advcl.html) – [advmod](yrk_tundra-dep-advmod.html) – [amod](yrk_tundra-dep-amod.html) – [aux](yrk_tundra-dep-aux.html) – [case](yrk_tundra-dep-case.html) – [ccomp](yrk_tundra-dep-ccomp.html) – [cop](yrk_tundra-dep-cop.html) – [csubj](yrk_tundra-dep-csubj.html) – [dep](yrk_tundra-dep-dep.html) – [det](yrk_tundra-dep-det.html) – [discourse](yrk_tundra-dep-discourse.html) – [mark](yrk_tundra-dep-mark.html) – [nmod](yrk_tundra-dep-nmod.html) – [nmod:poss](yrk_tundra-dep-nmod-poss.html) – [nsubj](yrk_tundra-dep-nsubj.html) – [nsubj:outer](yrk_tundra-dep-nsubj-outer.html) – [nummod](yrk_tundra-dep-nummod.html) – [obj](yrk_tundra-dep-obj.html) – [obl:mod](yrk_tundra-dep-obl-mod.html) – [parataxis](yrk_tundra-dep-parataxis.html) – [punct](yrk_tundra-dep-punct.html) – [reparandum](yrk_tundra-dep-reparandum.html) – [root](yrk_tundra-dep-root.html) – [vocative](yrk_tundra-dep-vocative.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 170 sentences and 1272 tokens.</li>
</ul>

<ul>
<li>All tokens in this corpus are followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 22 types of words that contain both letters and punctuation. Examples: ӈацекэко?мэ?, ӈацекэр?мэ?, <f>тохо', <un>?хан?, ?таремʼ?, ?ёсь?, велосипед?мэ?, велосипедам', грушамда?мэ?, грушидам', иня_няӈыʼ, маˮламбада?мэ?, мюд?, нида?мэ?, тикандоʼ?мэ?, тохо', тяхана?мэ?, ха"маэм, хасава?ва?, Ӈоб?мэ?, ӈацекэкоʼ?мэ?, ӈопой?мэ?</li>
</ul>

<ul>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 12 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PRON</a>, <a>PUNCT</a>, <a>VERB</a>, <a>X</a></li>
<li>This corpus does not use the following tags: PROPN, SCONJ, CCONJ, PART, SYM</li>
</ul>

<ul>
</ul>

<ul>
<li>This corpus contains 9 lemmas tagged as pronouns (PRON): _, нер-, няби, нянда, та, тикы, тюку, харта, ӈамгэ</li>
</ul>

<ul>
<li>This corpus contains 4 lemmas tagged as determiners (DET): <p>, няби, ханяӈыˮ, ӈаниʼ</li>
</ul>

<ul>
<li>Out of the above, 1 lemmas occurred sometimes as PRON and sometimes as DET: няби</li>
</ul>

<ul>
<li>This corpus contains 3 lemmas tagged as auxiliaries (AUX): ни, тара, ӈa</li>
</ul>

<ul>
<li>Out of the above, 1 lemmas occurred sometimes as AUX and sometimes as VERB: ӈa</li>
</ul>

<ul>
<li>There are 1 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Conv
  <ul>
    <li>VERB: ӈохолё, мада, пыдабтамба</li>
  </ul>
  </li>
</ul>

<h3>Nominal Features</h3>




<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>PRON: ваˮ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADP: нерни, нерниʼ, нянда</li>
      <li>AUX: тара, ӈэвы</li>
      <li>NOUN: марядʼ, махалэянда, нёнда, тарканда, сидеранда, харданда, <er>марядʼ, нёнд<un>, сэвˮни, таркахаюта</li>
      <li>PRON: нерниʼ</li>
      <li>VERB: таня, миманиʼ, танявыˮ, танявэхэˮ, ядваниʼ, яӈговы</li>
    </ul>
  </li>
</ul>




<h3>Degree and Polarity</h3>





<h3>Verbal Features</h3>







<h3>Pronouns, Determiners, Quantifiers</h3>


<ul>
  <li><a>PronType</a></li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>PRON: тикы, тикар, та, тика, тюку</li>
    </ul>
  </li>
</ul>




<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>ADP: нерни, нерниʼ</li>
      <li>NOUN: сэвˮни</li>
      <li>PRON: ваˮ, нерниʼ</li>
      <li>VERB: миманиʼ, ядваниʼ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>NOUN: марядʼ, <er>марядʼ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>ADP: нянда</li>
      <li>AUX: тара, ӈэвы</li>
      <li>NOUN: махалэянда, нёнда, тарканда, сидеранда, харданда, нёнд<un>, таркахаюта, хэвувнанда, ядувнанда</li>
      <li>VERB: таня, танявыˮ, танявэхэˮ, яӈговы</li>
    </ul>
  </li>
</ul>




<h3>Other Features</h3>


<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 1 lemmas as copulas (<a>cop</a>). Examples: ӈa.</li>
</ul>

<ul>
<li>This corpus uses 3 lemmas as auxiliaries (<a>aux</a>). Examples: ни, тара, ӈa.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (38)</li>
      <li>VERB--PRON (2)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (74)</li>
      <li>VERB--PRON (1)</li>
      <li>VERB-Conv--NOUN (2)</li>
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
<li>This corpus uses 3 relation subtypes: <a>nmod:poss</a>, <a>nsubj:outer</a>, <a>obl:mod</a></li>
<li>The following 1 main types are not used alone, they are always subtyped: <a>obl</a></li>
<li>The following 14 relation types are not used in this corpus at all: <a>iobj</a>, <a>xcomp</a>, <a>expl</a>, <a>dislocated</a>, <a>appos</a>, <a>clf</a>, <a>conj</a>, <a>cc</a>, <a>fixed</a>, <a>flat</a>, <a>compound</a>, <a>list</a>, <a>orphan</a>, <a>goeswith</a></li>
</ul>
