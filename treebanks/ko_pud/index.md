---
layout: base
title:  'UD_Korean-PUD'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Korean PUD

Language: [Korean](/ko/index.html) (code: `ko`)<br/>
Family: Korean

This treebank has been part of Universal Dependencies since the UD v2.2 release.

The following people have contributed to making this treebank part of UD: Hans Uszkoreit, Vivien Macketanz, Aljoscha Burchardt, Kim Harris, Katrin Marheinecke, Slav Petrov, Tolga Kayadelen, Mohammed Attia, Ali Elkahky, Zhuoran Yu, Emily Pitler, Saran Lertpradit, Sookyoung Kwak, Yongseok Cho, Martin Popel, Daniel Zeman.

Repository: [UD_Korean-PUD](https://github.com/UniversalDependencies/UD_Korean-PUD)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udko_pud27)<br />
Download all treebanks: [UD 2.7](/#download)

License: CC BY-SA 3.0

Genre: news, wiki

Questions, comments?
General annotation questions (either Korean-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Korean-PUD/issues).
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

# Statistics of UD Korean PUD

## POS Tags

[ADJ](ko_pud-pos-ADJ.html) – [ADV](ko_pud-pos-ADV.html) – [AUX](ko_pud-pos-AUX.html) – [CCONJ](ko_pud-pos-CCONJ.html) – [DET](ko_pud-pos-DET.html) – [NOUN](ko_pud-pos-NOUN.html) – [NUM](ko_pud-pos-NUM.html) – [PART](ko_pud-pos-PART.html) – [PRON](ko_pud-pos-PRON.html) – [PROPN](ko_pud-pos-PROPN.html) – [PUNCT](ko_pud-pos-PUNCT.html) – [VERB](ko_pud-pos-VERB.html) – [X](ko_pud-pos-X.html)

## Features

[Case](ko_pud-feat-Case.html) – [Form](ko_pud-feat-Form.html) – [Mood](ko_pud-feat-Mood.html) – [Number](ko_pud-feat-Number.html) – [NumType](ko_pud-feat-NumType.html) – [Person](ko_pud-feat-Person.html) – [Polarity](ko_pud-feat-Polarity.html) – [Polite](ko_pud-feat-Polite.html) – [PronType](ko_pud-feat-PronType.html) – [Tense](ko_pud-feat-Tense.html) – [VerbForm](ko_pud-feat-VerbForm.html) – [Voice](ko_pud-feat-Voice.html)

## Relations

[acl:relcl](ko_pud-dep-acl-relcl.html) – [advcl](ko_pud-dep-advcl.html) – [advmod](ko_pud-dep-advmod.html) – [amod](ko_pud-dep-amod.html) – [appos](ko_pud-dep-appos.html) – [aux](ko_pud-dep-aux.html) – [cc](ko_pud-dep-cc.html) – [ccomp](ko_pud-dep-ccomp.html) – [compound](ko_pud-dep-compound.html) – [compound:lvc](ko_pud-dep-compound-lvc.html) – [conj](ko_pud-dep-conj.html) – [cop](ko_pud-dep-cop.html) – [csubj](ko_pud-dep-csubj.html) – [csubj:pass](ko_pud-dep-csubj-pass.html) – [dep](ko_pud-dep-dep.html) – [dep:prt](ko_pud-dep-dep-prt.html) – [det](ko_pud-dep-det.html) – [discourse](ko_pud-dep-discourse.html) – [fixed](ko_pud-dep-fixed.html) – [flat](ko_pud-dep-flat.html) – [flat:name](ko_pud-dep-flat-name.html) – [goeswith](ko_pud-dep-goeswith.html) – [iobj](ko_pud-dep-iobj.html) – [nmod:poss](ko_pud-dep-nmod-poss.html) – [nsubj](ko_pud-dep-nsubj.html) – [nsubj:pass](ko_pud-dep-nsubj-pass.html) – [nummod](ko_pud-dep-nummod.html) – [obj](ko_pud-dep-obj.html) – [obl](ko_pud-dep-obl.html) – [obl:tmod](ko_pud-dep-obl-tmod.html) – [orphan](ko_pud-dep-orphan.html) – [punct](ko_pud-dep-punct.html) – [root](ko_pud-dep-root.html) – [vocative](ko_pud-dep-vocative.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 1000 sentences and 16584 tokens.</li>
</ul>

<ul>
<li>This corpus contains 4238 tokens (26%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 13 types of words that contain both letters and punctuation. Examples: %를, %가, B.C., %에, %의, 's, '수, G.D.P., Thought', Z., Zettel’s, n't, 이다.</li>
</ul>

<ul>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 13 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>VERB</a>, <a>X</a></li>
<li>This corpus does not use the following tags: ADP, SCONJ, INTJ, SYM</li>
</ul>

<ul>
<li>This corpus contains 101 word types tagged as particles (PART): 가, 가르치기보다, 거둠으로써, 고, 과, 까지, 나뉘어졌는가를, 나는군요, 나왔나요, 내리겠다고, 높아진다고, 는, 다녔다고, 달라고, 대해서는, 도, 돌지만, 돕는다고, 되기를, 되기에, 된다고, 됨으로써, 됨은, 들, 떠나겠다고, 띤다고, 라고, 로, 를, 마다, 만, 만든다고, 만들었다고, 만들지는, 말고를, 말라고, 물었다고, 믿지는, 바라요, 밖에, 벌어졌다고, 보기로, 보냄으로써, 보다, 보였다고, 보지도, 뿐, 사라지지는, 세움으로써, 솟구침이, 쉰다고, 싸웠다고, 쓰기도, 쓰기로, 쓰라고, 아는지와, 않겠다고, 않기로, 않는다고, 않았어요, 알면서도, 애먹지도, 얻었다고, 없앤다고, 에, 에게, 에서, 열기로, 와, 요, 위해서는, 으로, 은, 을, 의, 이, 이라고, 일어나지는, 임하면서도, 입는데도, 있는지에, 있다고, 있음을, 좋겠어요, 좋아하지, 좋아했어요, 주기를, 주어서는, 즐겼다고, 찾아갔어요, 처럼, 친다고, 커졌다고, 통해서도, 틀렸다고, 한다고, 할지에, 했는지도, 했다고, 했을지도, 화도</li>
</ul>

<ul>
<li>This corpus contains 28 lemmas tagged as pronouns (PRON): _, 거기, 그, 그것, 그곳, 그녀, 그들, 나, 내, 누구, 당신, 무엇, 어디, 언제, 여기, 여러분, 우리, 이, 이것, 이것들, 이곳, 이곳들, 이들, 자기, 자신, 자신들, 저, 제</li>
</ul>

<ul>
<li>This corpus contains 3 lemmas tagged as determiners (DET): _, 있는가, 총</li>
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
<li>There are 2 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>ADJ: 있다, 있었다, 아니다, 있다고, 없었다, 없다, 같다, 않다, 상관, 아니었다</li>
    <li>AUX: 이다, 이었다, 이라, 였다, 라, 가, 인지, 인가, 일지, 였는지</li>
    <li>DET: 있는가, 아닌가, 어떠한가, 어떤가, 있겠는가, 있는가를</li>
    <li>PART: 있다고, 달라고, 된다고, 한다고, 말라고, 않는다고, 않았어요, 나뉘어졌는가를, 나는군요, 나왔나요</li>
    <li>VERB: 있다, 되었다, 한다, 했다, 않았다, 못했다, 받았다, 된다, 밝혔다, 일어났다</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Ger
  <ul>
    <li>ADJ: 그렇기, 높기, 그럼에, 아니기, 엄청나기, 없기, 없었기, 있기, 놀랍기는, 심각함은</li>
    <li>AUX: 이기, 였음, 였기, 이었기, 이었음</li>
    <li>PART: 있음을, 쓰기도, 않기로, 가르치기보다, 거둠으로써, 되기를, 되기에, 됨으로써, 됨은, 보기로</li>
    <li>VERB: 만들기, 있기, 있었기, 벗어나기, 하기, 가기, 가하기, 갖기, 거두기, 그리기</li>
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
      <li>NOUN: 사람들이, 사람들에게, 사람들의, 투자자들이, 사람들은, 원주민들이, 의원들에게, 강대국들은, 개입들, 건물들</li>
      <li>PRON: 그들은, 그들의, 그들이, 이들, 이들은, 이들의, 이들이, 자신들의, 그들과, 너희들</li>
      <li>PROPN: 로마인들은, 아메리카인들, 가나안인들의, 그리스인들은, 멕시코인들에게, 미국인들의, 세파르디인들을, 유대인들의, 유럽인들은, 유럽인들이</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>ADJ-Fin: 쌀쌀한지를</li>
      <li>ADJ-Ger: 있기를</li>
      <li>DET-Fin: 있는가를</li>
      <li>NOUN: 것을, 영향을, 모습을, 일을, 걸, 역할을, %를, 강을, 승리를, 시간을</li>
      <li>NUM: 하나를</li>
      <li>PART: 를, 을, 있음을, 나뉘어졌는가를, 되기를, 말고를, 주기를</li>
      <li>PART-Fin: 나뉘어졌는가를, 말고를</li>
      <li>PART-Ger: 있음을, 되기를, 주기를</li>
      <li>PRON: 이를, 그것을, 그를, 우리를, 그녀를, 그곳을, 나를, 이들을</li>
      <li>PROPN: 남극을, 모라비아를, 영국을, 지중해를, 테르모필레를, Medal를, 광저우를, 그리스를, 대서양을, 독일을</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Advb
    <ul>
      <li>ADJ-Ger: 그럼에, 아름다움에</li>
      <li>DET: 총으로</li>
      <li>NOUN: 때문에, 것으로, 월에, 년에, 사이에, 방식으로, 정도로, 지역에서, 사람들에게, 처음으로</li>
      <li>NUM: 50에, 만에, 백만에서, 하나에는, 하나와</li>
      <li>PART: 에, 에서, 와, 로, 과, 처럼, 보다, 않기로, 에게, 으로</li>
      <li>PART-Fin: 있는지에, 할지에</li>
      <li>PART-Ger: 않기로, 가르치기보다, 거둠으로써, 되기에, 됨으로써, 보기로, 보냄으로써, 세움으로써, 쓰기로, 열기로</li>
      <li>PRON: 그곳에서, 그녀에게, 여기에서, 이것으로, 이로, 그것에, 그로써, 그에게, 우리에게, 이와</li>
      <li>PROPN: 미국에, 영국에서, 글래스고에서, 스위스에서, 아프리카에서, 알래스카에, 알프스에, BBC에게, BBC에서, CNN에</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Comp
    <ul>
      <li>NOUN: 게, 대통령이, 도움이, 것이, 대상이, 도구가, 계획이, 곳은, 공간이, 공급원이</li>
      <li>PART: 이</li>
      <li>PRON: 누가</li>
      <li>PROPN: 라스티슬라프가, 총무가</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>NOUN: 지역의, 명의, 개의, 다수의, 사이의, 시대의, 최고의, 최초의, 국가의, 사람들의</li>
      <li>PART: 의</li>
      <li>PRON: 자신의, 그의, 그녀의, 그들의, 이들의, 내, 자신들의, 나의, 여러분의, 우리의</li>
      <li>PROPN: 중국의, 영국의, 마케도니아의, 유럽의, 태국의, 히치콕의, 더피의, 도스의, 러시아의, 로마의</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>ADJ-Fin: 있을지는</li>
      <li>ADJ-Ger: 놀랍기는, 심각함은</li>
      <li>NOUN: 것이, 것은, 정부는, 명이, 사람들이, 사람이, 경찰은, 이유는, 가능성이, 게</li>
      <li>NUM: 하나는, 1은</li>
      <li>PART: 는, 가, 은, 이, 됨은, 솟구침이</li>
      <li>PART-Ger: 됨은, 솟구침이</li>
      <li>PRON: 그는, 그녀는, 나는, 그것은, 그들은, 이는, 그녀가, 자신이, 그가, 이것은</li>
      <li>PROPN: 미시마는, 블런트는, 스탈린은, 심괄은, 윈스턴은, 프랑스는, 가이어는, 그리스는, 디즈니는, 라이트는</li>
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
      <li>ADV: 안, 못</li>
    </ul>
  </li>
</ul>


<h3>Verbal Features</h3>



<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>PART-Fin: 달라고, 말라고, 쓰라고</li>
      <li>VERB-Fin: 떨어뜨려라, 합시다</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADJ-Fin: 있다, 있었다, 아니다, 있다고, 없었다, 없다, 같다, 않다, 아니었다, 있습니다</li>
      <li>AUX-Fin: 이다, 이었다, 이라, 였다, 라, 이다.</li>
      <li>PART-Fin: 있다고, 된다고, 한다고, 않는다고, 내리겠다고, 높아진다고, 다녔다고, 돕는다고, 떠나겠다고, 띤다고</li>
      <li>VERB-Fin: 있다, 되었다, 한다, 했다, 않았다, 못했다, 받았다, 된다, 밝혔다, 일어났다</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>ADJ: 있을</li>
      <li>PART-Fin: 내리겠다고, 떠나겠다고, 않겠다고</li>
      <li>VERB: 될, 일어날, 나갈, 날, 내릴, 늦추어질, 다가올, 돌아올, 드러낼, 만들</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>ADJ: 있었다, 없었다, 아니었다, 없었던, 있던, 있었던, 있었으며, 갑갑했던, 같았다, 많았다</li>
      <li>ADJ-Fin: 있었다, 없었다, 아니었다, 같았다, 많았다, 분분했다, 비슷했다, 않았다, 없었다고, 있었다고</li>
      <li>ADJ-Ger: 있었기</li>
      <li>AUX: 이었다, 였다, 이었던, 였고, 였던, 였으며, 이었고, 이었는데, 이었으며, 였기</li>
      <li>AUX-Fin: 이었다, 였다, 였는지, 였어</li>
      <li>AUX-Ger: 였기, 이었기, 이었음</li>
      <li>PART: 않았어요, 나뉘어졌는가를, 나는군요, 나왔나요, 만들었다고, 물었다고, 벌어졌다고, 보였다고, 싸웠다고, 얻었다고</li>
      <li>PART-Fin: 않았어요, 나뉘어졌는가를, 나는군요, 나왔나요, 만들었다고, 물었다고, 벌어졌다고, 보였다고, 싸웠다고, 얻었다고</li>
      <li>VERB: 되었다, 했다, 된, 않았다, 못했다, 받았다, 한, 밝혔다, 있던, 않은</li>
      <li>VERB-Fin: 되었다, 했다, 않았다, 못했다, 받았다, 밝혔다, 일어났다, 냈다, 밝혀졌다, 보냈다</li>
      <li>VERB-Ger: 거뒀기, 있었기</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Cau
    <ul>
      <li>PART-Fin: 보였다고, 없앤다고</li>
      <li>VERB: 남겨, 남긴, 덧붙였다, 보였다, 세웠다, 태우고, 끝냈으며, 날리게, 낮추거나, 낮추는</li>
      <li>VERB-Fin: 덧붙였다, 보였다, 세웠다, 보인다, 세워졌다</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>PART-Fin: 나뉘어졌는가를</li>
      <li>VERB: 열린, 보인다, 낮아지게, 놓여, 되었고, 만들어졌다, 보였던, 걸러졌고, 걸린, 꾸며져</li>
      <li>VERB-Fin: 보인다, 만들어졌다, 담겼다, 던져졌다, 됐다, 바뀌었다, 실렸다, 쓰였다, 어려워진다, 여겨진다</li>
      <li>VERB-Ger: 되기</li>
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
      <li>AUX-Fin: 가, 인가, 일까</li>
      <li>DET-Fin: 있는가, 아닌가, 어떠한가, 어떤가, 있겠는가, 있는가를</li>
      <li>PART-Fin: 나뉘어졌는가를, 나왔나요</li>
      <li>VERB-Fin: 되었나</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: 1, 10, 3, 2, 4, 6, 20, 8, 5, 9</li>
    </ul>
  </li>
</ul>



<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>PRON: 나는, 내가, 우리는, 우리, 우리가, 우리를, 나도, 내, 우리에게, 저는</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>PRON: 여러분, 너희들, 당신이, 여러분의</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>PRON: 그는, 그의, 그녀는, 그들은, 그녀가, 그녀의, 그가, 그들의, 그들이, 그녀에게</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polite</a></li>
</ul>

<ul>
  <li>Form
    <ul>
      <li>ADJ-Fin: 같아요, 쌀쌀한지를, 있을지는</li>
      <li>ADJ-Ger: 그럼에, 놀랍기는, 심각함은, 아름다움에, 있기를</li>
      <li>ADV: 불과했어요</li>
      <li>AUX-Fin: 이세요</li>
      <li>DET: 있는가를, 총으로</li>
      <li>DET-Fin: 있는가를</li>
      <li>NOUN: 때문에, 것으로, 것을, 것이, 것은, 지역의, 명의, 영향을, 정부는, 개의</li>
      <li>NUM: 하나는, 하나와, 1은, 50에, 만에, 백만에서, 하나를, 하나에는</li>
      <li>PART: 의, 는, 에, 와, 가, 에서, 이, 은, 과, 를</li>
      <li>PART-Fin: 않았어요, 나뉘어졌는가를, 나는군요, 나왔나요, 말고를, 바라요, 아는지와, 있는지에, 좋겠어요, 좋아했어요</li>
      <li>PART-Ger: 있음을, 않기로, 가르치기보다, 거둠으로써, 되기를, 되기에, 됨으로써, 됨은, 보기로, 보냄으로써</li>
      <li>PRON: 그는, 자신의, 그의, 그녀는, 나는, 그것은, 그들은, 이는, 그녀가, 그녀의</li>
      <li>PROPN: 중국의, 영국의, 마케도니아의, 독일과, 미국에, 유럽의, 태국의, 히치콕의, 남극을, 미시마는</li>
      <li>VERB: 눈</li>
    </ul>
  </li>
</ul>



<h3>Other Features</h3>


<ul>
  <li><a>Form</a>
    <ul>
      <li>Adn
        <ul>
          <li>ADJ: 있는, 같은, 새로운, 큰, 많은, 이러한, 없는, 높은, 작은, 다른</li>
          <li>AUX: 인, 일, 이라는, 이란, 라는, 이었던, 이던, 였던, 이었을</li>
          <li>VERB: 대한, 있는, 위한, 라는, 될, 된, 볼, 할, 한, 주는</li>
        </ul>
      </li>
      <li>Aux
        <ul>
          <li>ADJ: 그렇지, 싶어, 같지, 기쁘게, 달갑지, 독실하지, 따스하게, 싶지, 있어야, 흔치</li>
          <li>AUX: 이지, 이어야, 이진</li>
          <li>NOUN: 결혼하고</li>
          <li>PART: 돌지만, 만들지는, 믿지는, 보지도, 사라지지는, 애먹지도, 일어나지는, 좋아하지</li>
          <li>VERB: 하지, 되어, 만들어, 하고, 갖고, 남아, 받고, 알려져, 기울이지, 나와야</li>
        </ul>
      </li>
      <li>Compl
        <ul>
          <li>ADJ: 아니라, 있게, 있도록, 있으며, 그렇다면, 다르게, 어떻게, 크게, 빠르게, 아니면</li>
          <li>AUX: 이며, 이고, 이지만, 인데, 인지, 고, 니, 라면, 여서, 였고</li>
          <li>PART: 대해서는, 알면서도, 위해서는, 임하면서도, 입는데도, 주어서는, 통해서도, 했을지도</li>
          <li>VERB: 대해, 위해, 통해, 따르면, 따라, 되면, 있으며, 불구하고, 보면, 않고</li>
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
<li>This corpus uses 16 lemmas as auxiliaries (<a>aux</a>). Examples: _, 결혼, 돌지, 만들지, 믿지, 보지, 사라지지, 생각하지, 쓰기, 애먹지, 의미하기, 일어나지, 존재하기, 좋아하지, 참여해야, 초래하기.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (24)</li>
      <li>VERB--NOUN-Nom (164)</li>
      <li>VERB--PRON (1)</li>
      <li>VERB--PRON-Nom (32)</li>
      <li>VERB-Fin--NOUN (17)</li>
      <li>VERB-Fin--NOUN-Nom (132)</li>
      <li>VERB-Fin--PRON (2)</li>
      <li>VERB-Fin--PRON-Nom (39)</li>
      <li>VERB-Ger--NOUN (1)</li>
      <li>VERB-Ger--NOUN-Nom (9)</li>
      <li>VERB-Ger--PRON-Nom (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (30)</li>
      <li>VERB--NOUN-Acc (333)</li>
      <li>VERB--PRON (1)</li>
      <li>VERB--PRON-Acc (10)</li>
      <li>VERB-Fin--NOUN (19)</li>
      <li>VERB-Fin--NOUN-Acc (108)</li>
      <li>VERB-Fin--PRON (1)</li>
      <li>VERB-Fin--PRON-Acc (2)</li>
      <li>VERB-Ger--NOUN (2)</li>
      <li>VERB-Ger--NOUN-Acc (20)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--NOUN (1)</li>
      <li>VERB--NOUN-Advb (2)</li>
      <li>VERB-Fin--NOUN-Advb (2)</li>
      <li>VERB-Fin--PRON-Advb (2)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 8 relation subtypes: <a>acl:relcl</a>, <a>compound:lvc</a>, <a>csubj:pass</a>, <a>dep:prt</a>, <a>flat:name</a>, <a>nmod:poss</a>, <a>nsubj:pass</a>, <a>obl:tmod</a></li>
<li>The following 2 main types are not used alone, they are always subtyped: <a>acl</a>, <a>nmod</a></li>
<li>The following 9 relation types are not used in this corpus at all: <a>xcomp</a>, <a>expl</a>, <a>dislocated</a>, <a>mark</a>, <a>clf</a>, <a>case</a>, <a>list</a>, <a>parataxis</a>, <a>reparandum</a></li>
</ul>
