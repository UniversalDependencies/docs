---
layout: base
title:  'UD_Russian-PUD'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Russian PUD

Language: [Russian](/ru/index.html) (code: `ru`)<br/>
Family: Indo-European, Slavic

This treebank has been part of Universal Dependencies since the UD v2.1 release.

The following people have contributed to making this treebank part of UD: Hans Uszkoreit, Vivien Macketanz, Aljoscha Burchardt, Kim Harris, Katrin Marheinecke, Slav Petrov, Tolga Kayadelen, Mohammed Attia, Ali Elkahky, Zhuoran Yu, Emily Pitler, Saran Lertpradit, Tatiana Lando, Olga Loginova, Martin Popel, Daniel Zeman, Kira Droganova.

Repository: [UD_Russian-PUD](https://github.com/UniversalDependencies/UD_Russian-PUD)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udru_pud27)<br />
Download all treebanks: [UD 2.7](/#download)

License: CC BY-SA 3.0

Genre: news, wiki

Questions, comments?
General annotation questions (either Russian-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Russian-PUD/issues).
If you want to collaborate, please contact [droganova&nbsp;(æt)&nbsp;ufal&nbsp;•&nbsp;mff&nbsp;•&nbsp;cuni&nbsp;•&nbsp;cz].
Development of the treebank happens directly in the UD repository, so you may submit bug fixes as pull requests against the dev branch.

| Annotation | Source |
|------------|--------|
| Lemmas | annotated manually |
| UPOS | annotated manually, natively in UD style |
| XPOS | not available |
| Features | annotated manually, natively in UD style |
| Relations | annotated manually, natively in UD style |

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

# Statistics of UD Russian PUD

## POS Tags

[ADJ](ru_pud-pos-ADJ.html) – [ADP](ru_pud-pos-ADP.html) – [ADV](ru_pud-pos-ADV.html) – [AUX](ru_pud-pos-AUX.html) – [CCONJ](ru_pud-pos-CCONJ.html) – [DET](ru_pud-pos-DET.html) – [INTJ](ru_pud-pos-INTJ.html) – [NOUN](ru_pud-pos-NOUN.html) – [NUM](ru_pud-pos-NUM.html) – [PART](ru_pud-pos-PART.html) – [PRON](ru_pud-pos-PRON.html) – [PROPN](ru_pud-pos-PROPN.html) – [PUNCT](ru_pud-pos-PUNCT.html) – [SCONJ](ru_pud-pos-SCONJ.html) – [SYM](ru_pud-pos-SYM.html) – [VERB](ru_pud-pos-VERB.html) – [X](ru_pud-pos-X.html)

## Features

[Abbr](ru_pud-feat-Abbr.html) – [Animacy](ru_pud-feat-Animacy.html) – [Aspect](ru_pud-feat-Aspect.html) – [Case](ru_pud-feat-Case.html) – [Degree](ru_pud-feat-Degree.html) – [Foreign](ru_pud-feat-Foreign.html) – [Gender](ru_pud-feat-Gender.html) – [Mood](ru_pud-feat-Mood.html) – [Number](ru_pud-feat-Number.html) – [Person](ru_pud-feat-Person.html) – [Polarity](ru_pud-feat-Polarity.html) – [Tense](ru_pud-feat-Tense.html) – [Variant](ru_pud-feat-Variant.html) – [VerbForm](ru_pud-feat-VerbForm.html) – [Voice](ru_pud-feat-Voice.html)

## Relations

[acl](ru_pud-dep-acl.html) – [acl:relcl](ru_pud-dep-acl-relcl.html) – [advcl](ru_pud-dep-advcl.html) – [advmod](ru_pud-dep-advmod.html) – [amod](ru_pud-dep-amod.html) – [appos](ru_pud-dep-appos.html) – [aux](ru_pud-dep-aux.html) – [aux:pass](ru_pud-dep-aux-pass.html) – [case](ru_pud-dep-case.html) – [cc](ru_pud-dep-cc.html) – [ccomp](ru_pud-dep-ccomp.html) – [compound](ru_pud-dep-compound.html) – [conj](ru_pud-dep-conj.html) – [cop](ru_pud-dep-cop.html) – [csubj](ru_pud-dep-csubj.html) – [det](ru_pud-dep-det.html) – [discourse](ru_pud-dep-discourse.html) – [expl](ru_pud-dep-expl.html) – [fixed](ru_pud-dep-fixed.html) – [flat](ru_pud-dep-flat.html) – [flat:foreign](ru_pud-dep-flat-foreign.html) – [flat:name](ru_pud-dep-flat-name.html) – [iobj](ru_pud-dep-iobj.html) – [mark](ru_pud-dep-mark.html) – [nmod](ru_pud-dep-nmod.html) – [nsubj](ru_pud-dep-nsubj.html) – [nsubj:pass](ru_pud-dep-nsubj-pass.html) – [nummod](ru_pud-dep-nummod.html) – [nummod:entity](ru_pud-dep-nummod-entity.html) – [nummod:gov](ru_pud-dep-nummod-gov.html) – [obj](ru_pud-dep-obj.html) – [obl](ru_pud-dep-obl.html) – [obl:agent](ru_pud-dep-obl-agent.html) – [orphan](ru_pud-dep-orphan.html) – [parataxis](ru_pud-dep-parataxis.html) – [punct](ru_pud-dep-punct.html) – [root](ru_pud-dep-root.html) – [vocative](ru_pud-dep-vocative.html) – [xcomp](ru_pud-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 1000 sentences and 19355 tokens.</li>
</ul>

<ul>
<li>This corpus contains 2939 tokens (15%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus contains 2 types of words with spaces. Examples: 100 000, 600 000</li>
</ul>

<ul>
<li>This corpus contains 121 types of words that contain both letters and punctuation. Examples: н., э., из-за, г., гг., что-то, 1960-х, 1970-х, е., по-другому, т., 1980-х, 1990-х, Wi-Fi, Жолио-Кюри, Юго-Восточной, г-жа, г-жи, какое-либо, кто-то, премьер-министр, сколько-нибудь, 10-недельный, 1350-е, 16-го, 1950-е, 1960-е, 2000-х, 28-летняя, 3-го, 31-го, 4-м, 45-го, 53-летнюю, 66-процентное, 8-м, 96-м, B-29, Didn't, E., Zettel’s, А​з​и​а​т​с​к​о​-​Т​и​х​о​о​к​е​а​н​с​к​о​м, Беверли-Хиллз, Богдо-гэгэн, Богдо-гэгэна, Богдо-гэгэне, Буэнос-Айреса, Вест-Индию, Во-первых, Восточно-Африканский</li>
</ul>

<ul>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 17 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a>, <a>X</a></li>
</ul>

<ul>
<li>This corpus contains 17 word types tagged as particles (PART): Эль, ведь, вот, даже, де, же, и, именно, ли, лишь, не, ни, просто, тоже, только, хоть, это</li>
</ul>

<ul>
<li>This corpus contains 28 lemmas tagged as pronouns (PRON): все, вы, его, ее, который, кто, кто-то, мы, нечто, никто, ничто, он, она, они, оно, прочее, себя, т., такое, то, тот, ты, чей, чем, что, что-то, это, я</li>
</ul>

<ul>
<li>This corpus contains 29 lemmas tagged as determiners (DET): весь, все, всего, всякий, его, ее, их, каждый, каков, какой, какой-либо, любой, мой, н., наш, некоторый, никакой, один, он, они, свой, сей, такой, то, том, тот, чей, это, этот</li>
</ul>

<ul>
<li>Out of the above, 9 lemmas occurred sometimes as PRON and sometimes as DET: все, его, ее, он, они, то, тот, чей, это</li>
</ul>

<ul>
<li>This corpus contains 2 lemmas tagged as auxiliaries (AUX): бы, быть</li>
</ul>

<ul>
</ul>

<ul>
<li>There are 4 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Conv
  <ul>
    <li>AUX: будучи</li>
    <li>VERB: используя, начиная, играя, говоря, забив, изменив, построив, Выражаясь, Достигнув, Закрепившись</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: был, было, были, была, будет, есть, будут, буду, будь</li>
    <li>VERB: является, может, сказал, говорит, стало, могут, заявил, находится, стал, имеет</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: быть</li>
    <li>VERB: сделать, получить, привести, вернуться, найти, стать, остановить, покинуть, создать, взять</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>VERB: использованы, объявлен, потраченное, включены, выращенных, действующим, закрыт, написано, освобожден, оставшихся</li>
  </ul>
  </li>
</ul>

<h3>Nominal Features</h3>


<ul>
  <li><a>Gender</a></li>
</ul>

<ul>
  <li>Fem
    <ul>
      <li>ADJ: первой, Северной, крайней, большая, другой, южной, новой, южная, американской, большой</li>
      <li>AUX-Fin: была</li>
      <li>DET: своей, н., этой, свою, эта, эту, всей, нашей, всю, каждой</li>
      <li>NOUN: войны, компании, часть, страны, жизни, истории, мере, части, э., партии</li>
      <li>NUM: две, одной, одну, обе, одна</li>
      <li>PRON: она, которая, ее, которой, ей, которую, нее, ней, ею, неё</li>
      <li>PROPN: Великобритании, Америки, Италии, Австралии, Европы, Клинтон, Америке, Англии, Германии, Македонии</li>
      <li>VERB-Fin: сказала, начала, привела, стала, могла, началась, показала, сыграла, вернулась, включала</li>
      <li>VERB-Part: связана, Сведенная, Сформированная, введена, включавшую, воображаемая, выбрана, вынуждена, выражаемую, вырезанная</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: новый, первого, последний, самым, большой, британский, бывший, высокий, главным, единственный</li>
      <li>AUX-Fin: был</li>
      <li>DET: этот, этого, том, этом, каждый, тот, своего, свой, таким, всему</li>
      <li>NOUN: году, года, лет, людей, города, результате, века, человек, год, люди</li>
      <li>NUM: один, два, одного, обоих, одним, оба, одном, одному, двух, полтора</li>
      <li>PRON: он, его, ему, него, котором, который, нем, ним, им, которого</li>
      <li>PROPN: США, Китай, Онтарио, Ахеменидов, Даневирке, Китая, Трампа, Валентино, Гонконг, Джон</li>
      <li>VERB-Fin: сказал, заявил, стал, принял, начал, мог, получил, жил, оставался, вернулся</li>
      <li>VERB-Part: объявлен, действующим, закрыт, освобожден, принят, провозглашен, разрушен, сделан, Вышедший, Обладающий</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neut
    <ul>
      <li>ADJ: нужно, самое, самым, большое, возможно, должно, необходимо, самом, известно, настоящее</li>
      <li>AUX-Fin: было</li>
      <li>DET: это, то, наше, свое, своего, своем, тем, этого, всего, всему</li>
      <li>NOUN: время, течение, качестве, влияние, основном, море, внимание, место, начале, имя</li>
      <li>NUM: Одним, одно, одного</li>
      <li>PRON: это, того, то, том, которое, тем, этого, все, этом, всего</li>
      <li>PROPN: ЗППНС, Средиземноморью, Загорья, Закавказье, МГБ, Монте-Карло, НАТО, По, СФНО, Солнца</li>
      <li>VERB-Fin: стало, привело, позволило, удалось, началось, получило, произошло, имело, использовалось, показало</li>
      <li>VERB-Part: потраченное, написано, позволено, предъявлено, сделано, Ухудшающееся, включающее, возглавляемое, восстановлено, вызвано</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Animacy</a></li>
</ul>

<ul>
  <li>Anim
    <ul>
      <li>ADJ: артиллеристского, глючного, дерганого, других, корсиканского, многих, молодого, немецких, прогрессивных, судетских</li>
      <li>DET: своих, своего</li>
      <li>NOUN: людей, человек, люди, детей, жителей, императора, представителей, президента, режиссера, агентов</li>
      <li>NUM: одного, двух, нескольких</li>
      <li>PRON: все, всех</li>
      <li>PROPN: Клинтон, Ахеменидов, Трамп, Трампа, Блант, Валентино, Джон, Джордж, Жасмин, Кеша</li>
      <li>VERB-Part: имеющих, нападающих, населяющих, настроенных, присутствующих, ставшего, уткнувшихся</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Inan
    <ul>
      <li>ADJ: последние, новые, собственные, большой, данный, другие, низкий, новый, театральные, третий</li>
      <li>DET: свои, этот, свой, эти, все, тот, какое-либо, весь, каждый, любой</li>
      <li>NOUN: году, года, время, лет, войны, города, компании, результате, течение, века</li>
      <li>NUM: несколько, два, две, много, три, четыре, немного</li>
      <li>PRON: то, это, все, которые, который</li>
      <li>PROPN: США, Великобритании, Америки, Италии, Китай, Австралии, Европы, Онтарио, Америке, Англии</li>
      <li>VERB-Part: вдохновленные, вызывающий, используемые, описывающие, отражающие, позволившие, поступавшие, предшествующие, приземляющийся, присланные</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: другие, других, многие, новые, новых, последние, должны, последних, гражданских, другими</li>
      <li>AUX-Fin: были, будут, есть</li>
      <li>DET: такие, свои, некоторые, эти, всех, своих, таких, этих, все, тех</li>
      <li>NOUN: лет, людей, люди, долларов, евро, фунтов, человек, гг., детей, жителей</li>
      <li>PRON: они, которые, мы, них, которых, вы, их, нас, ними, нам</li>
      <li>PROPN: США, Ахеменидов, Альпы, B-29, Альпах, Анд, Андам, Анды, Афинах, Афины</li>
      <li>VERB-Fin: могут, получили, стали, являются, можем, включают, имели, имеют, могли, находятся</li>
      <li>VERB-Part: использованы, включены, выращенных, оставшихся, построены, приведены, сделанных, Говорящие, Живущие, Загрязняющие</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: первой, самым, Северной, большой, другой, крайней, большая, южной, новой, новый</li>
      <li>AUX-Fin: был, было, была, будет, есть, буду, будь</li>
      <li>DET: этот, своей, н., это, этой, этого, свою, то, своего, том</li>
      <li>NOUN: году, года, время, войны, результате, компании, течение, часть, века, города</li>
      <li>NUM: один, одного, одной, одним, одну, одна, одном, одному, одно</li>
      <li>PRON: он, это, она, я, который, того, его, которая, то, том</li>
      <li>PROPN: Великобритании, Америки, Италии, Китай, Клинтон, Австралии, Европы, Онтарио, Америке, Англии</li>
      <li>VERB-Fin: является, может, сказал, говорит, стало, заявил, находится, стал, имеет, сказала</li>
      <li>VERB-Part: объявлен, потраченное, действующим, закрыт, написано, освобожден, позволено, предъявлено, принят, провозглашен</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>ADJ: последние, большую, значительную, настоящее, новые, собственные, Национальное, Северное, большой, дальнейшее</li>
      <li>DET: свои, свою, то, этот, это, эту, свой, эти, все, всю</li>
      <li>NOUN: время, течение, день, место, период, влияние, внимание, раз, людей, решение</li>
      <li>NUM: несколько, две, десять, шесть, два, много, три, четыре, восемь, мало</li>
      <li>PRON: себя, его, ее, что, это, что-то, то, их, которые, которую</li>
      <li>PROPN: Антарктиду, Германию, Герцля, Европу, Киплинга, Моравию, Ричарда, Ford, Абакумова, Австралию</li>
      <li>VERB-Part: потраченное, вдохновленные, включавшую, выражаемую, имеющих, имеющую, используемые, любящую, называемую, найденное</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>ADJ: крайней, политическим, самой, новому, электронной, 4-м, 8-м, Голландским, Католическому, Олимпийским</li>
      <li>DET: всему, этой, своей, своим, этому, Никаким, всей, нашей, своему, таким</li>
      <li>NOUN: мере, году, данным, правительству, миру, недвижимости, поводу, причине, росту, сравнению</li>
      <li>NUM: двум, нескольким, одному</li>
      <li>PRON: мне, ему, ей, нам, себе, им, Вам, которому, этому, eму</li>
      <li>PROPN: Мартину, Средиземноморью, Альваресу, Америке, Андам, Библии, Боемер, Брекзиту, Британии, Георгу</li>
      <li>VERB-Part: возобновляемым, извивающейся, имеющимся, называемым, открытому, развивающемуся, следящим, собравшейся, сформированным, успокоенным</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>ADJ: новых, других, первой, другой, гражданских, нового, первого, последних, самых, 1960-х</li>
      <li>DET: н., этого, этих, таких, всех, своего, своей, тех, этой, всего</li>
      <li>NOUN: года, лет, войны, века, города, людей, компании, э., долларов, жизни</li>
      <li>NUM: двух, десяти, одного, нескольких, шести, восьми, двадцати, двоих, одной, пятидесяти</li>
      <li>PRON: того, них, чего, этого, которых, всего, него, кого, которой, нас</li>
      <li>PROPN: США, Америки, Европы, Австралии, Англии, Ахеменидов, Великобритании, Китая, Македонии, Онтарио</li>
      <li>VERB-Part: выращенных, оставшихся, сделанных, боящихся, включавших, возникающих, воюющих, вступивших, вызывающего, выкуренных</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ins
    <ul>
      <li>ADJ: самым, главным, другими, главной, живыми, последним, американской, большим, большой, важным</li>
      <li>DET: своей, таким, тем, своими, нашей, своим, Какими, Моей, каждой, каким</li>
      <li>NOUN: образом, летом, помощью, президентом, судом, целью, источником, компанией, контролем, людьми</li>
      <li>NUM: двумя, одним, одной, несколькими, пятью, тремя</li>
      <li>PRON: собой, тем, ними, им, которыми, ним, этим, которым, ею, ими</li>
      <li>PROPN: Азией, Албанией, Аткинсоном, Ауном, Аустерлицем, Брантом, Брестедом, Британией, Валентино, Ваттом</li>
      <li>VERB-Part: действующим, бегущим, верующим, вовлеченным, выжившим, газированной, действующей, доминирующей, живущим, занимающимися</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Loc
    <ul>
      <li>ADJ: самом, Северной, британской, прошлом, следующем, Кельтском, большой, военных, других, европейских</li>
      <li>DET: своей, том, своем, этой, этом, своих, всех, некоторой, некоторых, таком</li>
      <li>NOUN: году, результате, качестве, основном, начале, конце, мире, веке, июле, месте</li>
      <li>NUM: двух, нескольких, обоих, одной, одном, семи, трех</li>
      <li>PRON: том, этом, котором, чем, которой, которых, нем, себе, чем-то, ней</li>
      <li>PROPN: Америке, Великобритании, США, Азии, Африке, Гвинее, Германии, Земле, Италии, Китае</li>
      <li>VERB-Part: аннексированном, завоеванных, меняющемся, обращенной, объясняющем, предполагаемых, протянувшемся, совершенном, стоящих</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>ADJ: другие, многие, большая, новые, южная, большое, последняя, северная, британский, бывший</li>
      <li>DET: такие, этот, это, некоторые, эта, эти, все, каждый, мой, наше</li>
      <li>NOUN: люди, часть, правительство, время, армия, год, государство, полиция, рост, фильм</li>
      <li>NUM: много, один, несколько, три, Четверо, две, двое, девять, оба, обе</li>
      <li>PRON: он, это, они, она, которые, что, я, который, мы, кто</li>
      <li>PROPN: Китай, Трамп, Африка, Блант, Джон, Джордж, Испания, Кеша, Клинтон, Мисима</li>
      <li>VERB-Part: Вышедший, Говорящие, Живущие, Загрязняющие, Лишившиеся, Обладающий, Сведенная, Спешивший, Сформированная, Ухудшающееся</li>
    </ul>
  </li>
</ul>



<h3>Degree and Polarity</h3>


<ul>
  <li><a>Degree</a></li>
</ul>

<ul>
  <li>Cmp
    <ul>
      <li>ADJ: лучше, выше, меньше, поответственней</li>
      <li>ADV: более, больше, менее, ранее, лучше, позже, раньше, чаще, Позднее, безопаснее</li>
      <li>NUM: больше</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADJ: другие, первой, других, многие, новые, самым, новых, последние, Северной, большой</li>
      <li>ADV: также, еще, где, так, там, очень, уже, все, примерно, часто</li>
      <li>VERB: можно, надо</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sup
    <ul>
      <li>ADJ: лучших, важнейшим, крупнейшим, лучшего, лучшим, наибольшее, наихудших, худшим</li>
      <li>ADV: наиболее</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>PART: не, ни</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Variant</a></li>
</ul>

<ul>
  <li>Short
    <ul>
      <li>ADJ: должны, нужно, возможно, должно, необходимо, известно, равно, удивительно, ясно, должен</li>
      <li>DET: Каковы</li>
      <li>VERB-Part: использованы, объявлен, включены, закрыт, написано, освобожден, позволено, построены, предъявлено, приведены</li>
    </ul>
  </li>
</ul>

<h3>Verbal Features</h3>


<ul>
  <li><a>Aspect</a></li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Conv: будучи</li>
      <li>AUX-Fin: был, было, были, была, есть, будь</li>
      <li>AUX-Inf: быть</li>
      <li>VERB-Conv: используя, начиная, играя, говоря, Выражаясь, Переписываясь, Принимая, вызывая, желая, задумываясь</li>
      <li>VERB-Fin: является, может, говорит, могут, находится, имеет, нет, работает, составляет, являются</li>
      <li>VERB-Inf: изучать, работать, голосовать, делать, держать, идти, иметь, искать, использовать, меняться</li>
      <li>VERB-Part: действующим, Говорящие, Живущие, Загрязняющие, Обладающий, Ухудшающееся, Финансируемые, бегущим, боящихся, ведомые</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Perf
    <ul>
      <li>VERB-Conv: забив, изменив, построив, Достигнув, Закрепившись, Остановившись, Ответив, Получив, Решив, включив</li>
      <li>VERB-Fin: сказал, стало, заявил, стал, сказала, получили, принял, начал, стали, начала</li>
      <li>VERB-Inf: сделать, получить, привести, вернуться, найти, стать, остановить, покинуть, создать, взять</li>
      <li>VERB-Part: использованы, объявлен, потраченное, включены, выращенных, закрыт, написано, освобожден, оставшихся, позволено</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Cnd
    <ul>
      <li>AUX: бы</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: будь</li>
      <li>VERB-Fin: Давайте, смотрите</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX-Fin: был, было, были, была, будет, есть, будут, буду</li>
      <li>VERB-Fin: является, может, сказал, говорит, стало, могут, заявил, находится, стал, имеет</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>AUX-Fin: будет, будут, буду</li>
      <li>VERB-Fin: придется, станет, повлияет, получит, Введут, войдет, выдадут, замедлят, исчезнут, клянутся</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX-Fin: был, было, были, была</li>
      <li>VERB-Conv: забив, изменив, построив, Достигнув, Закрепившись, Остановившись, Ответив, Получив, Решив, включив</li>
      <li>VERB-Fin: сказал, стало, заявил, стал, сказала, получили, принял, начал, стали, мог</li>
      <li>VERB-Part: использованы, объявлен, потраченное, включены, выращенных, закрыт, написано, освобожден, оставшихся, позволено</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX-Conv: будучи</li>
      <li>AUX-Fin: есть</li>
      <li>VERB-Conv: используя, начиная, играя, говоря, Выражаясь, Переписываясь, Принимая, вызывая, желая, задумываясь</li>
      <li>VERB-Fin: является, может, говорит, могут, находится, имеет, нет, работает, составляет, являются</li>
      <li>VERB-Part: действующим, Говорящие, Живущие, Загрязняющие, Обладающий, Ухудшающееся, Финансируемые, бегущим, боящихся, ведомые</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Act
    <ul>
      <li>AUX-Conv: будучи</li>
      <li>AUX-Fin: был, было, были, была, будет, есть, будут, буду, будь</li>
      <li>AUX-Inf: быть</li>
      <li>VERB-Conv: используя, начиная, играя, говоря, забив, изменив, построив, Достигнув, Ответив, Получив</li>
      <li>VERB-Fin: может, сказал, говорит, могут, заявил, имеет, сказала, получили, нет, принял</li>
      <li>VERB-Inf: сделать, получить, привести, найти, остановить, покинуть, создать, взять, достичь, изучать</li>
      <li>VERB-Part: действующим, Вышедший, Говорящие, Живущие, Загрязняющие, Обладающий, Спешивший, бегущим, верующим, включавших</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Mid
    <ul>
      <li>VERB-Conv: Выражаясь, Закрепившись, Остановившись, Переписываясь, задумываясь, растворяясь, став</li>
      <li>VERB-Fin: является, стало, находится, стал, являются, стали, находятся, оставался, стала, удалось</li>
      <li>VERB-Inf: вернуться, стать, заняться, меняться, появляться, баллотироваться, возвращаться, восстановиться, добиться, заботиться</li>
      <li>VERB-Part: оставшихся, Лишившиеся, Ухудшающееся, боящихся, занимающимися, извивающейся, имеющимся, меняющемся, находящееся, оставшейся</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>VERB-Fin: использовался, обсуждается, использовалась, ожидается, опускаются, считается, Ожидалось, ведется, возвращался, говорится</li>
      <li>VERB-Inf: использоваться, приниматься, проводиться</li>
      <li>VERB-Part: использованы, объявлен, потраченное, включены, выращенных, закрыт, написано, освобожден, позволено, построены</li>
    </ul>
  </li>
</ul>


<h3>Pronouns, Determiners, Quantifiers</h3>






<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX-Fin: буду</li>
      <li>PRON: я, мы, мне, нас, меня, нам</li>
      <li>VERB-Fin: можем, думаю, видим, думаем, могу, Разрешу, Ухожу, возвращаюсь, встречаемся, говорим</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX-Fin: будь</li>
      <li>PRON: вы, вас, Вам, ты</li>
      <li>VERB-Fin: Давайте, делаешь, ждешь, заплатишь, злишься, знаете, найдете, ругаетесь, сидишь, скажешь</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX-Fin: будет, есть, будут</li>
      <li>PRON: он, они, она, его, них, ее, ему, него, им, их</li>
      <li>VERB-Fin: является, может, говорит, могут, находится, имеет, нет, работает, составляет, являются</li>
    </ul>
  </li>
</ul>




<h3>Other Features</h3>


<ul>
  <li><a>Abbr</a>
    <ul>
      <li>Yes
        <ul>
          <li>DET: н.</li>
          <li>NOUN: э., г., гг., э, г-жа, г-жи, гг, ВВП, Г-н, ГФУ</li>
          <li>PRON: т.</li>
          <li>PROPN: США, BBC, CNN, RECO, ЕС, ЗППНС, BA, BID, CBC, CBS</li>
          <li>VERB-Fin: е.</li>
          <li>X: DPA, GEMA, IRENA, NASCAR</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Foreign</a>
    <ul>
      <li>Yes
        <ul>
          <li>NOUN: Film, Wi-Fi, GIF</li>
          <li>PROPN: CNN, Spotify, Twitter, Uber, BBC, Academy, Adidas, Agora, Assistant, Asty</li>
          <li>X: a, and, My, Really, The, You, American, Amnesty, Anyway, Associated</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 1 lemmas as copulas (<a>cop</a>). Examples: быть.</li>
</ul>

<ul>
<li>This corpus uses 2 lemmas as auxiliaries (<a>aux</a>). Examples: бы, быть.</li>
<li>This corpus uses 1 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: быть.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB-Fin--NOUN-Acc (2)</li>
      <li>VERB-Fin--NOUN-Gen (31)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(из) (1)</li>
      <li>VERB-Fin--NOUN-Nom (540)</li>
      <li>VERB-Fin--PRON-Acc (2)</li>
      <li>VERB-Fin--PRON-Gen (1)</li>
      <li>VERB-Fin--PRON-Nom (345)</li>
      <li>VERB-Inf--NOUN-Nom (5)</li>
      <li>VERB-Inf--PRON-Nom (5)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--PRON-Acc (3)</li>
      <li>VERB-Conv--NOUN-Acc (35)</li>
      <li>VERB-Conv--NOUN-Gen (2)</li>
      <li>VERB-Conv--PRON-Acc (3)</li>
      <li>VERB-Conv--PRON-Gen (1)</li>
      <li>VERB-Fin--NOUN-Acc (314)</li>
      <li>VERB-Fin--NOUN-Gen (40)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(на) (1)</li>
      <li>VERB-Fin--NOUN-Ins (11)</li>
      <li>VERB-Fin--NOUN-Nom (3)</li>
      <li>VERB-Fin--PRON-Acc (50)</li>
      <li>VERB-Fin--PRON-Gen (1)</li>
      <li>VERB-Fin--PRON-Ins (2)</li>
      <li>VERB-Fin--PRON-Nom (1)</li>
      <li>VERB-Inf--NOUN-Acc (136)</li>
      <li>VERB-Inf--NOUN-Gen (12)</li>
      <li>VERB-Inf--NOUN-Ins (4)</li>
      <li>VERB-Inf--PRON-Acc (24)</li>
      <li>VERB-Part--NOUN-Acc (23)</li>
      <li>VERB-Part--NOUN-Gen (6)</li>
      <li>VERB-Part--NOUN-Gen-ADP(до) (1)</li>
      <li>VERB-Part--NOUN-Ins (6)</li>
      <li>VERB-Part--PRON-Acc (2)</li>
      <li>VERB-Part--PRON-Ins (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--NOUN-Dat (1)</li>
      <li>VERB--PRON-Dat (1)</li>
      <li>VERB-Conv--NOUN-Dat (1)</li>
      <li>VERB-Conv--NOUN-Gen (1)</li>
      <li>VERB-Conv--NOUN-Ins (2)</li>
      <li>VERB-Conv--PRON-Dat (1)</li>
      <li>VERB-Fin--NOUN-Dat (36)</li>
      <li>VERB-Fin--NOUN-Ins (23)</li>
      <li>VERB-Fin--PRON-Dat (24)</li>
      <li>VERB-Fin--PRON-Ins (5)</li>
      <li>VERB-Inf--NOUN-Dat (3)</li>
      <li>VERB-Inf--NOUN-Ins (4)</li>
      <li>VERB-Inf--NOUN-Nom (1)</li>
      <li>VERB-Inf--PRON-Dat (2)</li>
      <li>VERB-Inf--PRON-Ins (1)</li>
      <li>VERB-Part--NOUN-Dat (3)</li>
      <li>VERB-Part--NOUN-Ins (18)</li>
      <li>VERB-Part--PRON-Dat (4)</li>
      <li>VERB-Part--PRON-Ins (2)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 8 relation subtypes: <a>acl:relcl</a>, <a>aux:pass</a>, <a>flat:foreign</a>, <a>flat:name</a>, <a>nsubj:pass</a>, <a>nummod:entity</a>, <a>nummod:gov</a>, <a>obl:agent</a></li>
<li>The following 6 relation types are not used in this corpus at all: <a>dislocated</a>, <a>clf</a>, <a>list</a>, <a>goeswith</a>, <a>reparandum</a>, <a>dep</a></li>
</ul>
