---
layout: base
title:  'UD_Russian-Taiga'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Russian Taiga

Language: [Russian](/ru/index.html) (code: `ru`)<br/>
Family: Indo-European, Slavic

This treebank has been part of Universal Dependencies since the UD v2.2 release.

The following people have contributed to making this treebank part of UD: Olga Lyashevskaya, Olga Rudina, Natalia Vlasova, Anna Zhuravleva.

Repository: [UD_Russian-Taiga](https://github.com/UniversalDependencies/UD_Russian-Taiga)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udru_taiga28)<br />
Download all treebanks: [UD 2.8](/#download)

License: CC BY-SA 4.0

Genre: blog, fiction, news, poetry, social, wiki

Questions, comments?
General annotation questions (either Russian-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Russian-Taiga/issues).
If you want to collaborate, please contact [olesar&nbsp;(æt)&nbsp;yandex&nbsp;•&nbsp;ru].
Development of the treebank happens outside the UD repository.
If there are bugs, either the original data source or the conversion procedure must be fixed.
Do not submit pull requests against the UD repository.

| Annotation | Source |
|------------|--------|
| Lemmas | annotated manually |
| UPOS | annotated manually, natively in UD style |
| XPOS | annotated manually |
| Features | annotated manually, natively in UD style |
| Relations | annotated manually, natively in UD style |

## Description

Universal Dependencies treebank is based on data samples extracted from Taiga Corpus and MorphoRuEval-2017 and GramEval-2020 shared tasks collections.



UD Russian Taiga has been developed at the School of Linguistics, National Research University Higher School of Economics in Moscow (HSE/Vyshka). The selection of texts is meant to represent those registers that have not been covered by UD Russian SynTagRus and UD Russian Google Stanford Dependencies, mainly e-communication (blogs and social media). The sentences are extracted from two open data collections. Taiga Corpus ([https://tatianashavrina.github.io/taiga_site/](https://tatianashavrina.github.io/taiga_site/)) is an open-source corpus for machine learning collected by students as part of the curriculum of the MA Program in Computational Linguistics at HSE. MorphoRuEval 2017 text collections ([https://github.com/dialogue-evaluation/morphoRuEval-2017](https://github.com/dialogue-evaluation/morphoRuEval-2017)) is an output of the RuEval shared task 'Evaluation of Russian NLP: Morphological analysis, [http://www.dialog-21.ru/en/evaluation/2017/morphology/](http://www.dialog-21.ru/en/evaluation/2017/morphology/)). GramEval 2020 collection (https://competitions.codalab.org/competitions/22902)[https://competitions.codalab.org/competitions/22902] is an output of the GramEval 2020 Shared Task on Russian Full Morphology and Dependency Parsing which consists of test data for five genres (social, wiki, news, fiction, poetry).

The plain text data were tokenized, lemmatized and parsed using UDpipe ([http://ufal.mff.cuni.cz/udpipe](http://ufal.mff.cuni.cz/udpipe)) and checked manually. Corrections were made at all levels: tokenization, lemmata, pos, features, dependency relations.

## Acknowledgments

We are grateful to all the contributors to the original open Russian data collections and especially to Tatiana Shavrina (Taiga, GramEval-2020) and Alena Fenogenova (MorphoRuEval-2017).

## References

* Lyashevskaya, Olga, Kira Droganova, Daniel Zeman, Maria Alexeeva, Tatiana Gavrilova, Nina Mustafina, and Elena Shakurova.
(2016). Universal Dependencies for Russian: a New Syntactic Dependencies Tagset. In: Series: Linguistics, WP BRP 44/LNG/2016. Moscow.

* Sorokin, Andrey, Tatiana Shavrina, Olga Lyashevskaya, Victor Bocharov, Svetlana Alexeeva, Kira Droganova, Alena Fenogenova, and Dmitry Granovsky. (2017). MorphoRuEval-2017: an Evaluation Track for the Automatic Morphological Analysis Methods for Russian. In Computational Linguistics and Intellectual Technologies, Proceedings of Dialog 2017, Moscow. No 16 (23). Vol. 1, 297-313.

* Lyashevskaya, Olga, Victor Bocharov, Alexey Sorokin, Tatiana Shavrina, Dmitry Granovsky, and Svetlana Alexeeva. (2017).
Text collections for evaluation of Russian morphological taggers. Jazykovedny Casopis, 68 (2), 2017: 258-267.

* Shavrina, Tatiana, Olga Shapovalova. (2017) To the methodology of corpus construction for machine learning: «Taiga» syntax tree corpus and parser. In Proceedings of the International Conference "CORPORA 2017", Saint-Petersbourg, Russia.



# Statistics of UD Russian Taiga

## POS Tags

[ADJ](ru_taiga-pos-ADJ.html) – [ADP](ru_taiga-pos-ADP.html) – [ADV](ru_taiga-pos-ADV.html) – [AUX](ru_taiga-pos-AUX.html) – [CCONJ](ru_taiga-pos-CCONJ.html) – [DET](ru_taiga-pos-DET.html) – [INTJ](ru_taiga-pos-INTJ.html) – [NOUN](ru_taiga-pos-NOUN.html) – [NUM](ru_taiga-pos-NUM.html) – [PART](ru_taiga-pos-PART.html) – [PRON](ru_taiga-pos-PRON.html) – [PROPN](ru_taiga-pos-PROPN.html) – [PUNCT](ru_taiga-pos-PUNCT.html) – [SCONJ](ru_taiga-pos-SCONJ.html) – [SYM](ru_taiga-pos-SYM.html) – [VERB](ru_taiga-pos-VERB.html) – [X](ru_taiga-pos-X.html)

## Features

[Abbr](ru_taiga-feat-Abbr.html) – [Animacy](ru_taiga-feat-Animacy.html) – [Aspect](ru_taiga-feat-Aspect.html) – [Case](ru_taiga-feat-Case.html) – [Degree](ru_taiga-feat-Degree.html) – [Foreign](ru_taiga-feat-Foreign.html) – [Gender](ru_taiga-feat-Gender.html) – [Mood](ru_taiga-feat-Mood.html) – [NameType](ru_taiga-feat-NameType.html) – [Number](ru_taiga-feat-Number.html) – [NumForm](ru_taiga-feat-NumForm.html) – [NumType](ru_taiga-feat-NumType.html) – [Person](ru_taiga-feat-Person.html) – [Polarity](ru_taiga-feat-Polarity.html) – [Poss](ru_taiga-feat-Poss.html) – [PronType](ru_taiga-feat-PronType.html) – [Reflex](ru_taiga-feat-Reflex.html) – [Tense](ru_taiga-feat-Tense.html) – [Typo](ru_taiga-feat-Typo.html) – [Variant](ru_taiga-feat-Variant.html) – [VerbForm](ru_taiga-feat-VerbForm.html) – [Voice](ru_taiga-feat-Voice.html)

## Relations

[acl](ru_taiga-dep-acl.html) – [acl:relcl](ru_taiga-dep-acl-relcl.html) – [advcl](ru_taiga-dep-advcl.html) – [advmod](ru_taiga-dep-advmod.html) – [amod](ru_taiga-dep-amod.html) – [appos](ru_taiga-dep-appos.html) – [aux](ru_taiga-dep-aux.html) – [aux:pass](ru_taiga-dep-aux-pass.html) – [case](ru_taiga-dep-case.html) – [cc](ru_taiga-dep-cc.html) – [ccomp](ru_taiga-dep-ccomp.html) – [compound](ru_taiga-dep-compound.html) – [conj](ru_taiga-dep-conj.html) – [cop](ru_taiga-dep-cop.html) – [csubj](ru_taiga-dep-csubj.html) – [csubj:pass](ru_taiga-dep-csubj-pass.html) – [dep](ru_taiga-dep-dep.html) – [det](ru_taiga-dep-det.html) – [discourse](ru_taiga-dep-discourse.html) – [dislocated](ru_taiga-dep-dislocated.html) – [expl](ru_taiga-dep-expl.html) – [fixed](ru_taiga-dep-fixed.html) – [flat](ru_taiga-dep-flat.html) – [flat:foreign](ru_taiga-dep-flat-foreign.html) – [flat:name](ru_taiga-dep-flat-name.html) – [goeswith](ru_taiga-dep-goeswith.html) – [iobj](ru_taiga-dep-iobj.html) – [list](ru_taiga-dep-list.html) – [mark](ru_taiga-dep-mark.html) – [nmod](ru_taiga-dep-nmod.html) – [nsubj](ru_taiga-dep-nsubj.html) – [nsubj:pass](ru_taiga-dep-nsubj-pass.html) – [nummod](ru_taiga-dep-nummod.html) – [nummod:entity](ru_taiga-dep-nummod-entity.html) – [nummod:gov](ru_taiga-dep-nummod-gov.html) – [obj](ru_taiga-dep-obj.html) – [obl](ru_taiga-dep-obl.html) – [obl:agent](ru_taiga-dep-obl-agent.html) – [orphan](ru_taiga-dep-orphan.html) – [parataxis](ru_taiga-dep-parataxis.html) – [punct](ru_taiga-dep-punct.html) – [reparandum](ru_taiga-dep-reparandum.html) – [root](ru_taiga-dep-root.html) – [vocative](ru_taiga-dep-vocative.html) – [xcomp](ru_taiga-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 17870 sentences and 196996 tokens.</li>
</ul>

<ul>
<li>This corpus contains 36280 tokens (18%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus contains 3 types of words with spaces. Examples: 10 000, 500 000, 60 000</li>
</ul>

<ul>
<li>This corpus contains 1009 types of words that contain both letters and punctuation. Examples: т., @xxxxxx, что-то, из-за, как-то, д., г., к., кто-то, п., где-то, какие-то, какой-то, с., м., @yabloko, е., н., http://xxxxxx, л., р., А., оч., все-таки, в., чего-то, https://xxxxxx, какая-то, кого-то, чем-то, @Zhirinovskiy, кому-то, тыс., что-нибудь, ООО-очень, и., ил., когда-то, почему-то, руб., ст., ч., Пер., Св., какого-то, какое-то, по-прежнему, P., p.s., какую-то</li>
</ul>

<ul>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 17 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a>, <a>X</a></li>
</ul>

<ul>
<li>This corpus contains 124 word types tagged as particles (PART): -таки, Але, Воот, Д, Даа, Идааа, Мож, Неееее, Неужель, Ничего, Пожалуйстаааа, Спасиииибо, ХАЙ, а, ага, аж, ажжжж, аль, буд, будто, бы, было, ведь, во, вон, вот, все, все-таки, всего, всеж, всеже, всё, всё-таки, да, даааа, давайте, даже, дай, де, е, еле, ж, же, жеш, зато, здрасте, и, именно, как, конечно, ладно, ли, либо, лии, лиш, лишь, ль, мб, мол, на, не, небудь, неее, нет, нето, неужели, ни, нибудь, нибуть, норм, нп, ну, пж, пжж, плз, подалуйста, поди, пожалуйста, пожалуйстааа, посквй, прост, просто, прям, прямо, пускай, пусть, разве, с, спасибо, су, супер, та, таже, так, также, таки, там, те, тже, ти-по, тип, типа, типо, то, тоже, ток, тока, токмо, только, только-только, точно, уж, ужели, ужель, хорошо, хоть, хотя, че, чето, что, что-ли, что-то, это, якобы</li>
</ul>

<ul>
<li>This corpus contains 62 lemmas tagged as pronouns (PRON): goeswith, вам, весь, всë, все, всё, вы, друг, дружка, еë, ей, кое-кто, кое-что, кой, котоpый, который, кто, кто-либо, кто-нибудь, кто-то, мне, многие, мы, нашатырь, некоторые, некто, нечто, никто, ничeго, ничего, ничо, ничто, он, он+ж, она, они, оно, се, себя, сей, тo, то, то+же, тоже, тот, ты, у+мы, хто, че, че-то, чем, ченить, что, что+бы, что-ли, что-либо, что-нибудь, что-то, эт, это, этот, я</li>
</ul>

<ul>
<li>This corpus contains 57 lemmas tagged as determiners (DET): cвой, eго, ваш, ваша, весь, все, всего, всякий, всё, другой, его, ее, иной, их, каждый, каков, какой, какой-либо, какой-нибудь, какой-то, какой-то-то, какую-либо, кое-какой, кой, который, любой, многий, мой, наш, некий, некоторый, никакой, никой, один, одним, она, оный, прочий, с+такой, сам, самый, свой, сей, сякой, так, таков, таковой, такой, твой, то, тот, чей, чей-нибудь, чей-то, чейи-нибудь, это, этот</li>
</ul>

<ul>
<li>Out of the above, 11 lemmas occurred sometimes as PRON and sometimes as DET: весь, все, всё, кой, который, она, сей, то, тот, это, этот</li>
</ul>

<ul>
<li>This corpus contains 3 lemmas tagged as auxiliaries (AUX): б, бы, быть</li>
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
    <li>VERB: говоря, судя, начиная, смотря, учитывая, видя, зная, имея, пытаясь, сидя</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: было, был, будет, есть, была, были, будут, буду, будем, будете</li>
    <li>VERB: есть, может, могу, хочу, здравствуйте, стоит, нравится, знаю, подскажите, работает</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: быть</li>
    <li>VERB: делать, найти, сделать, купить, сказать, быть, есть, жить, смотреть, посмотреть</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>AUX: бывшая, бывший</li>
    <li>VERB: завышены, написано, исчезнувших, сказано, связано, сделано, желающих, приложено, знающие, представлен</li>
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
      <li>ADJ: хорошая, вкусная, большая, отличная, удобная, обычная, нужна, должна, новой, большой</li>
      <li>AUX-Fin: была</li>
      <li>AUX-Part: бывшая</li>
      <li>DET: этой, такая, эту, своей, сама, моя, эта, какая, свою, всей</li>
      <li>NOUN: цены, очереди, деньги, жизни, воды, жизнь, парковка, работы, цена, еда</li>
      <li>NUM: две, одной, одна, одну, обеих, двух, обе, двумя, обеим, полторы</li>
      <li>PRON: она, ей, ее, ней, её, которая, нее, неё, которой, которую</li>
      <li>PROPN: россии, Россия, Москве, Ирина, москвы, Катя, Русь, Елена, Надя, Александровна</li>
      <li>VERB-Fin: была, сказала, стала, начала, написала, хотела, могла, решила, понравилась, появилась</li>
      <li>VERB-Part: связана, сделана, завышена, заложена, создана, Восхищена, Построена, Управляющая, включена, госпитализирована</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: хороший, большой, отличный, неплохой, вежливый, обычный, добрый, первый, нужен, красивый</li>
      <li>AUX-Fin: был</li>
      <li>AUX-Part: бывший</li>
      <li>DET: этот, мой, сам, такой, один, каждый, этом, какой, тот, свой</li>
      <li>NOUN: магазин, день, раз, лет, выбор, персонал, года, ассортимент, люди, человек</li>
      <li>NUM: один, два, одного, оба, обоих, одном, полтора, двух, 2-х, Обоим</li>
      <li>PRON: он, кто, его, ему, него, который, ним, никто, кого, которого</li>
      <li>PROPN: Петрович, жириновский, парнас, сочи, Убейд, Генрих, Петровича, крым, Петя, александр</li>
      <li>VERB-Fin: сказал, стал, был, понравился, видел, начал, решил, получил, хотел, мог</li>
      <li>VERB-Part: представлен, организован, построен, потерян, закрыт, занят, открыт, посвящен, улучшенный, установлен</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neut
    <ul>
      <li>ADJ: нужно, хорошо, хорошее, дорого, вкусно, удобно, удобное, чисто, отличное, интересно</li>
      <li>AUX-Fin: было</li>
      <li>DET: это, такое, все, самое, всё, одно, то, такого, какое, свое</li>
      <li>NOUN: место, время, спасибо, фото, обслуживание, времени, качество, кафе, месте, дело</li>
      <li>NUM: одно, одном, два, одного, одним, оба</li>
      <li>PRON: это, что, все, всё, то, ничего, этого, чем, того, что-то</li>
      <li>PROPN: яблоко, яблока, Девяткино, Стереолето, Билибино, Внуково, Домодедово, Дятьково, Известия, Подмосковье</li>
      <li>VERB-Fin: было, понравилось, стало, хотелось, получилось, осталось, пришлось, прошло, удалось, оказалось</li>
      <li>VERB-Inf: закончилось</li>
      <li>VERB-Part: написано, сказано, связано, сделано, приложено, принято, закрыто, связанно, вложено, дано</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Animacy</a></li>
</ul>

<ul>
  <li>Anim
    <ul>
      <li>ADJ: второго, младшего, главного, маленьких, мелкого, нового, остальных, прекрасных, 19-летнего, Будущих</li>
      <li>DET: всех, своих, тех, своего, других, этого, другого, этих, моего, того</li>
      <li>NOUN: люди, человек, сотрудники, людей, детей, продавцы, человека, дети, девушка, парень</li>
      <li>NUM: двоих, одного, двух, четверых, 3-х, 5х, нескольких, пятерых, семерых</li>
      <li>PRON: кто, всем, все, никто, всех, кого, кому, кто-то, кем, никому</li>
      <li>PROPN: Петрович, жириновский, Ирина, Генрих, Петровича, Катя, Петя, александр, Елена, Женя</li>
      <li>VERB-Part: желающих, имеющих, вылетающих, жертвующего, живущих, звавшего, курящих, обвиняемого, обвисшего, организованных</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Inan
    <ul>
      <li>ADJ: первый, последний, данный, последние, следующий, новый, последнее, второй, хорошие, большой</li>
      <li>DET: этот, все, каждый, это, эти, свои, свой, любой, мой, такие</li>
      <li>NOUN: магазин, цены, день, раз, место, время, лет, выбор, персонал, года</li>
      <li>NUM: один, два, три, две, несколько, четыре, одно, оба, двое, пять</li>
      <li>PRON: это, что, все, всё, то, ничего, этого, чем, того, что-то</li>
      <li>PROPN: россии, парнас, Россия, сочи, яблоко, Москве, Убейд, москвы, крым, Русь</li>
      <li>VERB-Part: интересующие, просроченные, связанные, собранные, улучшенный, Заглохший, активированый, асфальтированные, бегущий, вложеный</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: хорошие, вежливые, грамотные, доступные, низкие, разных, большие, приемлемые, вкусные, приветливые</li>
      <li>AUX-Fin: были, будут, будем, есть, будете, будьте, будте</li>
      <li>DET: все, эти, всех, такие, какие, других, мои, свои, этих, сами</li>
      <li>NOUN: цены, лет, люди, раз, сотрудники, людей, детей, деньги, товаров, продавцы</li>
      <li>NUM: стольким</li>
      <li>PRON: они, мы, вы, нас, их, вам, них, вас, которые, всем</li>
      <li>PROPN: Сочи, Дзёмог, Известия, Пятерочек, Альфа-банков, Апатит, Афин, Бальмонты, Бернардацци, Блоки</li>
      <li>VERB-Fin: есть, здравствуйте, подскажите, работают, помогите, могут, говорят, сказали, бывают, делают</li>
      <li>VERB-Inf: навязываються</li>
      <li>VERB-Part: завышены, исчезнувших, желающих, знающие, установлены, связаны, выполнены, открыты, погибшим, работающие</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: хороший, большой, нужно, отличный, неплохой, хорошая, хорошо, хорошее, вежливый, обычный</li>
      <li>AUX-Fin: было, был, будет, была, есть, буду, будь, будешь</li>
      <li>AUX-Part: бывшая, бывший</li>
      <li>DET: этот, такой, мой, этой, сам, это, такое, этом, какой, один</li>
      <li>NOUN: магазин, день, место, время, выбор, персонал, раз, ассортимент, года, спасибо</li>
      <li>NUM: один, одной, одна, одном, одного, одно, одну, одним, оден, одному</li>
      <li>PRON: я, это, что, он, мне, меня, все, она, всё, кто</li>
      <li>PROPN: Петрович, россии, жириновский, парнас, Россия, яблоко, Москве, Ирина, Убейд, москвы</li>
      <li>VERB-Fin: есть, может, могу, хочу, стоит, нравится, знаю, работает, сказал, рекомендую</li>
      <li>VERB-Inf: закончилось</li>
      <li>VERB-Part: написано, сказано, связано, сделано, приложено, представлен, принято, связана, закрыто, организован</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>ADJ: первый, последний, данный, последние, следующий, новую, новый, последнее, второй, большую</li>
      <li>DET: этот, все, эту, каждый, это, эти, свои, свой, свою, любой</li>
      <li>NOUN: время, день, раз, деньги, год, пару, работу, жизнь, вкус, месяц</li>
      <li>NUM: несколько, сколько, два, один, три, две, одну, столько, пол, сто</li>
      <li>PRON: что, его, меня, это, их, себя, все, ее, всё, то</li>
      <li>PROPN: Русь, крым, россию, сочи, Петровича, Турцию, Украину, Ирак, Китай, госдуму</li>
      <li>VERB-Part: желающих, интересующие, просроченные, связанные, имеющих, связанную, собранные, улучшенный, Заглохший, Рекомендованную</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>ADJ: крайней, данному, местному, новой, первому, полной, старшему, разным, разумной, советским</li>
      <li>DET: всем, этому, моему, своему, своей, другому, самой, тем, этим, какому</li>
      <li>NOUN: детям, сожалению, людям, поводу, телефону, городу, мере, словам, времени, мнению</li>
      <li>NUM: одной, обоим, 12-ти, 3м, многим, нескольку, обеим, одному, пяти, стольким</li>
      <li>PRON: мне, ему, вам, ей, всем, себе, им, нам, тебе, кому</li>
      <li>PROPN: Петровичу, Ирине, Наде, Виктору, Гарри, Интерфаксу, Москве, Пересу, России, Фарингейту</li>
      <li>VERB: погибшим, защищавшим, изложенным, некому, Ведущим, Вспотевшим, Входящим, Понимающим, Предпочитающим, Уносимым</li>
      <li>VERB-Part: погибшим, защищавшим, изложенным, Ведущим, Вспотевшим, Входящим, Понимающим, Предпочитающим, Уносимым, видимым</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>ADJ: разных, хорошего, первого, лучших, плохого, доброго, лучшего, особенного, различных, советского</li>
      <li>DET: этого, этой, всех, такого, этих, других, никаких, таких, тех, своего</li>
      <li>NOUN: лет, года, раз, дня, воды, города, товаров, людей, времени, детей</li>
      <li>NUM: двух, одного, одной, нескольких, трех, двоих, обоих, пяти, десяти, обеих</li>
      <li>PRON: меня, ничего, этого, нас, того, них, чего, него, всего, вас</li>
      <li>PROPN: россии, москвы, Востока, Петровича, Путина, Госдумы, Украины, жириновского, Крыма, яблока</li>
      <li>VERB: исчезнувших, нечего, желающих, проходящих, сопутствующих, выходящих, заболевших, называемого, некого, обманутых</li>
      <li>VERB-Part: исчезнувших, желающих, проходящих, сопутствующих, выходящих, заболевших, называемого, обманутых, организованных, питающей</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ins
    <ul>
      <li>ADJ: большим, первым, хорошим, большой, главным, новым, огромным, тяжелым, хорошими, доступными</li>
      <li>DET: таким, своей, этим, своими, такой, всей, другими, своим, каждым, этими</li>
      <li>NOUN: вечером, зимой, летом, ночью, утром, помощью, водой, домом, днем, друзьями</li>
      <li>NUM: двумя, одним, несколькими, одной, пятью, сколькими, тремя, четырьмя, шестью</li>
      <li>PRON: чем, ним, тем, собой, ней, этим, мной, ними, кем, вами</li>
      <li>PROPN: Ириной, Петровичем, Россией, Генрихом, ЗЕТИЛОВЫМ, Зюгановым, Игорем, Михаилом, Петей, Шнидер</li>
      <li>VERB: состоявшимися, вытекающими, закрытыми, оперирующим, Назначенной, Рокочущим, Узаконенными, благоустроенными, бьющейся, верующим</li>
      <li>VERB-Part: состоявшимися, вытекающими, закрытыми, оперирующим, Назначенной, Рокочущим, Узаконенными, благоустроенными, бьющейся, верующим</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Loc
    <ul>
      <li>ADJ: общем, высшем, высоком, основном, втором, новом, первом, хорошем, данном, первых</li>
      <li>DET: этом, том, самом, этой, других, всех, таком, своем, нашем, своих</li>
      <li>NOUN: месте, уровне, году, городе, жизни, случае, целом, итоге, магазинах, центре</li>
      <li>NUM: одном, одной, двух, нескольких, трех, трёх, обоих, 3х, обеих, пяти</li>
      <li>PRON: том, этом, чем, ней, нем, себе, них, котором, чём, которой</li>
      <li>PROPN: Москве, России, Сочи, крыму, Ираке, Петербурге, Туре, Украине, Питере, Франции</li>
      <li>VERB-Part: закрытой, возглашавших, выделенных, вынужденной, действующем, запомнившемся, заряженной, затерявшемся, затуманенном, написанном</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>ADJ: хороший, большой, отличный, хорошая, неплохой, вежливый, обычный, хорошее, добрый, вежливые</li>
      <li>AUX-Part: бывшая, бывший</li>
      <li>DET: все, сам, этот, такая, мой, такое, один, такой, сама, моя</li>
      <li>NOUN: магазин, цены, место, выбор, персонал, ассортимент, спасибо, люди, обслуживание, сотрудники</li>
      <li>NUM: два, один, сколько, одна, три, две, несколько, одно, оба, столько</li>
      <li>PRON: я, он, это, все, она, что, они, мы, кто, вы</li>
      <li>PROPN: Петрович, жириновский, Россия, яблоко, Ирина, Генрих, Убейд, парнас, Катя, Петя</li>
      <li>VERB-Part: знающие, работающие, сопутствующие, Стоявшие, Управляющая, влекомый, забытый, завышенные, казавшаяся, намоленное</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Par
    <ul>
      <li>NOUN: разу, народу, виду, толку, сраму, чаю, Воску, азу, кофейку, краю</li>
      <li>PRON: чего</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Voc
    <ul>
      <li>NOUN: боже, ребят, господи</li>
      <li>PROPN: Катюнь, Серёж, Тань</li>
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
      <li>ADJ: лучше, хуже, дешевле, выше, ниже, больше, дороже, старше, ближе, вкуснее</li>
      <li>ADV: больше, более, раньше, скорее, дальше, меньше, лучше, менее, далее, чаще</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADJ: хороший, большой, нужно, отличный, неплохой, хорошая, хорошо, хорошее, вежливый, обычный</li>
      <li>ADV: очень, уже, так, много, как, еще, там, ещё, где, часто</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sup
    <ul>
      <li>ADJ: лучший, лучших, высшем, лучшая, лучшие, лучшего, лучшее, красивейший, лучшей, лучшем</li>
      <li>ADV: наиболее, наименее</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>ADV: нихера, Нифига, Нихуя</li>
      <li>CCONJ: ни</li>
      <li>PART: не, ни, нет, Неееее, Ничего, на, неее, е, нп</li>
      <li>VERB: нет, нету, нельзя, негде, некуда, нечего, некогда, Несть, не, некого</li>
      <li>VERB-Fin: нету</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Variant</a></li>
</ul>

<ul>
  <li>Short
    <ul>
      <li>ADJ: нужно, хорошо, дорого, вкусно, удобно, чисто, интересно, нужен, должен, равно</li>
      <li>DET: какова, такова, Каков, о́но, таков</li>
      <li>PRON: те</li>
      <li>VERB-Part: завышены, написано, сказано, связано, сделано, приложено, представлен, принято, установлены, связана</li>
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
      <li>AUX-Fin: было, был, есть, была, были, БУДЕТ, БУДЕТЕ</li>
      <li>AUX-Inf: быть</li>
      <li>AUX-Part: бывшая, бывший</li>
      <li>VERB-Conv: говоря, судя, начиная, смотря, учитывая, видя, зная, имея, пытаясь, сидя</li>
      <li>VERB-Fin: есть, может, могу, хочу, здравствуйте, стоит, нравится, знаю, работает, рекомендую</li>
      <li>VERB-Inf: делать, быть, есть, жить, смотреть, ходить, пить, работать, ехать, ждать</li>
      <li>VERB-Part: желающих, знающие, работающие, имеющих, интересующие, проходящих, сопутствующие, сопутствующих, Стоявшие, Управляющая</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Perf
    <ul>
      <li>VERB-Conv: выйдя, дождавшись, нахмурясь, оставив, посмотрев, Услышав, выстрелив, дав, доставши, забыв</li>
      <li>VERB-Fin: подскажите, сказал, понравилось, стал, помогите, стало, понравился, сказали, сказала, скажите</li>
      <li>VERB-Inf: найти, сделать, купить, сказать, посмотреть, взять, понять, получить, узнать, обратиться</li>
      <li>VERB-Part: завышены, написано, исчезнувших, сказано, связано, сделано, приложено, представлен, принято, установлены</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Cnd
    <ul>
      <li>AUX: бы, б</li>
      <li>SCONJ: чтобы, чтоб, что, что-бы, шобы, Чтоп</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: будь, будьте, будте</li>
      <li>VERB-Fin: здравствуйте, подскажите, помогите, скажите, посоветуйте, дайте, давай, объясните, дай, пишите</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX-Fin: было, был, будет, есть, была, были, будут, буду, будем, будете</li>
      <li>VERB-Fin: есть, может, могу, хочу, стоит, нравится, знаю, работает, сказал, рекомендую</li>
      <li>VERB-Inf: закончилось, навязываються</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>AUX-Fin: будет, будут, буду, будем, будете, будешь</li>
      <li>VERB-Fin: помогут, скажу, сможет, будет, подскажут, поможет, придется, хватит, допустим, останется</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX-Fin: было, был, была, были</li>
      <li>AUX-Part: бывшая, бывший</li>
      <li>VERB-Conv: выйдя, дождавшись, нахмурясь, оставив, посмотрев, Услышав, выстрелив, дав, доставши, забыв</li>
      <li>VERB-Fin: сказал, было, понравилось, стал, стало, был, понравился, сказали, была, сказала</li>
      <li>VERB-Inf: закончилось</li>
      <li>VERB-Part: завышены, написано, исчезнувших, сказано, связано, сделано, приложено, представлен, принято, установлены</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX-Conv: будучи</li>
      <li>AUX-Fin: есть</li>
      <li>VERB-Conv: говоря, судя, начиная, смотря, учитывая, видя, зная, имея, пытаясь, сидя</li>
      <li>VERB-Fin: есть, может, могу, хочу, стоит, нравится, знаю, работает, рекомендую, говорит</li>
      <li>VERB-Inf: навязываються</li>
      <li>VERB-Part: желающих, знающие, работающие, имеющих, интересующие, проходящих, сопутствующие, сопутствующих, Управляющая, бегущий</li>
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
      <li>AUX-Fin: было, был, будет, есть, была, были, будут, буду, будем, будете</li>
      <li>AUX-Inf: быть</li>
      <li>AUX-Part: бывшая, бывший</li>
      <li>VERB-Conv: говоря, судя, начиная, смотря, учитывая, видя, зная, имея, сидя, Глядя</li>
      <li>VERB-Fin: есть, может, могу, хочу, здравствуйте, стоит, знаю, подскажите, работает, сказал</li>
      <li>VERB-Inf: делать, найти, сделать, купить, сказать, быть, есть, жить, смотреть, посмотреть</li>
      <li>VERB-Part: исчезнувших, желающих, знающие, погибшим, работающие, имеющих, интересующие, проходящих, сопутствующие, сопутствующих</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Mid
    <ul>
      <li>VERB-Conv: пытаясь, дождавшись, надеясь, нахмурясь, занимаясь, обернувшись, поднявшись, проснувшись, смеясь, ссылаясь</li>
      <li>VERB-Fin: нравится, понравилось, хочется, находится, кажется, понравился, называется, хотелось, боюсь, получилось</li>
      <li>VERB-Inf: обратиться, общаться, обращаться, встречаться, добраться, заниматься, учиться, вернуться, пользоваться, разобраться</li>
      <li>VERB-Part: относящиеся, светящиеся, возвратившихся, заблудившихся, запоминающиеся, запоминающийся, запомнившемся, затерявшемся, имеющимуся, казавшаяся</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>VERB-Fin: записывается, отмечается, Вбрасывается, Делается, Использовалось, акцентировалось, воспитываются, вставляется, выводится, выдаются</li>
      <li>VERB-Inf: приниматься</li>
      <li>VERB-Part: завышены, написано, сказано, связано, сделано, приложено, представлен, принято, установлены, связана</li>
    </ul>
  </li>
</ul>


<h3>Pronouns, Determiners, Quantifiers</h3>


<ul>
  <li><a>PronType</a></li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>ADV: так, там, сейчас, здесь, потом, тут, теперь, туда, тогда, потому</li>
      <li>DET: этот, такой, этой, эти, это, такое, этом, такие, этого, такая</li>
      <li>PRON: это, то, этого, того, том, этом, тем, этим, т., тому</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Emp
    <ul>
      <li>DET: сам, сама, самый, самое, сами, самые, самом, самой, самого, самая</li>
      <li>PRON: что</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Exc
    <ul>
      <li>ADV: как, чтож</li>
      <li>DET: какая, какие, какой, Какое</li>
      <li>PRON: что</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADV: как-то, как, где-то, когда-то, почему-то, где, когда, когда-нибудь, почему, куда-то</li>
      <li>DET: один, одна, некоторые, одно, какие-то, какой-то, одной, одни, какая-то, какие</li>
      <li>PRON: что-то, что, кто-то, кто, чего-то, кого-то, чем-то, кому-то, что-нибудь, кто-нибудь</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>ADV: как, где, почему, куда, зачем, откуда, когда, что, чего, Почто</li>
      <li>DET: какой, какие, какая, какое, каком, какую, каким, Какого, каких, какому</li>
      <li>PRON: что, кто, чем, чего, кого, кому, чём, че, кем, што</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>ADV: никогда, никак, нигде, никуда, как, нихера, причем, Нифига, Нихуя, где</li>
      <li>DET: никаких, никакой, никакого, каких, никакие, какие, какого, никакую, Никаким, как</li>
      <li>PRON: ничего, никто, никому, никого, чем, чего, ничем, что, кем, ничто</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>DET: его, мой, их, своей, ее, мои, свой, свои, моя, свою</li>
      <li>PRON: я, он, мне, меня, она, они, мы, его, вы, ты</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rcp
    <ul>
      <li>PRON: друг, друга, другом, другу, дружку</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>ADV: как, где, куда, почему, к., когда, зачем, откуда, что, к</li>
      <li>DET: какой, какая, какие, какое, какому, каким, каких, каком, какую, какими</li>
      <li>PRON: что, кто, которые, который, чего, чем, которая, которых, которого, которой</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
      <li>ADV: всегда, иногда, везде, все, всё, всего, иначе, навсегда, всячески, повсюду</li>
      <li>DET: все, всех, каждый, других, любой, другой, весь, всем, всей, вся</li>
      <li>PRON: все, всё, всем, всего, всех, многие, всему, всём, всëм, всеми</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: 2, 3, 1, 5, 4, два, один, 10, три, 7</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Frac
    <ul>
      <li>ADJ: 1\5</li>
      <li>NUM: пол, 0,5, 1,5, полтора, 2,5, 1.5, 0,25, 4,5, 5,2, 2,2</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>ADJ: первый, второй, первого, 2, первые, 1, первых, первая, вторая, второго</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sets
    <ul>
      <li>NUM: оба, двоих, двое, обоих, обеих, трое, обе, обоим, четверых, 2</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>ADJ: Божией, Божьей, Божьим, Иринины, Петину, Петровичеву, Христова, бабушкин, бычьей, маминой</li>
      <li>DET: его, мой, их, своей, ее, свой, мои, свои, моя, свою</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>DET: своей, свой, свои, свою, своих, своего, своим, свое, своем, своими</li>
      <li>PRON: себя, себе, собой, собою, cобой</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX-Fin: буду, будем, есть</li>
      <li>PRON: я, мне, меня, мы, нас, нам, мной, нами, мною, на</li>
      <li>VERB-Fin: могу, хочу, знаю, рекомендую, думаю, люблю, понимаю, помню, прошу, боюсь</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX-Fin: будете, будь, будешь, будьте, будте</li>
      <li>PRON: вы, ты, вам, вас, тебя, тебе, вами, тобой, тобою, те</li>
      <li>VERB-Fin: здравствуйте, подскажите, помогите, скажите, можете, посоветуйте, знаете, хотите, дайте, думаете</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX-Fin: будет, есть, будут</li>
      <li>PRON: он, она, они, его, ему, их, них, ей, него, им</li>
      <li>VERB-Fin: есть, может, стоит, нравится, работает, говорит, отвечает, работают, могут, хочется</li>
      <li>VERB-Inf: навязываються</li>
    </ul>
  </li>
</ul>




<h3>Other Features</h3>


<ul>
  <li><a>Abbr</a>
    <ul>
      <li>Yes
        <ul>
          <li>ADJ: п., ст., жд, мед., Св., ч., англ., гос., дет., ж/д</li>
          <li>ADP: н, п</li>
          <li>ADV: т., д., оч., к., тд, д, оч, Крч, к, в/м</li>
          <li>DET: др., н., т., др, проч</li>
          <li>INTJ: пздц</li>
          <li>NOUN: тц, г., см, мл, кг, с., р, р., км, л.</li>
          <li>NUM: неск, неск.</li>
          <li>PART: пж, плз, мб, пжж</li>
          <li>PRON: т., кот.</li>
          <li>PROPN: сша, ЛДПР, М., СССР, РФ, А., кпрф, спб, В., Н.</li>
          <li>SCONJ: тк, к.</li>
          <li>VERB: е., см., е, и., н., нрав, см, созд</li>
          <li>X: С, хз, п., с., З., П, Соп., ТТГ, Ы., P.</li>
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
          <li>ADJ: романтик, стронг, форте</li>
          <li>ADV: мах</li>
          <li>INTJ: Хэллоу</li>
          <li>NOUN: блю, дор, А, U, f, r, Ремо, С, ая, е</li>
          <li>PART: Д, Де, ХАЙ, плз</li>
          <li>PROPN: PS4, М, Эль, тикетс, EF1057, F, G, NS3FB, Алегре, Беш-пять</li>
          <li>VERB: МАНДРУЕ</li>
          <li>X: RT, P., p.s., iphone, s, P.S, the, apple, cm, of</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NameType</a>
    <ul>
      <li>Com
        <ul>
          <li>PROPN: @yabloko, ЛДПР, парнас, яблоко, кпрф, @YouTube, Наука, ЕР, Госдумы, вк</li>
        </ul>
      </li>
      <li>Geo
        <ul>
          <li>PROPN: россии, сша, Россия, сочи, СССР, Москве, РФ, Убейд, москвы, М.</li>
        </ul>
      </li>
      <li>Giv
        <ul>
          <li>PROPN: Ирина, Генрих, Катя, Петя, александр, Елена, Женя, Надя, андрей, А.</li>
        </ul>
      </li>
      <li>Oth
        <ul>
          <li>PROPN: E, М, Стереолето, Хаджи-Мухаммед, инете, 0А, АА, АВ, Гелиодор, Н-209</li>
        </ul>
      </li>
      <li>Patrn
        <ul>
          <li>PROPN: Александровна, Владимировна, А., Дмитриевич, Анатольевна, В., С., Владимирович, И., Леонидович</li>
        </ul>
      </li>
      <li>Pro
        <ul>
          <li>PROPN: инсте, 1000д, 90пц10, PS4, А5, Запорожца, К, КАМАЗа, ПЦР, бат</li>
        </ul>
      </li>
      <li>Prs
        <ul>
          <li>PROPN: @xxxxxx, Петрович, @Zhirinovskiy, Петровича, @screened-200, Петровичу, жирик, @screened-18, @screened-134, @screened-15</li>
        </ul>
      </li>
      <li>Sur
        <ul>
          <li>PROPN: жириновский, жириновского, Путина, Леонов, Явлинский, путин, Петров, Тихонов, Александров, Бернардацци</li>
        </ul>
      </li>
      <li>Zoo
        <ul>
          <li>PROPN: полкан, Волк, Волка, Граф, Лев</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumForm</a>
    <ul>
      <li>Combi
        <ul>
          <li>ADJ: 90-е, 90-х, 1997-м, 1й, 2й, 70-х, 80-х, 1-го, 1-ом, 1-х</li>
          <li>NUM: 2-х, 3-х, 3х, 11-ти, 12-ти, 13-ти, 18-ти, 20-ти, 2х, 30-ти</li>
        </ul>
      </li>
      <li>Digit
        <ul>
          <li>ADJ: 2, 1, 3, 2020, 12, 2013, 2015, 2017, 18, 2012</li>
          <li>NUM: 2, 3, 1, 5, 4, 10, 7, 30, 6, 20</li>
        </ul>
      </li>
      <li>Roman
        <ul>
          <li>ADJ: II, IV, V, VI, XIV, XVI, XX</li>
          <li>NUM: I</li>
        </ul>
      </li>
      <li>Word
        <ul>
          <li>ADJ: первый, второй, первого, первые, первых, первая, вторая, второго, первую, втором</li>
          <li>NUM: несколько, два, один, сколько, три, две, двух, одной, столько, одна</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Typo</a>
    <ul>
      <li>Yes
        <ul>
          <li>ADJ: СУППЕР, Хорошое, компитентный, хорошии, экстро, Александовской, Бондарчуковския, Бооольшой, Величиственно, Воторой</li>
          <li>ADP: а, и, в, К, Ут, восле, заа, иза, п, с</li>
          <li>ADV: сдесь, вобще, както, переодически, Меног, Одеажды, Собстна, безконечно, больши, братский</li>
          <li>AUX-Fin: будте</li>
          <li>CCONJ: Иди, ин, лбо, нр</li>
          <li>DET: это, Какого, всё, дургие, как, какаято, какойто, каком-нибуль, каку, кого</li>
          <li>INTJ: бл@, бляь</li>
          <li>NOUN: ге, атракционов, бриджы, дело, линолиум, мороженное, тысеч, удаленьщики, #кайтсефринг, Аоезда</li>
          <li>NUM: з, оден, скольки</li>
          <li>PART: Да, Спасиииибо, лии, лиш, небудь, та, е, не, ни, нп</li>
          <li>PRON: сто, Нечего, Тоже, клторые, которые, некому, нё, оеа, она, от</li>
          <li>PROPN: Фарингейту, инстаграм, инстаграмме, телеграмме, Акропле, Анндрей, Беклемищева, Гелиадор, Громовв, Левиофан</li>
          <li>SCONJ: чтл, я, Чтоп</li>
          <li>VERB: нравиться, Если, Здраствуйте, находиться, связанно, бежив, встретится, держут, ложиться, любить</li>
          <li>VERB-Conv: Каснувшись, имтируя, подьезжая</li>
          <li>VERB-Fin: нравиться, Здраствуйте, находиться, бежив, держут, ложиться, любить, приходиться, Быди, Взязи</li>
          <li>VERB-Inf: встретится, ПОДКЛЧИТЬ, беспокоит, взабраться, видится, восонавить, выбратся, выветритьсч, выглядываться, вынлсить</li>
          <li>VERB-Part: связанно, Оперируюший, Представленны, Уничножен, ШПредставлен, випитого, вложеный, внесет, запрещённа, заслам</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 2 lemmas as copulas (<a>cop</a>). Examples: быть, это.</li>
</ul>

<ul>
<li>This corpus uses 3 lemmas as auxiliaries (<a>aux</a>). Examples: бы, быть, б.</li>
<li>This corpus uses 1 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: быть.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (2)</li>
      <li>VERB--NOUN-Gen (246)</li>
      <li>VERB--NOUN-Ins (1)</li>
      <li>VERB--NOUN-Nom (31)</li>
      <li>VERB--PRON-Gen (32)</li>
      <li>VERB--PRON-Nom (21)</li>
      <li>VERB-Conv--NOUN-Nom (3)</li>
      <li>VERB-Fin--NOUN (23)</li>
      <li>VERB-Fin--NOUN-ADP(после) (1)</li>
      <li>VERB-Fin--NOUN-Acc (2)</li>
      <li>VERB-Fin--NOUN-Gen (209)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(до) (1)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(около) (2)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(порядок) (1)</li>
      <li>VERB-Fin--NOUN-Loc-ADP(в) (1)</li>
      <li>VERB-Fin--NOUN-Nom (4236)</li>
      <li>VERB-Fin--NOUN-Nom-ADP(в) (1)</li>
      <li>VERB-Fin--NOUN-Nom-ADP(за) (3)</li>
      <li>VERB-Fin--NOUN-Nom-ADP(как) (2)</li>
      <li>VERB-Fin--NOUN-Nom-ADP(с) (1)</li>
      <li>VERB-Fin--NOUN-Nom-ADP(спустя) (1)</li>
      <li>VERB-Fin--NOUN-Par (2)</li>
      <li>VERB-Fin--PRON-Dat (1)</li>
      <li>VERB-Fin--PRON-Gen (52)</li>
      <li>VERB-Fin--PRON-Nom (3490)</li>
      <li>VERB-Fin--PRON-Nom-ADP(плюс) (1)</li>
      <li>VERB-Inf--NOUN-Gen (4)</li>
      <li>VERB-Inf--NOUN-Nom (61)</li>
      <li>VERB-Inf--PRON-Gen (1)</li>
      <li>VERB-Inf--PRON-Nom (58)</li>
      <li>VERB-Part--NOUN-Gen (2)</li>
      <li>VERB-Part--NOUN-Nom (37)</li>
      <li>VERB-Part--PRON-Nom (12)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN-Acc (10)</li>
      <li>VERB--NOUN-Gen (8)</li>
      <li>VERB--PRON-Acc (5)</li>
      <li>VERB--PRON-Gen (3)</li>
      <li>VERB--PRON-Par (1)</li>
      <li>VERB-Conv--NOUN-Acc (138)</li>
      <li>VERB-Conv--NOUN-Dat (1)</li>
      <li>VERB-Conv--NOUN-Gen (21)</li>
      <li>VERB-Conv--NOUN-Ins (7)</li>
      <li>VERB-Conv--PRON-Acc (20)</li>
      <li>VERB-Conv--PRON-Nom (1)</li>
      <li>VERB-Fin--NOUN (23)</li>
      <li>VERB-Fin--NOUN-Acc (2740)</li>
      <li>VERB-Fin--NOUN-Acc-ADP(в) (2)</li>
      <li>VERB-Fin--NOUN-Acc-ADP(из) (1)</li>
      <li>VERB-Fin--NOUN-Acc-ADP(к) (1)</li>
      <li>VERB-Fin--NOUN-Acc-ADP(на) (1)</li>
      <li>VERB-Fin--NOUN-Acc-ADP(от) (2)</li>
      <li>VERB-Fin--NOUN-Acc-ADP(по) (2)</li>
      <li>VERB-Fin--NOUN-Acc-ADP(типа) (1)</li>
      <li>VERB-Fin--NOUN-Dat (10)</li>
      <li>VERB-Fin--NOUN-Dat-ADP(по) (2)</li>
      <li>VERB-Fin--NOUN-Gen (346)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(до) (1)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(из) (1)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(около) (1)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(по) (3)</li>
      <li>VERB-Fin--NOUN-Ins (85)</li>
      <li>VERB-Fin--NOUN-Loc (1)</li>
      <li>VERB-Fin--NOUN-Nom (7)</li>
      <li>VERB-Fin--NOUN-Par (5)</li>
      <li>VERB-Fin--PRON (1)</li>
      <li>VERB-Fin--PRON-Acc (941)</li>
      <li>VERB-Fin--PRON-Acc-ADP(в) (1)</li>
      <li>VERB-Fin--PRON-Dat (3)</li>
      <li>VERB-Fin--PRON-Gen (83)</li>
      <li>VERB-Fin--PRON-Ins (19)</li>
      <li>VERB-Fin--PRON-Nom (5)</li>
      <li>VERB-Inf--NOUN (18)</li>
      <li>VERB-Inf--NOUN-Acc (1438)</li>
      <li>VERB-Inf--NOUN-Acc-ADP(на) (1)</li>
      <li>VERB-Inf--NOUN-Dat (1)</li>
      <li>VERB-Inf--NOUN-Dat-ADP(по) (1)</li>
      <li>VERB-Inf--NOUN-Gen (107)</li>
      <li>VERB-Inf--NOUN-Gen-ADP(по) (1)</li>
      <li>VERB-Inf--NOUN-Gen-ADP(порядка) (1)</li>
      <li>VERB-Inf--NOUN-Gen-ADP(у) (1)</li>
      <li>VERB-Inf--NOUN-Ins (35)</li>
      <li>VERB-Inf--NOUN-Nom (2)</li>
      <li>VERB-Inf--NOUN-Par (2)</li>
      <li>VERB-Inf--PRON-Acc (521)</li>
      <li>VERB-Inf--PRON-Gen (40)</li>
      <li>VERB-Inf--PRON-Ins (8)</li>
      <li>VERB-Inf--PRON-Nom (1)</li>
      <li>VERB-Part--NOUN-Acc (80)</li>
      <li>VERB-Part--NOUN-Dat (2)</li>
      <li>VERB-Part--NOUN-Gen (6)</li>
      <li>VERB-Part--NOUN-Ins (2)</li>
      <li>VERB-Part--PRON-Acc (2)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--NOUN-Dat (11)</li>
      <li>VERB--NOUN-Ins (2)</li>
      <li>VERB--PRON-Dat (47)</li>
      <li>VERB--PRON-Ins (1)</li>
      <li>VERB-Conv--NOUN-Dat (9)</li>
      <li>VERB-Conv--NOUN-Ins (28)</li>
      <li>VERB-Conv--NOUN-Ins-ADP(от) (1)</li>
      <li>VERB-Conv--NOUN-Ins-ADP(со) (1)</li>
      <li>VERB-Conv--PRON-Dat (6)</li>
      <li>VERB-Conv--PRON-Ins (5)</li>
      <li>VERB-Fin--NOUN (1)</li>
      <li>VERB-Fin--NOUN-Dat (238)</li>
      <li>VERB-Fin--NOUN-Dat-ADP(в) (1)</li>
      <li>VERB-Fin--NOUN-Ins (237)</li>
      <li>VERB-Fin--PRON-Acc (2)</li>
      <li>VERB-Fin--PRON-Dat (723)</li>
      <li>VERB-Fin--PRON-Ins (29)</li>
      <li>VERB-Fin--PRON-Nom (2)</li>
      <li>VERB-Inf--NOUN (3)</li>
      <li>VERB-Inf--NOUN-Dat (80)</li>
      <li>VERB-Inf--NOUN-Dat-ADP(к) (1)</li>
      <li>VERB-Inf--NOUN-Gen (1)</li>
      <li>VERB-Inf--NOUN-Ins (84)</li>
      <li>VERB-Inf--PRON-Dat (167)</li>
      <li>VERB-Inf--PRON-Ins (29)</li>
      <li>VERB-Part--NOUN-Dat (12)</li>
      <li>VERB-Part--NOUN-Ins (63)</li>
      <li>VERB-Part--PRON-Dat (17)</li>
      <li>VERB-Part--PRON-Ins (4)</li>
    </ul>
  </li>
</ul>



<h3>Verbs with Reflexive Core Objects</h3>

<ul>
  <li>This corpus contains 103 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: вести себя, чувствовать себя, купить себе, представлять собой, беречь себя, забрать себе, зарекомендовать себя, контролировать себя, кормить себя, найти себе, ограничить себя, побаловать себя, подобрать себе, позволять себе, почесать себя, почувствовать себя, баловать себя, бурчать себе, вернуть себе, взять себе, взять себя, вить себя, владеть собой, владеть собою, внушать себе, возомнить себя, выбрать себе, выдавать себя, говорить себе, дать свой, дать себе, делать себе, дурачить себя, есть себя, ждать себя, жеpтвовать cобой, жить себе, забыть свои, завести себе, задавать себе, занять себя, заполнять собою, заставить себя, заставлять себя, засыпать свой, звать себя, знаменовать собой, изменять себя, иметь себя, искать себе</li>
    <ul>
      <li>Out of those, 1 lemmas occurred more than once, but never without a reflexive dependent. Examples: зарекомендовать</li>
    </ul>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 9 relation subtypes: <a>acl:relcl</a>, <a>aux:pass</a>, <a>csubj:pass</a>, <a>flat:foreign</a>, <a>flat:name</a>, <a>nsubj:pass</a>, <a>nummod:entity</a>, <a>nummod:gov</a>, <a>obl:agent</a></li>
<li>The following 1 relation types are not used in this corpus at all: <a>clf</a></li>
</ul>
