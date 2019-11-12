---
layout: base
title:  'UD_Chinese-PUD'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Chinese PUD

Language: [Chinese](/zh/index.html) (code: `zh`)<br/>
Family: Sino-Tibetan

This treebank has been part of Universal Dependencies since the UD v2.1 release.

The following people have contributed to making this treebank part of UD: Hans Uszkoreit, Vivien Macketanz, Aljoscha Burchardt, Kim Harris, Katrin Marheinecke, Slav Petrov, Tolga Kayadelen, Mohammed Attia, Ali Elkahky, Zhuoran Yu, Emily Pitler, Saran Lertpradit, Josie Li, Cheuk Ying Li, Martin Popel, Daniel Zeman, Herman Leung.

Repository: [UD_Chinese-PUD](https://github.com/UniversalDependencies/UD_Chinese-PUD)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udzh_pud25)<br />
Download all treebanks: [UD 2.5](/#download)

License: CC BY-SA 3.0

Genre: news, wiki

Questions, comments?
General annotation questions (either Chinese-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Chinese-PUD/issues).
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

# Statistics of UD Chinese PUD

## POS Tags

[ADJ](zh_pud-pos-ADJ.html) – [ADP](zh_pud-pos-ADP.html) – [ADV](zh_pud-pos-ADV.html) – [AUX](zh_pud-pos-AUX.html) – [CCONJ](zh_pud-pos-CCONJ.html) – [DET](zh_pud-pos-DET.html) – [NOUN](zh_pud-pos-NOUN.html) – [NUM](zh_pud-pos-NUM.html) – [PART](zh_pud-pos-PART.html) – [PRON](zh_pud-pos-PRON.html) – [PROPN](zh_pud-pos-PROPN.html) – [PUNCT](zh_pud-pos-PUNCT.html) – [SCONJ](zh_pud-pos-SCONJ.html) – [VERB](zh_pud-pos-VERB.html) – [X](zh_pud-pos-X.html)

## Features

[Aspect](zh_pud-feat-Aspect.html) – [Case](zh_pud-feat-Case.html) – [Foreign](zh_pud-feat-Foreign.html) – [Number](zh_pud-feat-Number.html) – [NumType](zh_pud-feat-NumType.html) – [Person](zh_pud-feat-Person.html) – [Polarity](zh_pud-feat-Polarity.html) – [Voice](zh_pud-feat-Voice.html)

## Relations

[acl](zh_pud-dep-acl.html) – [acl:relcl](zh_pud-dep-acl-relcl.html) – [advcl](zh_pud-dep-advcl.html) – [advmod](zh_pud-dep-advmod.html) – [amod](zh_pud-dep-amod.html) – [appos](zh_pud-dep-appos.html) – [aux](zh_pud-dep-aux.html) – [aux:pass](zh_pud-dep-aux-pass.html) – [case](zh_pud-dep-case.html) – [case:loc](zh_pud-dep-case-loc.html) – [cc](zh_pud-dep-cc.html) – [ccomp](zh_pud-dep-ccomp.html) – [clf](zh_pud-dep-clf.html) – [compound](zh_pud-dep-compound.html) – [conj](zh_pud-dep-conj.html) – [cop](zh_pud-dep-cop.html) – [csubj](zh_pud-dep-csubj.html) – [dep](zh_pud-dep-dep.html) – [det](zh_pud-dep-det.html) – [discourse](zh_pud-dep-discourse.html) – [discourse:sp](zh_pud-dep-discourse-sp.html) – [dislocated](zh_pud-dep-dislocated.html) – [fixed](zh_pud-dep-fixed.html) – [flat](zh_pud-dep-flat.html) – [flat:name](zh_pud-dep-flat-name.html) – [iobj](zh_pud-dep-iobj.html) – [mark](zh_pud-dep-mark.html) – [mark:adv](zh_pud-dep-mark-adv.html) – [mark:prt](zh_pud-dep-mark-prt.html) – [mark:relcl](zh_pud-dep-mark-relcl.html) – [nmod](zh_pud-dep-nmod.html) – [nsubj](zh_pud-dep-nsubj.html) – [nsubj:pass](zh_pud-dep-nsubj-pass.html) – [nummod](zh_pud-dep-nummod.html) – [obj](zh_pud-dep-obj.html) – [obl](zh_pud-dep-obl.html) – [obl:agent](zh_pud-dep-obl-agent.html) – [obl:patient](zh_pud-dep-obl-patient.html) – [obl:tmod](zh_pud-dep-obl-tmod.html) – [parataxis](zh_pud-dep-parataxis.html) – [punct](zh_pud-dep-punct.html) – [root](zh_pud-dep-root.html) – [vocative](zh_pud-dep-vocative.html) – [xcomp](zh_pud-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 1000 sentences and 21415 tokens.</li>
</ul>

<ul>
<li>This corpus contains 20322 tokens (95%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 10 types of words that contain both letters and punctuation. Examples: B.C., G.D.P, Jr., King,, St., Traum，, Wi-Fi, Z., Zettel's, al-Jadaan</li>
</ul>

<ul>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 15 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>VERB</a>, <a>X</a></li>
<li>This corpus does not use the following tags: INTJ, SYM</li>
</ul>

<ul>
<li>This corpus contains 29 word types tagged as particles (PART): 之, 了, 人, 區, 呢, 嗎, 地, 家, 得, 河, 法, 的, 瞭, 緣, 罪, 者, 肺, 舟, 著, 處, 號, 街, 賽, 過, 配, 鎊, 體, 點, 黨</li>
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
      <li>NOUN: 人們</li>
      <li>PRON: 他們, 我們, 它們, 你們, 她們, 牠們</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>PART: 的, 之</li>
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
      <li>ADV: 不, 未, 勿</li>
    </ul>
  </li>
</ul>


<h3>Verbal Features</h3>


<ul>
  <li><a>Aspect</a></li>
</ul>

<ul>
  <li>Perf
    <ul>
      <li>PART: 了, 過, 瞭</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prog
    <ul>
      <li>PART: 著</li>
    </ul>
  </li>
</ul>



<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Cau
    <ul>
      <li>ADP: 把, 將</li>
      <li>AUX: 將, 把</li>
      <li>VERB: 讓, 使, 令, 導致, 以, 以至, 使得, 任命, 帶領, 敦促</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>ADP: 被</li>
      <li>AUX: 被</li>
    </ul>
  </li>
</ul>


<h3>Pronouns, Determiners, Quantifiers</h3>



<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: 一, 兩, 很多, 三, 許多, 六, 多, 20, 10, 十</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>ADJ: 第一, 第二, 第三, 第31, 第45, 第96, 第四</li>
    </ul>
  </li>
</ul>



<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>PRON: 我, 我們</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>PRON: 你, 您, 你們</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>PRON: 他, 她, 其, 他們, 它, 它們, 她們, 牠們</li>
    </ul>
  </li>
</ul>




<h3>Other Features</h3>


<ul>
  <li><a>Foreign</a>
    <ul>
      <li>Yes
        <ul>
          <li>X: Anaya, Film, de, the, Amin, Antilles, Atkinson, Avery, Aviva, Bass</li>
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
      <li>VERB--NOUN (822)</li>
      <li>VERB--PRON (336)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (1126)</li>
      <li>VERB--PRON (48)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--NOUN (9)</li>
      <li>VERB--PRON (1)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 12 relation subtypes: <a>acl:relcl</a>, <a>aux:pass</a>, <a>case:loc</a>, <a>discourse:sp</a>, <a>flat:name</a>, <a>mark:adv</a>, <a>mark:prt</a>, <a>mark:relcl</a>, <a>nsubj:pass</a>, <a>obl:agent</a>, <a>obl:patient</a>, <a>obl:tmod</a></li>
<li>The following 5 relation types are not used in this corpus at all: <a>expl</a>, <a>list</a>, <a>orphan</a>, <a>goeswith</a>, <a>reparandum</a></li>
</ul>
