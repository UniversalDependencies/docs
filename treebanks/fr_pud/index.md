---
layout: base
title:  'UD_French-PUD'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD French PUD

Language: [French](../fr/overview/fr-hub.html) (code: `fr`)<br/>
Family: Indo-European, Romance

This treebank has been part of Universal Dependencies since the UD v2.1 release.

The following people have contributed to making this treebank part of UD: Hans Uszkoreit, Vivien Macketanz, Aljoscha Burchardt, Kim Harris, Katrin Marheinecke, Slav Petrov, Tolga Kayadelen, Mohammed Attia, Ali Elkahky, Zhuoran Yu, Emily Pitler, Saran Lertpradit, Jana Strnadová, Gauthier Caron, Martin Popel, Daniel Zeman, Marie-Catherine de Marneffe.

Repository: [UD_French-PUD](https://github.com/UniversalDependencies/UD_French-PUD)

License: CC BY-SA 3.0

Genre: news, wiki

Questions, comments?
General annotation questions (either French-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_French-PUD/issues).
If you want to collaborate, please contact [zeman&nbsp;(æt)&nbsp;ufal&nbsp;•&nbsp;mff&nbsp;•&nbsp;cuni&nbsp;•&nbsp;cz].
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




There are
1000 sentences in each language, always in the same order. (The sentence
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

[Foreign](fr_pud-feat-Foreign.html) – [Gender](fr_pud-feat-Gender.html) – [Mood](fr_pud-feat-Mood.html) – [Number](fr_pud-feat-Number.html) – [Number[psor]](fr_pud-feat-Number-psor.html) – [Person](fr_pud-feat-Person.html) – [Polarity](fr_pud-feat-Polarity.html) – [PronType](fr_pud-feat-PronType.html) – [Tense](fr_pud-feat-Tense.html) – [VerbForm](fr_pud-feat-VerbForm.html)

## Relations

[acl](fr_pud-dep-acl.html) – [acl:relcl](fr_pud-dep-acl-relcl.html) – [advcl](fr_pud-dep-advcl.html) – [advmod](fr_pud-dep-advmod.html) – [amod](fr_pud-dep-amod.html) – [appos](fr_pud-dep-appos.html) – [aux](fr_pud-dep-aux.html) – [aux:pass](fr_pud-dep-aux-pass.html) – [case](fr_pud-dep-case.html) – [cc](fr_pud-dep-cc.html) – [ccomp](fr_pud-dep-ccomp.html) – [compound](fr_pud-dep-compound.html) – [conj](fr_pud-dep-conj.html) – [cop](fr_pud-dep-cop.html) – [csubj](fr_pud-dep-csubj.html) – [csubj:pass](fr_pud-dep-csubj-pass.html) – [dep](fr_pud-dep-dep.html) – [det](fr_pud-dep-det.html) – [det:predet](fr_pud-dep-det-predet.html) – [discourse](fr_pud-dep-discourse.html) – [dislocated](fr_pud-dep-dislocated.html) – [expl](fr_pud-dep-expl.html) – [fixed](fr_pud-dep-fixed.html) – [flat](fr_pud-dep-flat.html) – [flat:name](fr_pud-dep-flat-name.html) – [goeswith](fr_pud-dep-goeswith.html) – [iobj](fr_pud-dep-iobj.html) – [mark](fr_pud-dep-mark.html) – [nmod](fr_pud-dep-nmod.html) – [nmod:poss](fr_pud-dep-nmod-poss.html) – [nsubj](fr_pud-dep-nsubj.html) – [nsubj:pass](fr_pud-dep-nsubj-pass.html) – [nummod](fr_pud-dep-nummod.html) – [obj](fr_pud-dep-obj.html) – [obl](fr_pud-dep-obl.html) – [obl:tmod](fr_pud-dep-obl-tmod.html) – [orphan](fr_pud-dep-orphan.html) – [parataxis](fr_pud-dep-parataxis.html) – [punct](fr_pud-dep-punct.html) – [root](fr_pud-dep-root.html) – [vocative](fr_pud-dep-vocative.html) – [xcomp](fr_pud-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>

<ul>
<li>This corpus contains 1000 sentences, 24138 tokens and 24734 syntactic words.</li>
<li>This corpus contains 3446 tokens (14%) that are not followed by a space.</li>
<li>This corpus contains 11 types of words with spaces. Examples: 10 000, 100 000, 12 000, 15 000, 16 500, 168 000, 25 000, 330 000, 35 000, 5 000, 600 000</li>
<li>This corpus contains 149 types of words that contain both letters and punctuation. Examples: l', d', l’, d’, qu', s', n', qu’, n’, s’, c', jusqu', c’, -il, J.-C., États-Unis, peut-être, -t, Grande-Bretagne, M., au-delà, j’, Etats-Unis, au-dessus, av., j', jusqu’, porte-parole, Papouasie-Nouvelle-Guinée, Pays-Bas, grand-mère, m’, nord-ouest, quelqu'un, -ce, -là, C.B., J-C, J.-C, Joliot-Curie, Royaume-Uni, Sud-Est, aujourd'hui, cité-état, e-mails, elle-même, lorsqu’, l‘, soi-disant, 'Ya</li>
<li>This corpus contains 596 multi-word tokens. On average, one multi-word token consists of 2.00 syntactic words.</li>
<li>There are 5 types of multi-word tokens. Examples: du, des, au, aux, desquelles.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 16 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a>, <a>X</a></li>
<li>This corpus does not use the following tags: INTJ</li>
<li>This corpus contains 3 word types tagged as particles (PART): -là, -t, l’</li>
</ul>

<ul>
<li>This corpus contains 2 lemmas tagged as pronouns (PRON): _, lequel</li>
</ul>

<ul>
<li>This corpus contains 2 lemmas tagged as determiners (DET): _, le</li>
</ul>

<ul>
<li>Out of the above, 1 lemmas occurred sometimes as PRON and sometimes as DET: _</li>
</ul>

<ul>
<li>This corpus contains 1 lemmas tagged as auxiliaries (AUX): _</li>
</ul>

<ul>
<li>Out of the above, 1 lemmas occurred sometimes as AUX and sometimes as VERB: _</li>
</ul>

<ul>
<li>There are 1 <a href="../feat/VerbForm.html">(de)verbal forms:</a>
<ul>
  <li>Part
  <ul>
    <li>AUX: devenant, laissant, appelée, rendue, été</li>
    <li>VERB: concernant, ayant, permettant, pouvant, dépassant, faisant, provenant, représentant, dirigée, réalisé</li>
  </ul>
  </li>
</ul>
</li>
</ul>

<h3>Nominal Features</h3>

<li><a>Gender</a>
  <ul>
    <li>Fem
      <ul>
        <li>ADJ: première, grande, nouvelle, plusieurs, dernière, dernières, nombreuses, nouvelles, autres, deuxième</li>
        <li>ADP: dont</li>
        <li>AUX: devenue, appelée, déclarée, montrée, nommée, proclamée, rendue</li>
        <li>AUX-Part: appelée, rendue</li>
        <li>DET: la, les, une, l', l’, des, cette, de, toute, ces</li>
        <li>NOUN: années, guerre, partie, ville, année, fois, mer, personnes, région, histoire</li>
        <li>PRON: sa, qui, elle, leur, se, ses, leurs, s', son, elles</li>
        <li>PROPN: Chine, Amérique, Europe, Australie, France, Italie, Afrique, Albanie, Grande-Bretagne, Méditerranée</li>
        <li>VERB: composée, dirigée, apparue, utilisée, considérée, considérées, déroulée, détruite, faite, formée</li>
        <li>VERB-Part: dirigée, menée, suivies, Financées, Formée, Reconnue, accumulées, accusées, adoptée, animée</li>
      </ul>
    </li>
    <li>Masc
      <ul>
        <li>ADJ: autres, grand, général, nouveaux, plusieurs, certains, nouveau, premier, chaque, dernier</li>
        <li>ADP: dont, au-delà</li>
        <li>AUX: été, devenu, apparu, appelé, connu, resté, restés</li>
        <li>AUX-Part: été</li>
        <li>DET: le, les, un, l', des, l’, ce, ces, de, tout</li>
        <li>NOUN: ans, nord, état, gouvernement, siècle, jour, monde, pays, sud, temps</li>
        <li>PRON: il, qui, son, ils, se, s', ses, leur, lui, le</li>
        <li>PROPN: Trump, J.-C., États-Unis, Joseph, Donald, Gerry, Cameroun, Disney, Edgar, Mexique</li>
        <li>VERB: été, eu, déclaré, dit, fait, commencé, indiqué, décidé, joué, utilisé</li>
        <li>VERB-Part: réalisé, dirigés, fondé, inscrits, passé, situé, Conçu, Enterré, abandonné, accompagné</li>
      </ul>
    </li>
  </ul>
</li>


<li><a>Number</a>
  <ul>
    <li>Plur
      <ul>
        <li>ADJ: autres, plusieurs, nouveaux, certains, dernières, nombreuses, nouvelles, nombreux, quelques, telles</li>
        <li>ADP: dont</li>
        <li>AUX: sont, étaient, sommes, baptisèrent, furent, fussent, laissaient, rendent, restaient, restent</li>
        <li>DET: les, des, ces, de, d', tous, d’, toutes, The, e</li>
        <li>NOUN: années, ans, personnes, entreprises, dollars, jours, euros, femmes, gens, mois</li>
        <li>PRON: qui, ils, ses, nous, se, leurs, vous, eux, elles, s'</li>
        <li>PROPN: États-Unis, Caraïbes, Alpes, Andes, Antilles, Balkans, Boeing, Forums, Humblebums, News</li>
        <li>VERB: ont, sont, avaient, peuvent, étaient, pourraient, aient, furent, auraient, avons</li>
        <li>VERB-Part: dirigés, inscrits, suivies, Financées, accompagnés, accumulées, accusées, appliquées, choisies, clos</li>
      </ul>
    </li>
    <li>Sing
      <ul>
        <li>ADJ: première, chaque, grand, grande, nouvelle, britannique, autre, général, même, deuxième</li>
        <li>ADP: dont, au-delà</li>
        <li>AUX: est, était, été, fut, devint, appelle, devenu, serait, soit, devenue</li>
        <li>AUX-Part: appelée, rendue, été</li>
        <li>DET: le, la, l', un, une, l’, cette, ce, the, de</li>
        <li>NOUN: guerre, partie, ville, nord, année, état, sud, gouvernement, mer, siècle</li>
        <li>PRON: il, qui, son, sa, elle, leur, se, on, je, s'</li>
        <li>PROPN: Chine, Hong, Kong, Paris, Trump, Pékin, J.-C., Amérique, Europe, Londres</li>
        <li>VERB: a, est, été, avait, était, fut, peut, dit, fait, eu</li>
        <li>VERB-Part: dirigée, réalisé, fondé, menée, passé, situé, Conçu, Enterré, Formée, Reconnue</li>
      </ul>
    </li>
  </ul>
</li>




<h3>Degree and Polarity</h3>


<li><a>Polarity</a>
  <ul>
    <li>Neg
      <ul>
        <li>ADV: pas, ne, n', n’, plus, jamais, non, t</li>
      </ul>
    </li>
  </ul>
</li>


<h3>Verbal Features</h3>


<li><a>Mood</a>
  <ul>
    <li>Cnd
      <ul>
        <li>AUX: serait, rendrait, serais</li>
        <li>VERB: pourrait, aurait, pourraient, devrait, auraient, serait, devraient, irait, aiderait, autoriserait</li>
      </ul>
    </li>
    <li>Imp
      <ul>
        <li>VERB: Disons, Don’t, Knuck, Laisse, Tiens, Voilà</li>
      </ul>
    </li>
    <li>Ind
      <ul>
        <li>AUX: est, était, sont, étaient, fut, devint, appelle, sera, sommes, a</li>
        <li>VERB: a, ont, est, avait, sont, était, fut, peut, avaient, peuvent</li>
      </ul>
    </li>
    <li>Sub
      <ul>
        <li>AUX: soit, fussent</li>
        <li>VERB: aient, ait, puisse, soient, soit, aperçoive, chante, donne, décide, fasse</li>
      </ul>
    </li>
  </ul>
</li>

<li><a>Tense</a>
  <ul>
    <li>Fut
      <ul>
        <li>AUX: sera, deviendra, seront</li>
        <li>VERB: aura, sera, devra, pourront, accueillera, assisteront, augmentera, commercialiseront, concentrerons, continuera</li>
      </ul>
    </li>
    <li>Imp
      <ul>
        <li>AUX: était, étaient, déclarait, faisait, laissaient, pensait, restaient, restait, étais, étions</li>
        <li>VERB: avait, était, avaient, étaient, pouvait, comprenait, considérait, faisait, pensait, allait</li>
      </ul>
    </li>
    <li>Past
      <ul>
        <li>AUX: fut, devint, baptisèrent, furent, tomba</li>
        <li>VERB: fut, furent, prit, eut, commença, dura, permit, put, retourna, retrouva</li>
      </ul>
    </li>
    <li>Pres
      <ul>
        <li>AUX: est, sont, appelle, serait, soit, sommes, a, apparaît, constitue, devient</li>
        <li>VERB: a, ont, est, sont, peut, pourrait, peuvent, ai, aurait, pourraient</li>
      </ul>
    </li>
  </ul>
</li>



<h3>Pronouns, Determiners, Quantifiers</h3>

<li><a>PronType</a>
  <ul>
    <li>Prs
      <ul>
        <li>PRON: son, sa, ses, leur, leurs, notre, nos, mon, votre, My</li>
      </ul>
    </li>
  </ul>
</li>




<li><a>Person</a>
  <ul>
    <li>1
      <ul>
        <li>AUX: sommes, serais, suis, étais, étions</li>
        <li>PRON: je, nous, notre, nos, j’, j', me, mon, m’, My</li>
        <li>VERB: ai, avons, devons, suis, Disons, allons, comprends, pense, pensons, pouvons</li>
      </ul>
    </li>
    <li>2
      <ul>
        <li>PRON: vous, votre, You, toi, 'Ya, se, vos</li>
        <li>VERB: avez, devez, Buck, Don’t, Knew, Knuck, Laisse, Tiens, Voilà, disputez</li>
      </ul>
    </li>
    <li>3
      <ul>
        <li>AUX: est, était, sont, étaient, fut, devint, appelle, serait, soit, sera</li>
        <li>PRON: il, y, se, son, sa, elle, ils, ses, leur, s'</li>
        <li>VERB: a, ont, est, avait, sont, était, fut, peut, avaient, pourrait</li>
      </ul>
    </li>
  </ul>
</li>



<li><a>Number[psor]</a>
  <ul>
    <li>Plur
      <ul>
        <li>PRON: leur, leurs, notre, nos, votre, vos</li>
      </ul>
    </li>
    <li>Sing
      <ul>
        <li>PRON: son, sa, ses, mon, My, ma, mes, sar, sienne</li>
      </ul>
    </li>
  </ul>
</li>

<h3>Other Features</h3>

<li><a>Foreign</a>
  <ul>
    <li>Yes
      <ul>
        <li>X: Este, Greco, Mei, Mundo, Nostrum, Ping, Píanó, Rasa, Rós, Skylark</li>
      </ul>
    </li>
  </ul>
</li>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 1 lemmas as copulas (<a>cop</a>). Examples: _.</li>
<li>This corpus uses 1 lemmas as auxiliaries (<a>aux</a>). Examples: _.</li>
<li>This corpus uses 1 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: _.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (547)</li>
      <li>VERB--PRON (455)</li>
      <li>VERB-Part--NOUN (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (767)</li>
      <li>VERB--NOUN-ADP(_) (1)</li>
      <li>VERB--PRON (207)</li>
      <li>VERB-Part--NOUN (38)</li>
      <li>VERB-Part--PRON (2)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--PRON (35)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 8 relation subtypes: <a>acl:relcl</a>, <a>aux:pass</a>, <a>csubj:pass</a>, <a>det:predet</a>, <a>flat:name</a>, <a>nmod:poss</a>, <a>nsubj:pass</a>, <a>obl:tmod</a></li>
<li>The following 3 relation types are not used in this corpus at all: <a>clf</a>, <a>list</a>, <a>reparandum</a></li>
</ul>
