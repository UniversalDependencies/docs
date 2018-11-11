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
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udru_pud22)<br />
Download all treebanks: [UD 2.2](/#download)

License: CC BY-SA 3.0

Genre: news, wiki

Questions, comments?
General annotation questions (either Russian-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Russian-PUD/issues).
If you want to collaborate, please contact [zeman&nbsp;(æt)&nbsp;ufal&nbsp;•&nbsp;mff&nbsp;•&nbsp;cuni&nbsp;•&nbsp;cz].
Development of the treebank happens directly in the UD repository, so you may submit bug fixes as pull requests against the dev branch.

| Annotation | Source |
|------------|--------|
| Lemmas | annotated manually, natively in UD style |
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

[ADJ](ru_pud-pos-ADJ.html) – [ADP](ru_pud-pos-ADP.html) – [ADV](ru_pud-pos-ADV.html) – [AUX](ru_pud-pos-AUX.html) – [CCONJ](ru_pud-pos-CCONJ.html) – [DET](ru_pud-pos-DET.html) – [INTJ](ru_pud-pos-INTJ.html) – [NOUN](ru_pud-pos-NOUN.html) – [NUM](ru_pud-pos-NUM.html) – [PART](ru_pud-pos-PART.html) – [PRON](ru_pud-pos-PRON.html) – [PROPN](ru_pud-pos-PROPN.html) – [PUNCT](ru_pud-pos-PUNCT.html) – [SCONJ](ru_pud-pos-SCONJ.html) – [SYM](ru_pud-pos-SYM.html) – [VERB](ru_pud-pos-VERB.html) – [X](ru_pud-pos-X.html)

## Features

[Animacy](ru_pud-feat-Animacy.html) – [Aspect](ru_pud-feat-Aspect.html) – [Case](ru_pud-feat-Case.html) – [Degree](ru_pud-feat-Degree.html) – [Foreign](ru_pud-feat-Foreign.html) – [Gender](ru_pud-feat-Gender.html) – [Gender[psor]](ru_pud-feat-Gender-psor.html) – [Mood](ru_pud-feat-Mood.html) – [Number](ru_pud-feat-Number.html) – [Number[psor]](ru_pud-feat-Number-psor.html) – [Person](ru_pud-feat-Person.html) – [Polarity](ru_pud-feat-Polarity.html) – [PronType](ru_pud-feat-PronType.html) – [Reflex](ru_pud-feat-Reflex.html) – [Tense](ru_pud-feat-Tense.html) – [Variant](ru_pud-feat-Variant.html) – [VerbForm](ru_pud-feat-VerbForm.html) – [Voice](ru_pud-feat-Voice.html)

## Relations

[acl](ru_pud-dep-acl.html) – [acl:relcl](ru_pud-dep-acl-relcl.html) – [advcl](ru_pud-dep-advcl.html) – [advmod](ru_pud-dep-advmod.html) – [amod](ru_pud-dep-amod.html) – [appos](ru_pud-dep-appos.html) – [aux](ru_pud-dep-aux.html) – [aux:pass](ru_pud-dep-aux-pass.html) – [case](ru_pud-dep-case.html) – [cc](ru_pud-dep-cc.html) – [ccomp](ru_pud-dep-ccomp.html) – [compound](ru_pud-dep-compound.html) – [conj](ru_pud-dep-conj.html) – [cop](ru_pud-dep-cop.html) – [csubj](ru_pud-dep-csubj.html) – [det](ru_pud-dep-det.html) – [discourse](ru_pud-dep-discourse.html) – [expl](ru_pud-dep-expl.html) – [fixed](ru_pud-dep-fixed.html) – [flat](ru_pud-dep-flat.html) – [flat:foreign](ru_pud-dep-flat-foreign.html) – [flat:name](ru_pud-dep-flat-name.html) – [goeswith](ru_pud-dep-goeswith.html) – [iobj](ru_pud-dep-iobj.html) – [mark](ru_pud-dep-mark.html) – [nmod](ru_pud-dep-nmod.html) – [nsubj](ru_pud-dep-nsubj.html) – [nsubj:pass](ru_pud-dep-nsubj-pass.html) – [nummod](ru_pud-dep-nummod.html) – [nummod:gov](ru_pud-dep-nummod-gov.html) – [obj](ru_pud-dep-obj.html) – [obl](ru_pud-dep-obl.html) – [orphan](ru_pud-dep-orphan.html) – [parataxis](ru_pud-dep-parataxis.html) – [punct](ru_pud-dep-punct.html) – [root](ru_pud-dep-root.html) – [vocative](ru_pud-dep-vocative.html) – [xcomp](ru_pud-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 1000 sentences and 19362 tokens.</li>
</ul>

<ul>
<li>This corpus contains 2942 tokens (15%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus contains 12 types of words with spaces. Examples: 10 000, 100 000, 12 000, 15 000, 15 001, 16 500, 168 000, 19 999, 25 000, 330 000, 35 000, 600 000</li>
</ul>

<ul>
<li>This corpus contains 121 types of words that contain both letters and punctuation. Examples: н., из-за, э., г., гг., что-то, 1960-х, 1970-х, е., по-другому, т., 1980-х, 1990-х, Wi-Fi, Жолио-Кюри, Юго-Восточной, г-жа, г-жи, какое-либо, кто-то, премьер-министр, сколько-нибудь, 10-недельный, 1350-е, 16-го, 1950-е, 1960-е, 2000-х, 28-летняя, 3-го, 31-го, 4-м, 45-го, 53-летнюю, 66-процентное, 8-м, 96-м, B-29, Didn't, E., Zettel’s, А​з​и​а​т​с​к​о​-​Т​и​х​о​о​к​е​а​н​с​к​о​м, Беверли-Хиллз, Богдо-гэгэн, Богдо-гэгэна, Богдо-гэгэне, Буэнос-Айреса, Вест-Индию, Во-первых, Восточно-Африканский</li>
</ul>

<ul>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 17 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a>, <a>X</a></li>
</ul>

<ul>
<li>This corpus contains 15 word types tagged as particles (PART): Даже, Только, бы, ведь, вот, всего, же, и, именно, конечно, ли, лишь, не, ни, это</li>
</ul>

<ul>
<li>This corpus contains 25 lemmas tagged as pronouns (PRON): все, вы, его, ее, который, кто, кто-то, мы, он, она, они, оно, прочим, себя, т., такой, то, того, ты, чем, что, что-то, это, этот, я</li>
</ul>

<ul>
<li>This corpus contains 38 lemmas tagged as determiners (DET): a, больше, весь, все, всего, всякий, его, ее, их, каждый, каков, какой, какой-либо, который, любой, мало, много, мой, н., наш, некоторый, немного, никакой, он, они, свой, сей, сих, таким, такой, тем, то, того, том, тот, чей, это, этот</li>
</ul>

<ul>
<li>Out of the above, 11 lemmas occurred sometimes as PRON and sometimes as DET: все, его, ее, который, он, они, такой, то, того, это, этот</li>
</ul>

<ul>
<li>This corpus contains 3 lemmas tagged as auxiliaries (AUX): быть, начать, являться</li>
</ul>

<ul>
<li>Out of the above, 3 lemmas occurred sometimes as AUX and sometimes as VERB: быть, начать, являться</li>
</ul>

<ul>
<li>There are 2 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>VERB: отправлять, быть, вернуться, держать, доставлять, достичь, задать, изготавливать, найти, находить</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>ADJ: распространенных</li>
    <li>VERB: включая, будучи, используя, начиная, играя, потраченное, Соединенные, Соединенных, выращенных, изменив</li>
    <li>X: Associated, Breaking</li>
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
      <li>ADJ: первой, Северной, крайней, другой, южной, большая, новой, южная, американской, большой</li>
      <li>AUX: была, начала</li>
      <li>DET: своей, которая, н., этой, свою, эта, которой, эту, всей, которую</li>
      <li>NOUN: войны, компании, часть, страны, жизни, истории, мере, части, э., партии</li>
      <li>NUM: две, одной, одну, 5000, двумя, обе, одна, 3, 3000, 5</li>
      <li>PRON: она, ее, ей, нее, ней, ею, которая, неё</li>
      <li>PROPN: Великобритании, Америки, Италии, Австралии, Европы, Клинтон, Америке, Англии, Германии, Македонии</li>
      <li>VERB: была, сказала, привела, стала, могла, началась, показала, сыграла, вернулась, включала</li>
      <li>VERB-Part: Сведенная, Сформированная, включавшую, воображаемая, выражаемую, вырезанная, доминирующей, закаленная, извивающейся, имеющую</li>
      <li>X: BBC, CNN, A, Agora, Amnesty, Apple, Associated, Asty, Athina, Australia</li>
      <li>X-Part: Associated</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: I, III, новый, первого, последний, самым, 8, большой, британский, бывший</li>
      <li>ADV: больше</li>
      <li>AUX: был</li>
      <li>DET: который, этот, этого, тот, том, этом, своего, котором, свой, всему</li>
      <li>NOUN: году, года, лет, людей, города, результате, века, человек, год, люди</li>
      <li>NUM: один, двух, два, одного, 2014, 2015, 1, 1492, 2012, 2013</li>
      <li>PRON: он, его, кто, ему, него, им, кого, нем, ним, кто-то</li>
      <li>PROPN: США, Китай, Ахеменидов, Даневирке, Китая, Трампа, де, Гонконг, Джон, Джордж</li>
      <li>VERB: был, сказал, заявил, стал, принял, начал, мог, получил, жил, оставался</li>
      <li>VERB-Part: Вышедший, Обладающий, Спешивший, аннексированном, бегущим, верующим, выжившим, вызывающий, живущим, зарегистрированный</li>
      <li>X: Facebook, Film, RECO, Spotify, Twitter, Uber, Wi-Fi, Academy, Adidas, Assistant</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neut
    <ul>
      <li>ADJ: самое, самым, должно, самом, 1, большое, возможно, настоящее, 21, Карибское</li>
      <li>AUX: было</li>
      <li>DET: это, того, то, том, которое, тем, этого, все, всего, этом</li>
      <li>NOUN: время, течение, качестве, влияние, море, основном, внимание, место, начале, имя</li>
      <li>NUM: 30, 31, 1, 10, 19, 20, 21, 25, 27, 4</li>
      <li>PART: это</li>
      <li>PRON: это, что, то, что-то, того, чего, его, т., чем, все</li>
      <li>PROPN: Онтарио, Средиземноморью, Амурру, Загорья, Закавказье, Килиманджаро, Конго, Корё, Ляо, МГБ</li>
      <li>SCONJ: чем, что, тем</li>
      <li>VERB: было, стало, позволило, привело, удалось, началось, получило, потраченное, произошло, Соединенные</li>
      <li>VERB-Part: потраченное, Соединенные, Соединенных, Соединенным, Ухудшающееся, включающее, возглавляемое, вызывающего, заключенного, изменяющего</li>
      <li>X: DPA, GEMA, Heart, Hispania, IRENA, Zay</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Animacy</a></li>
</ul>

<ul>
  <li>Anim
    <ul>
      <li>ADJ: многие, должны, I, III, другие, другими, других, первой, IV, Камберлендский</li>
      <li>ADV: больше</li>
      <li>DET: которые, который, некоторые, тех, тот, которая, которому, теми, Никаким, Этот</li>
      <li>NOUN: людей, человек, люди, детей, жителей, императора, представителей, президента, режиссера, агентов</li>
      <li>NUM: один, одного, Четверо, двое, двух, нескольких, оба, одна, одним, два</li>
      <li>PRON: кто, кто-то, все, всех, кого, кого-то</li>
      <li>PROPN: Клинтон, Ахеменидов, Трамп, Трампа, де, Блант, Валентино, Джон, Джордж, Жасмин</li>
      <li>VERB: Живущие, Лишившиеся, Обладающий, Спешивший, боящихся, ведомые, верующим, воюющих, выжившим, вынужден</li>
      <li>VERB-Part: Живущие, Лишившиеся, Обладающий, Спешивший, боящихся, ведомые, верующим, воюющих, выжившим, высланные</li>
      <li>X: Brands, Father, Keira, Kiera, LaBrocca, Laurent, Monster, SPIEGEL, Saint, Stage</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Inan
    <ul>
      <li>ADJ: другие, новые, последние, Северной, большой, другой, крайней, новых, первой, самым</li>
      <li>ADJ-Part: распространенных</li>
      <li>ADV: больше, много, мало, немного</li>
      <li>DET: это, того, которые, который, этот, то, том, этого, которая, этой</li>
      <li>NOUN: году, года, время, лет, войны, города, компании, результате, течение, века</li>
      <li>NUM: несколько, две, три, двух, одной, 3, 1, 2014, 2015, два</li>
      <li>PART: всего, это</li>
      <li>PRON: это, что, то, что-то, того, чего, т., чем, все, всего</li>
      <li>PROPN: США, Великобритании, Америки, Италии, Китай, Австралии, Европы, Онтарио, Америке, Англии</li>
      <li>SCONJ: чем, что, тем</li>
      <li>VERB: использованы, потраченное, расположены, включены, выращенных, закрыт, написано, объявлен, оставшихся, позволено</li>
      <li>VERB-Part: потраченное, выращенных, оставшихся, сделанных, сформированным, Вышедший, Загрязняющие, Сведенная, Сформированная, Ухудшающееся</li>
      <li>X: BBC, CNN, Facebook, Film, RECO, Spotify, The, Twitter, Uber, Wi-Fi</li>
      <li>X-Part: Associated</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: другие, многие, других, новые, новых, последние, должны, такие, последних, гражданских</li>
      <li>ADJ-Part: распространенных</li>
      <li>ADV: больше, много, мало, немного</li>
      <li>AUX: были, будут, являются</li>
      <li>DET: которые, свои, которых, некоторые, эти, всех, своих, этих, все, такие</li>
      <li>NOUN: лет, людей, люди, долларов, фунтов, детей, жителей, месяцев, человек, войска</li>
      <li>NUM: несколько, нескольких, 5000, много, 3, 3000, 5, 6000, больше, нескольким</li>
      <li>PART: всего</li>
      <li>PRON: они, мы, них, вы, их, нас, ними, нам, вас, им</li>
      <li>PROPN: США, Ахеменидов, Альпы, B-29, Альпах, Анд, Андам, Анды, Афинах, Афины</li>
      <li>VERB: были, могут, получили, стали, можем, являются, включают, есть, имели, имеют</li>
      <li>VERB-Part: выращенных, оставшихся, сделанных, Живущие, Загрязняющие, Лишившиеся, Финансируемые, боящихся, вдохновленные, ведомые</li>
      <li>X: American, BA, Brands, Forums, Humblebums, Investors, Motors, News, Records</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: первой, самым, Северной, большой, другой, крайней, южной, I, III, большая</li>
      <li>ADV: больше</li>
      <li>AUX: был, было, будет, была, является, буду, начала</li>
      <li>DET: это, который, того, этот, своей, то, которая, н., том, этого</li>
      <li>NOUN: году, года, время, войны, результате, компании, течение, часть, века, города</li>
      <li>NUM: один, одной, одного, 1, 2014, 2015, одним, 1492, 2012, 2013</li>
      <li>PART: это</li>
      <li>PRON: он, она, это, я, его, ее, мне, ему, него, ей</li>
      <li>PROPN: Великобритании, Америки, Италии, Китай, Клинтон, Австралии, Европы, Онтарио, Америке, Англии</li>
      <li>SCONJ: тем</li>
      <li>VERB: был, может, было, является, сказал, была, говорит, стало, заявил, находится</li>
      <li>VERB-Part: потраченное, Соединенные, Соединенных, Вышедший, Обладающий, Сведенная, Соединенным, Спешивший, Сформированная, Ухудшающееся</li>
      <li>X: BBC, CNN, Facebook, Film, RECO, Spotify, The, Twitter, Uber, Wi-Fi</li>
      <li>X-Part: Associated</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>ADJ: последние, большую, значительную, настоящее, новые, собственные, среднюю, III, Национальное, Северное</li>
      <li>DET: то, свои, это, его, свою, этот, которые, эту, которую, который</li>
      <li>NOUN: время, течение, день, место, период, влияние, внимание, раз, людей, решение</li>
      <li>NUM: 1,5, две, десять, шесть, два, три, 1,335, 10, восемь, одну</li>
      <li>PRON: его, себя, ее, это, их, что, что-то, меня, нас, то</li>
      <li>PROPN: Антарктиду, Германию, Герцля, Европу, Киплинга, Моравию, Ричарда, Абакумова, Австралию, Австрию</li>
      <li>SCONJ: что</li>
      <li>VERB: потраченное, вдохновленные, включавшую, выражаемую, имеющих, имеющую, используемые, любящую, называемую, найденное</li>
      <li>VERB-Part: потраченное, вдохновленные, включавшую, выражаемую, имеющих, имеющую, используемые, называемую, найденное, населяющих</li>
      <li>X: My, EMicro, ExxonMobil, Ford, GIF, GM, Head, Heart, Me, Plaza</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>ADJ: крайней, политическим, новому, самой, электронной, 24, 352, III, Голландским, Католическому</li>
      <li>DET: всему, его, этой, этому, их, которому, своей, своим, Никаким, всей</li>
      <li>NOUN: мере, году, данным, правительству, миру, недвижимости, поводу, причине, росту, сравнению</li>
      <li>NUM: 45, одному, 1340, 1563, 2007, 2009, 2050, двум, нескольким</li>
      <li>PRON: мне, ему, ей, нам, им, себе, Вам, нему, этому</li>
      <li>PROPN: Мартину, Средиземноморью, Альваресу, Америке, Андам, Библии, Боемер, Брекзиту, Британии, Галактике</li>
      <li>VERB-Part: Соединенным, возобновляемым, заключенного, извивающейся, имеющимся, называемым, открытому, развивающемуся, следящим, собравшейся</li>
      <li>X: CNN, BBC, Brands, El, Mundo, Slate, Style, Yum</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>ADJ: новых, других, первой, другой, гражданских, нового, первого, последних, самых, 1</li>
      <li>ADJ-Part: распространенных</li>
      <li>ADV: больше, много, мало, немного</li>
      <li>DET: того, н., этого, его, ее, их, этих, всего, всех, которых</li>
      <li>NOUN: года, лет, войны, века, города, людей, компании, долларов, жизни, октября</li>
      <li>NUM: несколько, десяти, двух, 20, одного, шести, 10, 2012, 2015, 3</li>
      <li>PART: всего</li>
      <li>PRON: них, него, того, чего, нас, всего, кого, меня, нее, этого</li>
      <li>PROPN: США, Америки, Европы, Австралии, Англии, Ахеменидов, Великобритании, Китая, Македонии, Онтарио</li>
      <li>VERB: Соединенных, выращенных, оставшихся, сделанных, боящихся, включавших, возникающих, воюющих, вступивших, вызывающего</li>
      <li>VERB-Part: Соединенных, выращенных, оставшихся, сделанных, боящихся, включавших, возникающих, воюющих, вступивших, вызывающего</li>
      <li>X: Avro, Bass, CNN, CTV, Energy, Forums, GEMA, Hack, Investors, Laurent</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ins
    <ul>
      <li>ADJ: самым, главным, другими, большим, главной, живыми, последним, американской, большой, важным</li>
      <li>DET: тем, его, своей, которыми, своими, ее, их, которым, своим, таким</li>
      <li>NOUN: образом, помощью, президентом, судом, целью, источником, компанией, контролем, людьми, местом</li>
      <li>NUM: одним, двумя, одной, 34, пятью, 1991, 1997, 2004, 2006, несколькими</li>
      <li>PRON: собой, ними, им, ним, тем, этим, ею, ими, ней, прочим</li>
      <li>PROPN: Азией, Албанией, Аткинсоном, Ауном, Аустерлицем, Брантом, Брестедом, Британией, Валентино, Ваттом</li>
      <li>SCONJ: чем, тем</li>
      <li>VERB: бегущим, верующим, вовлеченным, выжившим, доминирующей, живущим, занимающимися, обеспечивающим, оказавшей, оставшейся</li>
      <li>VERB-Part: бегущим, верующим, выжившим, доминирующей, живущим, занимающимися, обеспечивающим, оказавшей, оставшейся, подтверждающим</li>
      <li>X: CBC, Siri, YouTube</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Loc
    <ul>
      <li>ADJ: 1980-х, 1990-х, 96-м, А​з​и​а​т​с​к​о​-​Т​и​х​о​о​к​е​а​н​с​к​о​м, Юго-Восточной, н​а​у​ч​н​о​-​ф​а​н​т​а​с​т​и​ч​е​с​к​о​м, северо-западной, южно-саамском</li>
      <li>NOUN: году, г., борту, аэропорту, берегу, бизнес-школе, бою, виду, воспрепятствовании, г</li>
      <li>PROPN: Австралии, Беверли-Хиллз, Крыму, Лос-Анжелесе, Монте-Карло, Пунта-Раса, Пунта-дель-Эсте, Пуэрто-Рико, Сесто-Сан-Джованни, Уолл-стрит</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>ADJ: многие, другие, должны, новые, такие, большая, южная, должно, последняя, северная</li>
      <li>DET: это, которые, который, его, которая, этот, все, их, некоторые, которое</li>
      <li>NOUN: люди, часть, правительство, время, армия, год, государство, полиция, рост, фильм</li>
      <li>NUM: один, три, две, девять, 100, 15,5, 16, 200, 31, 328</li>
      <li>PART: это</li>
      <li>PRON: он, они, она, я, это, мы, что, кто, вы, т.</li>
      <li>PROPN: Китай, Трамп, де, Африка, Блант, Джон, Джордж, Испания, Кеша, Клинтон</li>
      <li>VERB: использованы, объявлен, расположены, Соединенные, включены, закрыт, написано, освобожден, позволено, построены</li>
      <li>VERB-Part: Соединенные, Вышедший, Живущие, Загрязняющие, Лишившиеся, Обладающий, Сведенная, Спешивший, Сформированная, Ухудшающееся</li>
      <li>X: Film, RECO, Spotify, The, Uber, A, Academy, Adidas, Agora, American</li>
      <li>X-Part: Associated</li>
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
      <li>ADV: лучше</li>
      <li>NUM: больше</li>
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
  <li>Long
    <ul>
      <li>ADJ: другие, многие, первой, других, новые, самым, новых, последние, Северной, большой</li>
      <li>ADJ-Part: распространенных</li>
      <li>DET: некоторые, такие, таких, каждого, каждой, каждый, такой, каждая, каждое, некоторой</li>
      <li>NOUN: Мексиканского, бытовой</li>
      <li>NUM: 2014, 2015, 1492, 2012, 2013, 2017, нескольких, 1992, 1997, 2004</li>
      <li>PRON: прочим</li>
      <li>PROPN: Британской, Дальнем</li>
      <li>VERB: потраченное, выращенных, оставшихся, сделанных, сформированным, Вышедший, Живущие, Загрязняющие, Лишившиеся, Обладающий</li>
      <li>VERB-Part: потраченное, выращенных, оставшихся, сделанных, сформированным, Вышедший, Живущие, Загрязняющие, Лишившиеся, Обладающий</li>
      <li>X: American, Associated, International, New, Shaky, South, Wild</li>
      <li>X-Part: Associated</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Short
    <ul>
      <li>ADJ: должны, должно, возможно, должен, известна, необходимо, похоже, равна, сама, сами</li>
      <li>VERB: использованы, объявлен, расположены, включены, закрыт, написано, освобожден, позволено, построены, предъявлено</li>
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
      <li>AUX: был, были, было, будет, была, является, быть, будут, буду, являются</li>
      <li>VERB: был, может, было, является, быть, была, были, говорит, есть, нет</li>
      <li>VERB-Inf: отправлять, быть, держать, доставлять, изготавливать, находить, покупать, прогнозировать, убивать</li>
      <li>VERB-Part: включая, будучи, используя, начиная, играя, Выражаясь, Живущие, Загрязняющие, Обладающий, Переписываясь</li>
      <li>X: Go, Breaking, Buck, Didn't, Don, Knew, Knuck, Like, Love, Metti</li>
      <li>X-Part: Breaking</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Perf
    <ul>
      <li>AUX: начала</li>
      <li>VERB: сказал, сделать, привести, получить, стало, вернуться, заявил, стал, стать, найти</li>
      <li>VERB-Inf: вернуться, достичь, задать, найти, определить, организовать, позволить, покинуть, получить, прервать</li>
      <li>VERB-Part: потраченное, Соединенные, Соединенных, выращенных, изменив, оставшихся, построив, сделанных, сформированным, Вышедший</li>
      <li>X-Part: Associated</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>VERB: Давайте, будь, смотрите</li>
      <li>X: Don, Metti</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX: был, были, было, будет, была, является, будут, буду, начала, являются</li>
      <li>VERB: был, может, было, является, сказал, была, были, говорит, есть, стало</li>
      <li>X: Buck, Didn't, Knew, Knuck, Like, Love, Thought</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>AUX: будет, будут, буду</li>
      <li>VERB: будет, будут, придется, станет, повлияет, получит, Введут, Разрешу, войдет, выдадут</li>
      <li>X: Knuck</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX: был, были, было, была, начала</li>
      <li>VERB: был, было, сказал, была, были, стало, заявил, стал, сказала, получили</li>
      <li>VERB-Part: потраченное, Соединенные, Соединенных, выращенных, оставшихся, сделанных, сформированным, Вышедший, Лишившиеся, Сведенная</li>
      <li>X: Associated, Didn't, Knew, Like, Thought</li>
      <li>X-Part: Associated</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX: является, являются</li>
      <li>VERB: может, является, говорит, есть, могут, находится, имеет, работает, составляет, делает</li>
      <li>VERB-Part: Живущие, Загрязняющие, Обладающий, Ухудшающееся, Финансируемые, бегущим, боящихся, ведомые, верующим, включающее</li>
      <li>X: Buck, Love</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Act
    <ul>
      <li>VERB: оставшихся, Вышедший, Живущие, Загрязняющие, Лишившиеся, Обладающий, Спешивший, Ухудшающееся, бегущим, боящихся</li>
      <li>VERB-Part: оставшихся, Вышедший, Живущие, Загрязняющие, Лишившиеся, Обладающий, Спешивший, Ухудшающееся, бегущим, боящихся</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>VERB: использованы, объявлен, потраченное, расположены, Соединенные, Соединенных, включены, выращенных, закрыт, написано</li>
      <li>VERB-Part: потраченное, Соединенные, Соединенных, выращенных, сделанных, сформированным, Сведенная, Соединенным, Сформированная, Финансируемые</li>
      <li>X-Part: Associated</li>
    </ul>
  </li>
</ul>


<h3>Pronouns, Determiners, Quantifiers</h3>


<ul>
  <li><a>PronType</a></li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>DET: его, их, ее, н., наше, нашей, мой, её, моей, мое</li>
      <li>X: My, Her</li>
    </ul>
  </li>
</ul>



<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>DET: своей, свои, свою, своих, своего, своем, своим, свой, свое, своими</li>
      <li>PRON: себя, собой, себе</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX: буду</li>
      <li>DET: н., наше, нашей, мой, моей, мои, моих, наша, наши, наших</li>
      <li>PRON: я, мы, мне, нас, меня, нам</li>
      <li>VERB: можем, думаю, видим, думаем, могу, Разрешу, Ухожу, возвращаюсь, встречаемся, говорим</li>
      <li>X: My, Knuck, Love, Me</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>PRON: вы, вас, Вам, ты</li>
      <li>VERB: Давайте, будь, делаешь, ждешь, заплатишь, знаете, найдете, ругаетесь, сидишь, скажешь</li>
      <li>X: You, Buck, Don, Metti, Ya</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX: будет, является, будут, являются</li>
      <li>DET: его, их, ее, её</li>
      <li>PRON: он, они, она, его, них, ее, ему, него, им, их</li>
      <li>VERB: может, является, говорит, есть, могут, находится, имеет, будет, работает, составляет</li>
      <li>X: Her</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Gender[psor]</a></li>
</ul>

<ul>
  <li>Fem
    <ul>
      <li>DET: ее, её</li>
      <li>X: Her</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>DET: его</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Number[psor]</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>DET: их, н., наше, нашей, наша, наши, наших</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>DET: его, ее, мой, её, моей, мое, моего, мои, моих</li>
      <li>X: My, Her</li>
    </ul>
  </li>
</ul>

<h3>Other Features</h3>


<ul>
  <li><a>Foreign</a>
    <ul>
      <li>Yes
        <ul>
          <li>X: Victorias, de, las</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 6 lemmas as copulas (<a>cop</a>). Examples: быть, это, стать, AUX, этот, являться.</li>
</ul>

<ul>
<li>This corpus uses 3 lemmas as auxiliaries (<a>aux</a>). Examples: быть, бы, ли.</li>
<li>This corpus uses 1 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: быть.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (4)</li>
      <li>VERB--NOUN-Acc (1)</li>
      <li>VERB--NOUN-Gen (29)</li>
      <li>VERB--NOUN-Gen-ADP(из) (1)</li>
      <li>VERB--NOUN-Nom (562)</li>
      <li>VERB--NOUN-Nom-ADP(в) (1)</li>
      <li>VERB--PRON-Acc (1)</li>
      <li>VERB--PRON-Gen (2)</li>
      <li>VERB--PRON-Nom (260)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (1)</li>
      <li>VERB--NOUN-Acc (440)</li>
      <li>VERB--NOUN-Gen (51)</li>
      <li>VERB--NOUN-Ins (5)</li>
      <li>VERB--PRON-Acc (62)</li>
      <li>VERB--PRON-Gen (1)</li>
      <li>VERB-Inf--NOUN-Acc (17)</li>
      <li>VERB-Inf--NOUN-Gen (1)</li>
      <li>VERB-Inf--PRON-Acc (3)</li>
      <li>VERB-Part--NOUN-Acc (55)</li>
      <li>VERB-Part--NOUN-Gen (8)</li>
      <li>VERB-Part--NOUN-Gen-ADP(до) (1)</li>
      <li>VERB-Part--PRON-Acc (4)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--NOUN-Dat (40)</li>
      <li>VERB--NOUN-Gen (6)</li>
      <li>VERB--NOUN-Ins (76)</li>
      <li>VERB--NOUN-Ins-ADP(более) (1)</li>
      <li>VERB--PRON-Dat (34)</li>
      <li>VERB--PRON-Ins (5)</li>
      <li>VERB-Inf--NOUN-Ins (1)</li>
      <li>VERB-Inf--NOUN-Nom (1)</li>
      <li>VERB-Part--NOUN-Dat (2)</li>
      <li>VERB-Part--NOUN-Ins (21)</li>
      <li>VERB-Part--PRON-Ins (2)</li>
    </ul>
  </li>
</ul>



<h3>Verbs with Reflexive Core Objects</h3>

<ul>
  <li>This corpus contains 12 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: показать себя, представлять собой, чувствовать себя, защитить себя, называть себя, подключить себе, попробовать себя, посвятить себя, пробить себе, провозглашать себя, проявить себя, являть собой</li>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 6 relation subtypes: <a>acl:relcl</a>, <a>aux:pass</a>, <a>flat:foreign</a>, <a>flat:name</a>, <a>nsubj:pass</a>, <a>nummod:gov</a></li>
<li>The following 5 relation types are not used in this corpus at all: <a>dislocated</a>, <a>clf</a>, <a>list</a>, <a>reparandum</a>, <a>dep</a></li>
</ul>
