---
layout: base
title:  'UD_French-ALTS'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD French ALTS

Language: [French](/fr/index.html) (code: `fr`)<br/>
Family: IE

This treebank has been part of Universal Dependencies since the UD v2.16 release.

The following people have contributed to making this treebank part of UD: Natalia Romanova, Rayan Ziane, Khensa Daoudi, Théo Brillet.

Repository: [UD_French-ALTS](https://github.com/UniversalDependencies/UD_French-ALTS)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udfr_alts218)<br />
Download all treebanks: [UD 2.18](/#download)

License: CC BY-SA 4.0

Genre: legal

Questions, comments?
General annotation questions (either French-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_French-ALTS/issues).
If you want to collaborate, please contact [natalia&nbsp;•&nbsp;romanova&nbsp;(æt)&nbsp;unicaen&nbsp;•&nbsp;fr].
Development of the treebank happens directly in the UD repository, so you may submit bug fixes as pull requests against the dev branch.

| Annotation | Source |
|------------|--------|
| Lemmas | annotated manually |
| UPOS | annotated manually, natively in UD style |
| XPOS | not available |
| Features | annotated manually, natively in UD style |
| Relations | annotated manually, natively in UD style |

## Description

ALTS (AUTOMATED Sixteenth-century corpus) is a treebank of sixteenth-century legal French from Normandy and the Channel Islands.




Currently it contains two texts: 1) trial accounts from Guernsey Greffe (register _Crime I_), transcribed directly from the manuscript (**1563-1569_Guern**) and 2) an extract from Book 9 of Guillaume Terrien's _Commentaires du droict civil tant public que privé observé au pays et duché de Normandie_ digitised from the original printed book (**1578_Terrien**). The text of 1563-1569_Guern presents many dialectal Norman features and forms. The text of 1578_Terrien has some Latin words and expressions.

**1563-1569_Guern**

This text contains accounts of fifteen court cases on the island on Guernsey from 1563 to 1569 (witchcraft, piratry, infanticide etc). The text was transcribed in full from the original manuscript Guernsey Greffe _Crime I_, abbreviations were expanded. In the treebank, sentences from this text have the prefix 1563-1569_Guern.

**1578_Terrien**

