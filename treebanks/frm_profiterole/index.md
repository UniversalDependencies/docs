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
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udfrm_profiterole215)<br />
Download all treebanks: [UD 2.15](/#download)

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

[ADJ](frm_profiterole-pos-ADJ.html) – [ADP](frm_profiterole-pos-ADP.html) – [ADV](frm_profiterole-pos-ADV.html) – [AUX](frm_profiterole-pos-AUX.html) – [CCONJ](frm_profiterole-pos-CCONJ.html) – [DET](frm_profiterole-pos-DET.html) – [NOUN](frm_profiterole-pos-NOUN.html) – [NUM](frm_profiterole-pos-NUM.html) – [PRON](frm_profiterole-pos-PRON.html) – [PROPN](frm_profiterole-pos-PROPN.html) – [PUNCT](frm_profiterole-pos-PUNCT.html) – [SCONJ](frm_profiterole-pos-SCONJ.html) – [VERB](frm_profiterole-pos-VERB.html) – [X](frm_profiterole-pos-X.html)

## Features

[Definite](frm_profiterole-feat-Definite.html) – [NumType](frm_profiterole-feat-NumType.html) – [Poss](frm_profiterole-feat-Poss.html) – [PronType](frm_profiterole-feat-PronType.html) – [Tense](frm_profiterole-feat-Tense.html) – [VerbForm](frm_profiterole-feat-VerbForm.html)

## Relations

[acl](frm_profiterole-dep-acl.html) – [acl:relcl](frm_profiterole-dep-acl-relcl.html) – [advcl](frm_profiterole-dep-advcl.html) – [advmod](frm_profiterole-dep-advmod.html) – [amod](frm_profiterole-dep-amod.html) – [appos](frm_profiterole-dep-appos.html) – [aux](frm_profiterole-dep-aux.html) – [aux:pass](frm_profiterole-dep-aux-pass.html) – [case](frm_profiterole-dep-case.html) – [case:det](frm_profiterole-dep-case-det.html) – [cc](frm_profiterole-dep-cc.html) – [cc:nc](frm_profiterole-dep-cc-nc.html) – [ccomp](frm_profiterole-dep-ccomp.html) – [conj](frm_profiterole-dep-conj.html) – [cop](frm_profiterole-dep-cop.html) – [csubj](frm_profiterole-dep-csubj.html) – [dep](frm_profiterole-dep-dep.html) – [det](frm_profiterole-dep-det.html) – [discourse](frm_profiterole-dep-discourse.html) – [dislocated](frm_profiterole-dep-dislocated.html) – [expl](frm_profiterole-dep-expl.html) – [fixed](frm_profiterole-dep-fixed.html) – [flat](frm_profiterole-dep-flat.html) – [iobj](frm_profiterole-dep-iobj.html) – [mark](frm_profiterole-dep-mark.html) – [nmod](frm_profiterole-dep-nmod.html) – [nsubj](frm_profiterole-dep-nsubj.html) – [nummod](frm_profiterole-dep-nummod.html) – [obj](frm_profiterole-dep-obj.html) – [obl](frm_profiterole-dep-obl.html) – [obl:advmod](frm_profiterole-dep-obl-advmod.html) – [parataxis](frm_profiterole-dep-parataxis.html) – [punct](frm_profiterole-dep-punct.html) – [root](frm_profiterole-dep-root.html) – [vocative](frm_profiterole-dep-vocative.html) – [xcomp](frm_profiterole-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 512 sentences and 12025 tokens.</li>
</ul>

<ul>
<li>This corpus contains 1553 tokens (13%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 12 types of words that contain both letters and punctuation. Examples: d', l', qu', n', s', j', c', m', Saint-Michiel, Nostre-Dame, aujourd', entr'</li>
</ul>

<ul>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 14 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>NOUN</a>, <a>NUM</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>VERB</a>, <a>X</a></li>
<li>This corpus does not use the following tags: PART, INTJ, SYM</li>
</ul>

<ul>
</ul>

<ul>
<li>This corpus contains 49 lemmas tagged as pronouns (PRON): aucun, autre, ce1, ceci, cela, chacun, cil, cinq, cinquante, deux, dont, elle1, eux, huit, il, je, le, ledit, lequel, leur1, li, lui, me, mille1, moi, neuf1, nous, nul, on, où, personne, peu, plusieurs, quatre, que, quel, qui1, quoi, rien, se1, soi, toi, tous, tout1, tout2, tu, un, vingt, vous</li>
</ul>

<ul>
<li>This corpus contains 39 lemmas tagged as determiners (DET): aucun, autre, ce2, cent, chacun, cil, cinq, cinquante, cist, de, deux, dix, huit, le, ledit, lequel, leur2, mille1, mon1, neuf2, notre, nul, plusieurs, quatorze, quatre, quel, quelque, quinze, six, son4, sondit, tel, tous, tout2, trente, trois, un, vingt, votre</li>
</ul>

<ul>
<li>Out of the above, 20 lemmas occurred sometimes as PRON and sometimes as DET: aucun, autre, chacun, cil, cinq, cinquante, deux, huit, le, ledit, lequel, mille1, nul, plusieurs, quatre, quel, tous, tout2, un, vingt</li>
</ul>

<ul>
<li>This corpus contains 7 lemmas tagged as auxiliaries (AUX): avoir, devoir, falloir, pouvoir, ravoir, vouloir, être</li>
</ul>

<ul>
<li>Out of the above, 3 lemmas occurred sometimes as AUX and sometimes as VERB: falloir, pouvoir, vouloir</li>
</ul>

<ul>
<li>There are 3 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: avoit, estoit, fut, est, avoient, ay, furent, fu, estoient, eust</li>
    <li>VERB: avoit, estoit, fit, firent, dit, vint, est, vindrent, estoient, fut</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: estre, avoir, pouvoir, povoir</li>
    <li>VERB: faire, avoir, dire, mectre, parler, prendre, veoir, aller, venir, lever</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>AUX: esté, faillu, peu</li>
    <li>VERB: dit, fait, dicte, esté, eu, dictes, faicte, appellé, disant, faict</li>
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
      <li>DET: ledict, ladicte, ledit, lesdictes, sondict, lesdictz, lesdits</li>
      <li>PRON: lesdictz</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>DET: le, la, les, l', lesquelz</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: ung, une, un</li>
    </ul>
  </li>
</ul>

<h3>Degree and Polarity</h3>





<h3>Verbal Features</h3>




<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX-Part: esté, faillu, peu</li>
      <li>VERB-Part: dit, fait, dicte, esté, eu, dictes, faicte, appellé, faict, mis</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>VERB-Part: disant, voyant, donnant, estant, pendant, touchant, trouvant, aidans, complaignant, confortans</li>
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
      <li>DET: le, la, les, l', ung, une, un, lesquelz</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>DET: ceste, ce, ces, celle, cette, celi, celuy, cestuy, celui, cest</li>
      <li>PRON: ce, ceulx, c', cecy, ceuls, cela, ceulz, celle, celles, icelluy</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADJ: autres, telle, aulcune, aultres, autre, mesmes, quelque, tel</li>
      <li>DET: tous, tout, toutes, autres, pluseurs, quelque, plusieurs, telle, nul, aultre</li>
      <li>PRON: on, autres, riens, aultres, autre, en, tout, tous, ung, une</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>ADV: ne, n', pas, point, non</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>PRON: il, vous, luy, ilz, se, je, le, s', leur, les</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>DET: laquelle, lequel, lesquelles, quel, quelle</li>
      <li>PRON: qui, que, qu', dont, quoy, lequel, où, ou, laquelle, lesquelz</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>ADJ: mil, CCC, quatre, LX, LXIIII, II, LXI, LXIV, LXV, LXVI</li>
      <li>DET: quatre, cinq, deux, huit, mille, cens, six, trois, dix, quinze</li>
      <li>NUM: X, deux</li>
      <li>PRON: cinquante, cinq, deux, huict, mille, neuf, quatre, vingt</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>ADJ: VIIIe, Ve, Viiè, XIIe, XIXe, cinquiesme, premier, unziesme</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>ADJ: mienne</li>
      <li>DET: son, sa, ses, leur, vostre, mon, leurs, nostre, voz, mes</li>
    </ul>
  </li>
</ul>






<h3>Other Features</h3>


<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 1 lemmas as copulas (<a>cop</a>). Examples: être.</li>
</ul>

<ul>
<li>This corpus uses 6 lemmas as auxiliaries (<a>aux</a>). Examples: avoir, être, pouvoir, devoir, falloir, ravoir.</li>
<li>This corpus uses 1 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: être.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (2)</li>
      <li>VERB--PRON (1)</li>
      <li>VERB-Fin--NOUN (179)</li>
      <li>VERB-Fin--NOUN-ADP(de) (1)</li>
      <li>VERB-Fin--NOUN-ADP(jusque) (1)</li>
      <li>VERB-Fin--PRON (245)</li>
      <li>VERB-Inf--NOUN (9)</li>
      <li>VERB-Inf--PRON (21)</li>
      <li>VERB-Part--NOUN (81)</li>
      <li>VERB-Part--PRON (121)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (1)</li>
      <li>VERB-Fin--NOUN (173)</li>
      <li>VERB-Fin--NOUN-ADP(de) (1)</li>
      <li>VERB-Fin--PRON (95)</li>
      <li>VERB-Inf--NOUN (97)</li>
      <li>VERB-Inf--NOUN-ADP(de) (2)</li>
      <li>VERB-Inf--PRON (57)</li>
      <li>VERB-Part--NOUN (45)</li>
      <li>VERB-Part--NOUN-ADP(de) (1)</li>
      <li>VERB-Part--PRON (53)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--PRON-ADP(à) (1)</li>
      <li>VERB-Fin--PRON (63)</li>
      <li>VERB-Inf--PRON (12)</li>
      <li>VERB-Inf--PRON-ADP(à) (1)</li>
      <li>VERB-Part--PRON (35)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 5 relation subtypes: <a>acl:relcl</a>, <a>aux:pass</a>, <a>case:det</a>, <a>cc:nc</a>, <a>obl:advmod</a></li>
<li>The following 6 relation types are not used in this corpus at all: <a>clf</a>, <a>compound</a>, <a>list</a>, <a>orphan</a>, <a>goeswith</a>, <a>reparandum</a></li>
</ul>
