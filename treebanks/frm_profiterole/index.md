---
layout: base
title:  'UD_Middle_French-PROFITEROLE'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Middle French PROFITEROLE

Language: [Middle French](/frm/index.html) (code: `frm`)<br/>
Family: IE

This treebank has been part of Universal Dependencies since the UD v2.13 release.

The following people have contributed to making this treebank part of UD: Sophie Prévost, Eric Villemonte de la Clergerie, Mathilde Regnault, Loïc Grobol, Benoît Crabbé, Mathieu Dehouck, Alexei Lavrentiev.

Repository: [UD_Middle_French-PROFITEROLE](https://github.com/UniversalDependencies/UD_Middle_French-PROFITEROLE)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udfrm_profiterole218)<br />
Download all treebanks: [UD 2.18](/#download)

License: CC BY-NC-SA 4.0

Genre: fiction, nonfiction

Questions, comments?
General annotation questions (either Middle French-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Middle_French-PROFITEROLE/issues).
If you want to collaborate, please contact [sophie&nbsp;•&nbsp;prevost&nbsp;(æt)&nbsp;ens&nbsp;•&nbsp;psl&nbsp;•&nbsp;eu].
Development of the treebank happens outside the UD repository.
If there are bugs, either the original data source or the conversion procedure must be fixed.
Do not submit pull requests against the UD repository.

| Annotation | Source |
|------------|--------|
| Lemmas | annotated manually |
| UPOS | annotated manually in non-UD style, automatically converted to UD, with some manual corrections of the conversion |
| XPOS | annotated manually |
| Features | assigned by a program, not checked manually |
| Relations | assigned by a program, with some manual corrections, but not a full manual verification |

## Description

UD_Middle_French-PROFITEROLE is the Middle French section of the PROFITEROLE corpus, the Old French section is UD_OLD_FRENCH-PROFITEROLE.



UD_Middle_French-PROFITEROLE is meant to include texts spanning from the early 14th to the late 15th C.
At the present it includes 3 (extracts of) texts dating from the late 14th and from the late 15th C.
It includes XXX sentences and XXX tokens.

Sentences are annotated with the following metadata:

- `sent_id` : a unique id for each sentence in the treebank
- `text` : the sentence
- `newdoc_id` : a unique id for each of the texts. This id can be split on underscores to get back :
- name of the text
- date
- form : verse and/or prose


The following table lists the texts used in this treebank [A REMETTRE DANS L'ORDRE CHRONOLOGIQUE]:

| ID | Name of the text | Author | Tokens | Trees |
| :---------------------------- | :--------------------- | :-----------------: | -----: | ----: |
| grchronj2c5_1381_prose | Chroniques des règnes de Jean II et de Charles V| anonymous | 2710 | 103 |
| Jehpar_1494_prose | jehan de Paris | anonymous | 5893 | 291 |
| Commyn_1497_prose | Mémoires, Livre 1 | Philippe de Commynes | 3422 | 118 |
| Total | | | 12025 | 512 |

## Acknowledgments

UD_Middle_French-PROFITEROLE results from the automatic annotation (PROFITEROLE project, 2017-2022) of Middle French texts (with the PROFITEROLE/SRCMF Old French corpus being used as a training corpus), which were/are then manually corrected along with the UD guidelines.
The contributors to the syntactic part of the PROFITEROLE project were: Prévost, Sophie; Villemonte de la Clergerie, Eric; Regnault, Mathilde; Grobol, Loïc; Crabbé, Benoît; Dehouck, Mathieu; Lavrentiev, Alexei.

### Disclaimer

Any deviations from the original annotation available on the [GitLab of the Profiterole Project](https://gitlab.huma-num.fr/profiterole/srcmf-ud), especially regarding any potential errors introduiced during the process of fixing the treebank to fit UD requirements are the sole responsability of Mathieu Dehouck.

## References

- Prévost, Sophie, Mathieu Dehouck, Alexei Lavrentiev, Serge Heiden et Loïc Grobol. To appear. ['Profiterole : un corpus morpho-syntaxique et syntaxique de français médiéval'], Corpus



# Statistics of UD Middle French PROFITEROLE

## POS Tags

[ADJ](frm_profiterole-pos-ADJ.html) – [ADP](frm_profiterole-pos-ADP.html) – [ADV](frm_profiterole-pos-ADV.html) – [AUX](frm_profiterole-pos-AUX.html) – [CCONJ](frm_profiterole-pos-CCONJ.html) – [DET](frm_profiterole-pos-DET.html) – [INTJ](frm_profiterole-pos-INTJ.html) – [NOUN](frm_profiterole-pos-NOUN.html) – [NUM](frm_profiterole-pos-NUM.html) – [PRON](frm_profiterole-pos-PRON.html) – [PROPN](frm_profiterole-pos-PROPN.html) – [PUNCT](frm_profiterole-pos-PUNCT.html) – [SCONJ](frm_profiterole-pos-SCONJ.html) – [VERB](frm_profiterole-pos-VERB.html) – [X](frm_profiterole-pos-X.html)

## Features

[Definite](frm_profiterole-feat-Definite.html) – [Foreign](frm_profiterole-feat-Foreign.html) – [NumType](frm_profiterole-feat-NumType.html) – [Polarity](frm_profiterole-feat-Polarity.html) – [Poss](frm_profiterole-feat-Poss.html) – [PronType](frm_profiterole-feat-PronType.html) – [Tense](frm_profiterole-feat-Tense.html) – [Typo](frm_profiterole-feat-Typo.html) – [VerbForm](frm_profiterole-feat-VerbForm.html)

## Relations

[acl](frm_profiterole-dep-acl.html) – [acl:relcl](frm_profiterole-dep-acl-relcl.html) – [advcl](frm_profiterole-dep-advcl.html) – [advcl:relcl](frm_profiterole-dep-advcl-relcl.html) – [advmod](frm_profiterole-dep-advmod.html) – [amod](frm_profiterole-dep-amod.html) – [appos](frm_profiterole-dep-appos.html) – [aux](frm_profiterole-dep-aux.html) – [aux:pass](frm_profiterole-dep-aux-pass.html) – [case](frm_profiterole-dep-case.html) – [case:det](frm_profiterole-dep-case-det.html) – [cc](frm_profiterole-dep-cc.html) – [cc:nc](frm_profiterole-dep-cc-nc.html) – [ccomp](frm_profiterole-dep-ccomp.html) – [conj](frm_profiterole-dep-conj.html) – [cop](frm_profiterole-dep-cop.html) – [csubj](frm_profiterole-dep-csubj.html) – [csubj:pass](frm_profiterole-dep-csubj-pass.html) – [dep](frm_profiterole-dep-dep.html) – [det](frm_profiterole-dep-det.html) – [discourse](frm_profiterole-dep-discourse.html) – [dislocated](frm_profiterole-dep-dislocated.html) – [expl](frm_profiterole-dep-expl.html) – [expl:pass](frm_profiterole-dep-expl-pass.html) – [fixed](frm_profiterole-dep-fixed.html) – [flat](frm_profiterole-dep-flat.html) – [flat:name](frm_profiterole-dep-flat-name.html) – [iobj](frm_profiterole-dep-iobj.html) – [mark](frm_profiterole-dep-mark.html) – [nmod](frm_profiterole-dep-nmod.html) – [nsubj](frm_profiterole-dep-nsubj.html) – [nsubj:pass](frm_profiterole-dep-nsubj-pass.html) – [nummod](frm_profiterole-dep-nummod.html) – [obj](frm_profiterole-dep-obj.html) – [obl](frm_profiterole-dep-obl.html) – [obl:agent](frm_profiterole-dep-obl-agent.html) – [obl:mod](frm_profiterole-dep-obl-mod.html) – [orphan](frm_profiterole-dep-orphan.html) – [parataxis](frm_profiterole-dep-parataxis.html) – [punct](frm_profiterole-dep-punct.html) – [reparandum](frm_profiterole-dep-reparandum.html) – [root](frm_profiterole-dep-root.html) – [vocative](frm_profiterole-dep-vocative.html) – [xcomp](frm_profiterole-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 5971 sentences, 117419 tokens and 119001 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 15451 tokens (13%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 125 types of words that contain both letters and punctuation. Examples: d', l', qu', n', s', c', j', m', .VJ., Saint-Pol, .IIIJ., .IXe., .XL., aujourd', .IIJcIIIJxx., .V., .XV., Nostre-Dame, .VIJ., .VJe., .Ve., .XVJe., puisqu', .IIIJc., .IIIJe., .M., .VJc., .XIIJe., .XIJm., .XVe., .XXIIIJe., .XXIIJe., .XXIJe., .XXIXe., .XXX., .XXe., Chasteau-Gontier, Grant-Lande, quatre-vingts, .IV., .LX., .LXm., .VIIJ., .VIJc., .VIJe., .Vm., .XIIIJ., .XIIm., .XIJe., .XIXe.</li>
</ul>

<ul>
<li>This corpus contains 1582 multi-word tokens. On average, one multi-word token consists of 2.00 syntactic words.</li>
<li>There are 18 types of multi-word tokens. Examples: du, au, des, ou, dudict, es, aus, audict, ès, dudit, audit, as, desdicts, audictz, aulx, ausdictes, ausdicts, desdis.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 15 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>VERB</a>, <a>X</a></li>
<li>This corpus does not use the following tags: PART, SYM</li>
</ul>

<ul>
</ul>

<ul>
<li>This corpus contains 71 lemmas tagged as pronouns (PRON): _, aucun, autre, autrui, ce1, ceci, cela, chacun, cil, cinq, cist, deux, dire1, dix, dont, douze, elle1, en2, eux, il, je, le, ledit, lequel, leur1, leur2, li, lui, me, mien, mille1, moi, même, notre, nous, nul, néant, on, où, personne, petit, peu, plusieurs, premier1, quarante, quatre, que, quel, quelquun, qui1, quiconque, quoi, rien, se1, second1, sien, six, soi, son4, te, tel, toi, tous, tout1, tout2, trois, tu, un, vingt, votre, vous</li>
</ul>

<ul>
<li>This corpus contains 30 lemmas tagged as determiners (DET): _, aucun, autre, ce2, certain, chacun, cil, cist, de, divers, le, ledit, lequel, leur2, maint, mon1, mondit, notre, nul, plusieurs, quel, quelque, son4, sondit, tel, ton2, tous, tout2, un, votre</li>
</ul>

<ul>
<li>Out of the above, 20 lemmas occurred sometimes as PRON and sometimes as DET: _, aucun, autre, chacun, cil, cist, le, ledit, lequel, leur2, notre, nul, plusieurs, quel, son4, tel, tous, tout2, un, votre</li>
</ul>

<ul>
<li>This corpus contains 9 lemmas tagged as auxiliaries (AUX): _, avoir, devoir, falloir, pouvoir, ravoir, rêtre, vouloir, être</li>
</ul>

<ul>
<li>Out of the above, 8 lemmas occurred sometimes as AUX and sometimes as VERB: _, avoir, devoir, falloir, pouvoir, rêtre, vouloir, être</li>
</ul>

<ul>
<li>There are 3 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: estoit, est, avoit, fut, estoient, ay, furent, a, avoient, sont</li>
    <li>VERB: dit, avoit, estoit, est, a, estoient, vint, fist, dist, vindrent</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: estre, avoir, povoir, pouvoir</li>
    <li>VERB: faire, dire, avoir, veoir, venir, parler, aller, passer, prendre, tenir</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>AUX: esté, peu, Estant, estez, voullu, voulu</li>
    <li>VERB: dit, fait, esté, dicte, veu, diz, prins, disant, dictes, eu</li>
  </ul>
  </li>
</ul>

<h3>Nominal Features</h3>







<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Com
    <ul>
      <li>DET: ladicte, ledit</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>DET: le, la, les, l', ledict, ledit, ladicte, lesdictz, mondict, lesdicts</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: ung, une, un, des, unes</li>
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
      <li>ADV: ne, n', pas, point, non, nenny, nem, poinct, mye</li>
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
      <li>AUX-Part: esté, peu, estez, voullu, voulu</li>
      <li>VERB-Part: dit, fait, esté, dicte, veu, diz, prins, dictes, eu, appellé</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>VERB-Part: disant, ensuyvant, voyant, pendant, estant, donnant, ayant, doubtant, parlant, passant</li>
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
      <li>DET: le, la, les, l', ung, une, ledit, un, des, lesdits</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>DET: ce, ceste, ces, celle, cest, celui, ycelui, celuy, icellui, celi</li>
      <li>PRON: ce, ceulx, c', celuy, cela, cellui, cecy, ceuls, celle, icelle</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADJ: autres, aultres, autre, telle, meismes, mesmes, aultre, tel, telz, mesme</li>
      <li>DET: tous, toutes, tout, plusieurs, autres, toute, quelque, pluseurs, aucune, aucuns</li>
      <li>PRON: on, autres, tous, autre, chascun, riens, un, en, tout, aucuns</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>ADV: comment, que, combien, Pourquoi</li>
      <li>DET: quel, quelz, quelle</li>
      <li>PRON: que, qui, qu', ou, quoy</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>PRON: il, ilz, vous, se, luy, je, nous, s', le, les</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>DET: quel, laquelle, lequel, lesquelles, quelz, quelle, quelles, lesquiex, lesquelz, quelque</li>
      <li>PRON: qui, que, qu', dont, où, quoy, lequel, ou, laquelle, lesquelz</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>ADJ: deux, trois, I, II, III, IV, mil, IX, V, VIII</li>
      <li>DET: un, une, ung</li>
      <li>NUM: deux, cens, trois, quatre, cinq, mil, CCC, vingt, cent, six</li>
      <li>PRON: deux, quatre, dix, trois, vingt, 1, 2, V, cinq, douse</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>ADJ: premier, première, seconde, second, tiers, IXe, VIIe, Ve, cinquiesme, premiere</li>
      <li>PRON: premier, première, premiers, premiere, second</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>ADJ: sien, mienne, sienne, leur, nostre, vostre</li>
      <li>DET: son, ses, sa, leur, nostre, leurs, mon, vostre, ma, mes</li>
      <li>PRON: sien, vostre, siens, mien, nostres, nostre, vostres, leur, miens, myen</li>
    </ul>
  </li>
</ul>






<h3>Other Features</h3>


<ul>
  <li><a>Foreign</a>
    <ul>
      <li>Yes
        <ul>
          <li>X: Amen</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Typo</a>
    <ul>
      <li>Yes
        <ul>
          <li>X: veilleusement</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 2 lemmas as copulas (<a>cop</a>). Examples: être, _.</li>
</ul>

<ul>
<li>This corpus uses 7 lemmas as auxiliaries (<a>aux</a>). Examples: avoir, _, pouvoir, être, devoir, rêtre, ravoir.</li>
<li>This corpus uses 2 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: être, _.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (575)</li>
      <li>VERB--NOUN-ADP(_) (2)</li>
      <li>VERB--PRON (814)</li>
      <li>VERB-Fin--NOUN (1313)</li>
      <li>VERB-Fin--NOUN-ADP(_) (6)</li>
      <li>VERB-Fin--NOUN-ADP(de) (6)</li>
      <li>VERB-Fin--NOUN-ADP(environ) (1)</li>
      <li>VERB-Fin--NOUN-ADP(jusque) (1)</li>
      <li>VERB-Fin--PRON (2675)</li>
      <li>VERB-Fin--PRON-ADP(de) (1)</li>
      <li>VERB-Inf--NOUN (62)</li>
      <li>VERB-Inf--PRON (184)</li>
      <li>VERB-Part--NOUN (225)</li>
      <li>VERB-Part--NOUN-ADP(de) (2)</li>
      <li>VERB-Part--PRON (600)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (482)</li>
      <li>VERB--NOUN-ADP(_) (18)</li>
      <li>VERB--PRON (221)</li>
      <li>VERB--PRON-ADP(_) (1)</li>
      <li>VERB-Fin--NOUN (1200)</li>
      <li>VERB-Fin--NOUN-ADP(_) (18)</li>
      <li>VERB-Fin--NOUN-ADP(de) (63)</li>
      <li>VERB-Fin--NOUN-ADP(de)-ADP(à) (1)</li>
      <li>VERB-Fin--NOUN-ADP(en1) (1)</li>
      <li>VERB-Fin--NOUN-ADP(à) (1)</li>
      <li>VERB-Fin--PRON (766)</li>
      <li>VERB-Fin--PRON-ADP(_) (2)</li>
      <li>VERB-Fin--PRON-ADP(de) (4)</li>
      <li>VERB-Inf--NOUN (659)</li>
      <li>VERB-Inf--NOUN-ADP(_) (11)</li>
      <li>VERB-Inf--NOUN-ADP(de) (13)</li>
      <li>VERB-Inf--NOUN-ADP(environ) (1)</li>
      <li>VERB-Inf--NOUN-ADP(par1) (1)</li>
      <li>VERB-Inf--NOUN-ADP(vis1) (1)</li>
      <li>VERB-Inf--PRON (363)</li>
      <li>VERB-Part--NOUN (313)</li>
      <li>VERB-Part--NOUN-ADP(_) (4)</li>
      <li>VERB-Part--NOUN-ADP(de) (14)</li>
      <li>VERB-Part--PRON (267)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--PRON (109)</li>
      <li>VERB--PRON-ADP(à) (1)</li>
      <li>VERB-Fin--PRON (542)</li>
      <li>VERB-Fin--PRON-ADP(chez) (1)</li>
      <li>VERB-Fin--PRON-ADP(de) (1)</li>
      <li>VERB-Fin--PRON-ADP(à) (1)</li>
      <li>VERB-Inf--PRON (112)</li>
      <li>VERB-Inf--PRON-ADP(à) (1)</li>
      <li>VERB-Part--PRON (160)</li>
    </ul>
  </li>
</ul>


<h3>Reflexive Passive</h3>

<ul>
  <li>This corpus contains 17 lemmas that occur at least once with an <a>expl:pass</a> child. Examples: conclure il, parler il, réciter il, accoutumer il, appointer1 il, contenir il, dire1 il, déclarer il, faire il, marcher1 il, ordonner il, pardonner il, pourvoir il, requérir il, rire1 il, traiter il, écrire il</li>
</ul>


<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 11 relation subtypes: <a>acl:relcl</a>, <a>advcl:relcl</a>, <a>aux:pass</a>, <a>case:det</a>, <a>cc:nc</a>, <a>csubj:pass</a>, <a>expl:pass</a>, <a>flat:name</a>, <a>nsubj:pass</a>, <a>obl:agent</a>, <a>obl:mod</a></li>
<li>The following 4 relation types are not used in this corpus at all: <a>clf</a>, <a>compound</a>, <a>list</a>, <a>goeswith</a></li>
</ul>
