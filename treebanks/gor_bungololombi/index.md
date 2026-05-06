---
layout: base
title:  'UD_Gorontalo-BungoLoLombi'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Gorontalo BungoLoLombi

Language: [Gorontalo](/gor/index.html) (code: `gor`)<br/>
Family: Austronesian

This treebank has been part of Universal Dependencies since the UD v2.18 release.

The following people have contributed to making this treebank part of UD: Andrew Thomas Dyer, Colleen Alena O'Brien.

Repository: [UD_Gorontalo-BungoLoLombi](https://github.com/UniversalDependencies/UD_Gorontalo-BungoLoLombi)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udgor_bungololombi218)<br />
Download all treebanks: [UD 2.18](/#download)

License: CC BY-SA 4.0

Genre: grammar-examples

Questions, comments?
General annotation questions (either Gorontalo-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Gorontalo-BungoLoLombi/issues).
If you want to collaborate, please contact [andrew&nbsp;•&nbsp;dyer&nbsp;(æt)&nbsp;uni-saarland&nbsp;•&nbsp;de].
Development of the treebank happens directly in the UD repository, so you may submit bug fixes as pull requests against the dev branch.

| Annotation | Source |
|------------|--------|
| Lemmas | annotated manually |
| UPOS | annotated manually, natively in UD style |
| XPOS | not available |
| Features | annotated manually, natively in UD style |
| Relations | annotated manually, natively in UD style |

## Description

Bungo lo Lombi is a Universal Dependencies parsed corpus of modern spoken Gorontalo as spoken in Gorontalo City, Gorontalo Province, Indonesia. It comprises fieldwork samples obtained by Colleen Alena O'Brien.



Bungo lo Lombi is a corpus of modern spoken Gorontalo as spoken in Gorontalo City, Gorontalo Province, Indonesia. It comprises fieldwork samples obtained by Colleen Alena O'Brien. The complete data contains elicited examples and monologue and dialogue. At the moment, only elicited examples have been parsed.

The parsed data is different from other Austronesian languages in Universal Dependencies in the following ways:
* Dependency relations for core arguments use semantic sublabels in all verb phrases with voice-marking, e.g. _nsubj:actor_, _obj:patient_, _obj:agent_, etc. In this way, no voice is treated as default.
* Some feature values are replaced, e.g. `Voice=Pat` for patient voice instead of `Voice=Pass`. We refer to the paper in the README for more details. In practice, these new values can be losslessly mapped back to pre-existing ones in order to share labels with other corpora.

The name Bungo lo Lombi means "banana tree" in Gorontalo: a very useful, very versatile tree that provides a valuable fruit.

## Acknowledgments

* Key elicitation examples and explanations provided by Novi Usu.

## References

Cite as:

```
@inproceedings{dyer-obrien-2025-towards,
title = "Towards better annotation practices for symmetrical voice in {U}niversal {D}ependencies",
author = "Dyer, Andrew Thomas and
O{'}Brien, Colleen Alena",
editor = {Bouma, Gosse and
{\c{C{% raw %}}}{% endraw %}{\"o}ltekin, {\c{C{% raw %}}}{% endraw %}a{\u{g{% raw %}}}{% endraw %}r{\i{% raw %}}}{% endraw %},
booktitle = "Proceedings of the Eighth Workshop on Universal Dependencies (UDW, SyntaxFest 2025)",
month = aug,
year = "2025",
address = "Ljubljana, Slovenia",
publisher = "Association for Computational Linguistics",
url = "https://aclanthology.org/2025.udw-1.15/",
pages = "137--142",
ISBN = "979-8-89176-292-3",
abstract = "Austronesian languages exhibit features that are challenging for Universal Dependencies: most notably, the symmetric voice system, whereby agent, patient, and instrumental arguments (among others) can be the pivot of a transitive structure {--} complicating the usual assumption that subjects of transitive sentences are semantic agents, and objects semantic patients. To showcase our ideas of how to address the representation of such systems in Universal Dependencies, we introduce a small treebank of sentences from texts and elicitation sessions in Gorontalo, an Austronesian language of Sulawesi (Indonesia), which exhibits a Philippine-type voice system. We discuss the annotation guidelines for this language, and the extensions of the Universal Dependencies guidelines that are needed to accommodate this and other Austronesian languages."
}
```
Andrew Thomas Dyer and Colleen Alena O’Brien. 2025. Towards better annotation practices for symmetrical voice in Universal Dependencies. In Proceedings of the Eighth Workshop on Universal Dependencies (UDW, SyntaxFest 2025), pages 137–142, Ljubljana, Slovenia. Association for Computational Linguistics.


# Statistics of UD Gorontalo BungoLoLombi

## POS Tags

[ADJ](gor_bungololombi-pos-ADJ.html) – [ADP](gor_bungololombi-pos-ADP.html) – [ADV](gor_bungololombi-pos-ADV.html) – [CCONJ](gor_bungololombi-pos-CCONJ.html) – [DET](gor_bungololombi-pos-DET.html) – [NOUN](gor_bungololombi-pos-NOUN.html) – [NUM](gor_bungololombi-pos-NUM.html) – [PART](gor_bungololombi-pos-PART.html) – [PRON](gor_bungololombi-pos-PRON.html) – [PROPN](gor_bungololombi-pos-PROPN.html) – [VERB](gor_bungololombi-pos-VERB.html)

## Features

[Aspect](gor_bungololombi-feat-Aspect.html) – [Case](gor_bungololombi-feat-Case.html) – [Gender](gor_bungololombi-feat-Gender.html) – [Mood](gor_bungololombi-feat-Mood.html) – [Number](gor_bungololombi-feat-Number.html) – [Person](gor_bungololombi-feat-Person.html) – [PronType](gor_bungololombi-feat-PronType.html) – [Voice](gor_bungololombi-feat-Voice.html)

## Relations

[advmod](gor_bungololombi-dep-advmod.html) – [amod](gor_bungololombi-dep-amod.html) – [case](gor_bungololombi-dep-case.html) – [cc](gor_bungololombi-dep-cc.html) – [clf](gor_bungololombi-dep-clf.html) – [compound:redup](gor_bungololombi-dep-compound-redup.html) – [conj](gor_bungololombi-dep-conj.html) – [dep](gor_bungololombi-dep-dep.html) – [det](gor_bungololombi-dep-det.html) – [iobj:instrument](gor_bungololombi-dep-iobj-instrument.html) – [iobj:patient](gor_bungololombi-dep-iobj-patient.html) – [nmod](gor_bungololombi-dep-nmod.html) – [nmod:poss](gor_bungololombi-dep-nmod-poss.html) – [nsubj](gor_bungololombi-dep-nsubj.html) – [nsubj:agent](gor_bungololombi-dep-nsubj-agent.html) – [nsubj:instrument](gor_bungololombi-dep-nsubj-instrument.html) – [nsubj:patient](gor_bungololombi-dep-nsubj-patient.html) – [nummod](gor_bungololombi-dep-nummod.html) – [obj:agent](gor_bungololombi-dep-obj-agent.html) – [obj:patient](gor_bungololombi-dep-obj-patient.html) – [obl](gor_bungololombi-dep-obl.html) – [root](gor_bungololombi-dep-root.html) – [xcomp](gor_bungololombi-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 39 sentences and 205 tokens.</li>
</ul>

<ul>
<li>All tokens in this corpus are followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 7 types of words that contain both letters and punctuation. Examples: hiyo-hiyongo, lo-pomulo, lo-tubu, mo’opotala, pilo-pomulo, pilo-tubu, pilotubu'u</li>
</ul>

<ul>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 11 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>CCONJ</a>, <a>DET</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>VERB</a></li>
<li>This corpus does not use the following tags: AUX, SCONJ, INTJ, SYM, PUNCT, X</li>
</ul>

<ul>
<li>This corpus contains 1 word types tagged as particles (PART): mayi</li>
</ul>

<ul>
<li>This corpus contains 4 lemmas tagged as pronouns (PRON): ami, liyo, tiyo, wau</li>
</ul>

<ul>
<li>This corpus contains 1 lemmas tagged as determiners (DET): boyito</li>
</ul>

<ul>
</ul>

<ul>
<li>This corpus contains 0 lemmas tagged as auxiliaries (AUX): </li>
</ul>

<ul>
</ul>

<ul>
<li>This corpus does not use the VerbForm feature.</li>
</ul>

<h3>Nominal Features</h3>


<ul>
  <li><a>Gender</a></li>
</ul>

<ul>
  <li>Fem
    <ul>
      <li>ADP: li, Ti</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADP: Te, le</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>NOUN: mongololai</li>
      <li>PRON: Ami</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>PRON: wau, Tiyo, liyo</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>ADP: lo, le, li</li>
      <li>PRON: liyo</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>PRON: Ami, Tiyo</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Npiv
    <ul>
      <li>ADP: lo, li, le</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Piv
    <ul>
      <li>ADP: Ti, Te</li>
    </ul>
  </li>
</ul>



<h3>Degree and Polarity</h3>





<h3>Verbal Features</h3>


<ul>
  <li><a>Aspect</a></li>
</ul>

<ul>
  <li>Prog
    <ul>
      <li>VERB: healipo, hemohutu, hemomiyaato, hemongalipa, hepohutu, hepongalipo</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>VERB: hiyo-hiyongo, lohama, tilubu, bilindao, hilama, lo-pomulo, lo-tubu, lodehu, lodungoge, lolangi</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Irr
    <ul>
      <li>ADJ: mololo, mo’opotala</li>
      <li>VERB: mobuka</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Act
    <ul>
      <li>VERB: lohama, hemohutu, hemomiyaato, hemongalipa, lo-pomulo, lo-tubu, lodehu, lodungoge, lolangi, lomindao</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ivoc
    <ul>
      <li>VERB: hepongalipo, pilo-pomulo, pilo-tubu, pilohama, pilotubu'u</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pat
    <ul>
      <li>VERB: tilubu, bilindao, hepohutu, hilama, piliyaato, pilomulo, yilohiu</li>
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
      <li>DET: boyito</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>PRON: wau, Tiyo, Ami, liyo</li>
    </ul>
  </li>
</ul>




<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>PRON: wau, Ami</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>PRON: Tiyo</li>
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
<li>This corpus does not contain auxiliaries.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
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
<li>This corpus uses 9 relation subtypes: <a>compound:redup</a>, <a>iobj:instrument</a>, <a>iobj:patient</a>, <a>nmod:poss</a>, <a>nsubj:agent</a>, <a>nsubj:instrument</a>, <a>nsubj:patient</a>, <a>obj:agent</a>, <a>obj:patient</a></li>
<li>The following 3 main types are not used alone, they are always subtyped: <a>compound</a>, <a>iobj</a>, <a>obj</a></li>
<li>The following 20 relation types are not used in this corpus at all: <a>csubj</a>, <a>ccomp</a>, <a>vocative</a>, <a>expl</a>, <a>dislocated</a>, <a>advcl</a>, <a>discourse</a>, <a>aux</a>, <a>cop</a>, <a>mark</a>, <a>appos</a>, <a>acl</a>, <a>fixed</a>, <a>flat</a>, <a>list</a>, <a>parataxis</a>, <a>orphan</a>, <a>goeswith</a>, <a>reparandum</a>, <a>punct</a></li>
</ul>