This text contains passages authored by Guillaume Terrien himself (and not quotations from earlier legal texts) from Book 9 "Style de procédure"
from the sixteenth-century printed book Guillaume Terrien (1568). _Commentaires du droict civil tant public que privé observé au pays et duché de Normandie_, 2nd edition, Paris: Jacques du Puy, pp. 339-402. The spelling and word segmentation of the original, including abbreviated words (e.g. "glo." for "glose"), have been retained. Only abbreviations for "m" and "n" (eg. "o with a tilda" for "om" or "on" and "&" for "et" have been expanded. In the treebank, sentences from this text have the prefix 1578_Terrien.

Sentences written completely in Latin were excluded. If Latin words occur in French sentences, the token contains the tag Lang=la and is lemmatised with a Latin lemma.

**Sentence and token number per text**

| Text | Sentences| Tokens |
| :---------------- | :------: | ----: |
| 1563-1569_Guern | 1,269 | 45,101 |
| 1578_Terrien | 757 | 25,113 |
| **Total** | **2,026**| **70,114**|

**Annotation**

Verbs and auxiliaries are annotated in verb forms (VerbForm): Inf (infinitive), Fin (conjugated) and Part (participle). In 1568_Terrien, congujated verbs and auxiliaries are annotated in Person and Number.

Pronouns are annotated in type (PronType: Dem for demonstrative, Ind for indefinite, Int for interrogative, Prs for personal and Rel for relative). Reflexive and possessive pronouns are also tagged (Reflexive=Yes and Poss=Yes).

Determiners are annotated using PronType feature (Art for articles, Dem for demonstratives, Ind for indefinite). Possessive determiners have are annotated Poss=Yes.

The treebank is lemmatised using modern French lemmata and, wherever approriate, using lemmata from ([Dictionnaire du Moyen Français](http://zeus.atilf.fr/dmf/)).

**Train/Dev/Test split**

| Set | Sentences| Tokens |
| :---------------- | :------: | ----: |
| Train | 1202 | 43,389 |
| Dev | 154 | 6,024 |
| Test | 670 | 20,701 |
| **Total** | **2,026**| **70,114**|

Earlier versions of the texts, annotated with [HT-CRISCO workflow](https://github.com/Corpus-Diachroniques-CRISCO/HT-CRISCO) incorporating the use of [HOPS parser](https://github.com/hopsparser/hopsparser), can be consulted on [CRISCO Lab's TXM server](https://txm-crisco.huma-num.fr/txm/) and via the [website](https://criscoht.unicaen.fr/).

Please note that French-ALTS treebank is still under development and will be undergoing campains of correction. Annotation will be revised and expanded. Please do not hesitate to contact us is you have any questions, suggestions or comments.

## Acknowledgments

This work was made possible thanks to the generous support of the ANR-DFG Franco-German scheme ([MICLE project](https://www.unicaen.fr/projet_de_recherche/micle/) (2021-2024)) and of the Normandy region [AUTOMATED project](https://www.unicaen.fr/projet_de_recherche/automated/) (2023-2025). The projects were led by Professor Pierre Larrivée at the University of Caen.

**1563-1569_Guern**

We thank the staff at the Guernsey Greffe archives and the Guernsey Museum & Art Gallery for giving us acces to the original manuscript and digital images in 2021 and 2023 which. We are also grateful to former island archivist Daryl Ogier for his assistance and advice when working with the original source. We are grateful to the team of student transcribers (Agathe Aubert, Lucie Marie-Leblanc, Marie Picart and Valentin Simenel) who helped with the transcription in 2022. We thank Patrice Lajoye and Stéphane Laîné for their assistance with lemmatisation and dialectal features of the text and to Mattis Le Squer who helped elucidate the historical context of the document. The annotation of 1563-1569_Guern has not been revised since UD 2.16 release. Annotation was performed by Natasha Romanova and Rayan Ziane, technical assistance by Khensa Daoudi.

**1578_Terrien**
The digitisation of Guillaume Terrien's _Commentaires du droict civil tant public que privé observé au pays et duché de Normandie_ was originally performed by Morgane Pica and Mathieu Goux as part of the [ConDE](https://mrsh.unicaen.fr/coutumiers/conde/accueil.html) project funded by Normandy region. PoS annotation and lemmatisation was performed by Natasha Romanova. Annotation in syntactic functions was done by Théo Brillet and Natasha Romanova. Théo Brillet annotated all the sentences with Latin tokens. Khensa Daoudi and Rayan Ziane provided technical assistance.


## References

* Ziane, Rayan & Romanova, Natasha, 2024. « Pistes pour l’optimisation de modèles de parsing syntaxique » _Proceedings of LIFT 2 - 2024 : Journées de lancement_. 14-15 Nov 2024, Orléans, France. https://lift2-2024.sciencesconf.org/590561/document (7 pp.)

See also:
* **Daoudi, Khensa, Dehouck, Mathieu, Romanova, Natasha & Ziane, Rayan, 2025. « Explicit Edge Length Coding to Improve Long Sentence Parsing Performance ». _Proceedings of the First Workshops on Advancing NLP for Low-Resource Languages_. 13 September 2025, Varna, Bulgaria. URL: https://acl-bg.org/proceedings/2025/LowResNLP%202025/index.html (pp. 102-110)


# Statistics of UD French ALTS

## POS Tags

[ADJ](fr_alts-pos-ADJ.html) – [ADP](fr_alts-pos-ADP.html) – [ADV](fr_alts-pos-ADV.html) – [AUX](fr_alts-pos-AUX.html) – [CCONJ](fr_alts-pos-CCONJ.html) – [DET](fr_alts-pos-DET.html) – [INTJ](fr_alts-pos-INTJ.html) – [NOUN](fr_alts-pos-NOUN.html) – [NUM](fr_alts-pos-NUM.html) – [PRON](fr_alts-pos-PRON.html) – [PROPN](fr_alts-pos-PROPN.html) – [PUNCT](fr_alts-pos-PUNCT.html) – [SCONJ](fr_alts-pos-SCONJ.html) – [VERB](fr_alts-pos-VERB.html)

## Features

[Definite](fr_alts-feat-Definite.html) – [ExtPos](fr_alts-feat-ExtPos.html) – [Number](fr_alts-feat-Number.html) – [NumType](fr_alts-feat-NumType.html) – [Person](fr_alts-feat-Person.html) – [Polarity](fr_alts-feat-Polarity.html) – [Poss](fr_alts-feat-Poss.html) – [PronType](fr_alts-feat-PronType.html) – [Tense](fr_alts-feat-Tense.html) – [VerbForm](fr_alts-feat-VerbForm.html)

## Relations

[acl](fr_alts-dep-acl.html) – [acl:relcl](fr_alts-dep-acl-relcl.html) – [advcl](fr_alts-dep-advcl.html) – [advmod](fr_alts-dep-advmod.html) – [amod](fr_alts-dep-amod.html) – [appos](fr_alts-dep-appos.html) – [aux](fr_alts-dep-aux.html) – [aux:pass](fr_alts-dep-aux-pass.html) – [case](fr_alts-dep-case.html) – [cc](fr_alts-dep-cc.html) – [ccomp](fr_alts-dep-ccomp.html) – [conj](fr_alts-dep-conj.html) – [cop](fr_alts-dep-cop.html) – [csubj](fr_alts-dep-csubj.html) – [csubj:outer](fr_alts-dep-csubj-outer.html) – [det](fr_alts-dep-det.html) – [discourse](fr_alts-dep-discourse.html) – [dislocated](fr_alts-dep-dislocated.html) – [expl](fr_alts-dep-expl.html) – [fixed](fr_alts-dep-fixed.html) – [flat](fr_alts-dep-flat.html) – [iobj](fr_alts-dep-iobj.html) – [mark](fr_alts-dep-mark.html) – [nmod](fr_alts-dep-nmod.html) – [nsubj](fr_alts-dep-nsubj.html) – [nummod](fr_alts-dep-nummod.html) – [obj](fr_alts-dep-obj.html) – [obl](fr_alts-dep-obl.html) – [orphan](fr_alts-dep-orphan.html) – [parataxis](fr_alts-dep-parataxis.html) – [punct](fr_alts-dep-punct.html) – [root](fr_alts-dep-root.html) – [vocative](fr_alts-dep-vocative.html) – [xcomp](fr_alts-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 2026 sentences, 66817 tokens and 68088 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 7073 tokens (11%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 268 types of words that contain both letters and punctuation. Examples: l', d', qu', n', s', c', .iii., .vi., .iiii., .viii., l., .ii., .v., c., .i., .vcclxvi., .xx., .vii., ff., .xv., .xxx., .iiiixx., .ix., .vcclxiii., .vcclxv., .xxv., .vcclxvii., .xxxv., .vcclxix., .xvi., .xxiiii., d'auantage, m', .ixe., .l., .x., .xvii., .xxviiie., glo., ordon., tit., .vcclxviii., .viie., .xiiii., .xve., .xxi., .xxixe., .xxvi., .xxvie., .xxxe.</li>
</ul>

<ul>
<li>This corpus contains 1271 multi-word tokens. On average, one multi-word token consists of 2.00 syntactic words.</li>
<li>There are 38 types of multi-word tokens. Examples: du, au, dudit, des, audit, aux, desditz, es, auquell, aulx, és, auquel, desdits, duquel, desditez, esquels, desdites, desquels, desquelz, aulxditz, dez, aulxquelz, ausdits, ausquels, duquell, esditez, esdits, Esdites, aulxditez, auquelz, ausdites, dedits, desdicts, desquelles, dezditz, esquelles, ipsumque, ès.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 14 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>VERB</a></li>
<li>This corpus does not use the following tags: PART, SYM, X</li>
</ul>

<ul>
</ul>

<ul>
<li>This corpus contains 50 lemmas tagged as pronouns (PRON): aucun, aultre, autre, autrui, ce, ceci, cela, celui, chacun, cil, dont, en, hic, icelui, il, is, je, le, lequel, meus, nous, nul, néant, omnis, on, où, personne, plusieurs, que, qui, quiconque, quicumque, quilibet, quis, quivis, quoi, rien, se, si, sien, soi, te, tel, tout, tu, tuus, un, ung, vous, y</li>
</ul>

<ul>
<li>This corpus contains 45 lemmas tagged as determiners (DET): aucun, autre, ce, cedit, certain, chacun, cil, cist, de, du, icelui, idem, il, ille, ipse, is, ladit, le, ledit, lequel, les, lesdit, leur, leurdit, maint, mon, noster, notre, notredit, nul, plusieurs, quant, quel, quelconque, quelque, qui, son, sondit, suus, tel, ton, tout, un, votre, votredit</li>
</ul>

<ul>
<li>Out of the above, 16 lemmas occurred sometimes as PRON and sometimes as DET: aucun, autre, ce, chacun, cil, icelui, il, is, le, lequel, nul, plusieurs, qui, tel, tout, un</li>
</ul>

<ul>
<li>This corpus contains 4 lemmas tagged as auxiliaries (AUX): avoir, faire, sum, être</li>
</ul>

<ul>
<li>Out of the above, 4 lemmas occurred sometimes as AUX and sometimes as VERB: avoir, faire, sum, être</li>
</ul>

<ul>
<li>There are 3 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: a, est, avoet, fut, estoet, sont, ont, estoient, avoient, furent</li>
    <li>VERB: dit, raporte, a, dyst, avoet, estoet, vynt, vyndrent, use, confesse</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: estre, avoir, auoir, faire, etre, a, avoer, est, este, esté</li>
    <li>VERB: dire, faire, croire, cuyder, aller, prouuer, avoir, bailler, demander, venir</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>ADJ: accoustumee, assemblees, denié, escrits, examinez, faite, iurez, perie, prouué, signee</li>
    <li>AUX: estey, esté, faict, ayans, ayant, estant, faisant, fait, estoit, estans</li>
    <li>VERB: ouy, passey, pryntz, veu, desrobey, eu, dit, faict, prestey, faicte</li>
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
      <li>ADJ: peremptoires, tenans</li>
      <li>AUX-Fin: sont, soyent, ont, seront, seroyent, auoient, estoyent, auront, ayent, estoient</li>
      <li>NOUN: ans, parties, tesmoins, faicts, jurés, jour, jours, officiers, lettres, sepmainnes</li>
      <li>PRON: siens</li>
      <li>PROPN: Collas, Johan, le, Thomas, de, Martin, Nicollas, du, Port, Bequet</li>
      <li>VERB: peuuent, voyez, doiuent, doyuent, notez, demeurent, font, ont, sont, veulent</li>
      <li>VERB-Fin: peuuent, voyez, doiuent, doyuent, notez, demeurent, font, ont, sont, veulent</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: nouueau, present, accessoire, commune, escrit, resseant, vile</li>
      <li>ADP: iouxte</li>
      <li>ADV: apertement, bien, depuis, mal</li>
      <li>AUX-Fin: est, a, seroit, soit, sera, estoit, fut, auoit, ait, fust</li>
      <li>NOUN: cause, partie, iuge, droict, preuue, iour, defaut, demandeur, defendeur, cas</li>
      <li>PRON: neant</li>
      <li>PROPN: Papon, Paris, Imbert, France, du, Normandie, Heulte, Iean, Mesnil, Noyer</li>
      <li>VERB: peut, a, doit, est, faut, dit, pourroit, fait, veut, appelle</li>
      <li>VERB-Fin: peut, a, doit, est, faut, dit, pourroit, fait, veut, appelle</li>
    </ul>
  </li>
</ul>



<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>DET: le, la, l', les, ledit, ladite, lesdits, lesdites, lez, ung</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADJ: tel, telle, certain, pareil, telles</li>
      <li>DET: ledit, ung, ladite, une, du, des, lesditz, plusieurs, de, lesditez</li>
      <li>PRON: tel</li>
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
      <li>ADV: ne, n', Non</li>
    </ul>
  </li>
</ul>


<h3>Verbal Features</h3>




<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>ADJ-Part: accoustumee, assemblees, denié, escrits, examinez, faite, iurez, perie, prouué, signee</li>
      <li>AUX-Part: esté, fait</li>
      <li>VERB-Part: dit, receu, fait, tenu, iugé, faite, donné, examinez, mis, adiourné</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX-Part: ayans, ayant, estant, faisant, estans</li>
      <li>VERB-Part: faisant, appelant, ayant, disant, parlant, affermant, contenant, defendant, demandant, donnant</li>
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
      <li>DET: le, les, la, l', ledit, vne, vn, un, ladite, lesdits</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>DET: ce, ceste, ces, cest, iceluy, icelle, iceux, ses, cedit</li>
      <li>PRON: ce, c', cela, celuy, ceux, ceulx, iceluy, icelle, yceulx, cecy</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADJ: autre, autres</li>
      <li>DET: plusieurs, certain, chacun, quelconque, tout, toutes</li>
      <li>PRON: tout, ung, aultre, autre, une, rien, un, vne, aultres, autres</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>DET: quel, quelle, quels</li>
      <li>PRON: que, qu', qui, quy</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>PRON: il, luy, elle, en, ilz, y, se, on, s', le</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>DET: lequel, laquelle, lesquels, lesquelles</li>
      <li>PRON: qui, que, ou, lequell, laquelle, qu', lequel, dont, don, lesquelz</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>ADJ: 13., 16., 20., 21., 8.</li>
      <li>NUM: deulx, mille, troys, .iii., .vi., deux, quatre, chinq, .iiii., .viii.</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>ADJ: premier, premiere, second, .ixe., .xxviiie., .viie., .xve., .xxixe., .xxxe., .ve.</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>ADJ: seing</li>
      <li>DET: sa, son, ses, leurs, leur, nostre, vostre, leursdits, nos</li>
      <li>PRON: siens</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX-Fin: ay, aye, suis</li>
      <li>VERB-Fin: defens, adaptons, afferme, allegue, appellons, bannissons, croy, denie, deuo[m]s, disons</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>VERB-Fin: voyez, notez, Entendez, ioignez, ouez</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX-Fin: est, sont, a, seroit, soit, sera, estoit, fut, soyent, ont</li>
      <li>VERB-Fin: peut, a, doit, est, faut, dit, pourroit, fait, veut, appelle</li>
    </ul>
  </li>
</ul>




<h3>Other Features</h3>


<ul>
  <li><a>ExtPos</a>
    <ul>
      <li>ADJ
        <ul>
          <li>ADP: de, a, d'</li>
        </ul>
      </li>
      <li>ADP
        <ul>
          <li>ADP: juscque, quant, a, iusques, par, afin, Qua[n]t, auant, d', usque</li>
          <li>ADV: hors, quant, afin, auprés, pres, auant, fors, lors, affin, ainsy</li>
          <li>PRON: il, yl</li>
          <li>SCONJ: Quant</li>
        </ul>
      </li>
      <li>ADV
        <ul>
          <li>ADP: En, IVsques, de, pour, à</li>
          <li>ADV: ainsy, fors, non, tant, à</li>
          <li>DET: ung</li>
          <li>PRON: c', id, hoc, Qui</li>
          <li>SCONJ: que, vt</li>
          <li>VERB: scaver, sçavoir, peut, sçaver</li>
          <li>VERB-Inf: scaver, sçavoir, sçaver</li>
        </ul>
      </li>
      <li>CCONJ
        <ul>
          <li>CCONJ: ou, nec, verum</li>
        </ul>
      </li>
      <li>DET
        <ul>
          <li>DET: de, l', la</li>
        </ul>
      </li>
      <li>PRON
        <ul>
          <li>PRON: ce</li>
        </ul>
      </li>
      <li>PROPN
        <ul>
          <li>PROPN: Charles, sainct</li>
        </ul>
      </li>
      <li>SCONJ
        <ul>
          <li>ADP: pour, en, iusques, juscque, a, par, de, apres, sans, d'</li>
          <li>ADV: combien, aprés, encores, dempuys, ainsy, alhors, ainsi, tellement, auant, afin</li>
          <li>PRON: quoy</li>
          <li>SCONJ: pourueu, sinon, comme, parce, pourquoy, que</li>
          <li>VERB: veu, considerant, consideré, entendu</li>
          <li>VERB-Part: veu, consideré, entendu</li>
        </ul>
      </li>
      <li>VERB
        <ul>
          <li>VERB-Part: voyant</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 2 lemmas as copulas (<a>cop</a>). Examples: être, sum.</li>
</ul>

<ul>
<li>This corpus uses 4 lemmas as auxiliaries (<a>aux</a>). Examples: avoir, être, faire, sum.</li>
<li>This corpus uses 3 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: être, avoir, sum.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (43)</li>
      <li>VERB--PRON (24)</li>
      <li>VERB-Fin--NOUN (597)</li>
      <li>VERB-Fin--NOUN-ADP(après) (1)</li>
      <li>VERB-Fin--PRON (1666)</li>
      <li>VERB-Fin--PRON-ADP(contre) (1)</li>
      <li>VERB-Fin--PRON-ADP(à) (1)</li>
      <li>VERB-Inf--NOUN (4)</li>
      <li>VERB-Inf--PRON (30)</li>
      <li>VERB-Part--NOUN (443)</li>
      <li>VERB-Part--NOUN-ADP(après) (1)</li>
      <li>VERB-Part--PRON (683)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (89)</li>
      <li>VERB--NOUN-ADP(de) (1)</li>
      <li>VERB--PRON (32)</li>
      <li>VERB-Fin--NOUN (828)</li>
      <li>VERB-Fin--NOUN-ADP(avec) (1)</li>
      <li>VERB-Fin--NOUN-ADP(de) (17)</li>
      <li>VERB-Fin--NOUN-ADP(environ) (1)</li>
      <li>VERB-Fin--NOUN-ADP(par) (1)</li>
      <li>VERB-Fin--NOUN-ADP(touchant) (4)</li>
      <li>VERB-Fin--PRON (387)</li>
      <li>VERB-Fin--PRON-ADP(de) (1)</li>
      <li>VERB-Inf--NOUN (480)</li>
      <li>VERB-Inf--NOUN-ADP(de) (4)</li>
      <li>VERB-Inf--NOUN-ADP(par)-ADP(devers) (1)</li>
      <li>VERB-Inf--NOUN-ADP(suivant) (1)</li>
      <li>VERB-Inf--PRON (183)</li>
      <li>VERB-Part--NOUN (260)</li>
      <li>VERB-Part--NOUN-ADP(de) (4)</li>
      <li>VERB-Part--NOUN-ADP(in) (1)</li>
      <li>VERB-Part--NOUN-ADP(jusque) (1)</li>
      <li>VERB-Part--NOUN-ADP(par) (2)</li>
      <li>VERB-Part--PRON (156)</li>
      <li>VERB-Part--PRON-ADP(de) (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--PRON (35)</li>
      <li>VERB-Fin--PRON (254)</li>
      <li>VERB-Inf--PRON (43)</li>
      <li>VERB-Part--PRON (136)</li>
      <li>VERB-Part--PRON-ADP(par) (2)</li>
      <li>VERB-Part--PRON-ADP(à) (2)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 3 relation subtypes: <a>acl:relcl</a>, <a>aux:pass</a>, <a>csubj:outer</a></li>
<li>The following 6 relation types are not used in this corpus at all: <a>clf</a>, <a>compound</a>, <a>list</a>, <a>goeswith</a>, <a>reparandum</a>, <a>dep</a></li>
</ul>
