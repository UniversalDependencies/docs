---
layout: base
title:  'UD_Occitan-CorAG'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Occitan CorAG

Language: [Occitan](/oc/index.html) (code: `oc`)<br/>
Family: IE

This treebank has been part of Universal Dependencies since the UD v2.16 release.

The following people have contributed to making this treebank part of UD: Barbara Francioni, Natalia Romanova, Rayan Ziane, Khensa Daoudi, Pierre Larrivée.

Repository: [UD_Occitan-CorAG](https://github.com/UniversalDependencies/UD_Occitan-CorAG)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udoc_corag216)<br />
Download all treebanks: [UD 2.16](/#download)

License: CC BY-SA 4.0

Genre: legal

Questions, comments?
General annotation questions (either Occitan-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Occitan-CorAG/issues).
If you want to collaborate, please contact [natalia&nbsp;•&nbsp;romanova&nbsp;(æt)&nbsp;unicaen&nbsp;•&nbsp;fr].
Development of the treebank happens directly in the UD repository, so you may submit bug fixes as pull requests against the dev branch.

| Annotation | Source |
|------------|--------|
| Lemmas | not available |
| UPOS | annotated manually, natively in UD style |
| XPOS | not available |
| Features | not available |
| Relations | annotated manually, natively in UD style |

## Description
UD_Occitan-CorAG (Corpus de l'Ancien Gascon) is a corpus of medieval legal texts in Gascon, a variety of Old Occitan. The texts were digitized from printed editions and subsequently manually annotated in Universal Dependencies (PoS and functions).



The collection currently contains two texts:

\* _Coutumes et Privilèges de l’Entre-Deux-Mers_, 1214-1342 (Lépicier 1861): 344 sentences; 11,975 tokens

\* _Les Fors Anciens de Béarn_ 1460 (Ourliac & Gilles 1990): 750 sentences ; 26,704 tokens

The texts were digitized, segmented and subsequently automatically annotated with [HOPS](https://github.com/hopsparser/hopsparser) and [BertForDeprel](https://github.com/kirianguiller/BertForDeprel)) parsers using bootstrapping methodology (Peng et al 2022) on [ArboratorGrew](https://arborator.grew.fr/#/) software.

| Set | Sentences| Tokens |
| :---------------- | :------: | ----: |
| Train | 657 | 23,807 |
| Dev | 152 | 4,580 |
| Test | 285 | 10,292 |
| **Total** | **1,094**| **38,676**|


## Acknowledgments
The corpus is part of Professor Pierre Larrivée's (University of Caen) [Senior membership project](https://www.iufrance.fr/les-membres-de-liuf/membre/2346-pierre-larrivee.html) with the Institut Universitaire de France. Manual annotation was performed by Barbara Francioni. Technical support by Rayan Ziane and Khensa Daoudi. Digitization by Christelle Violette. Project coordination by Natasha Romanova.

## References

* Forthcoming



# Statistics of UD Occitan CorAG

## POS Tags

[ADJ](oc_corag-pos-ADJ.html) – [ADP](oc_corag-pos-ADP.html) – [ADV](oc_corag-pos-ADV.html) – [AUX](oc_corag-pos-AUX.html) – [CCONJ](oc_corag-pos-CCONJ.html) – [DET](oc_corag-pos-DET.html) – [NOUN](oc_corag-pos-NOUN.html) – [NUM](oc_corag-pos-NUM.html) – [PART](oc_corag-pos-PART.html) – [PRON](oc_corag-pos-PRON.html) – [PROPN](oc_corag-pos-PROPN.html) – [PUNCT](oc_corag-pos-PUNCT.html) – [SCONJ](oc_corag-pos-SCONJ.html) – [VERB](oc_corag-pos-VERB.html)

## Features

[ExtPos](oc_corag-feat-ExtPos.html)

## Relations

[acl](oc_corag-dep-acl.html) – [acl:relcl](oc_corag-dep-acl-relcl.html) – [advcl](oc_corag-dep-advcl.html) – [advmod](oc_corag-dep-advmod.html) – [amod](oc_corag-dep-amod.html) – [appos](oc_corag-dep-appos.html) – [aux](oc_corag-dep-aux.html) – [aux:pass](oc_corag-dep-aux-pass.html) – [case](oc_corag-dep-case.html) – [cc](oc_corag-dep-cc.html) – [ccomp](oc_corag-dep-ccomp.html) – [conj](oc_corag-dep-conj.html) – [cop](oc_corag-dep-cop.html) – [csubj](oc_corag-dep-csubj.html) – [det](oc_corag-dep-det.html) – [discourse](oc_corag-dep-discourse.html) – [dislocated](oc_corag-dep-dislocated.html) – [expl](oc_corag-dep-expl.html) – [fixed](oc_corag-dep-fixed.html) – [flat](oc_corag-dep-flat.html) – [iobj](oc_corag-dep-iobj.html) – [mark](oc_corag-dep-mark.html) – [nmod](oc_corag-dep-nmod.html) – [nsubj](oc_corag-dep-nsubj.html) – [nummod](oc_corag-dep-nummod.html) – [obj](oc_corag-dep-obj.html) – [obl](oc_corag-dep-obl.html) – [orphan](oc_corag-dep-orphan.html) – [parataxis](oc_corag-dep-parataxis.html) – [punct](oc_corag-dep-punct.html) – [root](oc_corag-dep-root.html) – [xcomp](oc_corag-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 1094 sentences, 36690 tokens and 37585 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 4199 tokens (11%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 236 types of words that contain both letters and punctuation. Examples: -lo, de-, a-, l', d', -los, s', que-, ss., n', -n, -s, no-, -u, Entre-dos-Mars, .VI., d’, .LXVI., P., -us, l’, -lodit, -m, -lodeyt, .XX., Arn., lo-, B., W., .XXX., .XL., -Arnaut, -ffase, e-, m', Â«, Â», -que, -y, .IX., la-, -l, -losquaus, -queg, .IIIIte., fe-, so-, -losdeyts, .III., .IIIC.</li>
</ul>

<ul>
<li>This corpus contains 895 multi-word tokens. On average, one multi-word token consists of 2.00 syntactic words.</li>
<li>There are 94 types of multi-word tokens. Examples: deu, au, del, dels, deus, aus, no-s, que-u, que-n, lo-n, als, deudit, no-n, que-us, a-ffase, deudeyt, que-s, al, dequeg, e-u, no-l, ausquaus, lo, qui-s, a-ffar, audit, deldeyt, dequetz, fe-y, la-m, no-m, que-m, soque, adaquetz, auquau, ausdeyts, delz, dequere, deusdeyts, deusditz, dit, fe-n, no-ls, no-u, no-us, perso, soes, a-fase, a-ffa, a-ffara.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 14 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>VERB</a></li>
<li>This corpus does not use the following tags: INTJ, SYM, X</li>
</ul>

<ul>
<li>This corpus contains 6 word types tagged as particles (PART): -que, qu', que, que-, que-n, que-u</li>
</ul>

<ul>
<li>This corpus contains 11 lemmas tagged as pronouns (PRON): -, -los, -queg, -quegs, -quere, _, il, laquau, lasquoaus, loquoau, qui</li>
</ul>

<ul>
<li>This corpus contains 15 lemmas tagged as determiners (DET): -, -las, -lo, -lodeyt, -los, -quere, -queste, -quetz, Losquoaus, _, laquoau, le, lodeyt, lodit, losdiits</li>
</ul>

<ul>
<li>Out of the above, 4 lemmas occurred sometimes as PRON and sometimes as DET: -, -los, -quere, _</li>
</ul>

<ul>
<li>This corpus contains 1 lemmas tagged as auxiliaries (AUX): _</li>
</ul>

<ul>
<li>Out of the above, 1 lemmas occurred sometimes as AUX and sometimes as VERB: _</li>
</ul>

<ul>
<li>This corpus does not use the VerbForm feature.</li>
</ul>

<h3>Nominal Features</h3>








<h3>Degree and Polarity</h3>





<h3>Verbal Features</h3>







<h3>Pronouns, Determiners, Quantifiers</h3>










<h3>Other Features</h3>


<ul>
  <li><a>ExtPos</a>
    <ul>
      <li>ADP
        <ul>
          <li>ADP: entro, per, saub, am, aprees, en, par, sentz</li>
          <li>ADV: fore, no, quant, ensemps, for, senes, sino</li>
          <li>SCONJ: cum</li>
        </ul>
      </li>
      <li>ADV
        <ul>
          <li>ADP: per</li>
          <li>ADV: tant, ayssi, no, aixi, ayssi-, certas, sino</li>
          <li>PRON: so, so-</li>
          <li>SCONJ: si, ayssicum</li>
          <li>VERB: es</li>
        </ul>
      </li>
      <li>CCONJ
        <ul>
          <li>ADV: ayssi, aixi, ayssi-</li>
        </ul>
      </li>
      <li>SCONJ
        <ul>
          <li>ADP: entro, per, ab, en, segont, de, exceptat, a, entre, saub</li>
          <li>ADV: ayssi, tant, sino, aixi, apres, puix, ont, aissi, abantz, despuix</li>
          <li>CCONJ: pero</li>
          <li>NOUN: rason</li>
          <li>SCONJ: si, jassia, jassie, affin, cum, mentra, sinauque</li>
          <li>VERB: pausat, actendut</li>
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
      <li>VERB--NOUN (1055)</li>
      <li>VERB--NOUN-ADP(_) (1)</li>
      <li>VERB--PRON (761)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (1122)</li>
      <li>VERB--NOUN-ADP(_) (4)</li>
      <li>VERB--PRON (574)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--PRON (181)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 2 relation subtypes: <a>acl:relcl</a>, <a>aux:pass</a></li>
<li>The following 7 relation types are not used in this corpus at all: <a>vocative</a>, <a>clf</a>, <a>compound</a>, <a>list</a>, <a>goeswith</a>, <a>reparandum</a>, <a>dep</a></li>
</ul>
