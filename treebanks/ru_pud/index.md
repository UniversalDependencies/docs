---
layout: base
title:  'UD_Russian-PUD'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Russian PUD

Language: [Russian](../ru/overview/ru-hub.html) (code: `ru`)<br/>
Family: Indo-European, Slavic

This treebank has been part of Universal Dependencies since the UD v2.1 release.

The following people have contributed to making this treebank part of UD: Hans Uszkoreit, Vivien Macketanz, Aljoscha Burchardt, Kim Harris, Katrin Marheinecke, Slav Petrov, Tolga Kayadelen, Mohammed Attia, Ali Elkahky, Zhuoran Yu, Emily Pitler, Saran Lertpradit, Tatiana Lando, Olga Loginova, Martin Popel, Daniel Zeman, Kira Droganova.

Repository: [UD_Russian-PUD](https://github.com/UniversalDependencies/UD_Russian-PUD)

License: CC BY-SA 3.0

Genre: news, wiki

Questions, comments?
General annotation questions (either Russian-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Russian-PUD/issues).
If you want to collaborate, please contact [zeman&nbsp;(æt)&nbsp;ufal&nbsp;•&nbsp;mff&nbsp;•&nbsp;cuni&nbsp;•&nbsp;cz].
Development of the treebank happens directly in the UD repository, so you may submit bug fixes as pull requests against the dev branch.

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

# Statistics of UD Russian PUD

## POS Tags

[ADJ](ru_pud-pos-ADJ.html) – [ADP](ru_pud-pos-ADP.html) – [ADV](ru_pud-pos-ADV.html) – [AUX](ru_pud-pos-AUX.html) – [CCONJ](ru_pud-pos-CCONJ.html) – [DET](ru_pud-pos-DET.html) – [NOUN](ru_pud-pos-NOUN.html) – [NUM](ru_pud-pos-NUM.html) – [PART](ru_pud-pos-PART.html) – [PRON](ru_pud-pos-PRON.html) – [PROPN](ru_pud-pos-PROPN.html) – [PUNCT](ru_pud-pos-PUNCT.html) – [SCONJ](ru_pud-pos-SCONJ.html) – [SYM](ru_pud-pos-SYM.html) – [VERB](ru_pud-pos-VERB.html) – [X](ru_pud-pos-X.html)

## Features

[Animacy](ru_pud-feat-Animacy.html) – [Aspect](ru_pud-feat-Aspect.html) – [Case](ru_pud-feat-Case.html) – [Foreign](ru_pud-feat-Foreign.html) – [Gender](ru_pud-feat-Gender.html) – [Gender[psor]](ru_pud-feat-Gender-psor.html) – [Mood](ru_pud-feat-Mood.html) – [Number](ru_pud-feat-Number.html) – [Number[psor]](ru_pud-feat-Number-psor.html) – [Person](ru_pud-feat-Person.html) – [Polarity](ru_pud-feat-Polarity.html) – [PronType](ru_pud-feat-PronType.html) – [Reflex](ru_pud-feat-Reflex.html) – [Tense](ru_pud-feat-Tense.html) – [Variant](ru_pud-feat-Variant.html) – [VerbForm](ru_pud-feat-VerbForm.html) – [Voice](ru_pud-feat-Voice.html)

## Relations

[acl](ru_pud-dep-acl.html) – [acl:relcl](ru_pud-dep-acl-relcl.html) – [advcl](ru_pud-dep-advcl.html) – [advmod](ru_pud-dep-advmod.html) – [amod](ru_pud-dep-amod.html) – [appos](ru_pud-dep-appos.html) – [aux](ru_pud-dep-aux.html) – [aux:pass](ru_pud-dep-aux-pass.html) – [case](ru_pud-dep-case.html) – [cc](ru_pud-dep-cc.html) – [cc:preconj](ru_pud-dep-cc-preconj.html) – [ccomp](ru_pud-dep-ccomp.html) – [compound](ru_pud-dep-compound.html) – [conj](ru_pud-dep-conj.html) – [cop](ru_pud-dep-cop.html) – [csubj](ru_pud-dep-csubj.html) – [csubj:pass](ru_pud-dep-csubj-pass.html) – [det](ru_pud-dep-det.html) – [discourse](ru_pud-dep-discourse.html) – [expl](ru_pud-dep-expl.html) – [fixed](ru_pud-dep-fixed.html) – [flat](ru_pud-dep-flat.html) – [goeswith](ru_pud-dep-goeswith.html) – [iobj](ru_pud-dep-iobj.html) – [mark](ru_pud-dep-mark.html) – [nmod](ru_pud-dep-nmod.html) – [nmod:gmod](ru_pud-dep-nmod-gmod.html) – [nmod:poss](ru_pud-dep-nmod-poss.html) – [nsubj](ru_pud-dep-nsubj.html) – [nsubj:pass](ru_pud-dep-nsubj-pass.html) – [nummod](ru_pud-dep-nummod.html) – [obj](ru_pud-dep-obj.html) – [obl](ru_pud-dep-obl.html) – [obl:gmod](ru_pud-dep-obl-gmod.html) – [obl:tmod](ru_pud-dep-obl-tmod.html) – [orphan](ru_pud-dep-orphan.html) – [parataxis](ru_pud-dep-parataxis.html) – [punct](ru_pud-dep-punct.html) – [root](ru_pud-dep-root.html) – [vocative](ru_pud-dep-vocative.html) – [xcomp](ru_pud-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>

<ul>
<li>This corpus contains 1000 sentences, 19449 tokens and 19451 syntactic words.</li>
<li>This corpus contains 2994 tokens (15%) that are not followed by a space.</li>
<li>This corpus contains 12 types of words with spaces. Examples: 10 000, 100 000, 12 000, 15 000, 15 001, 16 500, 168 000, 19 999, 25 000, 330 000, 35 000, 600 000</li>
<li>This corpus contains 121 types of words that contain both letters and punctuation. Examples: н., из-за, э., г., гг., что-то, 1960-х, 1970-х, е., по-другому, т., 1980-х, 1990-х, Wi-Fi, Жолио-Кюри, Юго-Восточной, г-жа, г-жи, какое-либо, кто-то, премьер-министр, сколько-нибудь, 10-недельный, 1350-е, 16-го, 1950-е, 1960-е, 2000-х, 28-летняя, 3-го, 31-го, 4-м, 45-го, 53-летнюю, 66-процентное, 8-м, 96-м, Didn't, E., Zettel’s, Азиатско-Тихоокеанском, Беверли-Хиллз, Богдо-гэгэн, Богдо-гэгэна, Богдо-гэгэне, Буэнос-Айреса, Вест-Индию, Во-первых, Восточно-Африканский, Г-н</li>
<li>This corpus contains 2 multi-word tokens. On average, one multi-word token consists of 2.00 syntactic words.</li>
<li>There are 2 types of multi-word tokens. Examples: «, “».</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 16 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a>, <a>X</a></li>
<li>This corpus does not use the following tags: INTJ</li>
<li>This corpus contains 12 word types tagged as particles (PART): Даже, Только, бы, ведь, же, и, именно, ли, лишь, не, ни, это</li>
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
<li>There are 2 <a href="../feat/VerbForm.html">(de)verbal forms:</a>
<ul>
  <li>Inf
  <ul>
    <li>AUX: быть</li>
    <li>VERB: отправлять, вернуться, держать, доставлять, достичь, задать, изготавливать, найти, находить, определить</li>
  </ul>
  </li>
  <li>Part
  <ul>
    <li>ADJ: распространенных</li>
    <li>AUX: будучи, ставшего</li>
    <li>VERB: включая, используя, начиная, играя, потраченное, выращенных, изменив, оставшихся, построив, сделанных</li>
  </ul>
  </li>
</ul>
</li>
</ul>

<h3>Nominal Features</h3>

<li><a>Gender</a>
  <ul>
    <li>Fem
      <ul>
        <li>ADJ: первой, Северной, крайней, другой, южной, большая, новой, южная, американской, большой</li>
        <li>AUX: была, начала</li>
        <li>DET: своей, которая, н., этой, свою, эта, которой, эту, всей, которую</li>
        <li>NOUN: компании, часть, войны, жизни, истории, страны, мере, части, э, э.</li>
        <li>NUM: две, одной, одну, 5000, 3000, двумя, обе, одна, 6000, one</li>
        <li>PRON: она, ее, ей, нее, ней, My, ею, которая, неё</li>
        <li>PROPN: Великобритании, Америки, Италии, войны, Австралии, Европы, Клинтон, империи, Америке, Англии</li>
        <li>VERB: была, сказала, привела, стала, могла, началась, показала, сыграла, вернулась, включала</li>
        <li>VERB-Part: Associated, Сведенная, Сформированная, включавшую, воображаемая, выражаемую, вырезанная, доминирующей, закаленная, извивающейся</li>
      </ul>
    </li>
    <li>Masc
      <ul>
        <li>ADJ: I, III, каждый, новый, первого, последний, самым, таким, 8, большой</li>
        <li>ADV: больше</li>
        <li>AUX: был, ставшего, стал</li>
        <li>AUX-Part: ставшего</li>
        <li>DET: который, этот, этого, тот, том, этом, своего, котором, всему, мой</li>
        <li>NOUN: году, года, лет, людей, города, результате, человек, века, год, люди</li>
        <li>NUM: один, двух, два, одного, 2014, 2015, 1, 1492, 2012, 2013</li>
        <li>PRON: он, его, кто, ему, него, им, кого, нем, ним, кто-то</li>
        <li>PROPN: США, октября, Китай, июле, Ахеменидов, Даневирке, Китая, Трампа, август, апреле</li>
        <li>VERB: был, сказал, заявил, стал, принял, начал, мог, получил, жил, оставался</li>
        <li>VERB-Part: Вышедший, Обладающий, Спешивший, аннексированном, бегущим, верующим, выжившим, вызывающий, живущим, зарегистрированный</li>
      </ul>
    </li>
    <li>Neut
      <ul>
        <li>ADJ: самое, самым, должно, самом, 1, большое, возможно, настоящее, 21, Карибское</li>
        <li>AUX: было, стало</li>
        <li>DET: это, того, то, тем, том, этого, которое, все, этом, всего</li>
        <li>NOUN: время, течение, качестве, влияние, основном, внимание, место, начале, имя, правительство</li>
        <li>NUM: 30, 31, 1, 10, 19, 20, 21, 25, 27, 4</li>
        <li>PART: это</li>
        <li>PRON: что, что-то, того, чего, то, чем, всего, его, оно, т.</li>
        <li>PROPN: море, моря, Онтарио, воскресенье, здравоохранения, соглашения, DPA, GEMA, Heart, Hispania</li>
        <li>SCONJ: чем, что, тем</li>
        <li>VERB: было, стало, позволило, привело, удалось, началось, получило, потраченное, произошло, имело</li>
        <li>VERB-Part: потраченное, Ухудшающееся, включающее, возглавляемое, вызывающего, заключенному, изменяющего, найденное, находящееся, обеспечивающим</li>
      </ul>
    </li>
  </ul>
</li>

<li><a>Animacy</a>
  <ul>
    <li>Anim
      <ul>
        <li>ADJ: многие, должны, I, некоторые, III, другие, другими, других, первой, IV</li>
        <li>ADV: больше</li>
        <li>AUX-Part: ставшего</li>
        <li>DET: которые, который, тех, тот, все, всех, которая, которому, много, теми</li>
        <li>NOUN: людей, человек, люди, детей, жителей, императора, президента, режиссера, агентов, жена</li>
        <li>NUM: один, одного, Четверо, двое, двух, оба, одна, одним, два, двоих</li>
        <li>PRON: кто, кто-то, кого, кого-то</li>
        <li>PROPN: Клинтон, Ахеменидов, Трамп, Трампа, де, Блант, Валентино, Джон, Джордж, Жасмин</li>
        <li>VERB: Живущие, Лишившиеся, Обладающий, Спешивший, боящихся, ведомые, верующим, воюющих, выжившим, вынужден</li>
        <li>VERB-Part: Живущие, Лишившиеся, Обладающий, Спешивший, боящихся, ведомые, верующим, воюющих, выжившим, высланные</li>
      </ul>
    </li>
    <li>Inan
      <ul>
        <li>ADJ: такие, другие, новые, последние, таких, Северной, большой, другой, крайней, новых</li>
        <li>ADJ-Part: распространенных</li>
        <li>ADV: больше, много, мало, немного</li>
        <li>DET: это, того, которые, который, то, этот, этого, том, которая, несколько</li>
        <li>NOUN: году, года, время, лет, города, результате, компании, течение, часть, войны</li>
        <li>NUM: две, три, двух, одной, 1, 2014, 2015, 3, два, четыре</li>
        <li>PART: это</li>
        <li>PRON: что, что-то, того, чего, то, чем, всего, т., это, которая</li>
        <li>PROPN: США, октября, море, Великобритании, Америки, Италии, Китай, войны, Австралии, Европы</li>
        <li>SCONJ: чем, что, тем</li>
        <li>VERB: использованы, потраченное, расположены, включены, выращенных, закрыт, написано, объявлен, оставшихся, позволено</li>
        <li>VERB-Part: потраченное, выращенных, оставшихся, сделанных, сформированным, Associated, Вышедший, Загрязняющие, Сведенная, Сформированная</li>
      </ul>
    </li>
  </ul>
</li>

<li><a>Number</a>
  <ul>
    <li>Plur
      <ul>
        <li>ADJ: другие, многие, такие, других, новые, некоторые, новых, последние, таких, должны</li>
        <li>ADJ-Part: распространенных</li>
        <li>ADV: больше, много, мало, немного</li>
        <li>AUX: были, стали, бывают, являются</li>
        <li>DET: которые, несколько, свои, всех, которых, много, эти, все, своих, этих</li>
        <li>NOUN: лет, людей, люди, долларов, фунтов, детей, жителей, месяцев, человек, войска</li>
        <li>NUM: 5000, 3000, 6000, нескольких, несколько</li>
        <li>PRON: они, мы, них, вы, их, нас, ними, нам, вас, им</li>
        <li>PROPN: США, Ахеменидов, Альпы, Штаты, B, BA, Brands, Forums, Humblebums, Investors</li>
        <li>VERB: были, могут, будут, получили, можем, являются, включают, есть, имели, имеют</li>
        <li>VERB-Part: выращенных, оставшихся, сделанных, Живущие, Загрязняющие, Лишившиеся, Финансируемые, боящихся, вдохновленные, ведомые</li>
      </ul>
    </li>
    <li>Sing
      <ul>
        <li>ADJ: первой, самым, Северной, большой, другой, крайней, южной, I, III, большая</li>
        <li>ADV: больше</li>
        <li>AUX: был, была, было, является, стало, будет, есть, начала, появляется, ставшего</li>
        <li>AUX-Part: ставшего</li>
        <li>DET: это, который, того, этот, то, этого, своей, том, которая, н.</li>
        <li>NOUN: году, года, время, результате, течение, компании, часть, войны, города, качестве</li>
        <li>NUM: один, одной, одного, 1, 2014, 2015, одним, 1492, 2012, 2013</li>
        <li>PART: это</li>
        <li>PRON: он, она, я, его, ее, мне, ему, него, ей, меня</li>
        <li>PROPN: октября, море, Великобритании, Америки, Италии, Китай, Клинтон, войны, Австралии, Европы</li>
        <li>SCONJ: тем</li>
        <li>VERB: был, было, может, будет, является, была, сказал, говорит, заявил, находится</li>
        <li>VERB-Part: потраченное, Associated, Вышедший, Обладающий, Сведенная, Спешивший, Сформированная, Ухудшающееся, аннексированном, бегущим</li>
      </ul>
    </li>
  </ul>
</li>

<li><a>Case</a>
  <ul>
    <li>Acc
      <ul>
        <li>ADJ: последние, большую, значительную, настоящее, новые, собственные, среднюю, III, Национальное, Северное</li>
        <li>AUX-Part: ставшего</li>
        <li>DET: это, то, свои, его, свою, этот, которые, эту, все, которую</li>
        <li>NOUN: время, течение, день, место, период, влияние, внимание, раз, людей, решение</li>
        <li>NUM: 1,5, две, десять, шесть, два, три, 1,335, 10, восемь, одну</li>
        <li>PRON: его, себя, ее, их, что, что-то, меня, нас, My, вас</li>
        <li>PROPN: воскресенье, вторник, Антарктиду, Германию, Герцля, Европу, Киплинга, Моравию, Ричарда, август</li>
        <li>SCONJ: что</li>
        <li>VERB: потраченное, вдохновленные, включавшую, выражаемую, имеющих, имеющую, используемые, любящую, называемую, найденное</li>
        <li>VERB-Part: потраченное, вдохновленные, включавшую, выражаемую, имеющих, имеющую, используемые, называемую, найденное, населяющих</li>
      </ul>
    </li>
    <li>Dat
      <ul>
        <li>ADJ: крайней, политическим, новому, самой, электронной, 24, 352, III, Голландским, Католическому</li>
        <li>DET: всему, этому, его, этой, их, которому, своей, своим, El, всей</li>
        <li>NOUN: мере, году, данным, правительству, миру, поводу, причине, росту, сравнению, стране</li>
        <li>NUM: 45, одному, 1340, 1563, 2007, 2009, 2050, двум</li>
        <li>PRON: мне, ему, ей, нам, им, себе, Вам, нему</li>
        <li>PROPN: CNN, Мартину, недвижимости, BBC, Brands, Mundo, Slate, Style, Yum, Альваресу</li>
        <li>VERB-Part: возобновляемым, заключенному, извивающейся, имеющимся, называемым, открытому, развивающемуся, следящим, собравшейся, сформированным</li>
      </ul>
    </li>
    <li>Gen
      <ul>
        <li>ADJ: новых, других, таких, первой, другой, гражданских, нового, первого, последних, самых</li>
        <li>ADJ-Part: распространенных</li>
        <li>ADV: больше, много, мало, немного</li>
        <li>DET: того, этого, н., его, ее, несколько, много, их, этих, больше</li>
        <li>NOUN: года, лет, войны, города, людей, компании, века, долларов, жизни, э</li>
        <li>NUM: десяти, двух, 20, одного, шести, 10, 2012, 2015, 30, одной</li>
        <li>PRON: них, него, того, чего, нас, всего, кого, меня, нее, вас</li>
        <li>PROPN: США, октября, Америки, войны, Европы, Австралии, Англии, Ахеменидов, Великобритании, Китая</li>
        <li>VERB: выращенных, оставшихся, сделанных, боящихся, включавших, возникающих, воюющих, вступивших, вызывающего, выкуренных</li>
        <li>VERB-Part: выращенных, оставшихся, сделанных, боящихся, включавших, возникающих, воюющих, вступивших, вызывающего, выкуренных</li>
      </ul>
    </li>
    <li>Ins
      <ul>
        <li>ADJ: самым, главным, другими, таким, большим, главной, живыми, последним, американской, большой</li>
        <li>DET: тем, его, своей, ее, которыми, своими, этим, их, которым, своим</li>
        <li>NOUN: образом, помощью, президентом, целью, источником, компанией, людьми, местом, названием, народом</li>
        <li>NUM: одним, двумя, одной, 34, пятью, 1991, 1997, 2004, 2006, тремя</li>
        <li>PRON: собой, ними, им, ним, ею, ими, ней, прочим, чем</li>
        <li>PROPN: CBC, Siri, YouTube, Автостопом, Азией, Албанией, Аткинсоном, Ауном, Аустерлицем, Брантом</li>
        <li>SCONJ: чем, тем</li>
        <li>VERB: бегущим, верующим, вовлеченным, выжившим, доминирующей, живущим, занимающимися, обеспечивающим, оказавшей, оставшейся</li>
        <li>VERB-Part: бегущим, верующим, выжившим, доминирующей, живущим, занимающимися, обеспечивающим, оказавшей, оставшейся, подтверждающим</li>
      </ul>
    </li>
    <li>Loc
      <ul>
        <li>NOUN: году, г., борту, аэропорту, берегу, бою, виду, воспрепятствовании, г, слуху</li>
        <li>PROPN: Крыму</li>
      </ul>
    </li>
    <li>Nom
      <ul>
        <li>ADJ: такие, многие, другие, некоторые, должны, новые, большая, южная, должно, каждый</li>
        <li>DET: это, которые, который, его, которая, этот, все, их, которое, эта</li>
        <li>NOUN: люди, часть, правительство, время, армия, год, государство, полиция, рост, фильм</li>
        <li>NUM: один, три, две, девять, 100, 15,5, 16, 200, 29, 31</li>
        <li>PART: это</li>
        <li>PRON: он, они, она, я, мы, что, кто, вы, oни, То</li>
        <li>PROPN: Китай, Трамп, де, Uber, Африка, Блант, Джон, Джордж, Испания, Кеша</li>
        <li>VERB: использованы, объявлен, расположены, включены, закрыт, написано, освобожден, позволено, построены, предъявлено</li>
        <li>VERB-Part: Associated, Вышедший, Живущие, Загрязняющие, Лишившиеся, Обладающий, Сведенная, Спешивший, Сформированная, Ухудшающееся</li>
      </ul>
    </li>
  </ul>
</li>



<h3>Degree and Polarity</h3>


<li><a>Polarity</a>
  <ul>
    <li>Neg
      <ul>
        <li>PART: не, ни</li>
      </ul>
    </li>
  </ul>
</li>

<li><a>Variant</a>
  <ul>
    <li>Long
      <ul>
        <li>ADJ: другие, многие, такие, первой, других, новые, самым, некоторые, новых, последние</li>
        <li>ADJ-Part: распространенных</li>
        <li>AUX-Part: ставшего</li>
        <li>DET: Некоторые, такие</li>
        <li>NUM: 2014, 2015, 1492, 2012, 2013, 2017, 1992, 1997, 2004, 2010</li>
        <li>PRON: прочим</li>
        <li>VERB: потраченное, выращенных, оставшихся, сделанных, сформированным, Associated, Вышедший, Живущие, Загрязняющие, Лишившиеся</li>
        <li>VERB-Part: потраченное, выращенных, оставшихся, сделанных, сформированным, Associated, Вышедший, Живущие, Загрязняющие, Лишившиеся</li>
      </ul>
    </li>
    <li>Short
      <ul>
        <li>ADJ: должны, должно, возможно, должен, известна, необходимо, похоже, равна, сама, сами</li>
        <li>VERB: использованы, объявлен, расположены, включены, закрыт, написано, освобожден, позволено, построены, предъявлено</li>
      </ul>
    </li>
  </ul>
</li>

<h3>Verbal Features</h3>

<li><a>Aspect</a>
  <ul>
    <li>Imp
      <ul>
        <li>AUX: был, быть, была, были, было, является, будучи, будет, бывают, есть</li>
        <li>AUX-Inf: быть</li>
        <li>AUX-Part: будучи</li>
        <li>PROPN: Любить</li>
        <li>VERB: был, было, были, может, будет, является, была, быть, говорит, нет</li>
        <li>VERB-Inf: отправлять, держать, доставлять, изготавливать, находить, покупать, прогнозировать, убивать</li>
        <li>VERB-Part: включая, используя, начиная, играя, Breaking, Будучи, Выражаясь, Живущие, Загрязняющие, Обладающий</li>
      </ul>
    </li>
    <li>Perf
      <ul>
        <li>AUX: стало, стали, начала, ставшего, стал</li>
        <li>AUX-Part: ставшего</li>
        <li>VERB: сказал, сделать, привести, получить, вернуться, заявил, стал, стать, найти, сказала</li>
        <li>VERB-Inf: вернуться, достичь, задать, найти, определить, организовать, позволить, покинуть, получить, прервать</li>
        <li>VERB-Part: потраченное, выращенных, изменив, оставшихся, построив, сделанных, сформированным, Associated, Вышедший, Достигнув</li>
      </ul>
    </li>
  </ul>
</li>

<li><a>Mood</a>
  <ul>
    <li>Imp
      <ul>
        <li>VERB: Давайте, Don, Metti, будь, смотрите</li>
      </ul>
    </li>
    <li>Ind
      <ul>
        <li>AUX: был, была, были, было, является, стало, стали, будет, бывают, есть</li>
        <li>VERB: был, было, были, может, будет, является, была, сказал, говорит, есть</li>
      </ul>
    </li>
  </ul>
</li>

<li><a>Tense</a>
  <ul>
    <li>Fut
      <ul>
        <li>AUX: будет</li>
        <li>VERB: будет, будут, придется, станет, буду, повлияет, получит, Knuck, Введут, Разрешу</li>
      </ul>
    </li>
    <li>Past
      <ul>
        <li>AUX: был, была, были, было, стало, стали, начала, ставшего, стал</li>
        <li>AUX-Part: ставшего</li>
        <li>VERB: был, было, были, была, сказал, заявил, стал, сказала, стало, получили</li>
        <li>VERB-Part: потраченное, выращенных, оставшихся, сделанных, сформированным, Associated, Вышедший, Лишившиеся, Сведенная, Спешивший</li>
      </ul>
    </li>
    <li>Pres
      <ul>
        <li>AUX: является, бывают, есть, появляется, являются</li>
        <li>VERB: может, является, говорит, есть, могут, находится, имеет, работает, составляет, делает</li>
        <li>VERB-Part: Живущие, Загрязняющие, Обладающий, Ухудшающееся, Финансируемые, бегущим, боящихся, ведомые, верующим, включающее</li>
      </ul>
    </li>
  </ul>
</li>

<li><a>Voice</a>
  <ul>
    <li>Act
      <ul>
        <li>AUX-Part: ставшего</li>
        <li>VERB: оставшихся, Вышедший, Живущие, Загрязняющие, Лишившиеся, Обладающий, Спешивший, Ухудшающееся, бегущим, боящихся</li>
        <li>VERB-Part: оставшихся, Вышедший, Живущие, Загрязняющие, Лишившиеся, Обладающий, Спешивший, Ухудшающееся, бегущим, боящихся</li>
      </ul>
    </li>
    <li>Pass
      <ul>
        <li>VERB: использованы, объявлен, потраченное, расположены, включены, выращенных, закрыт, написано, освобожден, позволено</li>
        <li>VERB-Part: потраченное, выращенных, сделанных, сформированным, Associated, Сведенная, Сформированная, Финансируемые, аннексированном, вдохновленные</li>
      </ul>
    </li>
  </ul>
</li>


<h3>Pronouns, Determiners, Quantifiers</h3>

<li><a>PronType</a>
  <ul>
    <li>Prs
      <ul>
        <li>DET: его, их, ее, н., наше, нашей, мой, её, моей, мое</li>
        <li>PRON: My, Her</li>
      </ul>
    </li>
  </ul>
</li>



<li><a>Reflex</a>
  <ul>
    <li>Yes
      <ul>
        <li>DET: своей, свои, свою, своих, своего, своем, своим, свое, своими, свой</li>
        <li>PRON: себя, собой, себе, свои, свой</li>
      </ul>
    </li>
  </ul>
</li>

<li><a>Person</a>
  <ul>
    <li>1
      <ul>
        <li>DET: н., наше, нашей, мой, моей, мои, моих, наша, наши, наших</li>
        <li>PRON: я, мы, мне, нас, меня, нам, My, Me</li>
        <li>VERB: можем, думаю, буду, видим, думаем, могу, Knuck, Love, Разрешу, Ухожу</li>
      </ul>
    </li>
    <li>2
      <ul>
        <li>PRON: вы, вас, Вам, ты, Ya, You</li>
        <li>VERB: Давайте, Buck, Don, Metti, будь, делаешь, ждешь, заплатишь, знаете, найдете</li>
      </ul>
    </li>
    <li>3
      <ul>
        <li>AUX: является, будет, бывают, есть, появляется, являются</li>
        <li>DET: его, их, ее, её</li>
        <li>NOUN: году, года, время, лет, людей, города, результате, компании, течение, часть</li>
        <li>NUM: 5000, 3000, 6000</li>
        <li>PRON: он, они, она, его, них, ее, ему, него, им, их</li>
        <li>PROPN: США, октября, море, Великобритании, Америки, Италии, Китай, Клинтон, войны, Австралии</li>
        <li>VERB: может, будет, является, говорит, есть, могут, находится, будут, имеет, работает</li>
      </ul>
    </li>
  </ul>
</li>


<li><a>Gender[psor]</a>
  <ul>
    <li>Fem
      <ul>
        <li>DET: ее, её</li>
        <li>PRON: Her</li>
      </ul>
    </li>
    <li>Masc
      <ul>
        <li>DET: его</li>
      </ul>
    </li>
  </ul>
</li>

<li><a>Number[psor]</a>
  <ul>
    <li>Plur
      <ul>
        <li>DET: их, н., наше, нашей, наша, наши, наших</li>
      </ul>
    </li>
    <li>Sing
      <ul>
        <li>DET: его, ее, мой, её, моей, мое, моего, мои, моих</li>
        <li>PRON: My, Her</li>
      </ul>
    </li>
  </ul>
</li>

<h3>Other Features</h3>

<li><a>Foreign</a>
  <ul>
    <li>Yes
      <ul>
        <li>PROPN: Victorias, de, las</li>
      </ul>
    </li>
  </ul>
</li>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 1 lemmas as copulas (<a>cop</a>). Examples: _.</li>
<li>This corpus uses 1 lemmas as auxiliaries (<a>aux</a>). Examples: _.</li>
<li>This corpus uses 1 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: _.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (2)</li>
      <li>VERB--NOUN-Gen (16)</li>
      <li>VERB--NOUN-Gen-ADP(_) (1)</li>
      <li>VERB--NOUN-Nom (552)</li>
      <li>VERB--PRON-Nom (248)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN-Acc (432)</li>
      <li>VERB--NOUN-Gen (52)</li>
      <li>VERB--PRON-Acc (57)</li>
      <li>VERB--PRON-Gen (1)</li>
      <li>VERB-Inf--NOUN-Acc (17)</li>
      <li>VERB-Inf--NOUN-Gen (1)</li>
      <li>VERB-Inf--PRON-Acc (3)</li>
      <li>VERB-Part--NOUN-Acc (53)</li>
      <li>VERB-Part--NOUN-Gen (9)</li>
      <li>VERB-Part--PRON-Acc (4)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--NOUN-Dat (40)</li>
      <li>VERB--NOUN-Gen (6)</li>
      <li>VERB--NOUN-Ins (112)</li>
      <li>VERB--PRON-Dat (32)</li>
      <li>VERB--PRON-Ins (5)</li>
      <li>VERB-Inf--NOUN-Ins (1)</li>
      <li>VERB-Inf--NOUN-Nom (1)</li>
      <li>VERB-Part--NOUN-Dat (1)</li>
      <li>VERB-Part--NOUN-Ins (22)</li>
      <li>VERB-Part--PRON-Ins (2)</li>
    </ul>
  </li>
</ul>



<h3>Verbs with Reflexive Core Objects</h3>

<ul>
  <li>This corpus contains 3 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: _ себя, _ собой, _ себе</li>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 9 relation subtypes: <a>acl:relcl</a>, <a>aux:pass</a>, <a>cc:preconj</a>, <a>csubj:pass</a>, <a>nmod:gmod</a>, <a>nmod:poss</a>, <a>nsubj:pass</a>, <a>obl:gmod</a>, <a>obl:tmod</a></li>
<li>The following 5 relation types are not used in this corpus at all: <a>dislocated</a>, <a>clf</a>, <a>list</a>, <a>reparandum</a>, <a>dep</a></li>
</ul>
