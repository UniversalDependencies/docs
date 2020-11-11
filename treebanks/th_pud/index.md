---
layout: base
title:  'UD_Thai-PUD'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Thai PUD

Language: [Thai](/th/index.html) (code: `th`)<br/>
Family: Tai-Kadai

This treebank has been part of Universal Dependencies since the UD v2.2 release.

The following people have contributed to making this treebank part of UD: Hans Uszkoreit, Vivien Macketanz, Aljoscha Burchardt, Kim Harris, Katrin Marheinecke, Slav Petrov, Tolga Kayadelen, Mohammed Attia, Ali Elkahky, Zhuoran Yu, Emily Pitler, Saran Lertpradit, Rattima Nitisaroj, Yanin Sawanakunanon, Martin Popel, Daniel Zeman.

Repository: [UD_Thai-PUD](https://github.com/UniversalDependencies/UD_Thai-PUD)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udth_pud27)<br />
Download all treebanks: [UD 2.7](/#download)

License: CC BY-SA 3.0

Genre: news, wiki

Questions, comments?
General annotation questions (either Thai-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Thai-PUD/issues).
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

# Statistics of UD Thai PUD

## POS Tags

[ADJ](th_pud-pos-ADJ.html) – [ADP](th_pud-pos-ADP.html) – [ADV](th_pud-pos-ADV.html) – [AUX](th_pud-pos-AUX.html) – [CCONJ](th_pud-pos-CCONJ.html) – [DET](th_pud-pos-DET.html) – [NOUN](th_pud-pos-NOUN.html) – [NUM](th_pud-pos-NUM.html) – [PART](th_pud-pos-PART.html) – [PRON](th_pud-pos-PRON.html) – [PROPN](th_pud-pos-PROPN.html) – [PUNCT](th_pud-pos-PUNCT.html) – [SCONJ](th_pud-pos-SCONJ.html) – [SYM](th_pud-pos-SYM.html) – [VERB](th_pud-pos-VERB.html)

## Features

[Aspect](th_pud-feat-Aspect.html) – [Mood](th_pud-feat-Mood.html) – [Person](th_pud-feat-Person.html) – [Polarity](th_pud-feat-Polarity.html) – [PronType](th_pud-feat-PronType.html) – [Voice](th_pud-feat-Voice.html)

## Relations

[acl](th_pud-dep-acl.html) – [acl:relcl](th_pud-dep-acl-relcl.html) – [advcl](th_pud-dep-advcl.html) – [advmod](th_pud-dep-advmod.html) – [amod](th_pud-dep-amod.html) – [appos](th_pud-dep-appos.html) – [aux](th_pud-dep-aux.html) – [aux:pass](th_pud-dep-aux-pass.html) – [case](th_pud-dep-case.html) – [cc](th_pud-dep-cc.html) – [cc:preconj](th_pud-dep-cc-preconj.html) – [ccomp](th_pud-dep-ccomp.html) – [clf](th_pud-dep-clf.html) – [compound](th_pud-dep-compound.html) – [compound:prt](th_pud-dep-compound-prt.html) – [conj](th_pud-dep-conj.html) – [cop](th_pud-dep-cop.html) – [csubj](th_pud-dep-csubj.html) – [dep](th_pud-dep-dep.html) – [det](th_pud-dep-det.html) – [det:predet](th_pud-dep-det-predet.html) – [discourse](th_pud-dep-discourse.html) – [dislocated](th_pud-dep-dislocated.html) – [fixed](th_pud-dep-fixed.html) – [flat:name](th_pud-dep-flat-name.html) – [goeswith](th_pud-dep-goeswith.html) – [iobj](th_pud-dep-iobj.html) – [mark](th_pud-dep-mark.html) – [nmod](th_pud-dep-nmod.html) – [nmod:poss](th_pud-dep-nmod-poss.html) – [nsubj](th_pud-dep-nsubj.html) – [nsubj:pass](th_pud-dep-nsubj-pass.html) – [nummod](th_pud-dep-nummod.html) – [obj](th_pud-dep-obj.html) – [obl](th_pud-dep-obl.html) – [obl:poss](th_pud-dep-obl-poss.html) – [obl:tmod](th_pud-dep-obl-tmod.html) – [parataxis](th_pud-dep-parataxis.html) – [punct](th_pud-dep-punct.html) – [reparandum](th_pud-dep-reparandum.html) – [root](th_pud-dep-root.html) – [vocative](th_pud-dep-vocative.html) – [xcomp](th_pud-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 1000 sentences and 22322 tokens.</li>
</ul>

<ul>
<li>This corpus contains 19166 tokens (86%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 11 types of words that contain both letters and punctuation. Examples: น., โยเลียต-กูรี, 'Ya, กอร์ดอน-เลวิตต์, การ“, ค.ศ., ดร., ศศ.ม., อินโด-ออสเตรเลียน, แซงต์-โกดองส์, โอต์-การอนน์</li>
</ul>

<ul>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 15 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a></li>
<li>This corpus does not use the following tags: INTJ, X</li>
</ul>

<ul>
<li>This corpus contains 32 word types tagged as particles (PART): การได้, การไม่, กำลัง, ขึ้น, ครับ, ความไม่, ค่อนข้าง, นะ, มา, มิ, ยัง, ยังคง, ลง, ล่ะ, หรอก, หรือ, หรือเปล่า, หรือไม่, อยู่, อย่าง, อย่างไม่, ออก, เข้า, เคย, เสีย, เหรอ, แลัว, แล้ว, ได้, ไป, ไม่, ไหม</li>
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



<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>PART: ไม่, ความไม่, มิ, อย่างไม่, การไม่</li>
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
      <li>PART: ได้, แล้ว, มา, เคย, การได้, อยู่, แลัว</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prog
    <ul>
      <li>PART: อยู่, ยัง, กำลัง, ยังคง, ค่อนข้าง</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>VERB: ห้าม</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>VERB: ถูก, ได้รับ, ต้อง, การถูก</li>
    </ul>
  </li>
</ul>


<h3>Pronouns, Determiners, Quantifiers</h3>


<ul>
  <li><a>PronType</a></li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>ADV: ทำไม, อย่างไร</li>
      <li>DET: อะไร</li>
      <li>PART: หรือเปล่า, หรือไม่, เหรอ, หรือ, ไหม</li>
      <li>PRON: ใคร, อะไร, ไหน</li>
    </ul>
  </li>
</ul>




<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>PRON: เรา, ฉัน, ผม, ข้าพเจ้า, มี</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>PRON: คุณ, 'Ya, You, นาย, ยู</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>PRON: เขา, เธอ, มัน, พระองค์, ตัวเอง, ตนเอง, ต่าง, พ​ร​ะ​อ​ง​ค​์​ภ​า​ย​ห​ล​ั​ง​ก​า​ร​ส​ว​ร​ร​ค​ต​โ​ด​ย​ใ​ช​้​ช​ื​่​อ​ย​ุ​ค​ท​ี​่​พ​ร​ะ​อ​ง​ค​์</li>
    </ul>
  </li>
</ul>




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
      <li>VERB--NOUN (538)</li>
      <li>VERB--PRON (222)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (1243)</li>
      <li>VERB--NOUN-ADP(_) (2)</li>
      <li>VERB--PRON (74)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--NOUN (2)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 10 relation subtypes: <a>acl:relcl</a>, <a>aux:pass</a>, <a>cc:preconj</a>, <a>compound:prt</a>, <a>det:predet</a>, <a>flat:name</a>, <a>nmod:poss</a>, <a>nsubj:pass</a>, <a>obl:poss</a>, <a>obl:tmod</a></li>
<li>The following 1 main types are not used alone, they are always subtyped: <a>flat</a></li>
<li>The following 3 relation types are not used in this corpus at all: <a>expl</a>, <a>list</a>, <a>orphan</a></li>
</ul>
