---
layout: base
title:  'UD_French-PUD'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD French PUD

Language: [French](/fr/index.html) (code: `fr`)<br/>
Family: Indo-European, Romance

This treebank has been part of Universal Dependencies since the UD v2.1 release.

The following people have contributed to making this treebank part of UD: Hans Uszkoreit, Vivien Macketanz, Aljoscha Burchardt, Kim Harris, Katrin Marheinecke, Slav Petrov, Tolga Kayadelen, Mohammed Attia, Ali Elkahky, Zhuoran Yu, Emily Pitler, Saran Lertpradit, Jana Strnadová, Gauthier Caron, Martin Popel, Daniel Zeman, Marie-Catherine de Marneffe, Bruno Guillaume.

Repository: [UD_French-PUD](https://github.com/UniversalDependencies/UD_French-PUD)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udfr_pud27)<br />
Download all treebanks: [UD 2.7](/#download)

License: CC BY-SA 3.0

Genre: news, wiki

Questions, comments?
General annotation questions (either French-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_French-PUD/issues).
If you want to collaborate, please contact [bruno&nbsp;•&nbsp;guillaume&nbsp;(æt)&nbsp;inria&nbsp;•&nbsp;fr].
Development of the treebank happens directly in the UD repository, so you may submit bug fixes as pull requests against the dev branch.

| Annotation | Source |
|------------|--------|
| Lemmas | not available |
| UPOS | annotated manually in non-UD style, automatically converted to UD |
| XPOS | not available |
| Features | annotated manually in non-UD style, automatically converted to UD |
| Relations | annotated manually in non-UD style, automatically converted to UD |

## Description

This is a part of the Parallel Universal Dependencies (PUD) treebanks created
for the [CoNLL 2017 shared task on Multilingual Parsing from Raw Text to
Universal Dependencies](http://universaldependencies.org/conll17/).




There are 1000 sentences in each language, always in the same order. (The sentence
alignment is 1-1 but occasionally a sentence-level segment actually consists
of two real sentences.) The sentences are taken from the news domain (sentence
id starts in ‘n’) and from Wikipedia (sentence id starts with ‘w’). There are
usually only a few sentences from each document, selected randomly, not
necessarily adjacent. The digits on the second and third position in the
sentence ids encode the original language of the sentence. The first 750
sentences are originally English (01). The remaining 250 sentences are
originally German (02), French (03), Italian (04) or Spanish (05) and they
were translated to other languages via English. Translation into German,
French, Italian, Spanish, Arabic, Hindi, Chinese, Indonesian, Japanese,
Korean, Portuguese, Russian, Thai and Turkish has been provided by DFKI and
performed (except for German) by professional translators. Then the data has
been annotated morphologically and syntactically by Google according to Google
universal annotation guidelines; finally, it has been converted by members of
the UD community to UD v2 guidelines.

Additional languages have been provided (both translation and native UD v2
annotation) by other teams: Czech by Charles University, Finnish by University
of Turku and Swedish by Uppsala University.

The entire treebank is labeled as test set (and was used for testing in the
shared task). If it is used for training in future research, the users should
employ ten-fold cross-validation.

## Acknowledgments

# Statistics of UD French PUD

## POS Tags

[ADJ](fr_pud-pos-ADJ.html) – [ADP](fr_pud-pos-ADP.html) – [ADV](fr_pud-pos-ADV.html) – [AUX](fr_pud-pos-AUX.html) – [CCONJ](fr_pud-pos-CCONJ.html) – [DET](fr_pud-pos-DET.html) – [NOUN](fr_pud-pos-NOUN.html) – [NUM](fr_pud-pos-NUM.html) – [PART](fr_pud-pos-PART.html) – [PRON](fr_pud-pos-PRON.html) – [PROPN](fr_pud-pos-PROPN.html) – [PUNCT](fr_pud-pos-PUNCT.html) – [SCONJ](fr_pud-pos-SCONJ.html) – [SYM](fr_pud-pos-SYM.html) – [VERB](fr_pud-pos-VERB.html) – [X](fr_pud-pos-X.html)

## Features

[Foreign](fr_pud-feat-Foreign.html) – [Gender](fr_pud-feat-Gender.html) – [Mood](fr_pud-feat-Mood.html) – [Number](fr_pud-feat-Number.html) – [Number[psor]](fr_pud-feat-Number-psor.html) – [Person](fr_pud-feat-Person.html) – [Polarity](fr_pud-feat-Polarity.html) – [Poss](fr_pud-feat-Poss.html) – [PronType](fr_pud-feat-PronType.html) – [Tense](fr_pud-feat-Tense.html) – [VerbForm](fr_pud-feat-VerbForm.html)

## Relations

[acl](fr_pud-dep-acl.html) – [acl:relcl](fr_pud-dep-acl-relcl.html) – [advcl](fr_pud-dep-advcl.html) – [advmod](fr_pud-dep-advmod.html) – [amod](fr_pud-dep-amod.html) – [appos](fr_pud-dep-appos.html) – [aux:caus](fr_pud-dep-aux-caus.html) – [aux:pass](fr_pud-dep-aux-pass.html) – [aux:tense](fr_pud-dep-aux-tense.html) – [case](fr_pud-dep-case.html) – [cc](fr_pud-dep-cc.html) – [ccomp](fr_pud-dep-ccomp.html) – [conj](fr_pud-dep-conj.html) – [cop](fr_pud-dep-cop.html) – [csubj](fr_pud-dep-csubj.html) – [csubj:pass](fr_pud-dep-csubj-pass.html) – [dep](fr_pud-dep-dep.html) – [det](fr_pud-dep-det.html) – [discourse](fr_pud-dep-discourse.html) – [dislocated](fr_pud-dep-dislocated.html) – [expl:comp](fr_pud-dep-expl-comp.html) – [expl:subj](fr_pud-dep-expl-subj.html) – [fixed](fr_pud-dep-fixed.html) – [flat:foreign](fr_pud-dep-flat-foreign.html) – [flat:name](fr_pud-dep-flat-name.html) – [goeswith](fr_pud-dep-goeswith.html) – [iobj](fr_pud-dep-iobj.html) – [mark](fr_pud-dep-mark.html) – [nmod](fr_pud-dep-nmod.html) – [nsubj](fr_pud-dep-nsubj.html) – [nsubj:caus](fr_pud-dep-nsubj-caus.html) – [nsubj:pass](fr_pud-dep-nsubj-pass.html) – [nummod](fr_pud-dep-nummod.html) – [obj](fr_pud-dep-obj.html) – [obj:agent](fr_pud-dep-obj-agent.html) – [obl](fr_pud-dep-obl.html) – [obl:agent](fr_pud-dep-obl-agent.html) – [obl:mod](fr_pud-dep-obl-mod.html) – [orphan](fr_pud-dep-orphan.html) – [parataxis](fr_pud-dep-parataxis.html) – [punct](fr_pud-dep-punct.html) – [root](fr_pud-dep-root.html) – [vocative](fr_pud-dep-vocative.html) – [xcomp](fr_pud-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 1000 sentences, 24137 tokens and 24734 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 3445 tokens (14%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus contains 11 types of words with spaces. Examples: 10 000, 100 000, 12 000, 15 000, 16 500, 168 000, 25 000, 330 000, 35 000, 5 000, 600 000</li>
</ul>

<ul>
<li>This corpus contains 147 types of words that contain both letters and punctuation. Examples: l', d', l’, d’, qu', s', n', qu’, n’, s’, c', jusqu', c’, -il, J.-C., États-Unis, peut-être, -t, Grande-Bretagne, M., au-delà, j’, Etats-Unis, au-dessus, av., j', jusqu’, porte-parole, P​a​p​o​u​a​s​i​e​-​N​o​u​v​e​l​l​e​-​G​u​i​n​é​e, Pays-Bas, grand-mère, m’, nord-ouest, quelqu'un, -ce, -là, C.B., J-C, J.-C, Joliot-Curie, Royaume-Uni, Sud-Est, aujourd'hui, cité-état, e-mails, elle-même, lorsqu’, l‘, soi-disant, 'Ya</li>
</ul>

<ul>
<li>This corpus contains 597 multi-word tokens. On average, one multi-word token consists of 2.00 syntactic words.</li>
<li>There are 5 types of multi-word tokens. Examples: du, des, au, aux, desquelles.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 16 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a>, <a>X</a></li>
<li>This corpus does not use the following tags: INTJ</li>
</ul>

<ul>
<li>This corpus contains 2 word types tagged as particles (PART): -là, -t</li>
</ul>

<ul>
<li>This corpus contains 29 lemmas tagged as pronouns (PRON): aucun, ce, ceci, cela, celui, elle-même, en, eux-mêmes, il, je, le, lequel, lui, lui-même, me, on, que, quel, quelqu'un, quelqu’un, qui, quoi, rien, se, sienne, soi, sse, y, ça</li>
</ul>

<ul>
<li>This corpus contains 12 lemmas tagged as determiners (DET): aucun, ce, de, du, d’, la, le, ledit, quel, son, tout, un</li>
</ul>

<ul>
<li>Out of the above, 4 lemmas occurred sometimes as PRON and sometimes as DET: aucun, ce, le, quel</li>
</ul>

<ul>
<li>This corpus contains 3 lemmas tagged as auxiliaries (AUX): avoir, faire, être</li>
</ul>

<ul>
<li>Out of the above, 3 lemmas occurred sometimes as AUX and sometimes as VERB: avoir, faire, être</li>
</ul>

<ul>
<li>There are 3 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: a, est, ont, sont, était, avait, fut, avaient, étaient, ai</li>
    <li>VERB: a, est, peut, avait, pourrait, était, peuvent, sont, ont, pourraient</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: être, avoir, faire</li>
    <li>VERB: faire, avoir, voir, devenir, partir, produire, aider, créer, donner, envoyer</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>ADJ: issu, issues, issus, ouverte</li>
    <li>AUX: été, ayant, étant, fait</li>
    <li>VERB: eu, déclaré, dit, fait, commencé, indiqué, décidé, joué, utilisé, compris</li>
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
      <li>ADJ: première, grande, nouvelle, plusieurs, dernière, dernières, nombreuses, nouvelles, autres, deuxième</li>
      <li>ADJ-Part: issues, ouverte</li>
      <li>ADP: dont</li>
      <li>DET: la, les, une, l', l’, sa, des, cette, leur, ses</li>
      <li>NOUN: années, guerre, partie, ville, année, fois, mer, personnes, région, histoire</li>
      <li>PRON: qui, elle, se, s', elles, s’, l', laquelle, que, celle</li>
      <li>PROPN: Chine, Amérique, Europe, Australie, France, Italie, Afrique, Albanie, Grande-Bretagne, Méditerranée</li>
      <li>SCONJ: que</li>
      <li>VERB-Part: composée, dirigée, apparue, devenue, utilisée, considérée, considérées, déroulée, détruite, faite</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: autres, grand, général, nouveaux, plusieurs, certains, nouveau, chaque, dernier, nombreux</li>
      <li>ADJ-Part: issu, issus</li>
      <li>ADP: dont, au-delà</li>
      <li>AUX-Part: été, fait</li>
      <li>DET: le, les, un, l', des, l’, son, ce, ses, ces</li>
      <li>NOUN: ans, nord, état, gouvernement, siècle, jour, monde, pays, sud, temps</li>
      <li>NUM: 1er, premier</li>
      <li>PRON: il, qui, ils, se, s', lui, le, -il, s’, eux</li>
      <li>PROPN: Trump, J.-C., États-Unis, Joseph, Donald, Gerry, Cameroun, Edgar, Mexique, Rafferty</li>
      <li>VERB-Part: eu, déclaré, dit, fait, commencé, indiqué, décidé, joué, utilisé, compris</li>
      <li>X: Garden</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: autres, plusieurs, nouveaux, certains, dernières, nombreuses, nouvelles, nombreux, quelques, telles</li>
      <li>ADJ-Part: issues, issus</li>
      <li>ADP: dont</li>
      <li>AUX-Fin: ont, sont, avaient, étaient, furent, aient, auraient, avons, sommes, soient</li>
      <li>DET: les, des, ses, ces, de, leurs, d', nos, d’, mes</li>
      <li>NOUN: années, ans, personnes, millions, entreprises, dollars, jours, euros, femmes, gens</li>
      <li>PRON: qui, ils, nous, se, vous, eux, elles, s', ceux, lesquelles</li>
      <li>PROPN: États-Unis, Caraïbes, Alpes, Andes, Pays-Bas, Antilles, Balkans, Boeing, Forums, News</li>
      <li>SCONJ: que</li>
      <li>VERB-Fin: peuvent, sont, ont, pourraient, étaient, devons, font, avaient, commencent, devraient</li>
      <li>VERB-Part: inscrits, arrivés, considérées, construits, dirigés, domestiqués, oubliés, placés, rendues, suivies</li>
      <li>X: Winds</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: première, chaque, grand, grande, nouvelle, britannique, autre, général, même, deuxième</li>
      <li>ADJ-Part: issu, ouverte</li>
      <li>ADP: dont, au-delà</li>
      <li>AUX-Fin: a, est, était, avait, fut, ai, soit, aurait, serait, sera</li>
      <li>AUX-Part: été, fait</li>
      <li>DET: le, la, l', un, une, l’, son, sa, cette, leur</li>
      <li>NOUN: guerre, partie, ville, nord, année, état, sud, gouvernement, mer, siècle</li>
      <li>NUM: 1er, premier</li>
      <li>PRON: il, qui, elle, se, on, je, s', lui, s’, le</li>
      <li>PROPN: Chine, Hong, Kong, Paris, Trump, Pékin, J.-C., Amérique, Europe, Londres</li>
      <li>VERB-Fin: a, est, peut, avait, pourrait, était, va, devrait, dit, semble</li>
      <li>VERB-Part: eu, déclaré, dit, fait, commencé, indiqué, décidé, joué, utilisé, compris</li>
      <li>X: A, Buena, Dream, Prayer, Spring, The, Winter, Yerba, Garden</li>
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
      <li>ADV: pas, ne, n', n’, plus, jamais, non</li>
      <li>DET: aucun, aucune</li>
      <li>PRON: aucun</li>
    </ul>
  </li>
</ul>


<h3>Verbal Features</h3>



<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Cnd
    <ul>
      <li>AUX-Fin: auraient, aurait, serait, serais</li>
      <li>VERB-Fin: pourrait, pourraient, devrait, aurait, devraient, serait, irait, aiderait, autoriserait, choisirait</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>VERB-Fin: Disons, Laisse, Tiens, Voilà</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX-Fin: a, est, ont, sont, était, avait, fut, avaient, étaient, ai</li>
      <li>VERB-Fin: a, est, peut, avait, était, peuvent, sont, ont, va, étaient</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sub
    <ul>
      <li>AUX-Fin: aient, soit, soient, ait, fussent</li>
      <li>VERB-Fin: puisse, ait, aperçoive, chante, donne, décide, fasse, finisse, fût</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>AUX-Fin: sera, seront</li>
      <li>VERB-Fin: aura, devra, pourront, sera, accueillera, assisteront, augmentera, commercialiseront, concentrerons, continuera</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: était, avait, avaient, étaient, avais, faisaient, faisait, étais, étions</li>
      <li>VERB-Fin: avait, était, étaient, pouvait, comprenait, pensait, avaient, considérait, faisait, allait</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>ADJ-Part: issu, issues, issus, ouverte</li>
      <li>AUX-Fin: fut, furent, eut</li>
      <li>AUX-Part: été, fait</li>
      <li>VERB-Fin: devint, prit, fut, commença, dura, permit, put, retourna, retrouva, tomba</li>
      <li>VERB-Part: eu, déclaré, dit, fait, commencé, indiqué, décidé, joué, utilisé, compris</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX-Fin: a, est, ont, sont, ai, aient, soit, auraient, aurait, serait</li>
      <li>AUX-Part: ayant, étant</li>
      <li>VERB-Fin: a, est, peut, pourrait, peuvent, sont, ont, pourraient, va, devrait</li>
      <li>VERB-Part: concernant, faisant, ayant, permettant, pouvant, utilisant, dépassant, jouant, laissant, modifiant</li>
    </ul>
  </li>
</ul>



<h3>Pronouns, Determiners, Quantifiers</h3>


<ul>
  <li><a>PronType</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>DET: aucun, aucune</li>
      <li>PRON: aucun</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>DET: son, sa, ses, leur, leurs, notre, nos, mon, votre, ma</li>
      <li>PRON: sienne</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>DET: son, sa, ses, leur, leurs, notre, nos, mon, votre, ma</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX-Fin: ai, avons, sommes, suis, avais, serais, étais, étions</li>
      <li>DET: notre, nos, mon, ma, mes</li>
      <li>PRON: je, nous, j’, j', me, m’, moi, m'</li>
      <li>VERB-Fin: devons, Disons, allons, comprends, pense, pensons, pouvons, adorais, ai, amuse</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX-Fin: avez</li>
      <li>DET: votre, vos</li>
      <li>PRON: vous, toi, se</li>
      <li>VERB-Fin: devez, Laisse, Tiens, Voilà, avez, disputez, pouvez, savez, souhaitez, voulez</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX-Fin: a, est, ont, sont, était, avait, fut, avaient, étaient, furent</li>
      <li>DET: son, sa, ses, leur, leurs, sar</li>
      <li>PRON: il, y, se, elle, ils, s', on, s’, lui, le</li>
      <li>VERB-Fin: a, est, peut, avait, pourrait, était, peuvent, sont, ont, pourraient</li>
    </ul>
  </li>
</ul>



<ul>
  <li><a>Number[psor]</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>DET: leur, leurs, notre, nos, votre, vos</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>DET: son, sa, ses, mon, ma, mes, sar</li>
      <li>PRON: sienne</li>
    </ul>
  </li>
</ul>

<h3>Other Features</h3>


<ul>
  <li><a>Foreign</a>
    <ul>
      <li>Yes
        <ul>
          <li>X: Este, Greco, Mare, Mei, Mundo, Nostrum, Ping, Píanó, Rasa, Rós</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 1 lemmas as copulas (<a>cop</a>). Examples: être.</li>
</ul>

<ul>
<li>This corpus uses 1 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: être.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB-Fin--NOUN (362)</li>
      <li>VERB-Fin--PRON (331)</li>
      <li>VERB-Inf--NOUN (1)</li>
      <li>VERB-Part--NOUN (190)</li>
      <li>VERB-Part--PRON (134)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB-Fin--NOUN (319)</li>
      <li>VERB-Fin--PRON (108)</li>
      <li>VERB-Inf--NOUN (231)</li>
      <li>VERB-Inf--PRON (53)</li>
      <li>VERB-Part--NOUN (251)</li>
      <li>VERB-Part--PRON (60)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB-Fin--PRON (14)</li>
      <li>VERB-Inf--PRON (5)</li>
      <li>VERB-Part--PRON (16)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 14 relation subtypes: <a>acl:relcl</a>, <a>aux:caus</a>, <a>aux:pass</a>, <a>aux:tense</a>, <a>csubj:pass</a>, <a>expl:comp</a>, <a>expl:subj</a>, <a>flat:foreign</a>, <a>flat:name</a>, <a>nsubj:caus</a>, <a>nsubj:pass</a>, <a>obj:agent</a>, <a>obl:agent</a>, <a>obl:mod</a></li>
<li>The following 3 main types are not used alone, they are always subtyped: <a>aux</a>, <a>expl</a>, <a>flat</a></li>
<li>The following 4 relation types are not used in this corpus at all: <a>clf</a>, <a>compound</a>, <a>list</a>, <a>reparandum</a></li>
</ul>
