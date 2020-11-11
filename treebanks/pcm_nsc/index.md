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

The following people have contributed to making this treebank part of UD: Bernard Caron, Emmett Strickland, Marine Courtin, Kim Gerdes, Bruno Guillaume, Sylvain Kahane, Chika Kennedy Ajede, Emeka Onwuegbuzia, Samson Tella.

Repository: [UD_Naija-NSC](https://github.com/UniversalDependencies/UD_Naija-NSC)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udpcm_nsc27)<br />
Download all treebanks: [UD 2.7](/#download)

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



The corpus is based on dialogues and monologues and comprises 9,242 sentences and 140,729 tokens.

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

[ADJ](pcm_nsc-pos-ADJ.html) – [ADP](pcm_nsc-pos-ADP.html) – [ADV](pcm_nsc-pos-ADV.html) – [AUX](pcm_nsc-pos-AUX.html) – [CCONJ](pcm_nsc-pos-CCONJ.html) – [DET](pcm_nsc-pos-DET.html) – [INTJ](pcm_nsc-pos-INTJ.html) – [NOUN](pcm_nsc-pos-NOUN.html) – [NUM](pcm_nsc-pos-NUM.html) – [PART](pcm_nsc-pos-PART.html) – [PRON](pcm_nsc-pos-PRON.html) – [PROPN](pcm_nsc-pos-PROPN.html) – [SCONJ](pcm_nsc-pos-SCONJ.html) – [VERB](pcm_nsc-pos-VERB.html) – [X](pcm_nsc-pos-X.html)

## Features

[Aspect](pcm_nsc-feat-Aspect.html) – [Case](pcm_nsc-feat-Case.html) – [Definite](pcm_nsc-feat-Definite.html) – [Degree](pcm_nsc-feat-Degree.html) – [Gender](pcm_nsc-feat-Gender.html) – [Mood](pcm_nsc-feat-Mood.html) – [Number](pcm_nsc-feat-Number.html) – [NumType](pcm_nsc-feat-NumType.html) – [PartType](pcm_nsc-feat-PartType.html) – [Person](pcm_nsc-feat-Person.html) – [Polarity](pcm_nsc-feat-Polarity.html) – [Poss](pcm_nsc-feat-Poss.html) – [PronType](pcm_nsc-feat-PronType.html) – [Reflex](pcm_nsc-feat-Reflex.html) – [Tense](pcm_nsc-feat-Tense.html) – [VerbForm](pcm_nsc-feat-VerbForm.html) – [VerbType](pcm_nsc-feat-VerbType.html) – [Voice](pcm_nsc-feat-Voice.html)

## Relations

[acl](pcm_nsc-dep-acl.html) – [acl:periph](pcm_nsc-dep-acl-periph.html) – [acl:relcl](pcm_nsc-dep-acl-relcl.html) – [advcl](pcm_nsc-dep-advcl.html) – [advcl:cleft](pcm_nsc-dep-advcl-cleft.html) – [advcl:emph](pcm_nsc-dep-advcl-emph.html) – [advcl:periph](pcm_nsc-dep-advcl-periph.html) – [advmod](pcm_nsc-dep-advmod.html) – [advmod:emph](pcm_nsc-dep-advmod-emph.html) – [advmod:periph](pcm_nsc-dep-advmod-periph.html) – [amod](pcm_nsc-dep-amod.html) – [amod:emph](pcm_nsc-dep-amod-emph.html) – [appos](pcm_nsc-dep-appos.html) – [aux](pcm_nsc-dep-aux.html) – [case](pcm_nsc-dep-case.html) – [cc](pcm_nsc-dep-cc.html) – [ccomp:agent](pcm_nsc-dep-ccomp-agent.html) – [ccomp:obj](pcm_nsc-dep-ccomp-obj.html) – [ccomp:obl](pcm_nsc-dep-ccomp-obl.html) – [ccomp:pred](pcm_nsc-dep-ccomp-pred.html) – [compound](pcm_nsc-dep-compound.html) – [compound:prt](pcm_nsc-dep-compound-prt.html) – [compound:redup](pcm_nsc-dep-compound-redup.html) – [compound:svc](pcm_nsc-dep-compound-svc.html) – [conj](pcm_nsc-dep-conj.html) – [cop](pcm_nsc-dep-cop.html) – [csubj](pcm_nsc-dep-csubj.html) – [dep](pcm_nsc-dep-dep.html) – [dep:comp](pcm_nsc-dep-dep-comp.html) – [dep:fixed](pcm_nsc-dep-dep-fixed.html) – [det](pcm_nsc-dep-det.html) – [discourse](pcm_nsc-dep-discourse.html) – [dislocated](pcm_nsc-dep-dislocated.html) – [expl:subj](pcm_nsc-dep-expl-subj.html) – [fixed](pcm_nsc-dep-fixed.html) – [flat](pcm_nsc-dep-flat.html) – [flat:foreign](pcm_nsc-dep-flat-foreign.html) – [iobj](pcm_nsc-dep-iobj.html) – [mark](pcm_nsc-dep-mark.html) – [nmod](pcm_nsc-dep-nmod.html) – [nmod:appos](pcm_nsc-dep-nmod-appos.html) – [nmod:emph](pcm_nsc-dep-nmod-emph.html) – [nmod:periph](pcm_nsc-dep-nmod-periph.html) – [nmod:poss](pcm_nsc-dep-nmod-poss.html) – [nsubj](pcm_nsc-dep-nsubj.html) – [nummod](pcm_nsc-dep-nummod.html) – [nummod:det](pcm_nsc-dep-nummod-det.html) – [nummod:mod](pcm_nsc-dep-nummod-mod.html) – [nummod:periph](pcm_nsc-dep-nummod-periph.html) – [obj](pcm_nsc-dep-obj.html) – [obj:lvc](pcm_nsc-dep-obj-lvc.html) – [obl:agent](pcm_nsc-dep-obl-agent.html) – [obl:arg](pcm_nsc-dep-obl-arg.html) – [obl:lvc](pcm_nsc-dep-obl-lvc.html) – [obl:mod](pcm_nsc-dep-obl-mod.html) – [orphan](pcm_nsc-dep-orphan.html) – [parataxis](pcm_nsc-dep-parataxis.html) – [parataxis:conj](pcm_nsc-dep-parataxis-conj.html) – [parataxis:discourse](pcm_nsc-dep-parataxis-discourse.html) – [parataxis:dislocated](pcm_nsc-dep-parataxis-dislocated.html) – [parataxis:insert](pcm_nsc-dep-parataxis-insert.html) – [parataxis:parenth](pcm_nsc-dep-parataxis-parenth.html) – [reparandum](pcm_nsc-dep-reparandum.html) – [root](pcm_nsc-dep-root.html) – [vocative](pcm_nsc-dep-vocative.html) – [xcomp:obj](pcm_nsc-dep-xcomp-obj.html) – [xcomp:obl](pcm_nsc-dep-xcomp-obl.html) – [xcomp:pred](pcm_nsc-dep-xcomp-pred.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 9242 sentences and 140729 tokens.</li>
</ul>

<ul>
<li>This corpus contains 24 tokens (0%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 47 types of words that contain both letters and punctuation. Examples: dat's, don't, o'clock, 'm, it's, n't, a'ah, D-Morris, p.m., 's, a.m., Port-Harcourt, billionaire's, can't, ex-soldier, guy's, pre-degree, 'll, 're, Africa's, Champions', Co-commander, God's, John's, Momo's, O'neill, O.A., O.D.S., S., Zimbabwe's, admin's, devil's, didn't, e-services, hm'm, ma-akara, ma-firewood, ninety-six, o'oh, p-man, people's, pro-European, self-sufficient, shouldn't, twenty-fourth, un-African, voter's</li>
</ul>

<ul>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 15 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>SCONJ</a>, <a>VERB</a>, <a>X</a></li>
<li>This corpus does not use the following tags: SYM, PUNCT</li>
</ul>

<ul>
<li>This corpus contains 26 word types tagged as particles (PART): ba, bah, dai, dem, didn't, don't, gbe, ke, ko, kwa, ma, mai, masef, n't, ni, nko, nna, no, not, o, sebi, sef, self, sha, shey, wai</li>
</ul>

<ul>
<li>This corpus contains 67 lemmas tagged as pronouns (PRON): I, Kini, _, a'ah, am, any, anybody, anyone, anyting, anywhere, both, dat, debit, deir, dem, demsef, dere, dese, dis, dose, dream, e, everybody, everyone, everyting, eveybody, her, hersef, him, im, imsef, in, insef, it, itself, ka, mahnsef, me, my, mysef, nobody, notin, noting, oder, one, our, oursef, pump, she, shi, some, somebody, someone, sometin, someting, that, una, us, we, wetin, what, which, who, you, your, yours, yoursef</li>
</ul>

<ul>
<li>This corpus contains 19 lemmas tagged as determiners (DET): X, a, all, anoder, another, any, both, dat, dese, di, dis, dose, each, every, few, no, one, some, which</li>
</ul>

<ul>
<li>Out of the above, 9 lemmas occurred sometimes as PRON and sometimes as DET: any, both, dat, dese, dis, dose, one, some, which</li>
</ul>

<ul>
<li>This corpus contains 25 lemmas tagged as auxiliaries (AUX): be, bin, can, cannot, con, could, dey, do, don, fit, for, gats, go, have, make, may, might, muna, must, na, never, shall, should, will, would</li>
</ul>

<ul>
<li>Out of the above, 10 lemmas occurred sometimes as AUX and sometimes as VERB: be, con, dey, do, fit, gats, go, have, make, must</li>
</ul>

<ul>
<li>There are 3 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: will, is, must, are, do, was, should, 'm, were, would</li>
    <li>PART: n't</li>
    <li>PRON: I, we, what</li>
    <li>VERB: must, is, means, was, said, told, comes, has, are, begins</li>
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
    <li>AUX: being</li>
    <li>VERB: according, done, born, cheating, following, going, lost, making, talking, boiled</li>
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
      <li>PRON: she, her, herself, hersef</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>PRON: imsef, im, himsef, him, his, imself, himself, ka</li>
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
      <li>ADJ: your, sleepless</li>
      <li>ADV: students</li>
      <li>AUX: Don</li>
      <li>DET: dose, dese, those</li>
      <li>NOUN: people, tings, women, things, children, years, men, tins, girls, months</li>
      <li>PART: dem</li>
      <li>PRON: we, de, dem, your, us, una, our, deir, oursef, dose</li>
      <li>PRON-Fin: we</li>
      <li>PROPN: Nigerians, Americans, Corinthians, Fridays, Mondays, Saturdays, Sundays, Wednesdays</li>
      <li>VERB-Fin: 're</li>
      <li>X: de</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: her, its</li>
      <li>AUX: is, was, 'm, am, 's, be, does</li>
      <li>AUX-Fin: is, was, 'm, am, 's, does</li>
      <li>DET: dis, dat, that, da, this</li>
      <li>PART: masef</li>
      <li>PRON: I, e, am, me, my, im, dat, she, dis, it</li>
      <li>PRON-Fin: I, what</li>
      <li>SCONJ: sey</li>
      <li>VERB-Fin: is, means, was, comes, has, begins, goes, am, depends, abounds</li>
      <li>X: >+, {, }</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>PART: masef</li>
      <li>PRON: am, me, dem, us, una, yourself, mysef, oursef, yoursef, myself</li>
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
      <li>AUX: 'm, Don, be</li>
      <li>AUX-Fin: 'm</li>
      <li>PRON: I, you, e, we, de, im, dem, me, she, una</li>
      <li>PRON-Fin: I, we</li>
      <li>SCONJ: sey</li>
      <li>X: >+, [, de, {, ||, }</li>
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
      <li>ADP: On</li>
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
      <li>ADJ: better, more, later, younger, less, elder, higher, Lighter, beta, earlier</li>
      <li>ADV: more</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sup
    <ul>
      <li>ADJ: best, worst, highest, biggest, baddest, hardest, richest, latest, oldest, youngest</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>AUX: never, shouldn't</li>
      <li>AUX-Fin: shouldn't</li>
      <li>DET: no</li>
      <li>INTJ: no</li>
      <li>PART: no, not, don't, n't, didn't</li>
      <li>PART-Fin: n't</li>
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
      <li>AUX: don, never</li>
      <li>PRON: We</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prosp
    <ul>
      <li>AUX: go</li>
      <li>VERB: go</li>
      <li>X: {</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Cnd
    <ul>
      <li>AUX: for</li>
    </ul>
  </li>
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
      <li>AUX-Fin: is, are, do, was, 'm, were, have, am, 's, did</li>
      <li>PART-Fin: n't</li>
      <li>PRON-Fin: I, we, what</li>
      <li>VERB-Fin: is, means, was, said, told, comes, has, are, begins, gave</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nec
    <ul>
      <li>AUX: gats, gast</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Opt
    <ul>
      <li>AUX: make, meh, mah, moh, mey</li>
      <li>PRON: ka</li>
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
  <li>Sub
    <ul>
      <li>AUX: make</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>AUX-Fin: 'll</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX: bin, be, was, were, did, had</li>
      <li>AUX-Fin: was, were, did, had</li>
      <li>PART: didn't</li>
      <li>VERB-Fin: was, said, told, gave, used, got, recommended, balanced, came, finished</li>
      <li>VERB-Part: done, born, cheating, lost, boiled, grounded, made, accepted, called, closed</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>ADJ-Part: bellefulling</li>
      <li>AUX-Fin: is, are, do, 'm, have, am, 's, does</li>
      <li>AUX-Part: being</li>
      <li>PART-Fin: n't</li>
      <li>PRON-Fin: I, we, what</li>
      <li>VERB-Fin: is, means, comes, has, are, begins, goes, am, depends, 're</li>
      <li>VERB-Part: according, following, going, making, talking, buying, moving, pedaling, depending, eating</li>
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
      <li>ADP: On</li>
      <li>DET: di, one, a, the, an</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>DET: dis, dat, dose, dese, those, that, da, this</li>
      <li>PRON: dat, dis, dose, dese, those</li>
      <li>X: {, }</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: one</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>ADV: how, where, why, when</li>
      <li>AUX-Fin: 's</li>
      <li>DET: which</li>
      <li>PART: shey</li>
      <li>PRON: wetin, who, what</li>
      <li>PRON-Fin: what</li>
      <li>SCONJ: when</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>AUX: 'm, Don, be</li>
      <li>AUX-Fin: 'm</li>
      <li>PART: masef</li>
      <li>PRON: I, you, e, we, am, de, me, dem, im, us</li>
      <li>PRON-Fin: I, we</li>
      <li>SCONJ: sey</li>
      <li>VERB-Fin: 're</li>
      <li>X: >+, [, de, {, ||, }</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>DET: that</li>
      <li>PRON: dat, which</li>
      <li>SCONJ: wen</li>
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
      <li>NUM: one, two, five, three, hundred, thousand, twenty, six, seven, fifty</li>
      <li>X: thou~</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>ADJ: first, second, third, fourth, eleventh, tenth, eighteenth, fifth, twenty-fourth</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>ADJ: her, your, its</li>
      <li>PRON: my, your, our, deir, her, im, we, dem, una, e</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>PART: masef</li>
      <li>PRON: yourself, mysef, oursef, yoursef, myself, imsef, demsef, himsef, mahnsef, ourselves</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX: was, 'm, am, Don</li>
      <li>AUX-Fin: was, 'm, am</li>
      <li>PART: masef</li>
      <li>PRON: I, we, me, my, us, our, a, mysef, oursef, myself</li>
      <li>PRON-Fin: I, we</li>
      <li>VERB-Fin: was, am, 're</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>ADJ: your</li>
      <li>PRON: you, your, una, yourself, yoursef, ka, yousef, youself</li>
      <li>X: [, {, ||, }</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>ADJ: her, its</li>
      <li>AUX: is, 's, be, does</li>
      <li>AUX-Fin: is, 's, does</li>
      <li>PART: dem</li>
      <li>PRON: e, am, de, dem, im, she, deir, it, her, imsef</li>
      <li>PRON-Fin: what</li>
      <li>SCONJ: sey</li>
      <li>VERB-Fin: is, means, comes, has, begins, goes, depends, abounds, becomes, owes</li>
      <li>X: >+, de</li>
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
          <li>AUX-Inf: be</li>
          <li>INTJ: wa</li>
          <li>NOUN: feminist</li>
          <li>SCONJ: sey</li>
          <li>VERB: be, dat's, it's</li>
          <li>X: #, [, ], |c</li>
        </ul>
      </li>
      <li>Disc
        <ul>
          <li>ADV: kuma</li>
          <li>PART: o, sef, sha, ma, ba, self, kwa</li>
          <li>PROPN: Ma</li>
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
          <li>AUX: is, are, was, am, were, 'm, it's, dey</li>
          <li>AUX-Fin: is, are, was, am, were, 'm</li>
          <li>PRON-Fin: I</li>
          <li>VERB: dey, was, am, is, are, becoming</li>
          <li>VERB-Fin: was, am, is, are</li>
          <li>VERB-Part: becoming</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 3 lemmas as copulas (<a>cop</a>). Examples: na, be, dey.</li>
</ul>

<ul>
<li>This corpus uses 24 lemmas as auxiliaries (<a>aux</a>). Examples: dey, go, con, make, don, fit, bin, will, never, be, for, must, can, do, gats, should, have, cannot, would, may, shall, might, could, muna.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (1773)</li>
      <li>VERB--NOUN-ADP(on) (2)</li>
      <li>VERB--NOUN-ADP(sey) (1)</li>
      <li>VERB--PRON (274)</li>
      <li>VERB--PRON-Acc (55)</li>
      <li>VERB--PRON-Acc-ADP(for) (1)</li>
      <li>VERB--PRON-Nom (9276)</li>
      <li>VERB-Fin--NOUN (27)</li>
      <li>VERB-Fin--PRON (17)</li>
      <li>VERB-Fin--PRON-ADP(for) (1)</li>
      <li>VERB-Fin--PRON-Nom (38)</li>
      <li>VERB-Part--NOUN (23)</li>
      <li>VERB-Part--PRON (7)</li>
      <li>VERB-Part--PRON-Nom (46)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (4276)</li>
      <li>VERB--NOUN-ADP(as) (1)</li>
      <li>VERB--NOUN-ADP(before) (1)</li>
      <li>VERB--NOUN-ADP(in) (1)</li>
      <li>VERB--NOUN-ADP(sey) (13)</li>
      <li>VERB--NOUN-ADP(wey) (2)</li>
      <li>VERB--NOUN-Gen (1)</li>
      <li>VERB--PRON (366)</li>
      <li>VERB--PRON-ADP(sey) (12)</li>
      <li>VERB--PRON-Acc (2204)</li>
      <li>VERB--PRON-Acc-ADP(for) (1)</li>
      <li>VERB--PRON-Nom (423)</li>
      <li>VERB--PRON-Nom-ADP(sey) (3)</li>
      <li>VERB-Fin--NOUN (16)</li>
      <li>VERB-Fin--PRON (1)</li>
      <li>VERB-Fin--PRON-ADP(sey) (1)</li>
      <li>VERB-Fin--PRON-Acc (5)</li>
      <li>VERB-Fin--PRON-Nom (1)</li>
      <li>VERB-Part--NOUN (36)</li>
      <li>VERB-Part--PRON (1)</li>
      <li>VERB-Part--PRON-ADP(sey) (1)</li>
      <li>VERB-Part--PRON-Acc (5)</li>
      <li>VERB-Part--PRON-Nom (7)</li>
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
  <li>This corpus contains 77 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: ask yoursef, see imsef, compose deirsef, build oursef, carry myself, enjoy yourself, feel herself, get mysef, head oursef, package yourself, protect yourself, tell mysef, advertise demselves, advertise yourself, arrange hersef, arrange mysef, arrange myself, bring yourself, call demsefs, call demself, carry imself, carry yoursef, carry yourself, check yoursef, cloth myself, deprive yoursef, develop demsef, do oursefs, do ourselves, engage imsef, enjoy imsef, enjoy mysef, feed myself, find yourself, finish herself, fool yourself, gather ourself, give myself, hate demsefs, help mysef, help oursef, help yourself, humble himsef, improve myself, kack mysef, kill yoursef, know oursefs, laugh mysef, look mysef, make yoursef</li>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 39 relation subtypes: <a>acl:periph</a>, <a>acl:relcl</a>, <a>advcl:cleft</a>, <a>advcl:emph</a>, <a>advcl:periph</a>, <a>advmod:emph</a>, <a>advmod:periph</a>, <a>amod:emph</a>, <a>ccomp:agent</a>, <a>ccomp:obj</a>, <a>ccomp:obl</a>, <a>ccomp:pred</a>, <a>compound:prt</a>, <a>compound:redup</a>, <a>compound:svc</a>, <a>dep:comp</a>, <a>dep:fixed</a>, <a>expl:subj</a>, <a>flat:foreign</a>, <a>nmod:appos</a>, <a>nmod:emph</a>, <a>nmod:periph</a>, <a>nmod:poss</a>, <a>nummod:det</a>, <a>nummod:mod</a>, <a>nummod:periph</a>, <a>obj:lvc</a>, <a>obl:agent</a>, <a>obl:arg</a>, <a>obl:lvc</a>, <a>obl:mod</a>, <a>parataxis:conj</a>, <a>parataxis:discourse</a>, <a>parataxis:dislocated</a>, <a>parataxis:insert</a>, <a>parataxis:parenth</a>, <a>xcomp:obj</a>, <a>xcomp:obl</a>, <a>xcomp:pred</a></li>
<li>The following 4 main types are not used alone, they are always subtyped: <a>ccomp</a>, <a>expl</a>, <a>obl</a>, <a>xcomp</a></li>
<li>The following 4 relation types are not used in this corpus at all: <a>clf</a>, <a>list</a>, <a>goeswith</a>, <a>punct</a></li>
</ul>
