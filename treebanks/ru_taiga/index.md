---
layout: base
title:  'UD_Russian-Taiga'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Russian Taiga

Language: [Russian](../ru/overview/ru-hub.html) (code: `ru`)<br/>
Family: Indo-European, Slavic

This treebank has been part of Universal Dependencies since the UD v2.2 release.

The following people have contributed to making this treebank part of UD: Olga Lyashevskaya, Olga Rudina.

Repository: [UD_Russian-Taiga](https://github.com/UniversalDependencies/UD_Russian-Taiga)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udru_taiga)

License: CC BY-SA 4.0

Genre: blog, news, poetry, social

Questions, comments?
General annotation questions (either Russian-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Russian-Taiga/issues).
If you want to collaborate, please contact [olesar&nbsp;(æt)&nbsp;yandex&nbsp;•&nbsp;ru].
Development of the treebank happens outside the UD repository.
If there are bugs, either the original data source or the conversion procedure must be fixed.
Do not submit pull requests against the UD repository.

| Annotation | Source |
|------------|--------|
| Lemmas | annotated manually, natively in UD style |
| UPOS | annotated manually, natively in UD style |
| XPOS | annotated manually |
| Features | annotated manually, natively in UD style |
| Relations | annotated manually, natively in UD style |

## Description

Universal Dependencies treebank based on data samples extracted from Taiga Corpus and MorphoRuEval-2017 text collections.



UD Russian Taiga has been developed at the School of Linguistics, National Research University Higher School of Economics in Moscow (HSE/Vyshka). The selection of texts is meant to represent those registers that have not been covered by UD Russian SynTagRus and UD Russian Google Stanford Dependencies, mainly e-communication (blogs and social media). The sentences are extracted from two open data collections. Taiga Corpus ([https://tatianashavrina.github.io/taiga_site/](https://tatianashavrina.github.io/taiga_site/)) is an open-source corpus for machine learning collected by students as part of the curriculum of the MA Program in Computational Linguistics at HSE. MorphoRuEval 2017 text collections ([https://github.com/dialogue-evaluation/morphoRuEval-2017](https://github.com/dialogue-evaluation/morphoRuEval-2017)) is an output of the RuEval shared task 'Evaluation of Russian NLP: Morphological analysis, [http://www.dialog-21.ru/en/evaluation/2017/morphology/](http://www.dialog-21.ru/en/evaluation/2017/morphology/)).

The plain text data were tokenized, lemmatized and parsed using UDpipe ([http://ufal.mff.cuni.cz/udpipe](http://ufal.mff.cuni.cz/udpipe)) and checked manually. Corrections were made at all levels: tokenization, lemmata, pos, features, dependency relations.

## Acknowledgments

We are grateful to all the contributors to the original open Russian data collections and especially to Tatiana Shavrina (Taiga) and Alena Fenogenova (MorphoRuEval-2017 data set).

## References

* Lyashevskaya, Olga, Kira Droganova, Daniel Zeman, Maria Alexeeva, Tatiana Gavrilova, Nina Mustafina, and Elena Shakurova.
(2016). Universal Dependencies for Russian: a New Syntactic Dependencies Tagset. In: Series: Linguistics, WP BRP 44/LNG/2016. Moscow.

* Sorokin, Andrey, Tatiana Shavrina, Olga Lyashevskaya, Victor Bocharov, Svetlana Alexeeva, Kira Droganova, Alena Fenogenova, and Dmitry Granovsky. (2017). MorphoRuEval-2017: an Evaluation Track for the Automatic Morphological Analysis Methods for Russian. In Computational Linguistics and Intellectual Technologies, Proceedings of Dialog 2017, Moscow. No 16 (23). Vol. 1, 297-313.

* Lyashevskaya, Olga, Victor Bocharov, Alexey Sorokin, Tatiana Shavrina, Dmitry Granovsky, and Svetlana Alexeeva. (2017).
Text collections for evaluation of Russian morphological taggers. Jazykovedny Casopis, 68 (2), 2017: 258-267.

* Shavrina, Tatiana, Olga Shapovalova. (2017) To the methodology of corpus construction for machine learning: «Taiga» syntax tree corpus and parser. In Proceedings of the International Conference "CORPORA 2017", Saint-Petersbourg, Russia.


<pre>

# Statistics of UD Russian Taiga

## POS Tags

[ADJ](ru_taiga-pos-ADJ.html) – [ADP](ru_taiga-pos-ADP.html) – [ADV](ru_taiga-pos-ADV.html) – [AUX](ru_taiga-pos-AUX.html) – [CCONJ](ru_taiga-pos-CCONJ.html) – [DET](ru_taiga-pos-DET.html) – [INTJ](ru_taiga-pos-INTJ.html) – [NOUN](ru_taiga-pos-NOUN.html) – [NUM](ru_taiga-pos-NUM.html) – [PART](ru_taiga-pos-PART.html) – [PRON](ru_taiga-pos-PRON.html) – [PROPN](ru_taiga-pos-PROPN.html) – [PUNCT](ru_taiga-pos-PUNCT.html) – [SCONJ](ru_taiga-pos-SCONJ.html) – [SYM](ru_taiga-pos-SYM.html) – [VERB](ru_taiga-pos-VERB.html) – [X](ru_taiga-pos-X.html)

## Features

[Abbr](ru_taiga-feat-Abbr.html) – [Animacy](ru_taiga-feat-Animacy.html) – [Aspect](ru_taiga-feat-Aspect.html) – [Case](ru_taiga-feat-Case.html) – [Degree](ru_taiga-feat-Degree.html) – [Foreign](ru_taiga-feat-Foreign.html) – [Gender](ru_taiga-feat-Gender.html) – [Mood](ru_taiga-feat-Mood.html) – [Number](ru_taiga-feat-Number.html) – [Person](ru_taiga-feat-Person.html) – [Polarity](ru_taiga-feat-Polarity.html) – [Tense](ru_taiga-feat-Tense.html) – [Variant](ru_taiga-feat-Variant.html) – [VerbForm](ru_taiga-feat-VerbForm.html) – [Voice](ru_taiga-feat-Voice.html)

## Relations

[acl](ru_taiga-dep-acl.html) – [acl:relcl](ru_taiga-dep-acl-relcl.html) – [advcl](ru_taiga-dep-advcl.html) – [advmod](ru_taiga-dep-advmod.html) – [amod](ru_taiga-dep-amod.html) – [appos](ru_taiga-dep-appos.html) – [aux](ru_taiga-dep-aux.html) – [aux:pass](ru_taiga-dep-aux-pass.html) – [case](ru_taiga-dep-case.html) – [cc](ru_taiga-dep-cc.html) – [ccomp](ru_taiga-dep-ccomp.html) – [compound](ru_taiga-dep-compound.html) – [conj](ru_taiga-dep-conj.html) – [cop](ru_taiga-dep-cop.html) – [csubj](ru_taiga-dep-csubj.html) – [dep](ru_taiga-dep-dep.html) – [det](ru_taiga-dep-det.html) – [discourse](ru_taiga-dep-discourse.html) – [dislocated](ru_taiga-dep-dislocated.html) – [expl](ru_taiga-dep-expl.html) – [fixed](ru_taiga-dep-fixed.html) – [flat](ru_taiga-dep-flat.html) – [flat:foreign](ru_taiga-dep-flat-foreign.html) – [flat:name](ru_taiga-dep-flat-name.html) – [goeswith](ru_taiga-dep-goeswith.html) – [iobj](ru_taiga-dep-iobj.html) – [list](ru_taiga-dep-list.html) – [mark](ru_taiga-dep-mark.html) – [nmod](ru_taiga-dep-nmod.html) – [nsubj](ru_taiga-dep-nsubj.html) – [nsubj:pass](ru_taiga-dep-nsubj-pass.html) – [nummod](ru_taiga-dep-nummod.html) – [nummod:entity](ru_taiga-dep-nummod-entity.html) – [nummod:gov](ru_taiga-dep-nummod-gov.html) – [obj](ru_taiga-dep-obj.html) – [obl](ru_taiga-dep-obl.html) – [obl:agent](ru_taiga-dep-obl-agent.html) – [orphan](ru_taiga-dep-orphan.html) – [parataxis](ru_taiga-dep-parataxis.html) – [punct](ru_taiga-dep-punct.html) – [reparandum](ru_taiga-dep-reparandum.html) – [root](ru_taiga-dep-root.html) – [vocative](ru_taiga-dep-vocative.html) – [xcomp](ru_taiga-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 1764 sentences and 20766 tokens.</li>
</ul>

<ul>
<li>This corpus contains 4089 tokens (20%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 204 types of words that contain both letters and punctuation. Examples: @xxxxxx, @yabloko, http://xxxxxx, https://xxxxxx, @Zhirinovskiy, л., т., ст., д., @YouTube, ч., P.S., из-за, п., г., гр., е., какой-то, кто-то, млн., что-то, @xxxxxxx, @yavlinsky, cт., В., Н., а-а, и., как-то, каких-то, кв., кому-то, р., руб., сах., чем-то, чуть-чуть, шт., #MioSole_полезное, #art, #atlasweekend, #bossa_nova, #easy_listening, #echo, #green_sun, #instrumental, #jazz, #life, #performance, #relax</li>
</ul>

<ul>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 17 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a>, <a>X</a></li>
</ul>

<ul>
<li>This corpus contains 52 word types tagged as particles (PART): PROFIT, Але, Мож, Неужели, Неужто, Пускай, ХАЙ, Хэллоу, аж, аль, б, бл@, бля, блять, бляь, будто, бы, ведь, вон, вот, всего, да, даже, досвидания, единственно, еле, ж, же, и, именно, ли, лишь, ль, не, неее, нет, ни, ну, поди, пожалуйста, просто, пусть, разве, те, то, тоже, только, уж, ужели, хоть, хотя, это</li>
</ul>

<ul>
<li>This corpus contains 27 lemmas tagged as pronouns (PRON): все, всё, вы, который, кто, кто-то, мизулина+это, мы, никто, ничто, он, она, они, оно, се, себя, то, тот, ты, у+мы, че, что, что+бы, что-нибудь, что-то, это, я</li>
</ul>

<ul>
<li>This corpus contains 26 lemmas tagged as determiners (DET): ваш, весь, всякий, его, ее, их, каждый, какой, какой-либо, какой-то, любой, мой, наш, некий, некой, некоторый, никакой, один, свой, сей, таков, такой, твой, тот, чей, этот</li>
</ul>

<ul>
<li>Out of the above, 1 lemmas occurred sometimes as PRON and sometimes as DET: тот</li>
</ul>

<ul>
<li>This corpus contains 1 lemmas tagged as auxiliaries (AUX): быть</li>
</ul>

<ul>
<li>Out of the above, 1 lemmas occurred sometimes as AUX and sometimes as VERB: быть</li>
</ul>

<ul>
<li>There are 4 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Conv
  <ul>
    <li>AUX: будучи</li>
    <li>VERB: говоря, судя, пытаясь, Включая, Глядя, Занимаясь, Исходя, Настя, Находясь, Помешивая</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: будет, была, было, был, есть, буду, были, будут, будем, будешь</li>
    <li>VERB: есть, может, нет, было, стоит, знает, сидит, будет, бывает, могут</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: быть</li>
    <li>VERB: быть, добавить, показать, сделать, делать, думать, жить, смотреть, голосовать, залить</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>VERB: Восхищена, изложенным, написано, организованных, Входящим, Гомонящих, Куплена, Понаехавшие, Приведенные, Приглашён</li>
  </ul>
  </li>
</ul>

<h3>Nominal Features</h3>


<li><a>Gender</a>

  <ul>
    <li>Fem
      <ul>
        <li>ADJ: дохлой, гражданской, Единой, Гражданская, сама, Единая, большую, вторая, лучшая, неверная</li>
        <li>AUX-Fin: была</li>
        <li>DET: своей, такая, этой, моя, моей, нашей, та, такой, эту, каждой</li>
        <li>NOUN: баба, партии, пропитка, воды, минут, партия, власти, партию, капель, любви</li>
        <li>NUM: две, одной, одна, Тысячи, одну, тыс, тысяч</li>
        <li>PRON: она, ней, ей, её, ее, ею, неё, нее</li>
        <li>PROPN: ЛДПР, России, Россия, кпрф, Госдумы, ЕР, Анны, Украины, госдуму, Анна</li>
        <li>VERB: была, Восхищена, представила, приготовила, прошла, решила, сказала, стала, Встала, Дала</li>
        <li>VERB-Fin: была, представила, приготовила, прошла, решила, сказала, стала, Встала, Дала, Забила</li>
        <li>VERB-Part: Восхищена, Куплена, выдуманной, заклеена, заложена, зашкаливаюшей, нагретую, надета, нарисованная, наступившей</li>
      </ul>
    </li>
  </ul>

  <ul>
    <li>Masc
      <ul>
        <li>ADJ: сам, первый, Европейский, нужен, готов, чистый, второй, золотой, кофейный, молодой</li>
        <li>AUX-Fin: был</li>
        <li>DET: этот, мой, каждый, тот, какой, свой, такой, ваш, наш, один</li>
        <li>NOUN: раз, лет, день, человек, детей, мл, детям, года, люди, раза</li>
        <li>NUM: один, одного, два, оба, 0, одному, полтора</li>
        <li>PRON: он, кто, его, кого, ему, кому, него, ним, нем, нему</li>
        <li>PROPN: жириновский, парнас, жириновского, Женя, жирик, крым, Крыму, Явлинский, @YouTube, Путина</li>
        <li>SYM: %, $</li>
        <li>VERB-Fin: сказал, решил, стал, успел, заявил, начал, превратился, сделал, устал, Проснулся</li>
        <li>VERB-Part: Приглашён, Уничножен, блюдет, верующим, воспетого, воспринимаемого, вставший, выживший, гарантирован, говорящему</li>
        <li>X: #НН</li>
      </ul>
    </li>
  </ul>

  <ul>
    <li>Neut
      <ul>
        <li>ADJ: нужно, самое, должно, интересно, общем, сложно, странно, хорошо, Артикуляционное, Законодательного</li>
        <li>AUX-Fin: было</li>
        <li>DET: такое, все, это, всё, своё, то, Наше, мое, Вашему, КАКОЕ-ТО</li>
        <li>NOUN: место, время, стада, видео, дело, кипения, времени, движения, лицо, масло</li>
        <li>NUM: одно, два, одного, одним</li>
        <li>PRON: это, что, то, все, всё, том, чем, этого, всего, чего</li>
        <li>PROPN: яблоко, яблока, @yabloko, Приднестровье, АВТО.РУ, АТО, Бутово, ГУЖА, Едро, Жириновском</li>
        <li>VERB-Fin: было, случилось, понравилось, осталось, получилось, прошло, Покрывало, впечатлило, выдвинуло, делось</li>
        <li>VERB-Part: написано, имеющее, исходящим, обжаловано, опубликовано, освоено, переврано, поставлено, потерянного, прекращено</li>
      </ul>
    </li>
  </ul>

  <ul>
  </ul>
</li>

<li><a>Animacy</a>

  <ul>
    <li>Anim
      <ul>
        <li>ADJ: ПРАВОСЛАВНЫХ, воцерковленного, главного, дебильных, достойных, другого, подобных, полусонных, русских, царских</li>
        <li>DET: всех, наших, такого, этих</li>
        <li>NOUN: человек, баба, детей, детям, люди, депутат, депутаты, людей, дети, лошади</li>
        <li>NUM: двоих, нескольких</li>
        <li>PRON: кто, все, всем, кого, кому, всех, кем, кто-то, кому-то, кого-то</li>
        <li>PROPN: жириновский, жириновского, Женя, жирик, Явлинский, Анны, Путина, Анна, Владимир, Касьянов</li>
        <li>VERB-Part: желающих, обвиняемого, указаных</li>
        <li>X: #НН</li>
      </ul>
    </li>
  </ul>

  <ul>
    <li>Inan
      <ul>
        <li>ADJ: первый, Европейский, кофейный, круговые, лимонный, последние, родные, широкий, 20-е, 5%-й</li>
        <li>DET: все, этот, свой, каждый, весь, мой, наш, один, тот, Ваши</li>
        <li>NOUN: раз, лет, день, мл, партии, пропитка, воды, минут, партия, власти</li>
        <li>NUM: несколько, один, два, две, 0, Тысячи, столько, три, тыс, тысяч</li>
        <li>PRON: это, что, то, все, всё, том, чем, этого, всего, чего</li>
        <li>PROPN: ЛДПР, парнас, яблоко, России, Россия, кпрф, крым, Госдумы, ЕР, яблока</li>
        <li>SYM: %, $</li>
        <li>VERB: гаснущие, зажатый, интересующие, осознанный, предложенные, проверенный, промерзший, прыг, растворенный, скок</li>
        <li>VERB-Part: гаснущие, зажатый, интересующие, осознанный, предложенные, проверенный, промерзший, растворенный, темнеющие, устанавливающие</li>
      </ul>
    </li>
  </ul>

  <ul>
  </ul>
</li>

<li><a>Number</a>

  <ul>
    <li>Plur
      <ul>
        <li>ADJ: разных, других, дохлых, нужны, другие, православных, неземные, последние, родные, русских</li>
        <li>AUX-Fin: были, будут, будем, будете</li>
        <li>DET: все, эти, всех, мои, тех, свои, такие, своих, всем, своими</li>
        <li>NOUN: лет, раз, детей, детям, минут, люди, выборах, капель, депутаты, ингредиенты</li>
        <li>NUM: 0, Тысячи, тыс, тысяч</li>
        <li>PRON: вы, мы, нас, вас, их, они, вам, нам, им, все</li>
        <li>PROPN: США, ВС, Весах, Горациев, Мальдивах, Марсов, Можайки, Романовых, Сочи, логаны</li>
        <li>SYM: %, $</li>
        <li>VERB: могут, говорят, есть, давайте, делаем, знаете, надавите, следят, смогли, шли</li>
        <li>VERB-Fin: могут, говорят, есть, давайте, делаем, знаете, надавите, следят, смогли, шли</li>
        <li>VERB-Part: изложенным, организованных, Входящим, Гомонящих, Понаехавшие, Приведенные, Прогретых, битых, вскинутые, гаснущие</li>
      </ul>
    </li>
  </ul>

  <ul>
    <li>Sing
      <ul>
        <li>ADJ: нужно, дохлой, сам, гражданской, первый, Европейский, Единой, нужен, самое, Гражданская</li>
        <li>AUX-Fin: будет, была, было, был, есть, буду, будешь, Будь</li>
        <li>DET: этот, мой, своей, такой, такая, каждый, какой, тот, этой, моя</li>
        <li>NOUN: день, баба, мл, партии, пропитка, человек, партия, воды, года, партию</li>
        <li>PRON: я, это, что, ты, мне, меня, он, кто, она, тебя</li>
        <li>PROPN: жириновский, ЛДПР, парнас, яблоко, России, жириновского, Женя, Россия, кпрф, жирик</li>
        <li>SYM: $, %</li>
        <li>VERB-Fin: есть, может, нет, было, стоит, знает, сидит, будет, бывает, сказал</li>
        <li>VERB-Part: Восхищена, написано, Куплена, Приглашён, Уничножен, блюдет, верующим, воспетого, воспринимаемого, вставший</li>
        <li>X: #НН</li>
      </ul>
    </li>
  </ul>

  <ul>
  </ul>
</li>

<li><a>Case</a>

  <ul>
    <li>Acc
      <ul>
        <li>ADJ: большую, первый, Европейский, кофейный, красную, круговые, лимонный, нижнюю, новогоднюю, новую</li>
        <li>DET: все, эти, свои, этот, свой, каждый, эту, всех, нашу, какие</li>
        <li>NOUN: день, партию, раз, голову, рот, годы, комнату, сироп, сок, кастрюлю</li>
        <li>NUM: несколько, много, один, восемь, сто, два, двадцать, две, сколько, четырнадцать</li>
        <li>PRON: их, что, это, меня, себя, его, вас, тебя, нас, все</li>
        <li>PROPN: крым, госдуму, ПАРНАС, Жириновского, Россию, Гиркина, Жирика, Зюганова, Парнас, Семина</li>
        <li>VERB-Part: гаснущие, желающих, зажатый, заплеванные, интересующие, нагретую, обвиняемого, осознанный, позволяющую, предложенные</li>
      </ul>
    </li>
  </ul>

  <ul>
    <li>Dat
      <ul>
        <li>ADJ: другому, 2м, Великой, Гражданской, Русской, Самым, беглым, библейским, больной, ведущим</li>
        <li>DET: всем, каждому, моим, своему, своим, этому, Вашему, МОЕМУ, Этой, нашей</li>
        <li>NOUN: детям, Взрослым, времени, бандиту, богу, государству, депутату, друзьям, людям, малышу</li>
        <li>NUM: пяти, стольким, одному</li>
        <li>PRON: мне, себе, вам, нам, им, тебе, всем, ему, кому, ей</li>
        <li>PROPN: Амстердаму, Анастасии, Андреянову, Анне, Балеевой, Васильевой, Вениаминовне, Джатдоеву, Жириновскому, Западу</li>
        <li>VERB: изложенным, нечему, Входящим, говорящему, действующим, понаехавшим, уничтоженным</li>
        <li>VERB-Part: изложенным, Входящим, говорящему, действующим, понаехавшим, уничтоженным</li>
      </ul>
    </li>
  </ul>

  <ul>
    <li>Gen
      <ul>
        <li>ADJ: разных, Единой, гражданской, других, дохлых, самого, дальнего, другого, русского, Законодательного</li>
        <li>DET: всех, тех, моего, своей, своих, таких, этих, каждого, наших, никакого</li>
        <li>NOUN: лет, раз, детей, партии, минут, воды, года, раза, капель, пропитки</li>
        <li>NUM: одного, двух, двоих, многих, 30-ти, восьми, двадцати, десяти, пяти, трех</li>
        <li>PRON: меня, нас, вас, ничего, тебя, которого, них, этого, всего, кого</li>
        <li>PROPN: России, ЛДПР, жириновского, Госдумы, яблока, Анны, Путина, Украины, ЕР, КПРФ</li>
        <li>SYM: %, $</li>
        <li>VERB: нечего, организованных, Гомонящих, Прогретых, битых, воспетого, воспринимаемого, выдуманной, жертвующего, живущих</li>
        <li>VERB-Part: организованных, Гомонящих, Прогретых, битых, воспетого, воспринимаемого, выдуманной, жертвующего, живущих, заключенного</li>
        <li>X: Анти</li>
      </ul>
    </li>
  </ul>

  <ul>
    <li>Ins
      <ul>
        <li>ADJ: Божьим, верхними, горячей, другой, игрушечным, русскоязычным, тяжелым, 20-ми, Высшей, Лучшим</li>
        <li>DET: своими, своей, таким, каждым, моей, такой, теми, этими, всей, всеми</li>
        <li>NOUN: помощью, водой, днем, P.S., головой, границей, детьми, зимой, зубками, кремом</li>
        <li>NUM: двумя, одним</li>
        <li>PRON: собой, вами, чем, ним, нами, ней, ничем, им, кем, тем</li>
        <li>PROPN: Зюгановым, Анной, Боровом, Вадимом, Вассерманом, Мальцевым, Морозом, Пауком, Путиным, РФ</li>
        <li>VERB-Part: верующим, исходящим, освобождаемой, оформленным, перепрыгивающими, пи...дящим, полученной, представлявшим, произнесённой, проходящим</li>
      </ul>
    </li>
  </ul>

  <ul>
    <li>Loc
      <ul>
        <li>ADJ: дохлой, общем, чужом, водяной, прямом, русском, тяжелых, 1996-м, 90-х, астрономическом</li>
        <li>DET: моих, своей, этом, каждой, каких, моей, нашей, нашем, своем, твоих</li>
        <li>NOUN: выборах, голове, году, жизни, курсе, лошади, мире, работе, семье, стране</li>
        <li>NUM: трех, двух, одной</li>
        <li>PRON: том, которой, этом, котором, нем, чем, которых, мне, ней, тебе</li>
        <li>PROPN: Крыму, Москве, донбассе, Госдуме, Кремле, Латвии, Перми, Питере, России, Украине</li>
        <li>VERB-Part: действующем, затерявшемся, оккупированном, оставшемся</li>
      </ul>
    </li>
  </ul>

  <ul>
    <li>Nom
      <ul>
        <li>ADJ: сам, самое, Гражданская, сама, Европейский, Единая, вторая, другие, золотой, лучшая</li>
        <li>DET: этот, все, мои, мой, такая, моя, такой, тот, какой, та</li>
        <li>NOUN: баба, мл, пропитка, человек, партия, люди, депутат, депутаты, место, цена</li>
        <li>NUM: три, сколько, один, одно, восемь, два, двое, много, несколько, столько</li>
        <li>PRON: я, это, вы, ты, он, что, мы, кто, она, они</li>
        <li>PROPN: жириновский, Яблоко, парнас, Женя, Россия, ЛДПР, жирик, Явлинский, Анна, Владимир</li>
        <li>VERB-Part: Понаехавшие, Приведенные, вскинутые, вставший, выживший, жующий, забитый, имеющее, купившие, нарисованная</li>
        <li>X: #НН</li>
      </ul>
    </li>
  </ul>

  <ul>
    <li>Par
      <ul>
        <li>NOUN: разу, толку</li>
        <li>PRON: чего</li>
      </ul>
    </li>
  </ul>

  <ul>
    <li>Voc
      <ul>
        <li>NOUN: Боже, ребят</li>
      </ul>
    </li>
  </ul>

  <ul>
  </ul>
</li>





<h3>Degree and Polarity</h3>


<li><a>Degree</a>

  <ul>
    <li>Cmp
      <ul>
        <li>ADJ: лучше, старше, выше, дороже, легче, сильнее, Гнилее, беспомощней, бестактнее, ближе</li>
        <li>ADV: больше, более, дальше, лучше, менее, быстрее, раньше, ащщще, далее, подальше</li>
        <li>NUM: больше, меньше</li>
      </ul>
    </li>
  </ul>

  <ul>
    <li>Pos
      <ul>
        <li>ADJ: нужно, дохлой, разных, сам, гражданской, других, первый, Европейский, Единой, дохлых</li>
        <li>ADV: так, как, там, еще, где, уже, теперь, потом, ещё, очень</li>
        <li>VERB: можно, надо, жаль, против, нах, охота</li>
      </ul>
    </li>
  </ul>

  <ul>
  </ul>
</li>

<li><a>Polarity</a>

  <ul>
    <li>Neg
      <ul>
        <li>CCONJ: ни</li>
        <li>PART: не, ни, неее</li>
      </ul>
    </li>
  </ul>

  <ul>
  </ul>
</li>

<li><a>Variant</a>

  <ul>
    <li>Short
      <ul>
        <li>ADJ: нужно, нужен, нужны, готов, должно, интересно, сложно, странно, уверена, хорошо</li>
        <li>DET: Такова, таков</li>
        <li>VERB-Part: Восхищена, написано, Куплена, Приглашён, Уничножен, блюдет, гарантирован, заклеена, закрыт, заложена</li>
      </ul>
    </li>
  </ul>

  <ul>
  </ul>
</li>

<h3>Verbal Features</h3>


<li><a>Aspect</a>

  <ul>
    <li>Imp
      <ul>
        <li>AUX-Conv: будучи</li>
        <li>AUX-Fin: будет, была, было, был, есть, буду, были, будут, будем, будешь</li>
        <li>AUX-Inf: быть</li>
        <li>VERB-Conv: говоря, судя, пытаясь, Включая, Глядя, Занимаясь, Исходя, Настя, Находясь, Помешивая</li>
        <li>VERB-Fin: есть, может, нет, было, стоит, знает, сидит, будет, бывает, могут</li>
        <li>VERB-Inf: быть, делать, думать, жить, смотреть, голосовать, видеть, размешать, идти, скакать</li>
        <li>VERB-Part: Входящим, Гомонящих, блюдет, верующим, воспринимаемого, вставший, гаснущие, говорящему, действующем, действующим</li>
      </ul>
    </li>
  </ul>

  <ul>
    <li>Perf
      <ul>
        <li>VERB-Conv: вскинув, выйдя, доведя, завидев, задрав, отбросив, открыв, повязав, попав, посмотрев</li>
        <li>VERB-Fin: сказал, решил, случилось, стал, успел, заявил, надавите, начал, получится, понравилось</li>
        <li>VERB-Inf: добавить, показать, сделать, залить, поставить, взять, дать, довести, изменить, потерять</li>
        <li>VERB-Part: Восхищена, изложенным, написано, организованных, Куплена, Понаехавшие, Приведенные, Приглашён, Прогретых, Уничножен</li>
      </ul>
    </li>
  </ul>

  <ul>
  </ul>
</li>

<li><a>Mood</a>

  <ul>
    <li>Cnd
      <ul>
        <li>PART: бы, б</li>
        <li>SCONJ: чтобы, чтоб</li>
      </ul>
    </li>
  </ul>

  <ul>
    <li>Imp
      <ul>
        <li>AUX-Fin: Будь</li>
        <li>VERB-Fin: давайте, надавите, Покажи, Сохраните, верни, дайте, держись, живите, иди, извини</li>
      </ul>
    </li>
  </ul>

  <ul>
    <li>Ind
      <ul>
        <li>AUX-Fin: будет, была, было, был, есть, буду, были, будут, будем, будешь</li>
        <li>VERB-Fin: есть, может, нет, было, стоит, знает, сидит, будет, бывает, могут</li>
      </ul>
    </li>
  </ul>

  <ul>
  </ul>
</li>

<li><a>Tense</a>

  <ul>
    <li>Fut
      <ul>
        <li>VERB-Fin: получится, сможет, Поднимем, выйдет, даст, найдут, подадут, покажет, предаст, проголосует</li>
      </ul>
    </li>
  </ul>

  <ul>
    <li>Past
      <ul>
        <li>AUX-Fin: была, было, был, были</li>
        <li>VERB-Conv: вскинув, выйдя, завидев, задрав, отбросив, открыв, повязав, попав, посмотрев, прочитав</li>
        <li>VERB-Fin: было, сказал, решил, случилось, стал, успел, была, заявил, начал, понравилось</li>
        <li>VERB-Part: Восхищена, изложенным, написано, организованных, Куплена, Понаехавшие, Приведенные, Приглашён, Прогретых, Уничножен</li>
      </ul>
    </li>
  </ul>

  <ul>
    <li>Pres
      <ul>
        <li>AUX-Conv: будучи</li>
        <li>AUX-Fin: будет, есть, буду, будут, будем, будешь, будете</li>
        <li>VERB-Conv: говоря, судя, пытаясь, Включая, Глядя, Занимаясь, Исходя, Настя, Находясь, Помешивая</li>
        <li>VERB-Fin: есть, может, нет, стоит, знает, сидит, будет, бывает, могут, говорят</li>
        <li>VERB-Part: Входящим, Гомонящих, верующим, воспринимаемого, гаснущие, говорящему, действующем, действующим, желающих, жертвующего</li>
      </ul>
    </li>
  </ul>

  <ul>
  </ul>
</li>

<li><a>Voice</a>

  <ul>
    <li>Act
      <ul>
        <li>AUX-Conv: будучи</li>
        <li>AUX-Fin: будет, была, было, был, есть, буду, были, будут, будем, будешь</li>
        <li>AUX-Inf: быть</li>
        <li>VERB-Conv: говоря, судя, Включая, Глядя, Исходя, Настя, Помешивая, Преодолевая, Учитывая, взятая</li>
        <li>VERB-Fin: есть, может, нет, было, стоит, знает, сидит, будет, бывает, могут</li>
        <li>VERB-Inf: быть, добавить, показать, сделать, делать, думать, жить, смотреть, голосовать, залить</li>
        <li>VERB-Part: Входящим, Гомонящих, Понаехавшие, верующим, вставший, выживший, гаснущие, говорящему, действующем, действующим</li>
      </ul>
    </li>
  </ul>

  <ul>
    <li>Mid
      <ul>
        <li>VERB-Conv: пытаясь, Занимаясь, Находясь, основываясь, удивившись</li>
        <li>VERB-Fin: называется, случилось, кажется, надеюсь, остается, получается, получится, понравилось, превратился, Проснулся</li>
        <li>VERB-Inf: улыбнуться, заниматься, настояться, Выпендриваться, Нравиться, Обращаться, Прикоснуться, ассимилироваться, бороться, вернуться</li>
        <li>VERB-Part: затерявшемся, касающихся, оставшемся, проворовавшихся, родившиеся, случившегося</li>
      </ul>
    </li>
  </ul>

  <ul>
    <li>Pass
      <ul>
        <li>VERB-Fin: Вбрасывается, Делается, воспитываются, встречался, готовится, использовалась, использовался, используются, истосковались, планируется</li>
        <li>VERB-Inf: приниматься</li>
        <li>VERB-Part: Восхищена, изложенным, написано, организованных, Куплена, Приведенные, Приглашён, Прогретых, Уничножен, битых</li>
      </ul>
    </li>
  </ul>

  <ul>
  </ul>
</li>



<h3>Pronouns, Determiners, Quantifiers</h3>










<li><a>Person</a>

  <ul>
    <li>1
      <ul>
        <li>AUX-Fin: буду, будем</li>
        <li>PRON: я, мне, меня, мы, нас, нам, нами, мной, на, унас</li>
        <li>VERB-Fin: люблю, хочу, могу, вижу, делаем, делаю, думаю, имею, надеюсь, понимаю</li>
      </ul>
    </li>
  </ul>

  <ul>
    <li>2
      <ul>
        <li>AUX-Fin: будешь, Будь, будете</li>
        <li>PRON: вы, ты, вас, тебя, вам, тебе, вами</li>
        <li>VERB-Fin: давайте, знаете, надавите, хочешь, Покажи, Сохраните, верни, дайте, делаете, держись</li>
      </ul>
    </li>
  </ul>

  <ul>
    <li>3
      <ul>
        <li>AUX-Fin: будет, есть, будут</li>
        <li>PRON: он, их, она, они, его, им, них, ему, ней, ним</li>
        <li>VERB-Fin: есть, может, нет, стоит, знает, сидит, будет, бывает, могут, говорят</li>
      </ul>
    </li>
  </ul>

  <ul>
  </ul>
</li>







<h3>Other Features</h3>


<li><a>Abbr</a>
  <ul>
    <li>Yes
      <ul>
        <li>ADJ: ст., ч., cт., кв., п., сах., Б., Гос., Сов, бывш.</li>
        <li>ADP: п</li>
        <li>ADV: д., т., т</li>
        <li>DET: т.</li>
        <li>NOUN: л., г, гр., руб., ст, Щ, вс, вт, д., м.</li>
        <li>PRON: т., кот.</li>
        <li>PROPN: В., Н., П., R., А., Д., Е., З., И., К</li>
        <li>VERB: е., и., созд</li>
      </ul>
    </li>
  </ul>
</li>

<li><a>Foreign</a>
  <ul>
    <li>Yes
      <ul>
        <li>NOUN: RT</li>
        <li>PART: PROFIT, ХАЙ, Хэллоу</li>
        <li>PROPN: ART, ForcePower, iPhone, playstation, Abracadabra, Aluminum, Apple, Bird, Born, Bravoavia</li>
        <li>VERB: МАНДРУЕ</li>
        <li>X: *, Source, via, #art, #atlasweekend, #echo, #green_sun, #life, #performance, #relax</li>
      </ul>
    </li>
  </ul>
</li>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 5 lemmas as copulas (<a>cop</a>). Examples: быть, -, это, —, :.</li>
</ul>

<ul>
<li>This corpus uses 6 lemmas as auxiliaries (<a>aux</a>). Examples: быть, бы, давать, ль, б, пусть.</li>
<li>This corpus uses 1 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: быть.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN-Nom (2)</li>
      <li>VERB--PRON-Nom (2)</li>
      <li>VERB-Fin--NOUN-Gen (35)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(порядка) (1)</li>
      <li>VERB-Fin--NOUN-Nom (348)</li>
      <li>VERB-Fin--NOUN-Nom-ADP(/) (1)</li>
      <li>VERB-Fin--NOUN-Nom-ADP(как) (2)</li>
      <li>VERB-Fin--PRON-Dat (1)</li>
      <li>VERB-Fin--PRON-Gen (6)</li>
      <li>VERB-Fin--PRON-Nom (323)</li>
      <li>VERB-Inf--NOUN-Acc (1)</li>
      <li>VERB-Inf--NOUN-Gen (1)</li>
      <li>VERB-Inf--NOUN-Nom (7)</li>
      <li>VERB-Inf--PRON-Nom (9)</li>
      <li>VERB-Part--NOUN-Nom (4)</li>
      <li>VERB-Part--PRON-Nom (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN-Acc (2)</li>
      <li>VERB--NOUN-Gen (4)</li>
      <li>VERB--PRON-Par (1)</li>
      <li>VERB-Conv--NOUN-Acc (14)</li>
      <li>VERB-Conv--NOUN-Dat (1)</li>
      <li>VERB-Conv--NOUN-Ins (1)</li>
      <li>VERB-Conv--PRON-Acc (4)</li>
      <li>VERB-Fin--NOUN-Acc (330)</li>
      <li>VERB-Fin--NOUN-Acc-ADP(из) (1)</li>
      <li>VERB-Fin--NOUN-Acc-ADP(среди) (1)</li>
      <li>VERB-Fin--NOUN-Dat (6)</li>
      <li>VERB-Fin--NOUN-Gen (38)</li>
      <li>VERB-Fin--NOUN-Ins (13)</li>
      <li>VERB-Fin--NOUN-Nom (4)</li>
      <li>VERB-Fin--PRON (1)</li>
      <li>VERB-Fin--PRON-Acc (81)</li>
      <li>VERB-Fin--PRON-Dat (4)</li>
      <li>VERB-Fin--PRON-Gen (6)</li>
      <li>VERB-Fin--PRON-Ins (4)</li>
      <li>VERB-Inf--NOUN (4)</li>
      <li>VERB-Inf--NOUN-Acc (160)</li>
      <li>VERB-Inf--NOUN-Acc-ADP(на) (1)</li>
      <li>VERB-Inf--NOUN-Dat (2)</li>
      <li>VERB-Inf--NOUN-Gen (10)</li>
      <li>VERB-Inf--NOUN-Gen-ADP(на) (1)</li>
      <li>VERB-Inf--NOUN-Ins (6)</li>
      <li>VERB-Inf--PRON-Acc (30)</li>
      <li>VERB-Inf--PRON-Gen (2)</li>
      <li>VERB-Inf--PRON-Ins (1)</li>
      <li>VERB-Part--NOUN-Acc (10)</li>
      <li>VERB-Part--NOUN-Gen (2)</li>
      <li>VERB-Part--NOUN-Ins (1)</li>
      <li>VERB-Part--PRON-Acc (1)</li>
      <li>VERB-Part--PRON-Ins-ADP(за) (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--NOUN-Ins (1)</li>
      <li>VERB--PRON-Dat (5)</li>
      <li>VERB-Conv--NOUN-Ins (2)</li>
      <li>VERB-Conv--PRON-Dat (1)</li>
      <li>VERB-Fin--NOUN-Dat (32)</li>
      <li>VERB-Fin--NOUN-Dat-ADP(в) (1)</li>
      <li>VERB-Fin--NOUN-Ins (35)</li>
      <li>VERB-Fin--NOUN-Ins-ADP(через) (1)</li>
      <li>VERB-Fin--NOUN-Nom (1)</li>
      <li>VERB-Fin--PRON-Dat (47)</li>
      <li>VERB-Fin--PRON-Ins (4)</li>
      <li>VERB-Fin--PRON-Nom (1)</li>
      <li>VERB-Inf--NOUN (1)</li>
      <li>VERB-Inf--NOUN-Dat (8)</li>
      <li>VERB-Inf--NOUN-Gen (1)</li>
      <li>VERB-Inf--NOUN-Ins (22)</li>
      <li>VERB-Inf--PRON-Dat (13)</li>
      <li>VERB-Inf--PRON-Ins (4)</li>
      <li>VERB-Part--NOUN-Dat (2)</li>
      <li>VERB-Part--NOUN-Ins (10)</li>
      <li>VERB-Part--PRON-Ins (1)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 8 relation subtypes: <a>acl:relcl</a>, <a>aux:pass</a>, <a>flat:foreign</a>, <a>flat:name</a>, <a>nsubj:pass</a>, <a>nummod:entity</a>, <a>nummod:gov</a>, <a>obl:agent</a></li>
<li>The following 1 relation types are not used in this corpus at all: <a>clf</a></li>
</ul>
