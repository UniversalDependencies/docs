---
layout: base
title:  'UD_French_Sign_Language-STKAutogramm'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD French Sign Language STKAutogramm

Language: [French Sign Language](/fsl/index.html) (code: `fsl`)<br/>
Family: Sign Language

This treebank has been part of Universal Dependencies since the UD v2.19 release.

The following people have contributed to making this treebank part of UD: Sylvain Kahane, Santiago Herrera, Philomène Périn, Caroline Bogliotti, Lou Guillaume.

Repository: [UD_French_Sign_Language-STKAutogramm](https://github.com/UniversalDependencies/UD_French_Sign_Language-STKAutogramm)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udfsl_stkautogramm219)<br />
Download all treebanks: [UD 2.19](/#download)

License: CC BY-SA 4.0

Genre: spoken

Questions, comments?
General annotation questions (either French Sign Language-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_French_Sign_Language-STKAutogramm/issues).
If you want to collaborate, please contact [skahane&nbsp;(æt)&nbsp;parisnanterre&nbsp;•&nbsp;fr].
Development of the treebank happens outside the UD repository.
If there are bugs, either the original data source or the conversion procedure must be fixed.
Do not submit pull requests against the UD repository.

| Annotation | Source |
|------------|--------|
| Lemmas | annotated manually |
| UPOS | annotated manually, natively in UD style |
| XPOS | not available |
| Features | annotated manually, natively in UD style |
| Relations | annotated manually in non-UD style, automatically converted to UD |

## Description

A Universal Dependencies corpus for French Sign Language (Langue des Signes Française, LSF), a sign language used in France.



This treebank is an automatic conversation of the SUD_French_Sign_Language-STKAutogramm, annotating diverse genre of videos gathered from different corpora.

Sentences are annotated with the following metadata:
- `sent_id`: unique identifier for a sentence
- `text`: lexical tokenisation
- `source_file`: the video file corresponding to the sample
- `text_fr`: a free translation in French
- `text_en`: a free translation in English
- `document_id`: the name of the sample
- in certain samples, `speaker_id` if multiple signers are present


## Structure

The data comes from 3 different pre-existing projects.
- One sample (**STK_vacances-sud**) from the ANR project SignToKids, conducted at Paris Nanterre University. This video is a semi-spontaneous narration of a story. It was recorded with the intention of eliciting different types of plural forms. We realized the translation and glossing of this sample.
- Two samples (**LS-Colin_champignon** and **LS-Colin_cheval**) from the corpus **LS-Colin**. This corpus was recorded in 2002 and contains different signers' participation, realizing different tasks.
- **LS-Colin_champignon** is the recording of a recipe. The prompt for the signer was to present her favorite recipe. The extract used has the following time code: 18:17 to 19:46, from the video CUC022_low of a total length of 36:43.
- **LS-Colin_cheval** is the recording of a short narration. The prompt was to retell the story presented in 5 images, about a horse jumping a fence, accompanied by a cow and a bird. The extract used has the following time code: 00:06 to 01:07, from the same video.
- Two samples (**Alpha_entretien_etudiant_souvenir** and **Alpha_entretien_etudiant_trajet**) from the corpus **ALPHA SOURDS**. In this corpus, we find interviews between the researchers and different deaf students.
- **Alpha_entretien_etudiant_souvenir** is the recording of a narration, with a few interactional elements. The prompt was for the student to tell her best memory.
- **Alpha_entretien_etudiant_trajet** is the recording of a description, with more interactional elements. The prompt was for the student to describe a common route he was taking daily.


## Acknowledgments

This treebank was produced as part of the [SignToKids ANR project](https://project.inria.fr/signtokids/en/) and the [Autogramm ANR project](https://autogramm.github.io/en/). The main contributor is Lou Guillaume, under the supervision of Santiago Herrera and Sylvain Kahane. With the contribution of Philomène Perin and Caroline Bogliotti for LSF and Bruno Guillaume for the validation of the corpus and the conversion from SUD to UD.

# Statistics of UD French Sign Language STKAutogramm

## POS Tags

[ADJ](fsl_stkautogramm-pos-ADJ.html) – [ADP](fsl_stkautogramm-pos-ADP.html) – [ADV](fsl_stkautogramm-pos-ADV.html) – [CCONJ](fsl_stkautogramm-pos-CCONJ.html) – [INTJ](fsl_stkautogramm-pos-INTJ.html) – [NOUN](fsl_stkautogramm-pos-NOUN.html) – [NUM](fsl_stkautogramm-pos-NUM.html) – [PRON](fsl_stkautogramm-pos-PRON.html) – [PROPN](fsl_stkautogramm-pos-PROPN.html) – [PUNCT](fsl_stkautogramm-pos-PUNCT.html) – [VERB](fsl_stkautogramm-pos-VERB.html) – [X](fsl_stkautogramm-pos-X.html)

## Features

[Number](fsl_stkautogramm-feat-Number.html) – [PronType](fsl_stkautogramm-feat-PronType.html) – [Voice](fsl_stkautogramm-feat-Voice.html)

## Relations

[acl](fsl_stkautogramm-dep-acl.html) – [advcl](fsl_stkautogramm-dep-advcl.html) – [advmod](fsl_stkautogramm-dep-advmod.html) – [amod](fsl_stkautogramm-dep-amod.html) – [appos](fsl_stkautogramm-dep-appos.html) – [case](fsl_stkautogramm-dep-case.html) – [cc](fsl_stkautogramm-dep-cc.html) – [ccomp](fsl_stkautogramm-dep-ccomp.html) – [compound](fsl_stkautogramm-dep-compound.html) – [compound:svc](fsl_stkautogramm-dep-compound-svc.html) – [conj](fsl_stkautogramm-dep-conj.html) – [conj:chaining](fsl_stkautogramm-dep-conj-chaining.html) – [conj:contr](fsl_stkautogramm-dep-conj-contr.html) – [conj:dbl](fsl_stkautogramm-dep-conj-dbl.html) – [conj:illustrate](fsl_stkautogramm-dep-conj-illustrate.html) – [conj:reform](fsl_stkautogramm-dep-conj-reform.html) – [conj:zoom](fsl_stkautogramm-dep-conj-zoom.html) – [csubj](fsl_stkautogramm-dep-csubj.html) – [dep](fsl_stkautogramm-dep-dep.html) – [discourse](fsl_stkautogramm-dep-discourse.html) – [discourse:participant](fsl_stkautogramm-dep-discourse-participant.html) – [dislocated](fsl_stkautogramm-dep-dislocated.html) – [flat](fsl_stkautogramm-dep-flat.html) – [iobj](fsl_stkautogramm-dep-iobj.html) – [mark](fsl_stkautogramm-dep-mark.html) – [nmod](fsl_stkautogramm-dep-nmod.html) – [nsubj](fsl_stkautogramm-dep-nsubj.html) – [nummod](fsl_stkautogramm-dep-nummod.html) – [obj](fsl_stkautogramm-dep-obj.html) – [obl](fsl_stkautogramm-dep-obl.html) – [obl:arg](fsl_stkautogramm-dep-obl-arg.html) – [obl:mod](fsl_stkautogramm-dep-obl-mod.html) – [parataxis](fsl_stkautogramm-dep-parataxis.html) – [punct](fsl_stkautogramm-dep-punct.html) – [reparandum](fsl_stkautogramm-dep-reparandum.html) – [root](fsl_stkautogramm-dep-root.html) – [vocative](fsl_stkautogramm-dep-vocative.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 108 sentences and 615 tokens.</li>
</ul>

<ul>
<li>All tokens in this corpus are followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 355 types of words that contain both letters and punctuation. Examples: [[CHIFFRE]], PNT[MOI], [OUI], PNT[là], [[LIEU]], [hep], [non], position-neutre, [CHAMPIGNON], [LAISSER], [IL-FAUT], [PREMIER], [QUOI], [euh], [regarder], PNT[TOI], PNT[lieu1], [DESCENDRE], [DIFFÉRENT], [EAU], [FRANCE], [GROUPE], [INTÉRESSANT], [JUSQUE], [MER], [METTRE], [PERSONNE], [PI_TEMPORALITE], [SAUCE], [SOUVENIR], [[NUMÉRO-DÉPARTEMENT]], [rocher], [voilà], PNT-SURFACE[là], PNT[lieu3], PRF[cheval], [ADORER], [AGRÉABLE], [BARCELONE], [BUS], [CHANGER], [COMMENCER], [CUILLÈRE], [DEUX], [ENVIRON], [INTERNAT], [LIGNE], [MAMAN], [MINUTE], [MONTER-dans-véhicule]</li>
</ul>

<ul>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 12 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>CCONJ</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>VERB</a>, <a>X</a></li>
<li>This corpus does not use the following tags: DET, AUX, SCONJ, PART, SYM</li>
</ul>

<ul>
</ul>

<ul>
<li>This corpus contains 11 lemmas tagged as pronouns (PRON): PNT, PRF, [COMBIEN], [COMMENT], [OÙ], [PI_CELUI-CI], [POURQUOI], [QUI], [QUOI], [TOUS], [TOUS]-[QUATRE]</li>
</ul>

<ul>
<li>This corpus contains 0 lemmas tagged as determiners (DET): </li>
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
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>NOUN: [PERSONNE], [ARRÊT], [PERSONNE]/Plur, [VOILE]</li>
      <li>PRON: PNT[NOUS], PNT[VOUS]</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: POSS[MOI]</li>
      <li>PRON: PNT[MOI], PNT[TOI], PNT[soeur], PNT[LUI]</li>
    </ul>
  </li>
</ul>




<h3>Degree and Polarity</h3>





<h3>Verbal Features</h3>





<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>VERB: [bander-patte]</li>
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
      <li>PRON: [PI_CELUI-CI]</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>PRON: [QUOI], [COMMENT], [OÙ], [QUI], ??[COMBIEN], [COMBIEN], [POURQUOI]</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>PRON: PNT[MOI], PNT[TOI], PRF[cheval], PNT[bateau], PNT[fin], PNT[soeur], PNT[sujet], PNT[valise], PNT[LUI], PNT[NOUS]</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
      <li>PRON: [TOUS]-[QUATRE], [TOUS]</li>
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
      <li>VERB--NOUN (9)</li>
      <li>VERB--PRON (8)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (20)</li>
      <li>VERB--PRON (4)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--PRON (1)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 10 relation subtypes: <a>compound:svc</a>, <a>conj:chaining</a>, <a>conj:contr</a>, <a>conj:dbl</a>, <a>conj:illustrate</a>, <a>conj:reform</a>, <a>conj:zoom</a>, <a>discourse:participant</a>, <a>obl:arg</a>, <a>obl:mod</a></li>
<li>The following 10 relation types are not used in this corpus at all: <a>xcomp</a>, <a>expl</a>, <a>aux</a>, <a>cop</a>, <a>det</a>, <a>clf</a>, <a>fixed</a>, <a>list</a>, <a>orphan</a>, <a>goeswith</a></li>
</ul>
