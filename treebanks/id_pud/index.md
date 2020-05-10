---
layout: base
title:  'UD_Indonesian-PUD'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Indonesian PUD

Language: [Indonesian](/id/index.html) (code: `id`)<br/>
Family: Austronesian, Malayo-Sumbawan

This treebank has been part of Universal Dependencies since the UD v2.2 release.

The following people have contributed to making this treebank part of UD: Hans Uszkoreit, Vivien Macketanz, Aljoscha Burchardt, Kim Harris, Katrin Marheinecke, Slav Petrov, Tolga Kayadelen, Mohammed Attia, Ali Elkahky, Zhuoran Yu, Emily Pitler, Saran Lertpradit, Ruli Manurung, Muh Shohibussirri, Martin Popel, Daniel Zeman.

Repository: [UD_Indonesian-PUD](https://github.com/UniversalDependencies/UD_Indonesian-PUD)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udid_pud26)<br />
Download all treebanks: [UD 2.6](/#download)

License: CC BY-SA 3.0

Genre: news, wiki

Questions, comments?
General annotation questions (either Indonesian-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Indonesian-PUD/issues).
If you want to collaborate, please contact [zeman&nbsp;(æt)&nbsp;ufal&nbsp;•&nbsp;mff&nbsp;•&nbsp;cuni&nbsp;•&nbsp;cz].
The UD version of this treebank currently does not have a maintainer.
If you know the language and want to help, please consider adopting the treebank.

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

# Statistics of UD Indonesian PUD

## POS Tags

[ADJ](id_pud-pos-ADJ.html) – [ADP](id_pud-pos-ADP.html) – [ADV](id_pud-pos-ADV.html) – [AUX](id_pud-pos-AUX.html) – [CCONJ](id_pud-pos-CCONJ.html) – [DET](id_pud-pos-DET.html) – [NOUN](id_pud-pos-NOUN.html) – [NUM](id_pud-pos-NUM.html) – [PART](id_pud-pos-PART.html) – [PRON](id_pud-pos-PRON.html) – [PROPN](id_pud-pos-PROPN.html) – [PUNCT](id_pud-pos-PUNCT.html) – [SYM](id_pud-pos-SYM.html) – [VERB](id_pud-pos-VERB.html) – [X](id_pud-pos-X.html)

## Features

[Foreign](id_pud-feat-Foreign.html) – [Number](id_pud-feat-Number.html) – [Polarity](id_pud-feat-Polarity.html) – [PronType](id_pud-feat-PronType.html)

## Relations

[acl:relcl](id_pud-dep-acl-relcl.html) – [advcl](id_pud-dep-advcl.html) – [advmod](id_pud-dep-advmod.html) – [amod](id_pud-dep-amod.html) – [appos](id_pud-dep-appos.html) – [aux](id_pud-dep-aux.html) – [case](id_pud-dep-case.html) – [cc](id_pud-dep-cc.html) – [cc:preconj](id_pud-dep-cc-preconj.html) – [ccomp](id_pud-dep-ccomp.html) – [clf](id_pud-dep-clf.html) – [compound](id_pud-dep-compound.html) – [compound:a](id_pud-dep-compound-a.html) – [compound:n](id_pud-dep-compound-n.html) – [compound:plur](id_pud-dep-compound-plur.html) – [compound:v](id_pud-dep-compound-v.html) – [conj](id_pud-dep-conj.html) – [cop](id_pud-dep-cop.html) – [csubj](id_pud-dep-csubj.html) – [csubj:pass](id_pud-dep-csubj-pass.html) – [dep](id_pud-dep-dep.html) – [dep:prt](id_pud-dep-dep-prt.html) – [det](id_pud-dep-det.html) – [discourse](id_pud-dep-discourse.html) – [dislocated](id_pud-dep-dislocated.html) – [fixed](id_pud-dep-fixed.html) – [flat](id_pud-dep-flat.html) – [flat:name](id_pud-dep-flat-name.html) – [goeswith](id_pud-dep-goeswith.html) – [iobj](id_pud-dep-iobj.html) – [mark](id_pud-dep-mark.html) – [nmod](id_pud-dep-nmod.html) – [nmod:poss](id_pud-dep-nmod-poss.html) – [nsubj](id_pud-dep-nsubj.html) – [nsubj:pass](id_pud-dep-nsubj-pass.html) – [nummod](id_pud-dep-nummod.html) – [obj](id_pud-dep-obj.html) – [obl](id_pud-dep-obl.html) – [obl:poss](id_pud-dep-obl-poss.html) – [obl:tmod](id_pud-dep-obl-tmod.html) – [parataxis](id_pud-dep-parataxis.html) – [punct](id_pud-dep-punct.html) – [root](id_pud-dep-root.html) – [vocative](id_pud-dep-vocative.html) – [xcomp](id_pud-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 1000 sentences and 19900 tokens.</li>
</ul>

<ul>
<li>This corpus contains 5067 tokens (25%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 33 types of words that contain both letters and punctuation. Examples: -an, ke-, A.S., Nn., No., St., Tn., B.C., Ms., 'Ya, -agen, A.S, B-29, Didn't, Don't, Hitchhiker's, I., Jr., M.A., Mr., Ny., Pasca-, U.S., Under-Secretary, Z., Zettel’s, al-Jadaan, anti-, men-, pro-, sampai-sampai, wi-fi, “luar</li>
</ul>

<ul>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 15 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SYM</a>, <a>VERB</a>, <a>X</a></li>
<li>This corpus does not use the following tags: SCONJ, INTJ</li>
</ul>

<ul>
<li>This corpus contains 9 word types tagged as particles (PART): kah, kan, lah, me, nya, pe, per, pun, se</li>
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




<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>NOUN: orang, negara, anak, bertahun, batas, bagian, batu, bulan, kota, puing</li>
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
      <li>ADV: tidak, tak, belum, bukan, ketidak, setidaknya, Didn't, Don't</li>
    </ul>
  </li>
</ul>


<h3>Verbal Features</h3>







<h3>Pronouns, Determiners, Quantifiers</h3>


<ul>
  <li><a>PronType</a></li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>PART: kah, kan</li>
    </ul>
  </li>
</ul>








<h3>Other Features</h3>


<ul>
  <li><a>Foreign</a>
    <ul>
      <li>Yes
        <ul>
          <li>X: Angeles, Mundo, Nostrum, Píanó, Traum, ZEIT, andino, de, grâce, maiorum</li>
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
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (284)</li>
      <li>VERB--PRON (161)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (315)</li>
      <li>VERB--NOUN-ADP(_) (3)</li>
      <li>VERB--PRON (36)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--PRON (5)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 13 relation subtypes: <a>acl:relcl</a>, <a>cc:preconj</a>, <a>compound:a</a>, <a>compound:n</a>, <a>compound:plur</a>, <a>compound:v</a>, <a>csubj:pass</a>, <a>dep:prt</a>, <a>flat:name</a>, <a>nmod:poss</a>, <a>nsubj:pass</a>, <a>obl:poss</a>, <a>obl:tmod</a></li>
<li>The following 1 main types are not used alone, they are always subtyped: <a>acl</a></li>
<li>The following 4 relation types are not used in this corpus at all: <a>expl</a>, <a>list</a>, <a>orphan</a>, <a>reparandum</a></li>
</ul>
