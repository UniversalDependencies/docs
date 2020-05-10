---
layout: base
title:  'UD_Naija-NSC'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Naija NSC

Language: [Naija](/pcm/index.html) (code: `pcm`)<br/>
Family: Creole

This treebank has been part of Universal Dependencies since the UD v2.2 release.

The following people have contributed to making this treebank part of UD: Bernard Caron, Marine Courtin, Kim Gerdes, Bruno Guillaume, Sylvain Kahane, Chika Kennedy Ajede, Emeka Onwuegbuzia, Samson Tella.

Repository: [UD_Naija-NSC](https://github.com/UniversalDependencies/UD_Naija-NSC)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udpcm_nsc26)<br />
Download all treebanks: [UD 2.6](/#download)

License: CC BY-SA 4.0

Genre: spoken

Questions, comments?
General annotation questions (either Naija-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Naija-NSC/issues).
If you want to collaborate, please contact [kim&nbsp;(æt)&nbsp;gerdes&nbsp;•&nbsp;fr].
Development of the treebank happens in the UD repository but not directly in the final CoNLL-U files.
You may submit bug fixes as pull requests against the dev branch but you have to go to the folder called `not-to-release` and locate the source files there.
Contact the treebank maintainers if in doubt.

| Annotation | Source |
|------------|--------|
| Lemmas | assigned by a program, not checked manually |
| UPOS | annotated manually, natively in UD style |
| XPOS | not available |
| Features | annotated manually, natively in UD style |
| Relations | annotated manually in non-UD style, automatically converted to UD |

## Description

A Universal Dependencies corpus for spoken Naija (Nigerian Pidgin).



The corpus is based on dialogues and monologues and comprises 948 sentences and 12863 tokens.

Sentences are annotated with the following metadata :
+ sent_id (which also indicates the sample file)
+ text
+ text_en (English translation)
+ text_ortho (A simplified version of text where macrosyntactic annotation has been replaced by standard punctuation)
+ speaker_id (from the NaijaSynCor Metadata)
+ sound_url (links to the corresponding sound file, AlignBegin and AlignEnd features give the miliseconds that allow for a positioning in the soundfile)

## Acknowledgments

The treebank was created within the NaijaSynCor project, directed by Bernard Caron and funded by the ANR, the French National Research Agency.

This corpus is a pilot for the larger corpus elaborated as part of the NaijaSynCor Project (Projet-ANR-16-CE27-0007). Its main aim is to elaborate and test the annotation and procedures that are used in the ANR-project. It will be part of a larger 500kW corpus that will be projected on prosodic and information structures and analysed for sociolinguistics variation (http://naijasyncor.huma-num.fr/).

The pilot corpus was recorded in various locations in Ibadan (Nigeria) by Bukola Babalola and Opeyemi Lewis. It was transcribed, translated and tagged manually using Elan-Corpa (http://llacan.vjf.cnrs.fr/res_ELAN-CorpA_en.php) by Folakemi Ladoja, Emeka Onwuegbuzia, Biola Oyelere and Samson Tella under the supervision of Bernard Caron. It was converted to CONLL by Mourad Aouini. First annotations were done by Marine Courtin and Sandra Bellato, who developed the guidelines under the supervision of Sylvain Kahane, Bernard Caron, and Kim Gerdes.The final Universal dependencies annotations have been manually checked by Chika Kennedy Ajede, Emeka Onwuegbuzia, and Samson Tella under the supervision of Bernard Caron using the processing chain developed by Kim Gerdes and Bruno Guillaume, based on the Arborator (https://arborator.ilpga.fr) and Grew (http://grew.fr). Marine Courtin, Kim Gerdes, Bruno Guillaume, Kirian Guillier, Sylvain Kahane, Mariam Nakhlé, Yuchen Song, Emmett Strickland, Manying Zhang have helped in the correction process.


# Statistics of UD Naija NSC

## POS Tags

[ADJ](pcm_nsc-pos-ADJ.html) – [ADP](pcm_nsc-pos-ADP.html) – [ADV](pcm_nsc-pos-ADV.html) – [AUX](pcm_nsc-pos-AUX.html) – [CCONJ](pcm_nsc-pos-CCONJ.html) – [DET](pcm_nsc-pos-DET.html) – [INTJ](pcm_nsc-pos-INTJ.html) – [NOUN](pcm_nsc-pos-NOUN.html) – [NUM](pcm_nsc-pos-NUM.html) – [PART](pcm_nsc-pos-PART.html) – [PRON](pcm_nsc-pos-PRON.html) – [PROPN](pcm_nsc-pos-PROPN.html) – [PUNCT](pcm_nsc-pos-PUNCT.html) – [SCONJ](pcm_nsc-pos-SCONJ.html) – [VERB](pcm_nsc-pos-VERB.html) – [X](pcm_nsc-pos-X.html)

## Features

[Aspect](pcm_nsc-feat-Aspect.html) – [Case](pcm_nsc-feat-Case.html) – [Definite](pcm_nsc-feat-Definite.html) – [Degree](pcm_nsc-feat-Degree.html) – [Gender](pcm_nsc-feat-Gender.html) – [Mood](pcm_nsc-feat-Mood.html) – [Number](pcm_nsc-feat-Number.html) – [NumType](pcm_nsc-feat-NumType.html) – [PartType](pcm_nsc-feat-PartType.html) – [Person](pcm_nsc-feat-Person.html) – [Polarity](pcm_nsc-feat-Polarity.html) – [Poss](pcm_nsc-feat-Poss.html) – [PronType](pcm_nsc-feat-PronType.html) – [Reflex](pcm_nsc-feat-Reflex.html) – [Tense](pcm_nsc-feat-Tense.html) – [VerbForm](pcm_nsc-feat-VerbForm.html) – [VerbType](pcm_nsc-feat-VerbType.html) – [Voice](pcm_nsc-feat-Voice.html)

## Relations

[acl](pcm_nsc-dep-acl.html) – [acl:periph](pcm_nsc-dep-acl-periph.html) – [acl:relcl](pcm_nsc-dep-acl-relcl.html) – [advcl](pcm_nsc-dep-advcl.html) – [advcl:cleft](pcm_nsc-dep-advcl-cleft.html) – [advcl:emph](pcm_nsc-dep-advcl-emph.html) – [advcl:periph](pcm_nsc-dep-advcl-periph.html) – [advmod](pcm_nsc-dep-advmod.html) – [advmod:appos](pcm_nsc-dep-advmod-appos.html) – [advmod:emph](pcm_nsc-dep-advmod-emph.html) – [advmod:periph](pcm_nsc-dep-advmod-periph.html) – [amod](pcm_nsc-dep-amod.html) – [amod:emph](pcm_nsc-dep-amod-emph.html) – [appos](pcm_nsc-dep-appos.html) – [aux](pcm_nsc-dep-aux.html) – [case](pcm_nsc-dep-case.html) – [cc](pcm_nsc-dep-cc.html) – [ccomp](pcm_nsc-dep-ccomp.html) – [ccomp:agent](pcm_nsc-dep-ccomp-agent.html) – [compound](pcm_nsc-dep-compound.html) – [compound:prt](pcm_nsc-dep-compound-prt.html) – [compound:redup](pcm_nsc-dep-compound-redup.html) – [compound:svc](pcm_nsc-dep-compound-svc.html) – [conj](pcm_nsc-dep-conj.html) – [conj:dicto](pcm_nsc-dep-conj-dicto.html) – [cop](pcm_nsc-dep-cop.html) – [csubj](pcm_nsc-dep-csubj.html) – [dep](pcm_nsc-dep-dep.html) – [det](pcm_nsc-dep-det.html) – [discourse](pcm_nsc-dep-discourse.html) – [dislocated](pcm_nsc-dep-dislocated.html) – [expl:subj](pcm_nsc-dep-expl-subj.html) – [fixed](pcm_nsc-dep-fixed.html) – [flat](pcm_nsc-dep-flat.html) – [flat:foreign](pcm_nsc-dep-flat-foreign.html) – [goeswith](pcm_nsc-dep-goeswith.html) – [iobj](pcm_nsc-dep-iobj.html) – [mark](pcm_nsc-dep-mark.html) – [nmod](pcm_nsc-dep-nmod.html) – [nmod:appos](pcm_nsc-dep-nmod-appos.html) – [nmod:emph](pcm_nsc-dep-nmod-emph.html) – [nmod:periph](pcm_nsc-dep-nmod-periph.html) – [nmod:poss](pcm_nsc-dep-nmod-poss.html) – [nsubj](pcm_nsc-dep-nsubj.html) – [nummod](pcm_nsc-dep-nummod.html) – [nummod:det](pcm_nsc-dep-nummod-det.html) – [nummod:mod](pcm_nsc-dep-nummod-mod.html) – [nummod:periph](pcm_nsc-dep-nummod-periph.html) – [obj](pcm_nsc-dep-obj.html) – [obj:agent](pcm_nsc-dep-obj-agent.html) – [obj:lvc](pcm_nsc-dep-obj-lvc.html) – [obl:agent](pcm_nsc-dep-obl-agent.html) – [obl:arg](pcm_nsc-dep-obl-arg.html) – [obl:lvc](pcm_nsc-dep-obl-lvc.html) – [obl:mod](pcm_nsc-dep-obl-mod.html) – [parataxis](pcm_nsc-dep-parataxis.html) – [parataxis:conj](pcm_nsc-dep-parataxis-conj.html) – [parataxis:discourse](pcm_nsc-dep-parataxis-discourse.html) – [parataxis:dislocated](pcm_nsc-dep-parataxis-dislocated.html) – [parataxis:insert](pcm_nsc-dep-parataxis-insert.html) – [parataxis:parenth](pcm_nsc-dep-parataxis-parenth.html) – [punct](pcm_nsc-dep-punct.html) – [root](pcm_nsc-dep-root.html) – [vocative](pcm_nsc-dep-vocative.html) – [xcomp](pcm_nsc-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 7624 sentences and 126696 tokens.</li>
</ul>

<ul>
<li>All tokens in this corpus are followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 221 types of words that contain both letters and punctuation. Examples: [eng, eng], [yor, yor], n't, s-, dat's, f-, o'clock, 'm, it's, don't, [hau, b-, hau], wo-, D-Morris, [igb, a'ah, a-, co-, d-, igb], be-, ma-, re-, i-, m-, mo-, p.m., t-, w-, 's, al-, c-, e-, g-, gi-, ho-, n-, pi-, st-, ti-, Port-Harcourt, a.m., ab-, almo-, ar-, ba-, ban-</li>
</ul>

<ul>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 16 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>VERB</a>, <a>X</a></li>
<li>This corpus does not use the following tags: SYM</li>
</ul>

<ul>
<li>This corpus contains 26 word types tagged as particles (PART): ba, bah, dai, dem, din't, don't, gbe, ke, ko, kwa, ma, mai, n't, na, ni, nko, nna, no, not, o, sebi, sef, self, sha, shey, wai</li>
</ul>

<ul>
<li>This corpus contains 69 lemmas tagged as pronouns (PRON): I, Kini, _, am, any, anyb-, anybody, anyone, anything, anyting, anywhere, both, dat, debit, deir, dem, demsef, dere, dese, dis, dose, dream, e, everybody, everyone, everything, everyti-, everyting, eveybody, her, him, im, imsef, insef, it, itself, ka, mahnsef, me, my, mysef, nobody, notin, noting, oder, one, our, oursef, pump, she, shi, some, somebody, someone, sometin, someting, that, una, us, we, wet-, wetin, what, which, who, you, your, yours, yoursef</li>
</ul>

<ul>
<li>This corpus contains 22 lemmas tagged as determiners (DET): X, a, anoda, anoder, another, any, both, dat, dem, dese, di, dis, dose, each, every, few, my, no, one, some, the, which</li>
</ul>

<ul>
<li>Out of the above, 11 lemmas occurred sometimes as PRON and sometimes as DET: any, both, dat, dem, dese, dis, dose, my, one, some, which</li>
</ul>

<ul>
<li>This corpus contains 25 lemmas tagged as auxiliaries (AUX): be, bin, can, cannot, con, could, dey, do, don, fit, for, gats, go, have, make, may, might, muna, must, na, never, shall, should, will, would</li>
</ul>

<ul>
<li>Out of the above, 7 lemmas occurred sometimes as AUX and sometimes as VERB: be, dey, do, go, have, make, must</li>
</ul>

<ul>
<li>There are 3 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: will, is, must, are, do, was, 'm, should, would, were</li>
    <li>VERB: is, means, was, told, comes, said, gave, goes, has, am</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: be</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>ADJ: bellefulling</li>
    <li>ADP: including</li>
    <li>AUX: being</li>
    <li>VERB: according, done, born, cheating, following, going, lost, making, talking, boiled</li>
    <li>X: med-</li>
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
      <li>ADJ: her</li>
      <li>PRON: she, her</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: im, His</li>
      <li>PRON: im, imsef, himsef, him, imself, his, himself, ka</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neut
    <ul>
      <li>PRON: it, itself</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: your, our, deir, oders, una</li>
      <li>ADV: students</li>
      <li>AUX-Fin: 're</li>
      <li>DET: dose, dese, those, dem</li>
      <li>NOUN: people, tings, women, things, children, years, men, tins, months, girls</li>
      <li>PART: dem</li>
      <li>PRON: we, de, dem, your, us, una, our, deir, oursef, dose</li>
      <li>PROPN: Nigerians, Americans, Corinthians, Fridays, Mondays, Saturdays, Sundays, Wednesdays</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: my, her, im, e, His, its</li>
      <li>AUX-Fin: is, was, 'm, am, 's</li>
      <li>DET: dis, dat, that, a, my, this</li>
      <li>PRON: I, e, am, me, im, my, dat, she, dis, it</li>
      <li>SCONJ: dat</li>
      <li>VERB-Fin: is, means, was, comes, goes, has, am, depends, abounds, becomes</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>PRON: am, me, dem, us, una, yourself, mysef, oursef, yoursef, imsef</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>NOUN: guy's, Champions', devil's, gidan, people's, childs</li>
      <li>PROPN: Africa's, God's, John's, Momo's, Zimbabwe's</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>AUX-Fin: 'll, 're</li>
      <li>PRON: I, you, e, we, de, im, dem, me, una, she</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>DET: di, the</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: a, an</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Spec
    <ul>
      <li>DET: one</li>
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
      <li>ADJ: better, more, later, younger, elder, higher, less, Lighter, beta, earlier</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sup
    <ul>
      <li>ADJ: best, worst, highest, biggest, baddest, hardest, richest, oldest, youngest</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>AUX: never, do, shouldn't</li>
      <li>AUX-Fin: do, shouldn't</li>
      <li>DET: no</li>
      <li>INTJ: no</li>
      <li>PART: no, not, don't, din't</li>
    </ul>
  </li>
</ul>


<h3>Verbal Features</h3>


<ul>
  <li><a>Aspect</a></li>
</ul>

<ul>
  <li>Cons
    <ul>
      <li>AUX: con, come</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX: dey</li>
      <li>VERB: dey</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Perf
    <ul>
      <li>AUX: don, never, have</li>
      <li>AUX-Fin: have</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prosp
    <ul>
      <li>AUX: go</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Cond
    <ul>
      <li>AUX: for</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX-Fin: is, are, do, was, 'm, were, am, 's, have, did</li>
      <li>VERB-Fin: is, means, was, told, comes, said, gave, goes, has, am</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nec
    <ul>
      <li>AUX: gats</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Opt
    <ul>
      <li>AUX: make, meh, mah, mey, moh</li>
      <li>PRON: ka</li>
      <li>VERB: make, meh</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pot
    <ul>
      <li>AUX: fit</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX: bin, be, was, were, did, had, have</li>
      <li>AUX-Fin: was, were, did, had, have</li>
      <li>PART: din't</li>
      <li>VERB-Fin: was, told, said, gave, got, recommended, balanced, came, finished, found</li>
      <li>VERB-Part: done, born, cheating, lost, boiled, grounded, accepted, called, closed, seen</li>
      <li>X-Part: med-</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>ADJ-Part: bellefulling</li>
      <li>ADP-Part: including</li>
      <li>AUX-Fin: is, are, do, 'm, am, 's, have, 're, be</li>
      <li>AUX-Part: being</li>
      <li>VERB: according, is, means, comes, following, going, making, talking, buying, goes</li>
      <li>VERB-Fin: is, means, comes, goes, has, am, depends, abounds, becomes, begins</li>
      <li>VERB-Part: according, following, going, making, talking, buying, moving, pedaling, depending, eating</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prosp
    <ul>
      <li>AUX: go</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>VERB-Part: called, exposed, frustrated, inbuilt, pounded, rescued, scattered, tempted</li>
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
      <li>DET: di, one, a, the, an, dem</li>
      <li>PART: dem</li>
      <li>PRON: dem</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>DET: dis, dat, dose, dese, that, those, this</li>
      <li>PRON: dat, dis, dose, dese, those</li>
      <li>SCONJ: dat</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>ADV: how, where, why, when</li>
      <li>DET: which</li>
      <li>PART: shey</li>
      <li>PRON: wetin, who, what</li>
      <li>PUNCT: ||</li>
      <li>SCONJ: when</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>AUX-Fin: 'll, 're</li>
      <li>PRON: I, you, e, we, am, de, me, dem, im, us</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>PRON: dat, which, that</li>
      <li>SCONJ: dat</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NOUN: one, sixteen</li>
      <li>NUM: one, two, five, three, thousand, hundred, twenty, six, seven, nine</li>
      <li>PRON: one</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>ADJ: first, second, third, fourth, eleventh, tenth, eighteenth, fifth, twenty-fourth</li>
      <li>NUM: gazillion</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>ADJ: my, your, our, her, im, deir, e, His, its, una</li>
      <li>DET: my</li>
      <li>PRON: my, your, our, deir, her, dem, his, im, their, in</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>PRON: yourself, mysef, oursef, yoursef, imsef, myself, himsef, demsef, mahnsef, ourselves</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>ADJ: my, our</li>
      <li>AUX-Fin: was, 'm, am, 're</li>
      <li>DET: my</li>
      <li>PRON: I, we, me, my, us, our, a, mysef, oursef, myself</li>
      <li>VERB-Fin: was, am</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>ADJ: your, una</li>
      <li>AUX-Fin: 'll</li>
      <li>PRON: you, your, una, yourself, yoursef, ka, yousef, youself</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>ADJ: her, im, deir, e, His, its</li>
      <li>AUX-Fin: is, 's</li>
      <li>PART: dem</li>
      <li>PRON: e, am, de, dem, im, she, deir, it, her, imsef</li>
      <li>VERB-Fin: is, means, comes, goes, has, depends, abounds, becomes, begins, owes</li>
    </ul>
  </li>
</ul>




<h3>Other Features</h3>


<ul>
  <li><a>PartType</a>
    <ul>
      <li>Cop
        <ul>
          <li>AUX: na, be, it's</li>
          <li>VERB: be, dat's, it's</li>
        </ul>
      </li>
      <li>Disc
        <ul>
          <li>ADV: kuma, o'clock</li>
          <li>INTJ: oya</li>
          <li>PART: o, sef, sha, ma, self, kwa, ba</li>
          <li>VERB: sha</li>
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
          <li>AUX: was, am, were, dey</li>
          <li>AUX-Fin: was, am, were</li>
          <li>VERB: dey, was, am, get</li>
          <li>VERB-Fin: was, am</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 10 lemmas as copulas (<a>cop</a>). Examples: na, be, must, go, dey, con, don, gats, shall, will.</li>
</ul>

<ul>
<li>This corpus uses 24 lemmas as auxiliaries (<a>aux</a>). Examples: dey, go, con, don, make, fit, bin, will, never, be, for, must, do, can, gats, have, should, cannot, may, would, shall, might, could, muna.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (1597)</li>
      <li>VERB--NOUN-ADP(on) (2)</li>
      <li>VERB--PRON (246)</li>
      <li>VERB--PRON-Acc (47)</li>
      <li>VERB--PRON-Acc-ADP(for) (1)</li>
      <li>VERB--PRON-Nom (8159)</li>
      <li>VERB--PRON-Nom-ADP(in) (1)</li>
      <li>VERB-Fin--NOUN (16)</li>
      <li>VERB-Fin--PRON (11)</li>
      <li>VERB-Fin--PRON-ADP(for) (1)</li>
      <li>VERB-Fin--PRON-Nom (25)</li>
      <li>VERB-Part--NOUN (21)</li>
      <li>VERB-Part--PRON (8)</li>
      <li>VERB-Part--PRON-Nom (42)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (3908)</li>
      <li>VERB--NOUN-ADP(in) (1)</li>
      <li>VERB--NOUN-ADP(sey) (11)</li>
      <li>VERB--NOUN-ADP(wheder) (1)</li>
      <li>VERB--PRON (310)</li>
      <li>VERB--PRON-ADP(if) (1)</li>
      <li>VERB--PRON-ADP(sey) (12)</li>
      <li>VERB--PRON-Acc (1970)</li>
      <li>VERB--PRON-Nom (333)</li>
      <li>VERB--PRON-Nom-ADP(sey) (3)</li>
      <li>VERB-Fin--NOUN (15)</li>
      <li>VERB-Fin--PRON (1)</li>
      <li>VERB-Fin--PRON-ADP(sey) (1)</li>
      <li>VERB-Fin--PRON-Acc (5)</li>
      <li>VERB-Fin--PRON-Nom (1)</li>
      <li>VERB-Part--NOUN (46)</li>
      <li>VERB-Part--PRON (2)</li>
      <li>VERB-Part--PRON-ADP(sey) (1)</li>
      <li>VERB-Part--PRON-Acc (6)</li>
      <li>VERB-Part--PRON-Nom (6)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--PRON (1)</li>
      <li>VERB--PRON-Acc (28)</li>
    </ul>
  </li>
</ul>



<h3>Verbs with Reflexive Core Objects</h3>

<ul>
  <li>This corpus contains 71 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: ask yoursef, see imsef, compose deirsef, build oursef, carry myself, enjoy yourself, get mysef, head oursef, package yourself, protect yourself, tell mysef, arrange mysef, arrange myself, bring yourself, call demsefs, call demself, carry imself, carry yoursef, carry yourself, check yoursef, cloth myself, deprive yoursef, develop demsef, do oursefs, do ourselves, engage imsef, enjoy imsef, enjoy mysef, feed myself, find yourself, fool yourself, gather ourself, give myself, hate demsefs, help mysef, help oursef, help yourself, humble himsef, improve myself, kack mysef, kill yoursef, know oursefs, laugh mysef, look mysef, make yoursef, meet demself, meet myself, meet ourselves, organise yourself, pack oursef</li>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 34 relation subtypes: <a>acl:periph</a>, <a>acl:relcl</a>, <a>advcl:cleft</a>, <a>advcl:emph</a>, <a>advcl:periph</a>, <a>advmod:appos</a>, <a>advmod:emph</a>, <a>advmod:periph</a>, <a>amod:emph</a>, <a>ccomp:agent</a>, <a>compound:prt</a>, <a>compound:redup</a>, <a>compound:svc</a>, <a>conj:dicto</a>, <a>expl:subj</a>, <a>flat:foreign</a>, <a>nmod:appos</a>, <a>nmod:emph</a>, <a>nmod:periph</a>, <a>nmod:poss</a>, <a>nummod:det</a>, <a>nummod:mod</a>, <a>nummod:periph</a>, <a>obj:agent</a>, <a>obj:lvc</a>, <a>obl:agent</a>, <a>obl:arg</a>, <a>obl:lvc</a>, <a>obl:mod</a>, <a>parataxis:conj</a>, <a>parataxis:discourse</a>, <a>parataxis:dislocated</a>, <a>parataxis:insert</a>, <a>parataxis:parenth</a></li>
<li>The following 2 main types are not used alone, they are always subtyped: <a>expl</a>, <a>obl</a></li>
<li>The following 4 relation types are not used in this corpus at all: <a>clf</a>, <a>list</a>, <a>orphan</a>, <a>reparandum</a></li>
</ul>
