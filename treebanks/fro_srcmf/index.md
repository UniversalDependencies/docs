---
layout: base
title:  'UD_Old_French-SRCMF'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Old French SRCMF

Language: [Old French](/fro/index.html) (code: `fro`)<br/>
Family: Indo-European, Romance

This treebank has been part of Universal Dependencies since the UD v2.2 release.

The following people have contributed to making this treebank part of UD: Sophie Prévost, Aurélie Collomb, Kim Gerdes, Isabelle Tellier, Marine Courtin, Alexei Lavrentiev, Céline Guillot-Barbance, Loïc Grobol.

Repository: [UD_Old_French-SRCMF](https://github.com/UniversalDependencies/UD_Old_French-SRCMF)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udfro_srcmf28)<br />
Download all treebanks: [UD 2.8](/#download)

License: CC BY-NC-SA 3.0

Genre: nonfiction, legal, poetry

Questions, comments?
General annotation questions (either Old French-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Old_French-SRCMF/issues).
If you want to collaborate, please contact [sophie&nbsp;•&nbsp;prevost&nbsp;(æt)&nbsp;ens&nbsp;•&nbsp;fr].
Development of the treebank happens in the UD repository but not directly in the final CoNLL-U files.
You may submit bug fixes as pull requests against the dev branch but you have to go to the folder called `not-to-release` and locate the source files there.
Contact the treebank maintainers if in doubt.

| Annotation | Source |
|------------|--------|
| Lemmas | not available |
| UPOS | annotated manually in non-UD style, automatically converted to UD, with some manual corrections of the conversion |
| XPOS | annotated manually |
| Features | assigned by a program, not checked manually |
| Relations | assigned by a program, with some manual corrections, but not a full manual verification |

## Description

UD_Old_French-SRCMF is a conversion of (part of) the SRCMF corpus (Syntactic Reference Corpus of
Medieval French [srcmf.org](http://srcmf.org/)).



UD_Old_French-SRCMF consists in 10 texts spanning from 9th to 13th century. It includes 17678
sentences and 170 741 tokens.

Sentences are annotated with the following metadata:

- sent_id : a unique id for each sentence in the treebank
- text : the sentence
- newdoc id : a unique id for each of the texts. This id can be split on underscores to get back :
- name of the text
- date
- form : verse and/or prose


The following table lists the texts used in this treebank :

| ID | Author | Name of the text | Number of tokens |
| ------ | ------ | ------ | ------ |
| Strasbourg_842_prose | anonymous | Serments de Strasbourg | 115 |
| StLegier_1000_verse | anonymous | Vie de saint Léger | 1,388 |
| StAlexis_1050_verse | anonymous | Vie de saint Alexis | 4,750 |
| Roland_1100_verse | anonymous | Chanson de Roland | 28,752 |
| Lapidaire_mid12_prose | anonymous | Lapidaire en prose | 4,708 |
| QuatreLivresReis_late12_prose | anonymous | Quatre livres des reis | 12,949 |
| BeroulTristan_late12_verse | Beroul, Tristan | Tristan de Beroul | 26,766 |
| TroyesYvain_1180_verse | Chrestien de Troyes, Yvain | Yvain de Chretien de Troyes | 41,256 |
| Aucassin_early13_verse-prose | anonymous | Aucassin et Nicolet | 9,838 |
| Graal_1225_prose | anonymous | Queste del Saint Graal | 40,219 |

## Acknowledgments

UD_Old_French-SRCMF results from the conversion of (part of) the SRCMF corpus (Syntactic Reference
Corpus of Medieval French [srcmf.org](srcmf.org)).

The SRCMF corpus results from the SRCMF project which took place in 2008-2012, funded by the ANR
(France) and the DFG (Germany), and supervised by Sophie Prévost and Achim Stein.

The SRCMF project consisted in the manual syntactic annotation of 15 texts (251,000 tokens) from the
9th to 13th C. Part-of-speech tags were for most of them retrieved from the already existing tagging
of the texts (stemming from: Base de Français Medieval, Lyon, ENS de Lyon, IHRIM Laboratory
[http://txm.bfm-corpus.org]([http://txm.bfm-corpus.org]), and the Nouveau Corpus d'Amsterdam
[http://www.uni-stuttgart.de/lingrom/stein/corpus#nca]([http://www.uni-stuttgart.de/lingrom/stein/corpus#nca]))

The contributors to the SRCMF project were: Stein, Achim; Prévost, Sophie; Rainsford, Tom;
Mazziotta, Nicolas; Bischoff Béatrice; Glikman, Julie; Lavrentiev, Alexei; Heiden, Serge;
Guillot-Barbance, Céline; Marchello-Nizia, Christiane.

The whole SRCMF corpus (251,000 tokens) was converted into UD dependencies, but only 172,000 tokens
have so far undergone a significant checking: the remaining 80,000 tokens will be added to
UD_Old_French-SRCMF in a future release.

The conversion from the original SRCMF annotation to the SRCMF-UD annotation was done automatically
both for the POS and the syntactic relations, thanks to a set of elaborated rules. Some 1,200
syntactic relations left unlabelled were then manually annotated (Sophie Prévost), and significant
spot-checking occurred, focusing on potential difficulties (eg. conj relation).

This conversion was achieved by Aurélie Collomb, in the frame of a internship funded by lab Lattice
(Paris, CNRS, ENS & Université Sorbonne Nouvelle Paris 3, PSL & USPC), and supervised by Sophie
Prévost, Isabelle Tellier and Kim Gerdes. Marine Courtin achieved the deposit of the files, and
especially took in charge the validation of the corpus through the successive steps of the process.

A significant review of this initial release has been done on the occasion of the UD 2.6 release by
Loïc Grobol and Sophie Prévost in the frame of the [ANR PROFITEROLE
project](https://www.lattice.cnrs.fr/projets/projet-anr-profiterole) in order to improve the
compliance of the corpus to UD guidelines. This includes both automatic corrections using
the graph rewriting system [GREW](http://grew.fr) (Bonfante et al., 2018) and extensive manual corrections.

## References

- Stein, Achim, and Sophie Prévost. 2013. [‘Syntactic Annotation of Medieval Texts: The Syntactic Reference Corpus of Medieval French (SRCMF)’](https://halshs.archives-ouvertes.fr/halshs-01122079). In *New Methods in Historical Corpora*, edited by Paul Bennett, Martin Durrell, Silke Scheible, and Richard J. Whitt, 275–82. Corpus Linguistics and International Perspectives on Language. Gunter Narr Verlag.
- Bonfante, Guillaume, Bruno Guillaume, and Guy Perrier 2018. [*Application of Graph Rewriting to Natural Language Processing*](https://hal.inria.fr/hal-01814386.). Vol. 1. ISTE Wiley.




# Statistics of UD Old French SRCMF

## POS Tags

[ADJ](fro_srcmf-pos-ADJ.html) – [ADP](fro_srcmf-pos-ADP.html) – [ADV](fro_srcmf-pos-ADV.html) – [AUX](fro_srcmf-pos-AUX.html) – [CCONJ](fro_srcmf-pos-CCONJ.html) – [DET](fro_srcmf-pos-DET.html) – [INTJ](fro_srcmf-pos-INTJ.html) – [NOUN](fro_srcmf-pos-NOUN.html) – [NUM](fro_srcmf-pos-NUM.html) – [PRON](fro_srcmf-pos-PRON.html) – [PROPN](fro_srcmf-pos-PROPN.html) – [SCONJ](fro_srcmf-pos-SCONJ.html) – [VERB](fro_srcmf-pos-VERB.html)

## Features

[Definite](fro_srcmf-feat-Definite.html) – [Morph](fro_srcmf-feat-Morph.html) – [NumType](fro_srcmf-feat-NumType.html) – [Polarity](fro_srcmf-feat-Polarity.html) – [Poss](fro_srcmf-feat-Poss.html) – [PronType](fro_srcmf-feat-PronType.html) – [Tense](fro_srcmf-feat-Tense.html) – [VerbForm](fro_srcmf-feat-VerbForm.html)

## Relations

[acl](fro_srcmf-dep-acl.html) – [acl:relcl](fro_srcmf-dep-acl-relcl.html) – [advcl](fro_srcmf-dep-advcl.html) – [advmod](fro_srcmf-dep-advmod.html) – [advmod:obl](fro_srcmf-dep-advmod-obl.html) – [amod](fro_srcmf-dep-amod.html) – [appos](fro_srcmf-dep-appos.html) – [aux](fro_srcmf-dep-aux.html) – [aux:pass](fro_srcmf-dep-aux-pass.html) – [case](fro_srcmf-dep-case.html) – [case:det](fro_srcmf-dep-case-det.html) – [cc](fro_srcmf-dep-cc.html) – [cc:nc](fro_srcmf-dep-cc-nc.html) – [ccomp](fro_srcmf-dep-ccomp.html) – [compound](fro_srcmf-dep-compound.html) – [conj](fro_srcmf-dep-conj.html) – [cop](fro_srcmf-dep-cop.html) – [csubj](fro_srcmf-dep-csubj.html) – [det](fro_srcmf-dep-det.html) – [discourse](fro_srcmf-dep-discourse.html) – [dislocated](fro_srcmf-dep-dislocated.html) – [expl](fro_srcmf-dep-expl.html) – [fixed](fro_srcmf-dep-fixed.html) – [flat](fro_srcmf-dep-flat.html) – [iobj](fro_srcmf-dep-iobj.html) – [mark](fro_srcmf-dep-mark.html) – [mark:advmod](fro_srcmf-dep-mark-advmod.html) – [nmod](fro_srcmf-dep-nmod.html) – [nsubj](fro_srcmf-dep-nsubj.html) – [nsubj:advmod](fro_srcmf-dep-nsubj-advmod.html) – [nsubj:obj](fro_srcmf-dep-nsubj-obj.html) – [nummod](fro_srcmf-dep-nummod.html) – [obj](fro_srcmf-dep-obj.html) – [obj:advmod](fro_srcmf-dep-obj-advmod.html) – [obj:advneg](fro_srcmf-dep-obj-advneg.html) – [obj:obl](fro_srcmf-dep-obj-obl.html) – [obl](fro_srcmf-dep-obl.html) – [obl:advmod](fro_srcmf-dep-obl-advmod.html) – [parataxis](fro_srcmf-dep-parataxis.html) – [root](fro_srcmf-dep-root.html) – [vocative](fro_srcmf-dep-vocative.html) – [xcomp](fro_srcmf-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 17678 sentences and 170740 tokens.</li>
</ul>

<ul>
<li>All tokens in this corpus are followed by a space.</li>
</ul>

<ul>
<li>This corpus contains 1 types of words with spaces. Examples: ambe .ii.</li>
</ul>

<ul>
<li>This corpus contains 139 types of words that contain both letters and punctuation. Examples: l', qu', s', n', d', m', .i., t', c', j', jusqu', l'en, .ii., .iii., q', .iiii., g', .xii., entr', .xx., .vii., .c., ensembl', quanqu', un', ·l, .xxx., .v., tresqu', .x., entresqu', .vi., .xv., .xxiiii., .ix., josqu', .IIII.C., an.ii., cest', qui', ·s, Ço', ç', .XL., .l., .viii., jesqu', ·il, .VII.C., .lx.</li>
</ul>

<ul>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 13 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PRON</a>, <a>PROPN</a>, <a>SCONJ</a>, <a>VERB</a></li>
<li>This corpus does not use the following tags: PART, SYM, PUNCT, X</li>
</ul>

<ul>
</ul>

<ul>
<li>This corpus contains 1 lemmas tagged as pronouns (PRON): _</li>
</ul>

<ul>
<li>This corpus contains 1 lemmas tagged as determiners (DET): _</li>
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
<li>There are 3 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: est, a, fu, ad, estoit, avoit, ai, sont, ert, ot</li>
    <li>VERB: dist, fet, est, a, fait, ad, fist, vint, ot, dit</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: estre, avoir, estra, devenir, aveir, estr', iestre, sanbler, turner</li>
    <li>NOUN: deçoivre, Fuïr, clergier, curre, delaier, enconbrier, espleiter, parler, pleisir</li>
    <li>VERB: dire, venir, aler, parler, faire, veoir, avoir, estre, fere, feire</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>ADJ: dolenz, dolent, dolanz, avenanz, vaillant, vaillanz, confés, flurie, joiant, avenant</li>
    <li>AUX: esté, devenuz, devenu, remés, avenanz, este, anpiriez, devengunz, devenut, estet</li>
    <li>NOUN: semblant, senblant, mort, sanblant, descovert, dit, fait, remanant, ajustee, anchanté</li>
    <li>VERB: fait, dit, mort, mis, fet, venuz, pris, morz, ocis, esté</li>
  </ul>
  </li>
</ul>

<h3>Nominal Features</h3>







<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>ADP: au, des, del, el, as, al, dou, du, ou, es</li>
      <li>AUX: es</li>
      <li>DET: la, li, le, l', les, lo, lu, lé, lis, las</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: un, une, .i., uns, un', unes, I, u·, úne, U</li>
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
      <li>ADV: ne, n', mie, pas, non, point, nen, nun, nes, nient</li>
      <li>PRON: nel, nes, nu, nem, net, nul</li>
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
      <li>ADJ-Part: hardiz</li>
      <li>AUX-Part: esté, devenuz, devenu, remés, este, anpiriez, devengunz, devenut, estet, remese</li>
      <li>NOUN-Part: comandet, morz</li>
      <li>VERB-Part: fait, dit, mort, mis, fet, venuz, pris, morz, ocis, esté</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>ADJ-Part: dolanz, dolantes</li>
      <li>VERB-Part: querant, curant, plorant, recreant, parlant, recreanz, trenchant, veant, curanz, dolans</li>
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
      <li>ADP: au, des, del, el, as, al, dou, du, ou, es</li>
      <li>AUX: es</li>
      <li>DET: la, li, le, l', les, un, une, .i., uns, un'</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>ADP: an</li>
      <li>ADV: en, i, an, í, em, u, o, ent, n, ·n</li>
      <li>AUX: en</li>
      <li>DET: ceste, cest, cele, cel, ces, cil, cez, cist, ce, icest</li>
      <li>PRON: ce, cil, ço, çó, celui, cele, cels, c', ces, ceo</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADJ: autre, meïsmes, tel, altre, nule, meïsme, autres, tex, altres, tiex</li>
      <li>ADV: Tot, tout</li>
      <li>DET: tel, toz, nule, tuit, tote, nul, autre, tot, tuz, toutes</li>
      <li>PRON: autre, tuit, rien, nus, uns, l'en, en, un, autres, hom</li>
      <li>SCONJ: quant</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>ADV: enne, en, ene</li>
      <li>DET: quel, qel, quele, quels, Qanz, itels</li>
      <li>PRON: que, qui, coi, ou, qu', quoi, quei, ki, liquels, q'</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>ADV: nen, nel</li>
      <li>DET: les, l', li, la, le</li>
      <li>PRON: il, vos, li, le, l', je, s', se, ele, me</li>
      <li>SCONJ: se, S', vos</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs,Rel
    <ul>
      <li>ADP: U, ou</li>
      <li>ADV: Don</li>
      <li>CCONJ: que, c', Ou, U, qu'</li>
      <li>PRON: qui, que, ki, qu', ou, cui, quoi, dunt, dom, don</li>
      <li>SCONJ: que, qu', q', c', chi, k'</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>DET: quel, quele, quelque, quiex, qel, quels, qual, quex, quanz, ques</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>ADJ: premereins, dui, .iii., .vii., ambesdous, anbedui, premer, premerein, troi</li>
      <li>DET: .XII., .XV., .XXIIII., .l., deus</li>
      <li>NUM: .ii., dous, deus, cent, dui, trois, .iii., milie, .iiii., .xii.</li>
      <li>PRON: milie, trois, dui, andui, .ii., deus, troi, un, uns, dous</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>ADJ: premier, tierce, cinquieme, premiere, premiers, tierz, disme, premeraine, premierz, prime</li>
      <li>DET: tierz, premiere, tierce</li>
      <li>PRON: tierz, quarte, terce, disme, quarz, sedme, noefme, premere, quinte, siste</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>ADJ: mien, vostre, suen, sue, men, nostre, soe, meie, moie, miens</li>
      <li>AUX: sue</li>
      <li>DET: sa, son, ses, sun, vostre, lor, ma, nostre, mon, mes</li>
      <li>PRON: suen, mien, noz, suens, vostre, soe, lor, lur, nostre, moie</li>
    </ul>
  </li>
</ul>






<h3>Other Features</h3>


<ul>
  <li><a>Morph</a>
    <ul>
      <li>VFin
        <ul>
          <li>ADJ: asuage</li>
          <li>ADP: a, ad</li>
          <li>ADV: oi</li>
          <li>CCONJ: Et</li>
          <li>INTJ: Os</li>
          <li>NOUN: acorde, aiüe, alge, chastie, curt, dreit, duinst, esrages, estencele, façon</li>
          <li>PROPN: cuntredie</li>
        </ul>
      </li>
      <li>VInf
        <ul>
          <li>ADJ: droiturier, ácustumiers</li>
        </ul>
      </li>
      <li>VPar
        <ul>
          <li>ADP: voiant, oiant</li>
          <li>ADV: errant</li>
          <li>PROPN: Flurit, Perdut, Sevree</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 1 lemmas as copulas (<a>cop</a>). Examples: _.</li>
</ul>

<ul>
<li>This corpus uses 1 lemmas as auxiliaries (<a>aux</a>). Examples: _.</li>
<li>This corpus uses 1 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: _.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--PRON (3)</li>
      <li>VERB-Fin--NOUN (2763)</li>
      <li>VERB-Fin--NOUN-ADP(_) (2)</li>
      <li>VERB-Fin--PRON (6943)</li>
      <li>VERB-Fin--PRON-ADP(_) (3)</li>
      <li>VERB-Inf--NOUN (146)</li>
      <li>VERB-Inf--PRON (766)</li>
      <li>VERB-Part--NOUN (872)</li>
      <li>VERB-Part--PRON (1532)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB-Fin--NOUN (4703)</li>
      <li>VERB-Fin--NOUN-ADP(_) (69)</li>
      <li>VERB-Fin--PRON (4584)</li>
      <li>VERB-Fin--PRON-ADP(_) (8)</li>
      <li>VERB-Inf--NOUN (880)</li>
      <li>VERB-Inf--NOUN-ADP(_) (10)</li>
      <li>VERB-Inf--PRON (854)</li>
      <li>VERB-Inf--PRON-ADP(_) (2)</li>
      <li>VERB-Part--NOUN (754)</li>
      <li>VERB-Part--NOUN-ADP(_) (6)</li>
      <li>VERB-Part--PRON (911)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB-Fin--PRON (2209)</li>
      <li>VERB-Fin--PRON-ADP(_) (328)</li>
      <li>VERB-Fin--PRON-ADP(_)-ADP(_) (5)</li>
      <li>VERB-Inf--PRON (200)</li>
      <li>VERB-Inf--PRON-ADP(_) (59)</li>
      <li>VERB-Part--PRON (409)</li>
      <li>VERB-Part--PRON-ADP(_) (69)</li>
      <li>VERB-Part--PRON-ADP(_)-ADP(_) (3)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 12 relation subtypes: <a>acl:relcl</a>, <a>advmod:obl</a>, <a>aux:pass</a>, <a>case:det</a>, <a>cc:nc</a>, <a>mark:advmod</a>, <a>nsubj:advmod</a>, <a>nsubj:obj</a>, <a>obj:advmod</a>, <a>obj:advneg</a>, <a>obj:obl</a>, <a>obl:advmod</a></li>
<li>The following 7 relation types are not used in this corpus at all: <a>clf</a>, <a>list</a>, <a>orphan</a>, <a>goeswith</a>, <a>reparandum</a>, <a>punct</a>, <a>dep</a></li>
</ul>
