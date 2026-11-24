---
layout: base
title:  'UD_Tigrinya-TiTB'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Tigrinya TiTB

Language: [Tigrinya](/ti/index.html) (code: `ti`)<br/>
Family: Afro-Asiatic

This treebank has been part of Universal Dependencies since the UD v2.19 release.

The following people have contributed to making this treebank part of UD: Nazareth Amlesom Kifle, Michael Gasser.

Repository: [UD_Tigrinya-TiTB](https://github.com/UniversalDependencies/UD_Tigrinya-TiTB)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udti_titb219)<br />
Download all treebanks: [UD 2.19](/#download)

License: CC BY-SA 4.0

Genre: grammar-examples

Questions, comments?
General annotation questions (either Tigrinya-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Tigrinya-TiTB/issues).
If you want to collaborate, please contact [nazareth&nbsp;•&nbsp;a&nbsp;•&nbsp;kifle&nbsp;(æt)&nbsp;hiof&nbsp;•&nbsp;no, onlyskybl&nbsp;(æt)&nbsp;gmail&nbsp;•&nbsp;com].
Development of the treebank happens directly in the UD repository, so you may submit bug fixes as pull requests against the dev branch.

| Annotation | Source |
|------------|--------|
| Lemmas | assigned by a program, with some manual corrections, but not a full manual verification |
| UPOS | assigned by a program, with some manual corrections, but not a full manual verification |
| XPOS | not available |
| Features | assigned by a program, with some manual corrections, but not a full manual verification |
| Relations | annotated manually, natively in UD style |

## Description

TiTB is a manually annotated Universal Dependencies treebank of Tigrinya, an Ethio-Semitic language spoken in Eritrea and northern Ethiopia. The sentences were constructed to cover the main morphosyntactic structures of Tigrinya and to illustrate the constructions described in the UD guidelines.



The Tigrinya Treebank (TiTB) is the first Universal Dependencies treebank of Tigrinya. It contains 221 sentences (1,287 tokens, 1,598 syntactic words) written in the Ge'ez script (called Ethiopic in Unicode).

The treebank consists of reference sentences constructed by the annotators. They were designed for two purposes: to cover the main morphosyntactic structures of Tigrinya, and to capture the syntactic constructions described in the UD guidelines, so that the treebank shows how each of these constructions is annotated in Tigrinya. The sentences therefore serve both as data and as a practical reference for the Tigrinya annotation guidelines.

Most sentences were first segmented and tagged automatically with a morphological analyser (HornMorpho), and then corrected and annotated manually in Arborator-Grew; the remaining sentences were annotated manually. The annotation covers word segmentation, lemmas, universal part-of-speech tags, morphological features and basic dependency relations.

Tokenization and word segmentation: Tigrinya orthographic words often contain several syntactic words. Prepositions written as prefixes, possessive suffixes, subordinating prefixes, negation affixes, the coordinating suffix -ን and enclitics are split off and represented as multiword tokens in the CoNLL-U files. Subject and object agreement and other verb morphology are not segmented.

Each surface token has a transliteration in the MISC column (Translit).

Detailed annotation guidelines are available in the Tigrinya UD documentation: https://universaldependencies.org/ti/index.html

## Acknowledgments

The work of Nazareth Amlesom Kifle on this treebank was carried out as part of her research time funded by Østfold University College (Høgskolen i Østfold), Norway.

## References

* Nazareth Amlesom Kifle. 2011. *Tigrinya Applicatives in Lexical-Functional Grammar*. PhD dissertation, University of Bergen. https://bora.uib.no/bora-xmlui/handle/1956/5730
* Michael Gasser. 2011. HornMorpho: a system for morphological processing of Amharic, Oromo, and Tigrinya. In *Proceedings of the Conference on Human Language Technology for Development*, pages 94–99, Alexandria, Egypt. Bibliotheca Alexandrina.
* Michael Gasser and Nazareth Amlesom Kifle. 2025. UD Annotation of Experience Clauses in Tigrinya. In *Proceedings of the Eighth International Conference on Dependency Linguistics (Depling, SyntaxFest 2025)*, pages 120–129, Ljubljana, Slovenia. Association for Computational Linguistics. https://aclanthology.org/2025.depling-1.12/
* Nazareth Amlesom Kifle and Michael Gasser. 2026. Clefting and beyond in Tigrinya. In *Proceedings of the Ninth Workshop on Universal Dependencies (UDW 2026)*, pages 54–59, Palma de Mallorca, Spain. ELRA Language Resources Association (ELRA). https://aclanthology.org/2026.udw-1.3/


# Statistics of UD Tigrinya TiTB

## POS Tags

[ADJ](ti_titb-pos-ADJ.html) – [ADP](ti_titb-pos-ADP.html) – [ADV](ti_titb-pos-ADV.html) – [AUX](ti_titb-pos-AUX.html) – [CCONJ](ti_titb-pos-CCONJ.html) – [DET](ti_titb-pos-DET.html) – [INTJ](ti_titb-pos-INTJ.html) – [NOUN](ti_titb-pos-NOUN.html) – [NUM](ti_titb-pos-NUM.html) – [PART](ti_titb-pos-PART.html) – [PRON](ti_titb-pos-PRON.html) – [PROPN](ti_titb-pos-PROPN.html) – [PUNCT](ti_titb-pos-PUNCT.html) – [SCONJ](ti_titb-pos-SCONJ.html) – [VERB](ti_titb-pos-VERB.html)

## Features

[Abbr](ti_titb-feat-Abbr.html) – [Aspect](ti_titb-feat-Aspect.html) – [Case](ti_titb-feat-Case.html) – [Definite](ti_titb-feat-Definite.html) – [ExtPos](ti_titb-feat-ExtPos.html) – [Gender](ti_titb-feat-Gender.html) – [Gender[app]](ti_titb-feat-Gender-app.html) – [Gender[obj]](ti_titb-feat-Gender-obj.html) – [Mood](ti_titb-feat-Mood.html) – [Number](ti_titb-feat-Number.html) – [Number[app]](ti_titb-feat-Number-app.html) – [Number[obj]](ti_titb-feat-Number-obj.html) – [NumType](ti_titb-feat-NumType.html) – [Person](ti_titb-feat-Person.html) – [Person[app]](ti_titb-feat-Person-app.html) – [Person[obj]](ti_titb-feat-Person-obj.html) – [Polarity](ti_titb-feat-Polarity.html) – [Poss](ti_titb-feat-Poss.html) – [PronType](ti_titb-feat-PronType.html) – [Reflex](ti_titb-feat-Reflex.html) – [Tense](ti_titb-feat-Tense.html) – [VerbForm](ti_titb-feat-VerbForm.html) – [Voice](ti_titb-feat-Voice.html)

## Relations

[acl](ti_titb-dep-acl.html) – [advcl](ti_titb-dep-advcl.html) – [advmod](ti_titb-dep-advmod.html) – [advmod:aff](ti_titb-dep-advmod-aff.html) – [amod](ti_titb-dep-amod.html) – [appos](ti_titb-dep-appos.html) – [aux](ti_titb-dep-aux.html) – [case](ti_titb-dep-case.html) – [case:pre](ti_titb-dep-case-pre.html) – [cc](ti_titb-dep-cc.html) – [ccomp](ti_titb-dep-ccomp.html) – [compound](ti_titb-dep-compound.html) – [compound:lvc](ti_titb-dep-compound-lvc.html) – [compound:redup](ti_titb-dep-compound-redup.html) – [conj](ti_titb-dep-conj.html) – [cop](ti_titb-dep-cop.html) – [csubj](ti_titb-dep-csubj.html) – [csubj:cleft](ti_titb-dep-csubj-cleft.html) – [csubj:outer](ti_titb-dep-csubj-outer.html) – [csubj:pass](ti_titb-dep-csubj-pass.html) – [det](ti_titb-dep-det.html) – [det:poss](ti_titb-dep-det-poss.html) – [discourse](ti_titb-dep-discourse.html) – [dislocated](ti_titb-dep-dislocated.html) – [fixed](ti_titb-dep-fixed.html) – [flat](ti_titb-dep-flat.html) – [iobj](ti_titb-dep-iobj.html) – [mark](ti_titb-dep-mark.html) – [nmod](ti_titb-dep-nmod.html) – [nsubj](ti_titb-dep-nsubj.html) – [nsubj:outer](ti_titb-dep-nsubj-outer.html) – [nsubj:pass](ti_titb-dep-nsubj-pass.html) – [nummod](ti_titb-dep-nummod.html) – [obj](ti_titb-dep-obj.html) – [obj:exp](ti_titb-dep-obj-exp.html) – [obj:poss](ti_titb-dep-obj-poss.html) – [obl](ti_titb-dep-obl.html) – [orphan](ti_titb-dep-orphan.html) – [parataxis](ti_titb-dep-parataxis.html) – [punct](ti_titb-dep-punct.html) – [root](ti_titb-dep-root.html) – [vocative](ti_titb-dep-vocative.html) – [xcomp](ti_titb-dep-xcomp.html) – [xcomp:pred](ti_titb-dep-xcomp-pred.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 221 sentences, 1287 tokens and 1598 syntactic words.</li>
</ul>

<ul>
<li>All tokens in this corpus are followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 3 types of words that contain both letters and punctuation. Examples: 'ቲ, 'ውን, ወ/ሮ</li>
</ul>

<ul>
<li>This corpus contains 265 multi-word tokens. On average, one multi-word token consists of 2.17 syntactic words.</li>
<li>There are 164 types of multi-word tokens. Examples: ነቲ, ክመጽእ, ዘስተውዓልኩዎ, ምዃና, ክትመጽእ, ዝሓሸ, ምዃኑ, ስርሐይ, ምበለኒ, ነዚ, ከምዝኾነት, ወደይ, ዝበጽሐ, ሓፍተይ, ምንባራ, ምዃኖም, ብኣውቶቡስ, ብእግርና, ብድሕሪት, ብጋህዲ, ነታ, ነቶም, ንኣልማዝ, ንኽምሃር, ንገዛ, ኣየቋረጸትን, ኣይሰለጠናን, እንተነይራ, እንተዝሳተፍ, ከምዘይርኣኻ, ከምዝነበረት, ከምጽእ, ካሕሳይን, ክመልስ, ክንሰምዕ, ክኸይድ, ወዳ, ዘሎ, ዘቐመጦ, ዘይምብሳል, ዘይምኽባር, ዘይምዃኑ, ዝመደብናዮ, ዝመጽእ, ዝኾነ, የብሉን, ሃይለን, ለቕሐይ, ሓወይ, ሓዉ.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 15 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>VERB</a></li>
<li>This corpus does not use the following tags: SYM, X</li>
</ul>

<ul>
<li>This corpus contains 12 word types tagged as particles (PART): ህድ, ርግእ, ስ, ስቕ, ቀስ, እንዶ, ክፍት, ውድእ, ደስ, ድንን, ዶ, ጽን</li>
</ul>

<ul>
<li>This corpus contains 10 lemmas tagged as pronouns (PRON): መን, ነብሲ, ናትኪ, ናቶም, ንሱ, ንሳ, ንስኺ, ኣታ, ኣነ, እዚ</li>
</ul>

<ul>
<li>This corpus contains 17 lemmas tagged as determiners (DET): ና, ናታ, አይ, ኡ, ኣ, ኣቱም, ኣየናይ, እተን, እቲ, እታ, እቶም, እዘን, እዚ, እዞም, ኦም, ካ, ኻ</li>
</ul>

<ul>
<li>Out of the above, 1 lemmas occurred sometimes as PRON and sometimes as DET: እዚ</li>
</ul>

<ul>
<li>This corpus contains 4 lemmas tagged as auxiliaries (AUX): ነበረ, ኣሎ, እዩ, ኮነ</li>
</ul>

<ul>
<li>Out of the above, 3 lemmas occurred sometimes as AUX and sometimes as VERB: ነበረ, ኣሎ, ኮነ</li>
</ul>

<ul>
<li>There are 2 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Conv
  <ul>
    <li>AUX: ነይሩ, ነይራ, ኰይና</li>
    <li>VERB: ነጊራትና, ፈሊጥና, ተቢዑ, ኢሉ, ሂቡዎ, መጺኡ, መጺኣ, ተሰሪዑ, ኢላ, ጠምዩዎ</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Vnoun
  <ul>
    <li>NOUN: ምዃን, ምኻድ, ምምካር, ምብሳል, ምንባር, ምክባር, ምሃብ, ምህላው, ምሕባእ, ምብካይ</li>
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
      <li>ADJ: ንፍዕቲ, ቀዳመይቲ, ክፍእቲ</li>
      <li>AUX: እያ, ነይራ, ኣላ, ኮነት, ነበረት, እየን, ኰይና</li>
      <li>AUX-Conv: ነይራ, ኰይና</li>
      <li>DET: ኣ, እታ, ናታ, እተን, እዘን</li>
      <li>NOUN: ሓፍቲ, ጓል, ሰበይቲ, ተመሃሪት, ጽሓይ</li>
      <li>PRON: ንሳ, ንስኺ, ናትኪ, ንዓኣ</li>
      <li>PROPN: ኣስቴር, ኣስመራ, ጽገወይኒ, ኣልማዝ, ጽሓይ</li>
      <li>VERB: ትመጽእ, ነጊራትና, ኣላ, ኢላ, መጺኣ, ትኸይድ, ኣላታ, ኣቋረጸት, ከይዳ, ኮነት</li>
      <li>VERB-Conv: ነጊራትና, መጺኣ, ኢላ, ተሓጒሳ, ተሲኣ, ነይራ, ኣምጺኣ, ከይዳ, ኮይና, ኰይና</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: ንፉዕ, ዓብይ</li>
      <li>AUX: እዩ, ኣሎ, ነይሩ, ኰይንካ, ነበረ, ኣይኮነን, እዮም, ኮይኑ, ኮይኖም, ይህሉ</li>
      <li>AUX-Conv: ነይሩ</li>
      <li>DET: እቲ, ኡ, 'ቲ, እዚ, እቶም, ኦም, ኣቱም, እዞም, ካ, ኻ</li>
      <li>NOUN: ሓው, ኣመሓዳሪ</li>
      <li>PRON: ንሱ, ከምኡ, ናብኡ, ናቶም, ኣታ, እዝ</li>
      <li>PROPN: ኣበበ, ካሌብ, ካሕሳይ</li>
      <li>VERB: ይመጽእ, ሓሸ, ሕተታ, ኣሎ, ኢሉ, ሂቡዋ, መጺኡ, በለኒ, በጽሐ, ተቢዑ</li>
      <li>VERB-Conv: ተቢዑ, ኢሉ, ሂቡዎ, መጺኡ, ተሰሪዑ, ጠምዩዎ, ጠፊኡ, መጺኦም, ሞይቱዋ, ርእዩ</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: ሃብታማት, ፍሉጣት</li>
      <li>AUX: ኢና, እየን, እዮም, ኮይኖም</li>
      <li>DET: ና, እቶም, እተን, ኦም, ኣቱም, እዘን, እዞም</li>
      <li>NOUN: ሰባት, ሕጕሳት, ልብታት, ሕቶታት, ተመሃሮ, ትካላት, ነገር, ከብቲ, ከተማታት, ጭብጥታት</li>
      <li>PRON: ናቶም</li>
      <li>VERB: ፈሊጥና, ንኺድ, ከይዶም, ይመጹ, መደብናዮ, ንሰምዕ, እፈቱ, መልሱ, መጺኦም, ተሃዊኽና</li>
      <li>VERB-Conv: ፈሊጥና, መጺኦም, ተሃዊኽና, ተፋቒሮም, ኢልና</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: ጽቡቕ, ሃብታም, ፍጹም, ቅቡል, ንፉዕ, ካልእ, ሓበጀራይ, ሓጺር, ሓፋር, ሕማቕ</li>
      <li>AUX: እዩ, እየ, ኣሎ, ነይሩ, እያ, ኰይንካ, ነበረ, ነይራ, ኣላ, ኣይኮነን</li>
      <li>AUX-Conv: ነይሩ, ነይራ, ኰይና</li>
      <li>DET: እቲ, አይ, ኡ, ኣ, 'ቲ, እዚ, እታ, ናታ, ኣየናይ, ካ</li>
      <li>NOUN: ገዛ, ወዲ, ሰብ, ትምህርቲ, ምዃን, ስራሕ, ቤት, ገንዘብ, ጸገም, መጽሓፍ</li>
      <li>NOUN-Vnoun: ምዃን, ምኻድ, ምምካር, ምብሳል, ምንባር, ምክባር, ምሃብ, ምህላው, ምሕባእ, ምብካይ</li>
      <li>NUM: ሓደ, ሽሕ, ክልተ</li>
      <li>PRON: ንሳ, ንሱ, ኣነ, ከምኡ, ንስኺ, ናብኡ, ናትኪ, ንዓኣ, ኣታ, እዝ</li>
      <li>PROPN: ኣስቴር, ካሕሳይ, ጅማ, ኣበበ, ኣልማዝ, ኪዳነ, ካሌብ, ሃይለ, ኣስመራ, ኣፍሪቃ</li>
      <li>VERB: ይመጽእ, ትመጽእ, ነጊራትና, ኣስተውዓልኩዎ, ኣላ, ሓሸ, ሕተታ, ኣሎ, ኢሉ, ሂቡዋ</li>
      <li>VERB-Conv: ነጊራትና, ተቢዑ, ኢሉ, ሂቡዎ, መጺኡ, መጺኣ, ተሰሪዑ, ኢላ, ጠምዩዎ, ጠፊኡ</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>PRON: ንዓኣ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>All
    <ul>
      <li>PRON: ናብኡ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Equ
    <ul>
      <li>PRON: ከምኡ</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>DET: እቲ</li>
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
      <li>ADV: ኣይ, ን, ዘይ</li>
      <li>AUX: ኣይኮነን</li>
      <li>VERB: የለ</li>
    </ul>
  </li>
</ul>


<h3>Verbal Features</h3>


<ul>
  <li><a>Aspect</a></li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX: ይህሉ, ይኸውን</li>
      <li>VERB: ይመጽእ, ትመጽእ, የምጽእ, ይመጹ, ይሳተፍ, ትኸይድ, ንሰምዕ, ይመሃር, ይመልስ, ይምሃር</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Perf
    <ul>
      <li>AUX: ኰይንካ, ኮነት, ነበረት, ኮይኑ, ኮይኖም</li>
      <li>VERB: ኣስተውዓልኩዎ, ሓሸ, ሂቡዋ, በለኒ, በጽሐ, ከይዶም, መደብናዮ, ርኣኻ, ሰለጠና, ሰቢሩ</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>VERB: ሕተታ, እፈቱ, ጸውዓዮ, ሓብሮ, መልሱ, ተጸበዮ, ኣጋዝእኒ, እተዉ, ውሰድ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>VERB: ይነብሕ, ደቀሰ, ጠምዩ, ጠምያ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Jus
    <ul>
      <li>VERB: ንኺድ, ትምጻእ, ትኺድ, እንበል, ይስማዕ, ይኹን</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX: ነይሩ, ነበረ, ነይራ, ነበረት</li>
      <li>AUX-Conv: ነይሩ, ነይራ</li>
      <li>VERB: ነበረት, ነበራ, ነይራ</li>
      <li>VERB-Conv: ነይራ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX: እዩ, እየ, ኣሎ, እያ, ኣላ, ኣይኮነን, ኢና, እየን, እዮም</li>
      <li>VERB: ኣላ, ኣሎ, ኣለና, ኣለዋ, ኣላታ, የብሉ, የለ</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Cau
    <ul>
      <li>VERB: ኣስተውዓልኩዎ, የምጽእ, ኣቋረጸት, ኣቐመጦ, ኣእትዩዎ, ኣሕዚኑና, ኣሕዚኑዋ, ኣሕጒሱዎ, ኣምጺኣ, ኣስሪሐዮ</li>
      <li>VERB-Conv: ኣሕዚኑና, ኣሕጒሱዎ, ኣምጺኣ, ኣቢለ, ኣቢሉ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>VERB: ተሰሪዑ, ተፈሊጡ, ይመሃር, ይምሃር, ተሃዊኽና, ተሓጒሳ, ተሰሚዑ, ተሰቢሩ, ተሰብሩ, ተቐይሩ</li>
      <li>VERB-Conv: ተሰሪዑ, ተሃዊኽና, ተሓጒሳ, ተቐይሩ, ተጠቒመ, ተፈሊጡ, ተፋቒሮም</li>
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
      <li>DET: እቲ, 'ቲ, እታ, እቶም, እተን, እዞም</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>DET: እዚ, ኣቱም, እዘን</li>
      <li>PRON: ኣታ, እዝ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>ADV: ኣበይ</li>
      <li>DET: ኣየናይ</li>
      <li>PRON: መን</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>DET: አይ, ኡ, ኣ, ና, ናታ, ኦም, ካ, ኻ</li>
      <li>PRON: ንሳ, ንሱ, ኣነ, ከምኡ, ንስኺ, ነብሲ, ናብኡ, ናትኪ, ናቶም, ንዓኣ</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>ADJ: ቀዳመይቲ</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>DET: አይ, ኡ, ኣ, ና, ናታ, ኦም, ካ, ኻ</li>
      <li>PRON: ናትኪ, ናቶም</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>PRON: ነብሲ</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX: እየ, ኢና</li>
      <li>DET: አይ, ና</li>
      <li>PRON: ኣነ</li>
      <li>VERB: ፈሊጥና, ኣስተውዓልኩዎ, ይመጽእ, ንኺድ, የምጽእ, ይሳተፍ, መደብናዮ, ንሰምዕ, ይመልስ, ይኸይድ</li>
      <li>VERB-Conv: ፈሊጥና, ተሃዊኽና, ተጠቒመ, ኢልና, ኣቢለ, ወዲአ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX: ኰይንካ</li>
      <li>DET: ኣቱም, ካ, ኻ</li>
      <li>PRON: ንስኺ, ናትኪ, ኣታ</li>
      <li>VERB: ሕተታ, ርኣኻ, እፈቱ, ጸውዓዮ, ሓብሮ, መልሱ, ረኣኻ, ተጸበዮ, ትኺድ, ኢልካ</li>
      <li>VERB-Conv: ኢልካ, ከይድካ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX: እዩ, ኣሎ, ነይሩ, እያ, ነበረ, ነይራ, ኣላ, ኣይኮነን, ኮነት, ነበረት</li>
      <li>AUX-Conv: ነይሩ, ነይራ, ኰይና</li>
      <li>DET: ኡ, ኣ, ናታ, ኦም</li>
      <li>PRON: ንሳ, ንሱ, ከምኡ, ናብኡ, ናቶም, ንዓኣ</li>
      <li>VERB: ይመጽእ, ትመጽእ, ነጊራትና, ኣላ, ሓሸ, ኣሎ, ኢሉ, ሂቡዋ, መጺኡ, በለኒ</li>
      <li>VERB-Conv: ነጊራትና, ተቢዑ, ኢሉ, ሂቡዎ, መጺኡ, መጺኣ, ተሰሪዑ, ኢላ, ጠምዩዎ, ጠፊኡ</li>
    </ul>
  </li>
</ul>




<h3>Other Features</h3>


<ul>
  <li><a>Abbr</a>
    <ul>
      <li>Yes
        <ul>
          <li>NOUN: ወ/ሮ</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>ExtPos</a>
    <ul>
      <li>DET
        <ul>
          <li>SCONJ: ዝ</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Gender[app]</a>
    <ul>
      <li>Masc
        <ul>
          <li>VERB: ሰትዩሉ, ገዚአሉ</li>
          <li>VERB-Conv: ሰትዩሉ</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Gender[obj]</a>
    <ul>
      <li>Fem
        <ul>
          <li>VERB: ሕተታ, ሂቡዋ, ኣለዋ, ኣላታ, ሞይቱዋ, ቀሊዑዋ, ነበራ, ኣሕዚኑዋ, ይወስዳ, ደኺሙዋ</li>
          <li>VERB-Conv: ሞይቱዋ, ቀሊዑዋ</li>
        </ul>
      </li>
      <li>Masc
        <ul>
          <li>VERB: ኣስተውዓልኩዎ, ሂቡዎ, መደብናዮ, ሰቢሩዎ, ኣቐመጦ, ኣእትዩዎ, የብሉ, ጠምዩዎ, ጸውዓዮ, ሓብሮ</li>
          <li>VERB-Conv: ሂቡዎ, ጠምዩዎ, ርእዩዎ, ሰሪሑዎ, ኣሕጒሱዎ</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Number[app]</a>
    <ul>
      <li>Sing
        <ul>
          <li>VERB: ሓልፈለይ, ሰትዩሉ, ገዚአሉ</li>
          <li>VERB-Conv: ሰትዩሉ</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Number[obj]</a>
    <ul>
      <li>Plur
        <ul>
          <li>VERB: ነጊራትና, ኣለና, ሰለጠና, ረኸብክዎም, ኣሕዚኑና, ኣዚዙዎም, ኣገሪሙና, ይሕጎስኦም, ይርድእና</li>
          <li>VERB-Conv: ነጊራትና, ኣሕዚኑና</li>
        </ul>
      </li>
      <li>Sing
        <ul>
          <li>VERB: ኣስተውዓልኩዎ, ሕተታ, ሂቡዋ, በለኒ, ሂቡዎ, መደብናዮ, ሰቢሩዎ, ኣለዋ, ኣላታ, ኣቐመጦ</li>
          <li>VERB-Conv: ሂቡዎ, ጠምዩዎ, ሞይቱዋ, ርእዩዎ, ሰሪሑዎ, ቀሊዑዋ, ኣሕጒሱዎ</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person[app]</a>
    <ul>
      <li>1
        <ul>
          <li>VERB: ሓልፈለይ</li>
        </ul>
      </li>
      <li>3
        <ul>
          <li>VERB: ሰትዩሉ, ገዚአሉ</li>
          <li>VERB-Conv: ሰትዩሉ</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person[obj]</a>
    <ul>
      <li>1
        <ul>
          <li>VERB: ነጊራትና, በለኒ, ኣለና, ሰለጠና, ሒሙኒ, ተረደአን, ተኸፍለኒ, ኣሕዚኑና, ኣገሪሙና, ኣጋዝእኒ</li>
          <li>VERB-Conv: ነጊራትና, ኣሕዚኑና</li>
        </ul>
      </li>
      <li>3
        <ul>
          <li>VERB: ኣስተውዓልኩዎ, ሕተታ, ሂቡዋ, ሂቡዎ, መደብናዮ, ሰቢሩዎ, ኣለዋ, ኣላታ, ኣቐመጦ, ኣእትዩዎ</li>
          <li>VERB-Conv: ሂቡዎ, ጠምዩዎ, ሞይቱዋ, ርእዩዎ, ሰሪሑዎ, ቀሊዑዋ, ኣሕጒሱዎ</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 3 lemmas as copulas (<a>cop</a>). Examples: እዩ, ነበረ, ኮነ.</li>
</ul>

<ul>
<li>This corpus uses 4 lemmas as auxiliaries (<a>aux</a>). Examples: እዩ, ኣሎ, ነበረ, ኮነ.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (23)</li>
      <li>VERB--PRON (11)</li>
      <li>VERB-Conv--NOUN (9)</li>
      <li>VERB-Conv--PRON (3)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (39)</li>
      <li>VERB-Conv--NOUN (13)</li>
      <li>VERB-Conv--PRON (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--NOUN (2)</li>
      <li>VERB-Conv--NOUN (2)</li>
    </ul>
  </li>
</ul>



<h3>Verbs with Reflexive Core Objects</h3>

<ul>
  <li>This corpus contains 1 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: ርኣየ ነብሲ</li>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 13 relation subtypes: <a>advmod:aff</a>, <a>case:pre</a>, <a>compound:lvc</a>, <a>compound:redup</a>, <a>csubj:cleft</a>, <a>csubj:outer</a>, <a>csubj:pass</a>, <a>det:poss</a>, <a>nsubj:outer</a>, <a>nsubj:pass</a>, <a>obj:exp</a>, <a>obj:poss</a>, <a>xcomp:pred</a></li>
<li>The following 6 relation types are not used in this corpus at all: <a>expl</a>, <a>clf</a>, <a>list</a>, <a>goeswith</a>, <a>reparandum</a>, <a>dep</a></li>
</ul>
