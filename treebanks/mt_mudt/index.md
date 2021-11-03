---
layout: base
title:  'UD_Maltese-MUDT'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Maltese MUDT

Language: [Maltese](/mt/index.html) (code: `mt`)<br/>
Family: Afro-Asiatic, Semitic

This treebank has been part of Universal Dependencies since the UD v2.3 release.

The following people have contributed to making this treebank part of UD: Slavomír Čéplö, Daniel Zeman.

Repository: [UD_Maltese-MUDT](https://github.com/UniversalDependencies/UD_Maltese-MUDT)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udmt_mudt29)<br />
Download all treebanks: [UD 2.9](/#download)

License: CC BY-SA 4.0

Genre: news, legal, nonfiction, fiction, wiki

Questions, comments?
General annotation questions (either Maltese-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Maltese-MUDT/issues).
If you want to collaborate, please contact [bulbul&nbsp;(æt)&nbsp;bulbul&nbsp;•&nbsp;sk].
Development of the treebank happens directly in the UD repository, so you may submit bug fixes as pull requests against the dev branch.

| Annotation | Source |
|------------|--------|
| Lemmas | not available |
| UPOS | annotated manually in non-UD style, automatically converted to UD |
| XPOS | annotated manually |
| Features | not available |
| Relations | annotated manually, natively in UD style |

## Description
MUDT (Maltese Universal Dependencies Treebank) is a manually annotated treebank of Maltese, a Semitic language of Malta descended from North African Arabic with a significant amount of Italo-Romance influence.
MUDT was designed as a balanced corpus with four major genres (see Splitting below) represented roughly equally.


## Origin
This treebank is the product of the PhD thesis *Constituent order in Maltese: A quantitative analysis* by Slavomír Čéplö. The text (see References) contains a detailed description of the annotation decisions and composition of the treebank.
The treebank was originally produced in accordance with UDv1, this version is brought up to the UDv2.5 standard.

## Splitting
MUDT contains 2074 sentences and 44,162 tokens (both defined orthographically) in the following text types:

| Text type | Subtype | Sentence count |
|--------------|-----------------------------------------|---------------:|
| newspaper | news | 239 |
| | op-eds | 240 |
| | *Subtotal* | *479* |
| quasi-spoken | newspaper interviews | 280 |
| | parliament: debates and Q&A | 294 |
| | *Subtotal* | *574* |
| fiction | short stories | 246 |
| | novel chapters | 251 |
| | *Subtotal* | *497* |
| non-fiction | humanities | 249 |
| | science, encyclopedic and instructional | 275 |
| | *Subtotal* | *524* |
| | | |
| | **Total** | **2074** |

The annotated sentences have been manually split into train, test and dev sets as follows:

| File | Sentence count | Token count |
|--------------------------------|---------------:|------------:|
| mt_mudt-ud-train.conllu | 1123 | 22880 |
| mt_mudt-ud-test.conllu | 518 | 11073 |
| mt_mudt-ud-dev.conllu | 433 | 10209 |

## Acknowledgments

# Statistics of UD Maltese MUDT

## POS Tags

[ADJ](mt_mudt-pos-ADJ.html) – [ADP](mt_mudt-pos-ADP.html) – [ADV](mt_mudt-pos-ADV.html) – [AUX](mt_mudt-pos-AUX.html) – [CCONJ](mt_mudt-pos-CCONJ.html) – [DET](mt_mudt-pos-DET.html) – [INTJ](mt_mudt-pos-INTJ.html) – [NOUN](mt_mudt-pos-NOUN.html) – [NUM](mt_mudt-pos-NUM.html) – [PART](mt_mudt-pos-PART.html) – [PRON](mt_mudt-pos-PRON.html) – [PROPN](mt_mudt-pos-PROPN.html) – [PUNCT](mt_mudt-pos-PUNCT.html) – [SCONJ](mt_mudt-pos-SCONJ.html) – [SYM](mt_mudt-pos-SYM.html) – [VERB](mt_mudt-pos-VERB.html) – [X](mt_mudt-pos-X.html)

## Features



## Relations

[acl](mt_mudt-dep-acl.html) – [advcl](mt_mudt-dep-advcl.html) – [advmod](mt_mudt-dep-advmod.html) – [advmod:neg](mt_mudt-dep-advmod-neg.html) – [amod](mt_mudt-dep-amod.html) – [appos](mt_mudt-dep-appos.html) – [aux](mt_mudt-dep-aux.html) – [aux:neg](mt_mudt-dep-aux-neg.html) – [aux:part](mt_mudt-dep-aux-part.html) – [aux:pass](mt_mudt-dep-aux-pass.html) – [case](mt_mudt-dep-case.html) – [case:det](mt_mudt-dep-case-det.html) – [cc](mt_mudt-dep-cc.html) – [ccomp](mt_mudt-dep-ccomp.html) – [compound](mt_mudt-dep-compound.html) – [conj](mt_mudt-dep-conj.html) – [cop](mt_mudt-dep-cop.html) – [cop:expl](mt_mudt-dep-cop-expl.html) – [csubj](mt_mudt-dep-csubj.html) – [dep](mt_mudt-dep-dep.html) – [det](mt_mudt-dep-det.html) – [discourse](mt_mudt-dep-discourse.html) – [dislocated](mt_mudt-dep-dislocated.html) – [expl](mt_mudt-dep-expl.html) – [fixed](mt_mudt-dep-fixed.html) – [flat](mt_mudt-dep-flat.html) – [flat:name](mt_mudt-dep-flat-name.html) – [goeswith](mt_mudt-dep-goeswith.html) – [iobj](mt_mudt-dep-iobj.html) – [list](mt_mudt-dep-list.html) – [mark](mt_mudt-dep-mark.html) – [nmod](mt_mudt-dep-nmod.html) – [nmod:poss](mt_mudt-dep-nmod-poss.html) – [nsubj](mt_mudt-dep-nsubj.html) – [nsubj:pass](mt_mudt-dep-nsubj-pass.html) – [nummod](mt_mudt-dep-nummod.html) – [obj](mt_mudt-dep-obj.html) – [obl](mt_mudt-dep-obl.html) – [obl:agent](mt_mudt-dep-obl-agent.html) – [obl:arg](mt_mudt-dep-obl-arg.html) – [orphan](mt_mudt-dep-orphan.html) – [parataxis](mt_mudt-dep-parataxis.html) – [punct](mt_mudt-dep-punct.html) – [reparandum](mt_mudt-dep-reparandum.html) – [root](mt_mudt-dep-root.html) – [vocative](mt_mudt-dep-vocative.html) – [xcomp](mt_mudt-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 2074 sentences and 44162 tokens.</li>
</ul>

<ul>
<li>This corpus contains 10625 tokens (24%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 236 types of words that contain both letters and punctuation. Examples: l-, il-, ta', tal-, fil-, f', mill-, b', għall-, fl-, it-, is-, ma', x', t-, lill-, id-, ir-, bil-, m', jista', mal-, d-, s-, fis-, tas-, ix-, tat-, r-, tad-, bl-, in-, fit-, tista', fid-, iż-, 'l, tar-, tan-, n-, għas-, x-, bis-, ż-, 'il, għat-, jibqa', tax-, ċ-, fix-</li>
</ul>

<ul>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 17 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a>, <a>X</a></li>
</ul>

<ul>
<li>This corpus contains 4 word types tagged as particles (PART): la, le, m', ma</li>
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
<li>This corpus does not use the VerbForm feature.</li>
</ul>

<h3>Nominal Features</h3>








<h3>Degree and Polarity</h3>





<h3>Verbal Features</h3>







<h3>Pronouns, Determiners, Quantifiers</h3>










<h3>Other Features</h3>


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
      <li>VERB--NOUN (1068)</li>
      <li>VERB--NOUN-ADP(_) (1)</li>
      <li>VERB--PRON (347)</li>
      <li>VERB--PRON-ADP(_) (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (1327)</li>
      <li>VERB--NOUN-ADP(_) (18)</li>
      <li>VERB--PRON (138)</li>
      <li>VERB--PRON-ADP(_) (17)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--NOUN (29)</li>
      <li>VERB--NOUN-ADP(_) (11)</li>
      <li>VERB--PRON (12)</li>
      <li>VERB--PRON-ADP(_) (9)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 11 relation subtypes: <a>advmod:neg</a>, <a>aux:neg</a>, <a>aux:part</a>, <a>aux:pass</a>, <a>case:det</a>, <a>cop:expl</a>, <a>flat:name</a>, <a>nmod:poss</a>, <a>nsubj:pass</a>, <a>obl:agent</a>, <a>obl:arg</a></li>
<li>The following 1 relation types are not used in this corpus at all: <a>clf</a></li>
</ul>
