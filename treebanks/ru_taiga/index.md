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

The following people have contributed to making this treebank part of UD: Olga Lyashevskaya, Olga Rudina, Anna Zhuravleva.

Repository: [UD_Russian-Taiga](https://github.com/UniversalDependencies/UD_Russian-Taiga)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udru_taiga27)<br />
Download all treebanks: [UD 2.7](/#download)

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

[Abbr](ru_taiga-feat-Abbr.html) – [Animacy](ru_taiga-feat-Animacy.html) – [Aspect](ru_taiga-feat-Aspect.html) – [Case](ru_taiga-feat-Case.html) – [Degree](ru_taiga-feat-Degree.html) – [Foreign](ru_taiga-feat-Foreign.html) – [Gender](ru_taiga-feat-Gender.html) – [Mood](ru_taiga-feat-Mood.html) – [Number](ru_taiga-feat-Number.html) – [NumForm](ru_taiga-feat-NumForm.html) – [Person](ru_taiga-feat-Person.html) – [Polarity](ru_taiga-feat-Polarity.html) – [Tense](ru_taiga-feat-Tense.html) – [Typo](ru_taiga-feat-Typo.html) – [Variant](ru_taiga-feat-Variant.html) – [VerbForm](ru_taiga-feat-VerbForm.html) – [Voice](ru_taiga-feat-Voice.html)

## Relations

[acl](ru_taiga-dep-acl.html) – [acl:relcl](ru_taiga-dep-acl-relcl.html) – [advcl](ru_taiga-dep-advcl.html) – [advmod](ru_taiga-dep-advmod.html) – [amod](ru_taiga-dep-amod.html) – [appos](ru_taiga-dep-appos.html) – [aux](ru_taiga-dep-aux.html) – [aux:pass](ru_taiga-dep-aux-pass.html) – [case](ru_taiga-dep-case.html) – [cc](ru_taiga-dep-cc.html) – [ccomp](ru_taiga-dep-ccomp.html) – [compound](ru_taiga-dep-compound.html) – [conj](ru_taiga-dep-conj.html) – [cop](ru_taiga-dep-cop.html) – [csubj](ru_taiga-dep-csubj.html) – [csubj:pass](ru_taiga-dep-csubj-pass.html) – [dep](ru_taiga-dep-dep.html) – [det](ru_taiga-dep-det.html) – [discourse](ru_taiga-dep-discourse.html) – [dislocated](ru_taiga-dep-dislocated.html) – [expl](ru_taiga-dep-expl.html) – [fixed](ru_taiga-dep-fixed.html) – [flat](ru_taiga-dep-flat.html) – [flat:foreign](ru_taiga-dep-flat-foreign.html) – [flat:name](ru_taiga-dep-flat-name.html) – [goeswith](ru_taiga-dep-goeswith.html) – [iobj](ru_taiga-dep-iobj.html) – [list](ru_taiga-dep-list.html) – [mark](ru_taiga-dep-mark.html) – [nmod](ru_taiga-dep-nmod.html) – [nsubj](ru_taiga-dep-nsubj.html) – [nsubj:pass](ru_taiga-dep-nsubj-pass.html) – [nummod](ru_taiga-dep-nummod.html) – [nummod:entity](ru_taiga-dep-nummod-entity.html) – [nummod:gov](ru_taiga-dep-nummod-gov.html) – [obj](ru_taiga-dep-obj.html) – [obl](ru_taiga-dep-obl.html) – [obl:agent](ru_taiga-dep-obl-agent.html) – [orphan](ru_taiga-dep-orphan.html) – [parataxis](ru_taiga-dep-parataxis.html) – [punct](ru_taiga-dep-punct.html) – [reparandum](ru_taiga-dep-reparandum.html) – [root](ru_taiga-dep-root.html) – [vocative](ru_taiga-dep-vocative.html) – [xcomp](ru_taiga-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 4964 sentences and 63920 tokens.</li>
</ul>

<ul>
<li>This corpus contains 11158 tokens (17%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 675 types of words that contain both letters and punctuation. Examples: @xxxxxx, м., с., @yabloko, http://xxxxxx, что-то, из-за, л., т., https://xxxxxx, н., @Zhirinovskiy, д., ил., Пер., кто-то, ст., В., все-таки, как-то, какой-то, кого-то, ч., &quot;, @YouTube, @screened-200, г., и., п., что-нибудь, P.S., А., где-то, из-под, когда-нибудь, по-моему, чего-то, э., @screened-18, англ., гр., е., какая-то, по-прежнему, р., чем-то, #ростов, #семейныйотдых, #сочи, @screened-134</li>
</ul>

<ul>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 17 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a>, <a>X</a></li>
</ul>

<ul>
<li>This corpus contains 81 word types tagged as particles (PART): PROFIT, Але, Вроде, Да-да, Даааа, Мож, Неееее, Неужто, Пускай, УСИ, ХАЙ, Хэллоу, а, аж, аль, аминь, бл@, бля, блять, бляь, будто, бы, было, ведь, вон, вот, все, все-таки, всего, всеж, всё-таки, да, давайте, даже, дай, досвидания, единственно, еле, ж, же, и, именно, как, ладно, ли, либо, лиш, лишь, ль, на, не, неее, нет, неужели, ни, ну, поди, пожалуйста, просто, прямо, пусть, разве, су, так, также, таки, те, типа, то, тоже, токмо, только, уж, ужели, ужель, хорошо, хоть, хотя, че, что, это</li>
</ul>

<ul>
<li>This corpus contains 43 lemmas tagged as pronouns (PRON): goeswith, весь, все, всё, вы, друг, его, кое-кто, кое-что, котоpый, который, кто, кто-нибудь, кто-то, мизулина+это, мы, некоторые, никто, ничего, ничо, ничто, он, она, они, оно, оное, се, себя, то, тот, ты, у+мы, че, чем, что, что+бы, что-либо, что-нибудь, что-то, чтобы, это, этот, я</li>
</ul>

<ul>
<li>This corpus contains 43 lemmas tagged as determiners (DET): cвой, ваш, ваша, весь, все, всякий, его, ее, емо, их, каждый, каков, какой, какой-либо, какой-нибудь, какой-то, клыкастый, который, любой, мой, наш, некий, некоторый, никакой, общей-то, овса, один, он, она, оный, сам, свой, сей, так, таков, такой, твой, то, тот, чей, чей-то, это, этот</li>
</ul>

<ul>
<li>Out of the above, 10 lemmas occurred sometimes as PRON and sometimes as DET: весь, все, его, который, он, она, то, тот, это, этот</li>
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
    <li>VERB: говоря, судя, видя, пытаясь, нахмурясь, оставив, посмотрев, Благодаря, Исходя, Услышав</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: было, был, будет, были, была, есть, будут, буду, будем, будешь</li>
    <li>NOUN: Ставь</li>
    <li>VERB: есть, может, сказал, нет, хочу, стал, стоит, говорит, знаю, понимаю</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: быть</li>
    <li>VERB: быть, делать, сделать, жить, смотреть, думать, добавить, любить, сказать, показать</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>AUX: бывшая, бывший</li>
    <li>VERB: исчезнувших, написано, арестованы, обнаружены, организованных, потерян, принято, сделаны, состоявшимися, Восхищена</li>
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
      <li>ADJ: сама, святую, восточной, должна, Главная, вторая, новой, большая, большую, другой</li>
      <li>AUX-Fin: была</li>
      <li>AUX-Part: бывшая</li>
      <li>DET: этой, своей, свою, вся, моя, такая, той, такой, моей, какая</li>
      <li>NOUN: жизни, жизнь, воды, партии, ночь, руки, власти, зимой, минут, мысли</li>
      <li>NUM: одна, две, одной, двух, обе, одну, двумя</li>
      <li>PRON: она, ее, ей, ней, которой, которая, нее, неё, её, которую</li>
      <li>PROPN: России, ЛДПР, Россия, Ирина, Катя, Русь, кпрф, Наука, ЕР, Госдумы</li>
      <li>VERB-Fin: сказала, могла, стала, видела, пришла, знала, ответила, решила, была, выиграла</li>
      <li>VERB-Part: Восхищена, заложена, куплена, создана, Беременная, Входящая, Назначенной, Пьющая, бьющейся, взявшаяся</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: сам, первый, самый, большой, новый, второй, должен, другой, хороший, добрый</li>
      <li>AUX-Fin: был</li>
      <li>AUX-Part: бывший</li>
      <li>DET: этот, мой, тот, каждый, свой, наш, такой, этом, весь, какой</li>
      <li>NOUN: день, раз, лет, человек, люди, года, мир, людей, детей, глаз</li>
      <li>NUM: один, два, одного, оба, одном, обоих, 2-х, Обоим, двух, одним</li>
      <li>PRON: он, кто, его, ему, него, который, никто, ним, кого, кому</li>
      <li>PROPN: Петрович, жириновский, парнас, Убейд, Генрих, Петровича, Петя, Востока, крым, жириновского</li>
      <li>VERB-Fin: сказал, стал, видел, мог, заявил, получил, решил, говорил, заметил, сделал</li>
      <li>VERB-Part: потерян, влекомый, захвачен, одет, озабочен, посвящен, Венчанный, Вспотевшим, Вступивший, Высвободившийся</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neut
    <ul>
      <li>ADJ: нужно, самое, хорошо, должно, равно, странно, известно, круто, необходимо, общем</li>
      <li>AUX-Fin: было</li>
      <li>DET: это, все, такое, то, том, мое, наше, свое, одно, своё</li>
      <li>NOUN: время, море, фото, место, спасибо, дело, лицо, решение, слова, видео</li>
      <li>NUM: одно, два, одного, одним, одном</li>
      <li>PRON: это, что, все, то, всё, том, того, ничего, этого, чем</li>
      <li>PROPN: яблоко, яблока, Стереолето, @yabloko, Известия, НТВ, Приднестровье, #подмосковье, #соленье, АВТО.РУ</li>
      <li>VERB-Fin: было, стало, случилось, хотелось, казалось, оказалось, удалось, осталось, получилось, понравилось</li>
      <li>VERB-Part: написано, принято, возбуждено, прекращено, решено, сказано, Ведущим, вбито, вставленное, выбритым</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Animacy</a></li>
</ul>

<ul>
  <li>Anim
    <ul>
      <li>ADJ: других, Будущих, Бывших, Непразднуемых, Одних, ПРАВОСЛАВНЫХ, Серого, большого, воцерковленного, встречных</li>
      <li>DET: всех, своих, наших, такого, тех, каждый, моих, одних, таких, того</li>
      <li>NOUN: человек, люди, людей, детей, человека, друзья, баба, бог, женщина, дети</li>
      <li>NUM: двоих, одного, четверых, 5х, двух, нескольких, пятерых, семерых</li>
      <li>PRON: кто, никто, все, кого, кому, всем, всех, кто-то, кого-то, которого</li>
      <li>PROPN: Петрович, жириновский, Генрих, Петровича, Ирина, Катя, Петя, Женя, жириновского, Петровичу</li>
      <li>VERB-Part: желающих, звавшего, наблюдающий, обвиняемого, обвисшего, пирующих, присмиревшего, сидевшего, указаных</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Inan
    <ul>
      <li>ADJ: первый, последние, другой, новый, самые, второй, дополнительные, другие, настоящее, новые</li>
      <li>DET: все, свой, этот, свои, каждый, эти, это, весь, свое, твой</li>
      <li>NOUN: день, время, раз, лет, года, жизни, жизнь, мир, море, фото</li>
      <li>NUM: несколько, два, три, один, сколько, столько, две, много, пять, девять</li>
      <li>PRON: это, что, все, то, том, того, ничего, всё, этого, чем</li>
      <li>PROPN: России, ЛДПР, парнас, яблоко, Убейд, Россия, Русь, кпрф, Востока, крым</li>
      <li>VERB-Part: Заглохший, влекомый, вытянутые, гаснущие, дрожащий, зажатый, запланированный, интересующие, искаженное, истекший</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: других, первые, другие, нужны, разных, самые, последние, новые, сами, должны</li>
      <li>AUX-Fin: были, будут, будем, будете, есть, будьте</li>
      <li>DET: все, эти, всех, свои, своих, мои, такие, тех, наши, этих</li>
      <li>NOUN: лет, люди, раз, людей, детей, руки, друзья, минут, деньги, глаза</li>
      <li>PRON: они, мы, вы, нас, вас, их, им, вам, которые, нам</li>
      <li>PROPN: Сочи, США, #камызяки, Известия, Афин, Бальмонты, Блоки, Брюсовы, Бушей, ВС</li>
      <li>VERB-Fin: могут, стали, есть, здравствуйте, вышли, говорят, могли, знаете, пришли, сидят</li>
      <li>VERB-Part: исчезнувших, арестованы, обнаружены, организованных, сделаны, состоявшимися, Стоявшие, госпитализированы, живущих, завершены</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: сам, большой, нужно, другой, первый, сама, самый, самое, святую, восточной</li>
      <li>AUX-Fin: было, был, будет, была, есть, буду, будешь, будь</li>
      <li>AUX-Part: бывшая, бывший</li>
      <li>DET: этот, такой, этой, мой, это, тот, своей, каждый, свой, все</li>
      <li>NOUN: день, время, года, жизни, человек, жизнь, мир, раз, море, место</li>
      <li>NOUN-Fin: Ставь</li>
      <li>NUM: один, одна, одной, одно, одного, одном, одну</li>
      <li>PRON: я, он, это, ты, что, она, мне, меня, кто, его</li>
      <li>PROPN: Петрович, России, жириновский, ЛДПР, парнас, яблоко, Убейд, Генрих, Петровича, Россия</li>
      <li>VERB-Fin: может, есть, сказал, нет, хочу, стал, стоит, говорит, знаю, понимаю</li>
      <li>VERB-Part: написано, потерян, принято, Восхищена, влекомый, возбуждено, заложена, захвачен, куплена, одет</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>ADJ: святую, первый, большую, последние, другую, новую, другой, новый, самые, второй</li>
      <li>DET: все, эти, свои, свой, этот, свою, каждый, это, нашу, эту</li>
      <li>NOUN: день, время, раз, жизнь, голову, руки, лицо, год, место, ночь</li>
      <li>NUM: несколько, много, два, столько, сто, три, двадцать, один, сколько, двоих</li>
      <li>PRON: себя, его, что, меня, их, это, тебя, вас, ее, нас</li>
      <li>PROPN: Русь, крым, Петровича, Ирак, госдуму, Ирину, Катю, ПАРНАС, Россию, Бога</li>
      <li>VERB-Part: Заглохший, влекомый, вытянутые, гаснущие, дрожащий, желающих, зажатый, запланированный, заплеванные, звавшего</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>ADJ: крайней, другому, местному, больной, другой, очередной, первым, самой, 2м, Великой</li>
      <li>DET: всем, этому, своему, своим, моему, своей, этим, вашему, каждому, моим</li>
      <li>NOUN: словам, детям, следам, людям, мнению, сожалению, мере, времени, дороге, ночам</li>
      <li>NUM: многим, нескольку, пяти, стольким, 3м, Обоим, одной</li>
      <li>PRON: мне, себе, ему, им, вам, нам, тебе, ей, кому, всем</li>
      <li>PROPN: Петровичу, Богу, Интерфаксу, Ирине, Пересу, зюганову, Алене, Алке, Амстердаму, Анастасии</li>
      <li>VERB: изложенным, Ведущим, Вспотевшим, Входящим, Уносимым, выступающему, говорящему, действующим, имеющейся, информированным</li>
      <li>VERB-Part: изложенным, Ведущим, Вспотевшим, Входящим, Уносимым, выступающему, говорящему, действующим, имеющейся, информированным</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>ADJ: других, восточной, разных, первого, новой, самого, Единой, гражданской, национальной, правоохранительных</li>
      <li>DET: всех, этой, этих, тех, этого, наших, нашего, своей, своих, таких</li>
      <li>NOUN: лет, года, раз, дня, воды, детей, людей, партии, человека, минут</li>
      <li>NUM: двух, трех, одного, двоих, четырех, десяти, многих, нескольких, пяти, шести</li>
      <li>PRON: нас, меня, того, вас, ничего, этого, них, тебя, него, всего</li>
      <li>PROPN: России, ЛДПР, Востока, Петровича, Госдумы, Путина, жириновского, СССР, Украины, яблока</li>
      <li>VERB: исчезнувших, организованных, живущих, нечего, развитых, Гомонящих, Назначенной, Прогретых, Служивших, битых</li>
      <li>VERB-Part: исчезнувших, организованных, живущих, развитых, Гомонящих, Назначенной, Прогретых, Служивших, битых, взятых</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ins
    <ul>
      <li>ADJ: самым, тяжелым, главным, другой, основными, первым, Божьим, большим, большой, важным</li>
      <li>DET: таким, своими, такой, своей, своим, каждым, какой, этим, этими, этой</li>
      <li>NOUN: зимой, помощью, праздником, днем, вечером, водой, утром, головой, ночью, глазами</li>
      <li>NUM: двумя, одним, одной, тремя</li>
      <li>PRON: собой, тем, ним, чем, вами, тобой, ней, нами, ними, мной</li>
      <li>PROPN: Ириной, Петровичем, Генрихом, ЗЕТИЛОВЫМ, Зюгановым, Игорем, Михаилом, Петей, Шнидер, Александром</li>
      <li>VERB-Part: состоявшимися, Рокочущим, Узаконенными, бьющейся, верующим, восходящей, впавшими, выбритым, выдавленным, завязанными</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Loc
    <ul>
      <li>ADJ: общем, самом, дохлой, основном, конечном, новом, прошлом, прямом, чужом, большой</li>
      <li>DET: этом, том, этой, своих, своем, своей, всех, моей, нашем, таком</li>
      <li>NOUN: жизни, году, стране, числе, мире, выборах, земле, голове, городе, комнате</li>
      <li>NUM: одной, одном, трех, двух</li>
      <li>PRON: том, себе, этом, ней, нем, чем, мне, них, всем, котором</li>
      <li>PROPN: Ираке, Крыму, России, Москве, Украине, Кремле, Сочи, Франции, донбассе, Госдуме</li>
      <li>VERB-Part: возглашавших, действующем, закрытой, затерявшемся, затуманенном, обезумевшем, образующих, обтягивающих, оккупированном, опубликованном</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>ADJ: сам, сама, большой, самое, самый, Главная, вторая, первые, большая, другие</li>
      <li>AUX-Part: бывшая, бывший</li>
      <li>DET: все, этот, мой, мои, тот, эти, наш, вся, моя, такая</li>
      <li>NOUN: люди, человек, мир, спасибо, день, время, друзья, баба, бог, дело</li>
      <li>NUM: много, один, три, одна, два, двое, сколько, столько, несколько, одно</li>
      <li>PRON: я, он, это, ты, они, мы, она, вы, что, кто</li>
      <li>PROPN: Петрович, жириновский, Генрих, Убейд, Россия, Яблоко, парнас, Ирина, Катя, Петя</li>
      <li>VERB-Part: Стоявшие, находившиеся, пропавшие, являющиеся, Беременная, Венчанный, Влекомый, Вступивший, Входящая, Высвободившийся</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Par
    <ul>
      <li>NOUN: разу, толку, Воску, азу, чаю</li>
      <li>PRON: чего</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Voc
    <ul>
      <li>NOUN: Боже, золотце, ребят</li>
      <li>PROPN: Боже, Катюнь, Серёж</li>
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
      <li>ADJ: лучше, сильнее, выше, светлее, старше, хуже, бледнее, ближе, больше, дороже</li>
      <li>ADV: больше, более, лучше, менее, дальше, меньше, раньше, быстрее, скорее, ниже</li>
      <li>NUM: больше, меньше</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADJ: сам, большой, нужно, другой, других, первый, сама, самый, первые, самое</li>
      <li>ADV: так, как, уже, где, еще, там, очень, теперь, тут, потом</li>
      <li>NUM: один, одна</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sup
    <ul>
      <li>ADJ: лучших, Важнейший, Добрейшим, Древнейшие, Древнейший, ближайшее, важнейших, высшей, древнейших, крупнейшего</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>ADV: никогда, никак, Нигде</li>
      <li>CCONJ: ни</li>
      <li>DET: никакие, никаких, никакой</li>
      <li>PART: не, ни, нет, Неееее, на, неее</li>
      <li>PRON: ничего, никто, никого, никому, ничто, ничем, никем, ничо</li>
      <li>VERB: нет, нельзя, некогда, некуда, нечего, нипочем, некого, некому, нету, нечему</li>
      <li>VERB-Fin: нет, нету</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Variant</a></li>
</ul>

<ul>
  <li>Short
    <ul>
      <li>ADJ: нужно, должна, нужны, хорошо, должно, должен, нужна, должны, нужен, равно</li>
      <li>DET: Такова, о́но, таков</li>
      <li>VERB-Part: написано, арестованы, обнаружены, потерян, принято, сделаны, Восхищена, возбуждено, госпитализированы, завершены</li>
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
      <li>NOUN-Fin: Ставь</li>
      <li>VERB-Conv: говоря, судя, видя, пытаясь, Благодаря, Исходя, бежа, встречая, держа, дрожа</li>
      <li>VERB-Fin: может, есть, нет, хочу, стоит, говорит, знаю, понимаю, думаю, вижу</li>
      <li>VERB-Inf: делать, быть, жить, смотреть, думать, любить, видеть, спать, голосовать, слушать</li>
      <li>VERB-Part: Стоявшие, влекомый, живущих, находившиеся, являющиеся, Ведущим, Входящая, Входящим, Гомонящих, Митингующие</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Perf
    <ul>
      <li>VERB-Conv: нахмурясь, оставив, посмотрев, Услышав, выйдя, выстрелив, дав, дождавшись, доставши, забыв</li>
      <li>VERB-Fin: сказал, стал, стали, стало, заявил, получил, решил, сказала, заметил, случилось</li>
      <li>VERB-Inf: сделать, добавить, сказать, показать, дать, поставить, взять, найти, открыть, помочь</li>
      <li>VERB-Part: исчезнувших, написано, арестованы, обнаружены, организованных, потерян, принято, сделаны, состоявшимися, Восхищена</li>
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
      <li>PART: бы</li>
      <li>SCONJ: чтобы, чтоб, что</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: будь, будьте</li>
      <li>NOUN-Fin: Ставь</li>
      <li>PART: давайте</li>
      <li>VERB-Fin: здравствуйте, дайте, давай, прости, думай, смотри, возьми, говори, дай, иди</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX-Fin: было, был, будет, были, была, есть, будут, буду, будем, будешь</li>
      <li>VERB-Fin: есть, может, сказал, нет, хочу, стал, стоит, говорит, знаю, понимаю</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>AUX-Fin: будет, будут, буду, будешь, будете</li>
      <li>VERB-Fin: сможет, скажу, Напомним, ляжем, получится, скажет, станет, даст, останется, придется</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX-Fin: было, был, были, была</li>
      <li>AUX-Part: бывшая, бывший</li>
      <li>VERB-Conv: нахмурясь, оставив, посмотрев, Услышав, выйдя, выстрелив, дав, дождавшись, доставши, забыв</li>
      <li>VERB-Fin: сказал, стал, стали, было, видел, мог, стало, заявил, получил, решил</li>
      <li>VERB-Part: исчезнувших, написано, арестованы, обнаружены, организованных, потерян, принято, сделаны, состоявшимися, Восхищена</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX-Conv: будучи</li>
      <li>AUX-Fin: будет, есть, будут, буду, будем, будешь, будете</li>
      <li>VERB-Conv: говоря, судя, видя, пытаясь, Благодаря, Исходя, бежа, встречая, держа, дрожа</li>
      <li>VERB-Fin: есть, может, нет, хочу, стоит, говорит, знаю, понимаю, думаю, вижу</li>
      <li>VERB-Part: влекомый, живущих, являющиеся, Ведущим, Входящая, Входящим, Гомонящих, Митингующие, Напоминающие, Пьющая</li>
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
      <li>AUX-Fin: было, был, будет, были, была, есть, будут, буду, будем, будешь</li>
      <li>AUX-Inf: быть</li>
      <li>AUX-Part: бывшая, бывший</li>
      <li>NOUN-Fin: Ставь</li>
      <li>VERB-Conv: говоря, судя, видя, оставив, посмотрев, Благодаря, Исходя, Услышав, бежа, встречая</li>
      <li>VERB-Fin: есть, может, сказал, нет, хочу, стал, стоит, говорит, знаю, понимаю</li>
      <li>VERB-Inf: быть, делать, сделать, жить, смотреть, думать, добавить, любить, сказать, показать</li>
      <li>VERB-Part: исчезнувших, состоявшимися, Стоявшие, живущих, находившиеся, пропавшие, являющиеся, Ведущим, Вспотевшим, Вступивший</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Mid
    <ul>
      <li>VERB-Conv: пытаясь, нахмурясь, дождавшись, занимаясь, обернувшись, проснувшись, смеясь, стараясь, цепляясь, Дивяся</li>
      <li>VERB-Fin: случилось, хотелось, кажется, надеюсь, хочется, казалось, оказалось, становится, боюсь, говорится</li>
      <li>VERB-Inf: вернуться, добиться, заниматься, улыбнуться, бороться, двигаться, добраться, заняться, напиться, настояться</li>
      <li>VERB-Part: возвратившихся, затерявшемся, казавшаяся, касающихся, клонившимся, купающихся, молящейся, нагревшуюся, оставшемся, открывшихся</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>VERB-Fin: Вбрасывается, Вздымалась, Делается, водятся, воспитываются, встречался, готовится, датируется, использовалась, использовался</li>
      <li>VERB-Inf: приниматься</li>
      <li>VERB-Part: написано, арестованы, обнаружены, организованных, потерян, принято, сделаны, Восхищена, влекомый, возбуждено</li>
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
      <li>AUX-Fin: буду, будем, есть</li>
      <li>PRON: я, мы, мне, меня, нас, нам, нами, мной, мною, на</li>
      <li>VERB-Fin: хочу, знаю, понимаю, думаю, вижу, могу, люблю, сижу, надеюсь, прошу</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX-Fin: будешь, будь, будете, будьте</li>
      <li>NOUN-Fin: Ставь</li>
      <li>PRON: ты, вы, вас, тебя, вам, тебе, вами, тобой, тобою</li>
      <li>VERB-Fin: здравствуйте, знаешь, знаете, можешь, дайте, давай, прости, думай, любишь, понимаешь</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX-Fin: будет, есть, будут</li>
      <li>PRON: он, они, она, его, ему, им, их, них, него, ее</li>
      <li>VERB-Fin: есть, может, нет, стоит, говорит, могут, сидит, хочет, любит, бывает</li>
    </ul>
  </li>
</ul>




<h3>Other Features</h3>


<ul>
  <li><a>Abbr</a>
    <ul>
      <li>Yes
        <ul>
          <li>ADJ: ст., англ., п., ч., cт., кв., сах., Б., Гос., Изд.</li>
          <li>ADP: п</li>
          <li>ADV: д., т., т</li>
          <li>DET: н., т.</li>
          <li>NOUN: с., л., ил., Пер., г, э., гр., гг., МЖ, млн.</li>
          <li>NUM: тыс</li>
          <li>PRON: т., кот.</li>
          <li>PROPN: М., Н., В., А., СС, И., Л., С., Г., Д.</li>
          <li>VERB: е., См., и., созд</li>
          <li>X: ISBN, P.P.S., P.S.</li>
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
          <li>CCONJ: А</li>
          <li>INTJ: Nice</li>
          <li>NOUN: RT, #hotel_grafit, крейзи</li>
          <li>PART: PROFIT, ХАЙ, Хэллоу</li>
          <li>PROPN: @screened-200, @screened-134, @screened-15, ART, @screened-150, @screened-162, @screened-32, @screened-84, ForcePower, MotoGP</li>
          <li>VERB: МАНДРУЕ</li>
          <li>X: *, #astrakhan, #fishing, #gopro, #russia, #sochifornia, Source, via, ISBN, #adler</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumForm</a>
    <ul>
      <li>Digit
        <ul>
          <li>ADJ: 1, 3, 2, 1926, 20, 2012, 4, 5, 13, 19</li>
          <li>NUM: 2, 1, 3, 5, 4, 10, 6, 20, 30, 7</li>
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
          <li>NUM: з, не</li>
          <li>VERB-Fin: вопиют</li>
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
<li>This corpus uses 3 lemmas as auxiliaries (<a>aux</a>). Examples: быть, бы, б.</li>
<li>This corpus uses 1 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: быть.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN-Gen (12)</li>
      <li>VERB--NOUN-Nom (5)</li>
      <li>VERB--PRON-Acc (1)</li>
      <li>VERB--PRON-Gen (1)</li>
      <li>VERB--PRON-Nom (3)</li>
      <li>VERB-Conv--NOUN-Nom (1)</li>
      <li>VERB-Fin--NOUN (1)</li>
      <li>VERB-Fin--NOUN-Acc (3)</li>
      <li>VERB-Fin--NOUN-Gen (94)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(до) (1)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(около) (1)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(порядка) (1)</li>
      <li>VERB-Fin--NOUN-Nom (1595)</li>
      <li>VERB-Fin--NOUN-Nom-ADP(как) (2)</li>
      <li>VERB-Fin--NOUN-Nom-ADP(спустя) (1)</li>
      <li>VERB-Fin--PRON-Acc (1)</li>
      <li>VERB-Fin--PRON-Dat (1)</li>
      <li>VERB-Fin--PRON-Gen (13)</li>
      <li>VERB-Fin--PRON-Nom (1292)</li>
      <li>VERB-Inf--NOUN-Acc (1)</li>
      <li>VERB-Inf--NOUN-Gen (2)</li>
      <li>VERB-Inf--NOUN-Nom (27)</li>
      <li>VERB-Inf--PRON-Gen (1)</li>
      <li>VERB-Inf--PRON-Nom (27)</li>
      <li>VERB-Part--NOUN-Nom (8)</li>
      <li>VERB-Part--PRON-Nom (3)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN-Acc (2)</li>
      <li>VERB--NOUN-Gen (5)</li>
      <li>VERB--PRON-Acc (1)</li>
      <li>VERB--PRON-Gen (1)</li>
      <li>VERB--PRON-Par (1)</li>
      <li>VERB-Conv--NOUN-Acc (92)</li>
      <li>VERB-Conv--NOUN-Dat (1)</li>
      <li>VERB-Conv--NOUN-Gen (14)</li>
      <li>VERB-Conv--NOUN-Ins (4)</li>
      <li>VERB-Conv--PRON-Acc (10)</li>
      <li>VERB-Conv--PRON-Nom (1)</li>
      <li>VERB-Fin--NOUN (2)</li>
      <li>VERB-Fin--NOUN-Acc (1007)</li>
      <li>VERB-Fin--NOUN-Acc-ADP(в) (2)</li>
      <li>VERB-Fin--NOUN-Acc-ADP(за) (1)</li>
      <li>VERB-Fin--NOUN-Acc-ADP(из) (1)</li>
      <li>VERB-Fin--NOUN-Acc-ADP(к) (1)</li>
      <li>VERB-Fin--NOUN-Acc-ADP(среди) (1)</li>
      <li>VERB-Fin--NOUN-Dat (13)</li>
      <li>VERB-Fin--NOUN-Dat-ADP(по) (2)</li>
      <li>VERB-Fin--NOUN-Gen (141)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(около) (1)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(по) (1)</li>
      <li>VERB-Fin--NOUN-Ins (39)</li>
      <li>VERB-Fin--NOUN-Nom (10)</li>
      <li>VERB-Fin--NOUN-Par (1)</li>
      <li>VERB-Fin--PRON (1)</li>
      <li>VERB-Fin--PRON-Acc (288)</li>
      <li>VERB-Fin--PRON-Dat (5)</li>
      <li>VERB-Fin--PRON-Gen (23)</li>
      <li>VERB-Fin--PRON-Ins (8)</li>
      <li>VERB-Fin--PRON-Nom (1)</li>
      <li>VERB-Inf--NOUN (6)</li>
      <li>VERB-Inf--NOUN-Acc (392)</li>
      <li>VERB-Inf--NOUN-Acc-ADP(на) (2)</li>
      <li>VERB-Inf--NOUN-Dat (3)</li>
      <li>VERB-Inf--NOUN-Dat-ADP(по) (1)</li>
      <li>VERB-Inf--NOUN-Gen (36)</li>
      <li>VERB-Inf--NOUN-Gen-ADP(на) (1)</li>
      <li>VERB-Inf--NOUN-Gen-ADP(порядка) (1)</li>
      <li>VERB-Inf--NOUN-Ins (14)</li>
      <li>VERB-Inf--NOUN-Nom (2)</li>
      <li>VERB-Inf--NOUN-Par (1)</li>
      <li>VERB-Inf--PRON-Acc (99)</li>
      <li>VERB-Inf--PRON-Dat (1)</li>
      <li>VERB-Inf--PRON-Gen (16)</li>
      <li>VERB-Inf--PRON-Ins (1)</li>
      <li>VERB-Part--NOUN-Acc (43)</li>
      <li>VERB-Part--NOUN-Dat (1)</li>
      <li>VERB-Part--NOUN-Gen (4)</li>
      <li>VERB-Part--NOUN-Ins (2)</li>
      <li>VERB-Part--PRON-Acc (2)</li>
      <li>VERB-Part--PRON-Ins-ADP(за) (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--NOUN-Ins (2)</li>
      <li>VERB--PRON-Dat (17)</li>
      <li>VERB-Conv--NOUN-Dat (7)</li>
      <li>VERB-Conv--NOUN-Ins (24)</li>
      <li>VERB-Conv--NOUN-Ins-ADP(со) (1)</li>
      <li>VERB-Conv--PRON-Dat (4)</li>
      <li>VERB-Conv--PRON-Ins (2)</li>
      <li>VERB-Fin--NOUN-Acc (1)</li>
      <li>VERB-Fin--NOUN-Dat (75)</li>
      <li>VERB-Fin--NOUN-Dat-ADP(в) (1)</li>
      <li>VERB-Fin--NOUN-Ins (127)</li>
      <li>VERB-Fin--NOUN-Ins-ADP(через) (1)</li>
      <li>VERB-Fin--NOUN-Nom (1)</li>
      <li>VERB-Fin--PRON-Dat (193)</li>
      <li>VERB-Fin--PRON-Ins (12)</li>
      <li>VERB-Fin--PRON-Nom (1)</li>
      <li>VERB-Inf--NOUN (1)</li>
      <li>VERB-Inf--NOUN-Dat (21)</li>
      <li>VERB-Inf--NOUN-Gen (1)</li>
      <li>VERB-Inf--NOUN-Ins (44)</li>
      <li>VERB-Inf--PRON-Dat (45)</li>
      <li>VERB-Inf--PRON-Ins (7)</li>
      <li>VERB-Part--NOUN-Dat (10)</li>
      <li>VERB-Part--NOUN-Ins (40)</li>
      <li>VERB-Part--PRON-Dat (8)</li>
      <li>VERB-Part--PRON-Ins (2)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 9 relation subtypes: <a>acl:relcl</a>, <a>aux:pass</a>, <a>csubj:pass</a>, <a>flat:foreign</a>, <a>flat:name</a>, <a>nsubj:pass</a>, <a>nummod:entity</a>, <a>nummod:gov</a>, <a>obl:agent</a></li>
<li>The following 1 relation types are not used in this corpus at all: <a>clf</a></li>
</ul>
