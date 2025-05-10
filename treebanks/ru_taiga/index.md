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
Family: IE

This treebank has been part of Universal Dependencies since the UD v2.2 release.

The following people have contributed to making this treebank part of UD: Olga Lyashevskaya, Olga Rudina, Natalia Vlasova, Anna Zhuravleva.

Repository: [UD_Russian-Taiga](https://github.com/UniversalDependencies/UD_Russian-Taiga)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udru_taiga216)<br />
Download all treebanks: [UD 2.16](/#download)

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

[Abbr](ru_taiga-feat-Abbr.html) – [Animacy](ru_taiga-feat-Animacy.html) – [Aspect](ru_taiga-feat-Aspect.html) – [Case](ru_taiga-feat-Case.html) – [Clitic](ru_taiga-feat-Clitic.html) – [Degree](ru_taiga-feat-Degree.html) – [ExtPos](ru_taiga-feat-ExtPos.html) – [Foreign](ru_taiga-feat-Foreign.html) – [Gender](ru_taiga-feat-Gender.html) – [InflClass](ru_taiga-feat-InflClass.html) – [Mood](ru_taiga-feat-Mood.html) – [NameType](ru_taiga-feat-NameType.html) – [Number](ru_taiga-feat-Number.html) – [NumForm](ru_taiga-feat-NumForm.html) – [NumType](ru_taiga-feat-NumType.html) – [Person](ru_taiga-feat-Person.html) – [Polarity](ru_taiga-feat-Polarity.html) – [Poss](ru_taiga-feat-Poss.html) – [PronType](ru_taiga-feat-PronType.html) – [Reflex](ru_taiga-feat-Reflex.html) – [Tense](ru_taiga-feat-Tense.html) – [Typo](ru_taiga-feat-Typo.html) – [Variant](ru_taiga-feat-Variant.html) – [VerbForm](ru_taiga-feat-VerbForm.html) – [Voice](ru_taiga-feat-Voice.html)

## Relations

[acl](ru_taiga-dep-acl.html) – [acl:relcl](ru_taiga-dep-acl-relcl.html) – [advcl](ru_taiga-dep-advcl.html) – [advmod](ru_taiga-dep-advmod.html) – [amod](ru_taiga-dep-amod.html) – [appos](ru_taiga-dep-appos.html) – [aux](ru_taiga-dep-aux.html) – [aux:pass](ru_taiga-dep-aux-pass.html) – [case](ru_taiga-dep-case.html) – [cc](ru_taiga-dep-cc.html) – [ccomp](ru_taiga-dep-ccomp.html) – [compound](ru_taiga-dep-compound.html) – [conj](ru_taiga-dep-conj.html) – [cop](ru_taiga-dep-cop.html) – [csubj](ru_taiga-dep-csubj.html) – [csubj:outer](ru_taiga-dep-csubj-outer.html) – [csubj:pass](ru_taiga-dep-csubj-pass.html) – [dep](ru_taiga-dep-dep.html) – [det](ru_taiga-dep-det.html) – [discourse](ru_taiga-dep-discourse.html) – [dislocated](ru_taiga-dep-dislocated.html) – [expl](ru_taiga-dep-expl.html) – [fixed](ru_taiga-dep-fixed.html) – [flat](ru_taiga-dep-flat.html) – [flat:foreign](ru_taiga-dep-flat-foreign.html) – [flat:goeswith](ru_taiga-dep-flat-goeswith.html) – [flat:name](ru_taiga-dep-flat-name.html) – [goeswith](ru_taiga-dep-goeswith.html) – [iobj](ru_taiga-dep-iobj.html) – [list](ru_taiga-dep-list.html) – [mark](ru_taiga-dep-mark.html) – [nmod](ru_taiga-dep-nmod.html) – [nsubj](ru_taiga-dep-nsubj.html) – [nsubj:outer](ru_taiga-dep-nsubj-outer.html) – [nsubj:pass](ru_taiga-dep-nsubj-pass.html) – [nummod](ru_taiga-dep-nummod.html) – [nummod:gov](ru_taiga-dep-nummod-gov.html) – [obj](ru_taiga-dep-obj.html) – [obl](ru_taiga-dep-obl.html) – [obl:agent](ru_taiga-dep-obl-agent.html) – [obl:depict](ru_taiga-dep-obl-depict.html) – [obl:float](ru_taiga-dep-obl-float.html) – [obl:pronmod](ru_taiga-dep-obl-pronmod.html) – [obl:tmod](ru_taiga-dep-obl-tmod.html) – [orphan](ru_taiga-dep-orphan.html) – [parataxis](ru_taiga-dep-parataxis.html) – [parataxis:discourse](ru_taiga-dep-parataxis-discourse.html) – [punct](ru_taiga-dep-punct.html) – [reparandum](ru_taiga-dep-reparandum.html) – [root](ru_taiga-dep-root.html) – [vocative](ru_taiga-dep-vocative.html) – [xcomp](ru_taiga-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 121967 sentences and 1758939 tokens.</li>
</ul>

<ul>
<li>This corpus contains 349088 tokens (20%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus contains 3 types of words with spaces. Examples: 10 000, 500 000, 60 000</li>
</ul>

<ul>
<li>This corpus contains 3419 types of words that contain both letters and punctuation. Examples: в., А., т., н., г., и., п., м., с., д., что-то, е., Ф., к., э., см., гг., из-за, л., др., вв., как-то, кто-то, какой-то, б., Ю., о., все-таки, что-нибудь, Я., где-то, из-под, р., Ж., какие-то, @xxxxxx, по-прежнему, ч., какая-то, по-разному, когда-то, чем-то, всё-таки, какой-нибудь, Дж., во-первых, почему-то, во-вторых, У., кто-нибудь</li>
</ul>

<ul>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 17 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a>, <a>X</a></li>
</ul>

<ul>
<li>This corpus contains 214 word types tagged as particles (PART): -таки, Ай, Але, Ать, Во-о-от, Воот, Вуаля, Д, Д-да, Да-а, Даа, Давай, Давайте, Ещё, Идааа, Ле, Мерси, Мож, Н-нет, Не-а, Не-ет, Неееее, Неужель, Неужли, Нешто, Никак, Ничего, Ну-с, О., Пожалоста, Пожалуйстаааа, Полноте, Профто, Спасиииибо, Т-а-а-к, Только-то, Ужо, ХАЙ, Ч-е-е-го, Чего-о, Эдак, Эк, Эка, а, авось, ага, аж, ажжжж, аль, ар, ась, б, бишь, бо, буд, будто, бы, было, ван, ведь, верно, вишь, во, во-он, вон, вот, вроде, все, все-таки, всего, всеж, всеже, всё, всё-таки, глядь, да, даааа, даже, дай, дак, де, делла, дель, дер, дескать, ди, дю, е, еле, еще, ж, же, жеш, жи, зато, здорово, здрасте, и, ибн, именно, ишь, ка, ка-а-а-ак, кабы, как, как-никак, кась, ко, кое, конечно, конешно, кось, ла, ладно, ли, либо, лии, лиш, лишь, ль, мб, можно, мол, н-не, на, нате, не, не-е-е-т, небось, неее, нет, нето, неужели, неужто, ни, ни-ни, нибудь, норм, нп, ну, ну-ка, о, от, пж, пжж, плз, подалуйста, поди, пожалуйста, пожалуйстааа, пожалюйста, посквй, прост, просто, прям, прямо, пускай, пусть, пущай, разве, ровно, с, се, себе, словно, сорри, спасибо, спасибочки, су, супер, таже, так, так-таки, также, таки, там, те, тже, ти-по, тип, типа, типо, тко, то, то-то, тово, того, тоже, ток, тока, токмо, только, только-только, точно, уж, уже, ужели, ужель, ужли, фон, хорошо, хоть, хотя, че, чето, что, что-ли, что-то, чуть, ь, эль, эн, это, якобы</li>
</ul>

<ul>
<li>This corpus contains 67 lemmas tagged as pronouns (PRON): вам, весь, всë, все, вся, всё, вы, друг, другое, дружка, ей, кое-кто, кое-что, кто, кто-либо, кто-нибудь, кто-то, мне, многие, многое, мы, нашатырь, некоторые, некто, немногие, немногое, нечто, никто, ничeго, ничего, ничегошеньки, ничо, ничто, он, он+ж, она, оне, они, оно, остальное, прочее, се, себя, сей, сие, тo, то, то+же, тоже, тот, ты, у+мы, хто, че, че-то, чем, ченить, что, что+бы, что-ли, что-либо, что-нибудь, что-то, эт, это, этот, я</li>
</ul>

<ul>
<li>This corpus contains 83 lemmas tagged as determiners (DET): cвой, eго, ваш, ваша, весь, все, всейный, всякий, всяческий, всё, достальной, другой, его, ее, ейный, иной, их, ихний, ихный, каждый, кажный, каков, каковой, какой, какой-либо, какой-нибудь, какой-то, какую-либо, кое-какой, кое-чей, кой, кой-какой, кой-то, котоpый, который, любой, многий, мой, наш, некий, некоторый, немногий, ненаш, никакой, никой, ничей, ничейный, один, одним, она, оный, остальной, прочий, с+такой, сам, самый, свой, сей, сколький, столький, сякой, так, таков, таковой, таковский, такой, такой-то, твой, то, тот, тот+же, тый, чей, чей-либо, чей-нибудь, чей-то, чейи-нибудь, эдакий, экий, этакий, это, этот, этый</li>
</ul>

<ul>
<li>Out of the above, 9 lemmas occurred sometimes as PRON and sometimes as DET: весь, все, всё, она, сей, то, тот, это, этот</li>
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
    <li>VERB: говоря, глядя, стараясь, увидев, желая, зная, начиная, видя, обращаясь, улыбаясь</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: было, был, была, были, будет, есть, буду, будут, будем, будешь</li>
    <li>VERB: может, есть, сказал, сказала, значит, было, стал, стало, стали, говорит</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: быть</li>
    <li>VERB: сказать, быть, делать, сделать, говорить, жить, найти, понять, играть, идти</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>AUX: бывший, бывшая, бывшего, бывшие</li>
    <li>VERB: связано, связаны, написано, связана, связан, сказано, связанные, созданы, образовано, представлены</li>
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
      <li>ADJ: русской, художественной, должна, первой, большую, маленькая, первая, большая, древней, новой</li>
      <li>AUX-Fin: была, бывшая</li>
      <li>AUX-Part: бывшая</li>
      <li>DET: своей, свою, этой, эта, эту, которой, которая, всю, сама, моя</li>
      <li>NOUN: жизни, мама, речи, жизнь, литературы, руки, девочка, истории, правда, формы</li>
      <li>NUM: две, одной, одну, одна, обе, двух, двумя, обеих, обеими, двум</li>
      <li>PRON: она, ее, ей, ней, нее, её, неё, нею, ею, еë</li>
      <li>PROPN: россии, Алёна, Лиза, Анна, Сибирочка, Мэри, Руси, Соня, Фрося, Франции</li>
      <li>VERB-Fin: сказала, стала, могла, произнесла, спросила, хотела, говорила, стояла, видела, увидела</li>
      <li>VERB-Part: связана, написана, называемая, представлена, названа, называемой, создана, наказана, сделана, связанная</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: русского, первый, русском, большой, хороший, должен, русский, новый, старый, добрый</li>
      <li>AUX-Fin: был, бывший</li>
      <li>AUX-Part: бывший, бывшего</li>
      <li>DET: этот, который, сам, тот, один, такой, мой, свой, каждый, этого</li>
      <li>NOUN: языка, раз, человек, языке, язык, человека, день, глаза, людей, лет</li>
      <li>NUM: два, один, двух, одного, оба, двумя, одним, одном, обоих, одному</li>
      <li>PRON: он, его, ему, него, кто, ним, никто, нем, им, нему</li>
      <li>PROPN: Толик, Мишка, Кузька, Пушкина, Толика, иван, Пушкин, Вовка, Юра, Криволапыч</li>
      <li>VERB-Fin: сказал, стал, мог, спросил, говорил, писал, произнес, ответил, хотел, знал</li>
      <li>VERB-Part: связан, называемый, создан, представлен, созданный, назван, написан, основан, занят, открыт</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neut
    <ul>
      <li>ADJ: нужно, хорошо, равно, должно, новое, трудно, видно, большое, интересно, известно</li>
      <li>AUX-Fin: было</li>
      <li>DET: это, все, такое, то, свое, этого, одно, которое, самое, своего</li>
      <li>NOUN: слова, время, слово, слов, искусства, времени, место, дело, произведения, значение</li>
      <li>NUM: одно, два, двух, одном, одного, двумя, одним, оба, одному, двум</li>
      <li>PRON: это, что, то, все, оно, ничего, всё, того, том, тем</li>
      <li>PROPN: Возрождения, Папаново, яблоко, Прадо, Полево, Двуречья, Перу, Просвещения, Двуречье, Конго</li>
      <li>VERB-Fin: было, стало, казалось, хотелось, случилось, пришлось, могло, оказалось, осталось, удалось</li>
      <li>VERB-Inf: закончилось</li>
      <li>VERB-Part: связано, написано, сказано, образовано, дано, сделано, выражено, создано, означающее, употреблено</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Animacy</a></li>
</ul>

<ul>
  <li>Anim
    <ul>
      <li>ADJ: железного, маленьких, нового, маленького, старого, бедного, молодого, злых, новых, старшего</li>
      <li>AUX-Part: бывшего</li>
      <li>DET: всех, своих, своего, которого, этого, тех, других, которых, другого, моего</li>
      <li>NOUN: человек, мама, человека, людей, люди, папа, девочка, мальчик, детей, дети</li>
      <li>NUM: двух, одного, обоих, двоих, трех, троих, обеих, нескольких, семерых, четверых</li>
      <li>PRON: кто, все, никто, всех, всем, кого, кто-то, кому, никому, никого</li>
      <li>PROPN: Толик, Алёна, Лиза, Мишка, Кузька, Пушкина, Анна, Сибирочка, Мэри, Толика</li>
      <li>VERB-Part: присутствующих, имеющих, собравшихся, стоявшего, занятых, пойманных, притаившихся, пришедшего, считающего, беседующих</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Inan
    <ul>
      <li>ADJ: первый, разные, новые, новый, русский, следующий, целый, последние, последний, различные</li>
      <li>DET: этот, свои, все, свой, эти, которые, такие, весь, каждый, который</li>
      <li>NOUN: слова, время, слово, языка, раз, жизни, слов, языке, язык, искусства</li>
      <li>NUM: два, три, один, две, четыре, обе, оба, двое, пять, сто</li>
      <li>PRON: это, что, то, все, ничего, всё, того, том, тем, всего</li>
      <li>PROPN: россии, Руси, франции, Москве, Возрождения, Европы, Италии, Германии, Европе, Греции</li>
      <li>VERB-Part: связанные, написанные, посвященные, называемый, имеющие, выполненные, существующие, созданные, блестящий, возникшие</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Dual
    <ul>
      <li>NOUN: руце</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: разных, новые, разные, различных, должны, русских, первые, новых, большие, художественных</li>
      <li>AUX-Fin: были, будут, будем, будете, есть, будьте, суть, будте, бывших, есмы</li>
      <li>AUX-Part: бывшие</li>
      <li>DET: все, которые, эти, всех, других, такие, этих, своих, свои, которых</li>
      <li>NOUN: слова, слов, глаза, людей, лет, люди, руки, детей, языков, произведения</li>
      <li>PRON: мы, они, вы, нас, их, них, нам, вас, вам, им</li>
      <li>PROPN: Ивановы, Карамазовы, Рыбы, Уффици, Афин, Афинах, Ахеменидов, Рюриковичей, Гримм, Ивановых</li>
      <li>VERB-Fin: стали, могут, есть, говорят, называют, могли, имеют, говорим, говорили, называли</li>
      <li>VERB-Inf: навязываються</li>
      <li>VERB-Part: связаны, связанные, созданы, представлены, связанных, посвященные, написанные, написаны, имеющих, созданные</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: русского, нужно, большой, русской, первый, русском, хорошо, хороший, должен, второй</li>
      <li>AUX-Fin: было, был, была, будет, есть, буду, будешь, будь, еси, есмь</li>
      <li>AUX-Part: бывший, бывшая, бывшего</li>
      <li>DET: этот, это, своей, такой, который, свою, этого, этой, сам, тот</li>
      <li>NOUN: время, слово, языка, жизни, слова, языке, раз, человек, язык, мама</li>
      <li>NUM: один, одной, одного, одно, одну, одна, одном, одним, одному, оден</li>
      <li>PRON: я, он, это, она, что, ты, мне, меня, его, то</li>
      <li>PROPN: Толик, россии, Алёна, Лиза, Мишка, Кузька, Пушкина, Анна, Сибирочка, Мэри</li>
      <li>VERB-Fin: может, есть, сказал, сказала, значит, было, стал, стало, говорит, стала</li>
      <li>VERB-Inf: закончилось</li>
      <li>VERB-Part: связано, написано, связана, связан, сказано, образовано, дано, называемый, создан, написана</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>ADJ: первый, большую, разные, новые, первую, новый, новую, русский, следующий, целый</li>
      <li>AUX-Part: бывшего</li>
      <li>DET: все, свою, этот, свои, эту, это, всю, свой, эти, свое</li>
      <li>NOUN: время, раз, день, голову, слово, руку, минуту, слова, глаза, место</li>
      <li>NUM: несколько, два, много, три, один, одну, две, сколько, одно, пять</li>
      <li>PRON: его, меня, что, их, ее, себя, это, тебя, нас, то</li>
      <li>PROPN: Толика, Сибирочку, Лизу, Мишку, россию, кузьку, москву, Русь, Петербург, алёну</li>
      <li>VERB: связанные, написанные, посвященные, называемый, имеющие, выполненные, существующие, созданные, блестящий, заданное</li>
      <li>VERB-Part: связанные, написанные, посвященные, называемый, имеющие, выполненные, существующие, созданные, блестящий, заданное</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>ADJ: крайней, русскому, разным, новому, первому, общему, великому, современному, древним, русской</li>
      <li>DET: своему, этому, всем, которому, своей, своим, другим, тому, которым, всему</li>
      <li>NOUN: людям, человеку, словам, языку, детям, мере, дороге, слову, маме, богу</li>
      <li>NUM: одному, одной, двум, обеим, обоим, пяти, трем, нескольку, шести, семи</li>
      <li>PRON: мне, ему, ей, нам, тебе, себе, вам, им, тому, нему</li>
      <li>PROPN: Толику, Лизе, Сибирочке, Мишке, Алёне, Фросе, Пушкину, Лидии, Матвеевне, Анне</li>
      <li>VERB: жившему, некому, пишущему, собравшимся, читающему, играющим, нечему, описываемым, погибшим, расчищенной</li>
      <li>VERB-Part: жившему, пишущему, собравшимся, читающему, играющим, описываемым, погибшим, расчищенной, спящей, указанному</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>ADJ: русского, русской, разных, литературного, художественного, нового, русских, различных, художественной, первого</li>
      <li>DET: этого, других, этих, всех, своего, которого, которых, этой, тех, своих</li>
      <li>NOUN: языка, слов, слова, искусства, лет, жизни, времени, человека, литературы, людей</li>
      <li>NUM: двух, одного, одной, трех, нескольких, пяти, четырех, семи, шести, обеих</li>
      <li>PRON: нас, меня, ничего, него, них, того, всего, этого, чего, вас</li>
      <li>PROPN: Пушкина, россии, Возрождения, Толстого, Гоголя, Достоевского, Европы, Востока, Лермонтова, Толика</li>
      <li>VERB: нечего, связанных, действующих, имеющих, называемого, редуцированных, изображаемого, составляющих, называемой, посвященных</li>
      <li>VERB-Part: связанных, действующих, имеющих, называемого, редуцированных, изображаемого, составляющих, называемой, посвященных, исчезнувших</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ins
    <ul>
      <li>ADJ: первым, главным, большим, разными, новым, большими, новыми, русским, большой, огромным</li>
      <li>DET: таким, своим, своими, своей, самым, другими, одним, этим, тем, этими</li>
      <li>NOUN: образом, глазами, словами, словом, голосом, головой, помощью, руками, рукой, языком</li>
      <li>NUM: двумя, одним, одной, тремя, несколькими, обеими, четырьмя, семью, пятью, обоими</li>
      <li>PRON: тем, ним, собой, ними, ней, чем, им, нами, мной, этим</li>
      <li>PROPN: Наташей, Толиком, Нюрой, Лизой, Сибирочкой, Мишкой, Пушкиным, Петром, Иваном, Анной</li>
      <li>VERB: дрожащим, закрытыми, дрожащими, нечем, блестящими, горящими, раскрытыми, связанными, допускающим, сверкающими</li>
      <li>VERB-Part: дрожащим, закрытыми, дрожащими, блестящими, горящими, раскрытыми, связанными, допускающим, сверкающими, связанным</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Loc
    <ul>
      <li>ADJ: русском, общем, современном, разных, первом, русской, литературном, первой, переносном, основном</li>
      <li>DET: этом, котором, самом, том, своем, своих, всех, этой, своей, которой</li>
      <li>NOUN: языке, жизни, конце, месте, речи, случае, году, мире, искусстве, значении</li>
      <li>NUM: одном, двух, одной, нескольких, трех, обоих, трёх, семи, десяти, четырех</li>
      <li>PRON: том, этом, нем, ней, чем, них, себе, чём, нём, многом</li>
      <li>PROPN: россии, Москве, Руси, Франции, Европе, Германии, Италии, Риме, Англии, Париже</li>
      <li>VERB-Part: написанных, приведенном, связанном, написанном, обобщенном, приведенных, случившемся, вышедшем, изданном, называемой</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>ADJ: хороший, большой, первый, русский, маленькая, первая, большая, добрый, старый, железный</li>
      <li>AUX-Part: бывший, бывшая, бывшие</li>
      <li>DET: все, которые, эти, сам, который, этот, это, эта, один, такие</li>
      <li>NOUN: слово, человек, мама, слова, люди, папа, девочка, язык, дело, правда</li>
      <li>NUM: много, два, один, три, две, одна, мало, оба, сколько, несколько</li>
      <li>PRON: я, он, она, это, мы, они, ты, что, вы, все</li>
      <li>PROPN: Толик, Алёна, Лиза, Мишка, Кузька, Анна, Сибирочка, Соня, Фрося, иван</li>
      <li>VERB-Part: связанные, созданные, называемая, посвященные, называемый, написанные, называемые, созданный, связанная, созданная</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Par
    <ul>
      <li>NOUN: разу, народу, виду, толку, дому, чаю, лесу, смеху, полу, голоду</li>
      <li>PRON: чего</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Voc
    <ul>
      <li>NOUN: господи, боже, мам, ребят, бабуль, баб, Батоно, Отче, Сынка, господине</li>
      <li>PROPN: Тань, Валь, Коль, Моть, Паш, Алён, Ань, Насть, Серёж, Яш</li>
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
      <li>ADJ: лучше, хуже, больше, выше, легче, старше, ближе, сильнее, большей, меньше</li>
      <li>ADV: более, больше, раньше, лучше, скорее, чаще, дальше, позднее, позже, менее</li>
      <li>NUM: больше, меньше, побольше, поболя</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADJ: русского, нужно, большой, русской, русском, разных, хорошо, хороший, должен, новые</li>
      <li>ADV: уже, так, очень, еще, как, ещё, где, совсем, вдруг, снова</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sup
    <ul>
      <li>ADJ: лучшие, лучших, дальнейшем, лучший, крупнейших, лучшее, древнейших, древнейшие, лучшего, высшей</li>
      <li>ADV: наиболее, всемилостивейше, лютейше, наименее</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>ADV: несмотря, нихера, Нифига, Нихуя, не</li>
      <li>CCONJ: ни, Не</li>
      <li>PART: не, ни, нет, Не-а, н-не, Н-нет, Неееее, Ничего, на, неее</li>
      <li>VERB: нет, нельзя, нечего, нету, не, некогда, некуда, негде, невесть, незачем</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Variant</a></li>
</ul>

<ul>
  <li>Short
    <ul>
      <li>ADJ: нужно, хорошо, должен, должны, должна, равно, должно, трудно, видно, интересно</li>
      <li>DET: таковы, таков, такова, каково, таково, каков, какова, Всяк, каковы, Тако</li>
      <li>VERB-Part: связано, связаны, написано, связана, связан, сказано, созданы, образовано, представлены, написаны</li>
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
      <li>AUX-Fin: было, был, есть, была, были</li>
      <li>AUX-Inf: быть</li>
      <li>AUX-Part: бывший, бывшая, бывшего, бывшие</li>
      <li>VERB-Conv: говоря, глядя, стараясь, желая, зная, начиная, видя, обращаясь, улыбаясь, имея</li>
      <li>VERB-Fin: может, значит, говорит, есть, могут, мог, стоит, знаю, хочу, говорят</li>
      <li>VERB-Inf: делать, говорить, жить, играть, идти, знать, видеть, писать, смотреть, есть</li>
      <li>VERB-Part: имеющих, называемый, действующих, называемая, имеющие, называемые, называемой, называемого, означающее, дрожащим</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Perf
    <ul>
      <li>VERB-Conv: увидев, взяв, оставив, услышав, заметив, увидя, схватив, узнав, войдя, забыв</li>
      <li>VERB-Fin: сказал, сказала, стал, стало, стали, стала, спросил, произнесла, спросила, произнес</li>
      <li>VERB-Inf: сказать, сделать, найти, понять, дать, узнать, стать, увидеть, взять, показать</li>
      <li>VERB-Part: связано, связаны, написано, связана, связан, сказано, связанные, созданы, образовано, представлены</li>
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
      <li>SCONJ: чтобы, чтоб, что, дабы, кабы, что-бы, шобы, Чтоп</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: будь, будьте, будте</li>
      <li>VERB-Fin: давай, здравствуйте, дай, смотри, иди, слушай, подскажите, скажи, помогите, скажите</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX-Fin: было, был, была, были, будет, есть, буду, будут, будем, будешь</li>
      <li>VERB-Fin: может, есть, сказал, сказала, значит, было, стал, стало, стали, говорит</li>
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
      <li>AUX-Fin: будет, буду, будут, будем, будешь, будете</li>
      <li>VERB-Fin: будет, скажем, скажу, станет, придется, сравним, пойду, скажет, хватит, поможет</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX-Fin: было, был, была, были, беаше, бывшая, бывший, бывших, бысть</li>
      <li>AUX-Part: бывший, бывшая, бывшего, бывшие</li>
      <li>VERB-Conv: увидев, взяв, оставив, услышав, заметив, увидя, схватив, узнав, войдя, забыв</li>
      <li>VERB-Fin: сказал, сказала, было, стал, стало, стали, стала, мог, спросил, могла</li>
      <li>VERB-Inf: закончилось</li>
      <li>VERB-Part: связано, связаны, написано, связана, связан, сказано, связанные, созданы, образовано, представлены</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX-Conv: будучи</li>
      <li>AUX-Fin: есть, суть, еси, есмь, есмы, есте</li>
      <li>VERB-Conv: говоря, глядя, стараясь, желая, зная, начиная, видя, обращаясь, улыбаясь, имея</li>
      <li>VERB-Fin: может, есть, значит, говорит, могут, стоит, знаю, хочу, говорят, имеет</li>
      <li>VERB-Inf: навязываються</li>
      <li>VERB-Part: имеющих, называемый, действующих, называемая, имеющие, называемые, называемой, называемого, означающее, дрожащим</li>
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
      <li>AUX-Fin: было, был, была, были, будет, есть, буду, будут, будем, будешь</li>
      <li>AUX-Inf: быть</li>
      <li>AUX-Part: бывший, бывшая, бывшего, бывшие</li>
      <li>VERB-Conv: говоря, глядя, увидев, желая, зная, начиная, видя, взяв, имея, оставив</li>
      <li>VERB-Fin: может, есть, сказал, сказала, значит, было, стал, стало, стали, говорит</li>
      <li>VERB-Inf: сказать, быть, делать, сделать, говорить, жить, найти, понять, играть, идти</li>
      <li>VERB-Part: имеющих, действующих, имеющие, означающее, дрожащим, составляющих, существующие, возникшие, стоявший, существующих</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Mid
    <ul>
      <li>VERB-Conv: стараясь, обращаясь, улыбаясь, пытаясь, опираясь, боясь, надеясь, отрываясь, смеясь, стремясь</li>
      <li>VERB-Fin: является, казалось, становится, кажется, хотелось, называется, употребляется, нравится, появились, оказывается</li>
      <li>VERB-Inf: учиться, пользоваться, заниматься, обратиться, вернуться, бояться, смеяться, употребляться, обращаться, обойтись</li>
      <li>VERB-Part: относящиеся, светящиеся, возвратившихся, заблудившихся, запоминающиеся, запоминающийся, запомнившемся, затерявшемся, имеющимуся, казавшаяся</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>VERB-Conv: вытесняясь</li>
      <li>VERB-Fin: объясняется, разрешается, определяется, ведется, создается, создавались, делается, создаются, достигается, приводится</li>
      <li>VERB-Inf: восприниматься, передаваться, выполняться, изучаться, рассматриваться, читаться, доставляться, издаваться, изображаться, исполняться</li>
      <li>VERB-Part: связано, связаны, написано, связана, связан, сказано, связанные, созданы, образовано, представлены</li>
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
      <li>ADV: так, там, теперь, здесь, потом, тут, сейчас, потому, тогда, тоже</li>
      <li>DET: этот, эти, это, такой, этого, этой, такие, этих, тот, такое</li>
      <li>PRON: это, то, того, т., том, тем, этом, этого, тому, этим</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Emp
    <ul>
      <li>DET: сам, сама, сами, самом, самого, самый, самое, самой, самые, самых</li>
      <li>PRON: Что</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Exc
    <ul>
      <li>ADV: как, где, насколько, сколько, куда, что, Когда, Коль, ка-ак, куды</li>
      <li>DET: какая, какой, какие, каково, Какое, Каких, каков</li>
      <li>PRON: что, чего</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADV: как-то, где-то, несколько, когда-то, почему-то, куда-то, некогда, когда-нибудь, как, где-нибудь</li>
      <li>DET: один, одна, одной, одно, некоторые, одного, одним, какой-то, некоторых, одни</li>
      <li>PRON: что-то, кто-то, что-нибудь, нечто, чем-то, кто-нибудь, что-либо, чего-то, кого-нибудь, кого-то</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>ADV: как, почему, где, зачем, куда, чего, откуда, что, когда, отчего</li>
      <li>DET: какой, какие, какая, какое, каком, какую, каково, каким, каких, какому</li>
      <li>PRON: что, кто, чем, чего, кого, кому, чём, чему, кем, Что-о</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>ADV: никогда, никак, ничего, никуда, нигде, нисколько, как, нихера, причем, Нифига</li>
      <li>DET: никакого, никаких, никакой, никакие, каких, никакое, какой, какие, никакими, никакая</li>
      <li>PRON: ничего, никто, никому, никого, что, чем, ничем, ничто, кого, кем</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>DET: его, ее, их, своей, свою, своих, свои, своего, своим, мой</li>
      <li>PRON: я, он, она, мы, они, ты, мне, меня, его, вы</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rcp
    <ul>
      <li>PRON: друг, друга, другу, другом, дружке, дружку, друге, дружкой</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>ADV: как, где, куда, когда, почему, откуда, зачем, насколько, сколько, к.</li>
      <li>DET: которые, который, которых, которой, которого, которая, которую, которое, котором, которым</li>
      <li>PRON: что, кто, чем, чего, кого, кому, чём, кем, чему, ком</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
      <li>ADV: более, всегда, больше, все, иногда, наиболее, немного, менее, всё, иначе</li>
      <li>DET: все, всех, других, другой, другие, каждый, всю, весь, многие, многих</li>
      <li>PRON: все, всё, всего, всем, всех, многие, многом, многое, всему, прочим</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: два, много, несколько, три, один, двух, две, 2, 1, 3</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Frac
    <ul>
      <li>ADJ: 1\5</li>
      <li>NUM: пол, полтора, 1,5, 0,5, 2,5, 4,5, 0,25, 1.5, 5,2, полутора</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>ADJ: XIX, первый, XVIII, второй, XX, XVII, первой, первые, XVI, первая</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sets
    <ul>
      <li>NUM: оба, обе, обоих, двое, трое, обеих, двоих, обеими, четверо, обеим</li>
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
      <li>DET: его, ее, их, своей, свою, своих, свои, своего, своим, мой</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>DET: своей, свою, своих, свои, своего, своим, свой, свое, своими, своем</li>
      <li>PRON: себя, себе, собой, собою, cобой, ся</li>
      <li>VERB-Part: относящийся, сохранившиеся, находящиеся, оставшихся, относящиеся, относящихся, повторяющиеся, сохранившихся, имеющиеся, находившиеся</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX-Fin: буду, будем, есмь, есмы, есть</li>
      <li>PRON: я, мы, мне, меня, нас, нам, нами, мной, мною, мене</li>
      <li>VERB-Fin: знаю, хочу, могу, говорю, говорим, думаю, люблю, можем, понимаю, вижу</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX-Fin: будешь, будь, будете, будьте, еси, будте, есте</li>
      <li>PRON: ты, вы, тебя, тебе, вас, вам, тобой, вами, тобою, те</li>
      <li>VERB-Fin: знаешь, хочешь, давай, здравствуйте, можете, знаете, дай, можешь, смотри, иди</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX-Fin: будет, есть, будут, суть, беаше, бысть</li>
      <li>PRON: он, она, они, его, их, ему, ее, них, него, ей</li>
      <li>VERB-Fin: может, есть, значит, говорит, могут, стоит, говорят, имеет, является, следует</li>
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
          <li>ADJ: п., греч., лат., ед., мн., им., св., вин., под., род.</li>
          <li>ADP: ок., б., н, п</li>
          <li>ADV: д., т., оч., к., тд, д, оч, Крч, в/м, к</li>
          <li>DET: др., н., т., мн., др, проч., кот., пр., проч</li>
          <li>INTJ: пздц</li>
          <li>NOUN: в., г., гг., э., вв., с., т., тыс., ч., см</li>
          <li>NUM: неск, неск.</li>
          <li>PART: пж, плз, мб, пжж</li>
          <li>PRON: т., пр., др., чего-л.</li>
          <li>PROPN: А., В., И., Н., М., С., П., Ф., Г., К.</li>
          <li>SCONJ: тк, к.</li>
          <li>VERB: см., е., ср., е, и., н., нрав, см, созд, ум.</li>
          <li>X: P., С, хз, s., с., s, Соп., ТТГ, Ы., п.</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Clitic</a>
    <ul>
      <li>Yes
        <ul>
          <li>PRON: те, ти, ми, мя, ся, тя</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>ExtPos</a>
    <ul>
      <li>ADJ
        <ul>
          <li>ADJ: мало</li>
          <li>ADP: со</li>
          <li>ADV: так, Ничего, Т.</li>
          <li>CCONJ: И</li>
          <li>DET: одна, сам, такой</li>
        </ul>
      </li>
      <li>ADP
        <ul>
          <li>ADP: в, с, во, по, за, при, со, от, на, к</li>
          <li>ADV: несмотря, вплоть, невзирая, впредь</li>
          <li>PRON: что</li>
          <li>SCONJ: как</li>
          <li>VERB-Conv: судя</li>
          <li>X: а</li>
        </ul>
      </li>
      <li>ADV
        <ul>
          <li>ADJ: Мало, главным</li>
          <li>ADP: в, прежде, до, по, с, во, между, за, со, из</li>
          <li>ADV: как, все, вряд, едва, всё, так, вроде, чуть, более, пока</li>
          <li>CCONJ: а, и, Ни</li>
          <li>DET: то, сами, один, одна, одно, само, одну, все, одного, сама</li>
          <li>INTJ: ох, ахти</li>
          <li>NOUN: слава, бок, время, боку, нога, нос, слово, страсть, чин</li>
          <li>PART: только, хотя, ни, все, вот, нет, и, лишь, не, Ну</li>
          <li>PRON: тем, все, всё, тому, что, того, кто</li>
          <li>SCONJ: как, что, если, разве, хотя</li>
          <li>SYM: +</li>
          <li>VERB-Fin: знай</li>
        </ul>
      </li>
      <li>CCONJ
        <ul>
          <li>ADJ: мало</li>
          <li>ADP: в, кроме</li>
          <li>ADV: так, Также, точно</li>
          <li>CCONJ: но, а, да, то, или, и, однако, либо</li>
          <li>PART: не, ну, то, ни</li>
          <li>PRON: то, тем, т., все</li>
          <li>SCONJ: как, когда, что, хотя</li>
          <li>VERB-Fin: будь</li>
        </ul>
      </li>
      <li>DET
        <ul>
          <li>DET: то, тот, ту, такой, той, тем, того, том, те, таким</li>
          <li>PART: Вот</li>
          <li>PRON: что, чё</li>
        </ul>
      </li>
      <li>INTJ
        <ul>
          <li>INTJ: Ей, Ух, о, эх</li>
          <li>NOUN: Господи</li>
          <li>PART: ну, Ни</li>
        </ul>
      </li>
      <li>NOUN
        <ul>
          <li>ADV: т., так, т</li>
          <li>CCONJ: и</li>
          <li>DET: мн., т.</li>
          <li>NOUN: месяц, тьма, Прелесть, Ужас, куча, чудо</li>
          <li>PRON: т., все, то, что</li>
          <li>VERB-Fin: просим</li>
          <li>X: З., П, П.</li>
        </ul>
      </li>
      <li>NUM
        <ul>
          <li>NUM: Одна, одним</li>
        </ul>
      </li>
      <li>PART
        <ul>
          <li>ADV: Еще, ничего, Ещё, как</li>
          <li>CCONJ: и</li>
          <li>PART: хотя, лишь, хоть, будто, разве, и, вот, только, чуть, словно</li>
          <li>PRON: тем, все, того</li>
          <li>SCONJ: как</li>
        </ul>
      </li>
      <li>PRON
        <ul>
          <li>DET: сам, само, сама, самим, самого, сами, самому, самих, одна, самом</li>
          <li>NUM: один</li>
          <li>PRON: друг, чем, что, кого, кому, то, чему</li>
        </ul>
      </li>
      <li>PROPN
        <ul>
          <li>PROPN: Парнас</li>
        </ul>
      </li>
      <li>SCONJ
        <ul>
          <li>ADP: с, по, между, подобно, до, В</li>
          <li>ADV: потому, так, прежде, т., как, тогда, Едва, оттого, Затем, вроде</li>
          <li>PART: лишь, разве, хоть, не</li>
          <li>PRON: то, т., тем, все, всё</li>
          <li>SCONJ: как, хотя, хоть, едва, будто, лишь, если, так, то, Понеже</li>
        </ul>
      </li>
      <li>VERB
        <ul>
          <li>ADJ: добро</li>
          <li>ADP: По</li>
          <li>ADV: так, т.</li>
          <li>CCONJ: и</li>
          <li>NOUN: черт</li>
          <li>PART: то-то, не, ни</li>
          <li>PRON: все, всё, т., того</li>
          <li>VERB-Conv: представляя</li>
          <li>VERB-Fin: представляет, представляют, представляли, являет, представлял, представляла, представляло, была, представляем, Упаси</li>
          <li>VERB-Inf: представить, представлять</li>
          <li>VERB-Part: представляющий, представляющие, знаменующих, представлявшего, представляющая, представляющего</li>
          <li>X: о.</li>
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
          <li>ADJ: романтик, стронг</li>
          <li>ADV: мах</li>
          <li>INTJ: Хэллоу</li>
          <li>NOUN: блю, дор, А, U, f, r, Ремо, С, ая, е</li>
          <li>PART: де, ван, да, фон, Ле, дер, делла, дю, эль, ди</li>
          <li>PROPN: джо, PS4, М, Эль, тикетс, EF1057, F, G, NS3FB, Алегре</li>
          <li>VERB: МАНДРУЕ</li>
          <li>X: mademoiselle, maman, m-lle, RT, mesdames, a, b, picture, i, la</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>InflClass</a>
    <ul>
      <li>Ind
        <ul>
          <li>ADJ: буфф, мини, спок</li>
          <li>NOUN: спасибо, кофе, фото, а, кафе, б, е, барокко, кино, о</li>
          <li>PROPN: Мэри, Андро, Наянго, Жюли, Фальк, Кашидзе, Сидоренко, Томи, Арно, Бранд</li>
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
          <li>PROPN: ГТГ, @yabloko, ГРМ, ЛДПР, парнас, яблоко, АН, Прадо, КПСС, МЦОСП</li>
        </ul>
      </li>
      <li>Geo
        <ul>
          <li>PROPN: россии, Руси, франции, Москве, СССР, Европы, Италии, Германии, Европе, Греции</li>
        </ul>
      </li>
      <li>Giv
        <ul>
          <li>PROPN: А., Толик, В., Н., М., И., Алёна, Ф., Лиза, Мишка</li>
        </ul>
      </li>
      <li>Oth
        <ul>
          <li>PROPN: Возрождения, Просвещения, Ренессанса, E, Возрождение, М, Стереолето, Хаджи-Мухаммед, инете, 0А</li>
        </ul>
      </li>
      <li>Pat
        <ul>
          <li>PROPN: А., И., С., В., Н., М., П., Г., Криволапыч, Е.</li>
        </ul>
      </li>
      <li>Pro
        <ul>
          <li>PROPN: Илиада, Илиады, Одиссея, Современник, Илиаде, Одиссеи, Авесты, Декамерон, Ифе, Энеида</li>
        </ul>
      </li>
      <li>Prs
        <ul>
          <li>PROPN: Сибирочка, @xxxxxx, Южаночка, Барабашка, Яга, Никс, Чича, Краснушка, Петрович, Сибирочку</li>
        </ul>
      </li>
      <li>Sur
        <ul>
          <li>PROPN: Пушкина, Пушкин, Толстого, Гоголя, Фальк, Достоевского, Ленин, Лермонтова, Ломоносов, Маяковского</li>
        </ul>
      </li>
      <li>Zoo
        <ul>
          <li>PROPN: Веган, Майда, Змей, Лун, Тихоня, Вегана, Филька, Хомуля, Гламик, Гламика</li>
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
          <li>ADJ: 20-х, 60-х, 30-х, 30-е, 50-х, 1-го, 40-х, 2-й, 90-х, 20-е</li>
          <li>NUM: 2-х, 12-ти, 3-х, 3х, 4-х, 11-ти, 13-ти, 14-ти, 17-ти, 18-ти</li>
        </ul>
      </li>
      <li>Cyril
        <ul>
          <li>NUM: a҃, в҃, г҃, д҃</li>
        </ul>
      </li>
      <li>Digit
        <ul>
          <li>ADJ: 1905, 1918, 2, 1917, 1812, 1907, 1, 1880, 1920, 3</li>
          <li>NUM: 2, 1, 3, 5, 4, 10, 6, 20, 7, 30</li>
        </ul>
      </li>
      <li>Roman
        <ul>
          <li>ADJ: XIX, XVIII, XX, XVII, XVI, XV, I, XIV, II, XII</li>
          <li>NUM: I, V</li>
        </ul>
      </li>
      <li>Word
        <ul>
          <li>ADJ: первый, второй, первой, первые, первая, первого, первых, первую, первое, первым</li>
          <li>NUM: два, много, несколько, три, один, двух, две, одной, сколько, одного</li>
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
          <li>ADJ: Зелё-оные, Перьвому, СУППЕР, Хорошое, больсыми, кароший, компитентный, маленьков, не, хорошии</li>
          <li>ADP: а, из, и, на, в, К, Ут, восле, заа, иза</li>
          <li>ADV: как, где, когда, почему, сдесь, корошо, не, что, вобще, както</li>
          <li>AUX-Fin: будте</li>
          <li>CCONJ: Так, Иди, ин, лбо, нр, тока</li>
          <li>DET: какие, какой, какая, какого, какое, какую, это, такова, Лю-бо-е, Остпльное</li>
          <li>INTJ: Кар-рауль, бл@, бляь, да</li>
          <li>NOUN: ге, рыбак-а, Глаза-а-а-а, атракционов, каратэ, ква-рабль, сел-о, слов-о, Тоффаришш, бла-алепие</li>
          <li>NUM: Дв-ва, Тр-ри, д’ве, з, не, оден, скольки</li>
          <li>PART: Да-а, пожалюйста, все, ка-а-а-ак, н-не, Во-о-от, Д-да, Да, Даааа, Пожалоста</li>
          <li>PRON: что, кто, Что-о, ви, чем, кем, кого, къто, ни, сто</li>
          <li>PROPN: Михайлыч, Иваныча, Максимыча, Титыч, Дмитрич, Максимыч, Михайлычу, Со-ня, Титычем, Фарингейту</li>
          <li>SCONJ: что, чтл, я, Чтоп</li>
          <li>VERB: нравиться, знайт, Здраствуйте, Если, здрасьте, находиться, не, пере-прыг-ива-ть, связанно, бежив</li>
          <li>VERB-Conv: Каснувшись, имтируя, подьезжая, треся</li>
          <li>VERB-Fin: нравиться, знайт, Здраствуйте, здрасьте, находиться, бежив, держут, ложиться, любить, н’ису</li>
          <li>VERB-Inf: пере-прыг-ива-ть, встретится, приготовляйт, Молшать, ПОДКЛЧИТЬ, Пере-прыгивать, Учи-ть-ся, беспокоит, в, взабраться</li>
          <li>VERB-Part: связанно, Оперируюший, Представленны, Уничножен, ШПредставлен, апустъвшии, випитого, вложеный, внесет, езопствующий</li>
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
      <li>VERB--NOUN (1)</li>
      <li>VERB--NOUN-Gen (718)</li>
      <li>VERB--NOUN-Gen-ADP(до) (1)</li>
      <li>VERB--NOUN-Ins (1)</li>
      <li>VERB--NOUN-Nom (48)</li>
      <li>VERB--NOUN-Par (7)</li>
      <li>VERB--PRON-Gen (154)</li>
      <li>VERB--PRON-Nom (45)</li>
      <li>VERB-Conv--NOUN-Nom (6)</li>
      <li>VERB-Conv--PRON-Nom (5)</li>
      <li>VERB-Fin--NOUN (60)</li>
      <li>VERB-Fin--NOUN-ADP(в) (1)</li>
      <li>VERB-Fin--NOUN-ADP(после) (1)</li>
      <li>VERB-Fin--NOUN-Acc (2)</li>
      <li>VERB-Fin--NOUN-Acc-ADP(под) (1)</li>
      <li>VERB-Fin--NOUN-Acc-ADP(с) (1)</li>
      <li>VERB-Fin--NOUN-Dat-ADP(по) (5)</li>
      <li>VERB-Fin--NOUN-Gen (1593)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(во) (1)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(до) (4)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(около) (26)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(по) (6)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(порядок) (1)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(с) (1)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(свыше) (4)</li>
      <li>VERB-Fin--NOUN-Loc-ADP(в) (1)</li>
      <li>VERB-Fin--NOUN-Loc-ADP(о) (1)</li>
      <li>VERB-Fin--NOUN-Nom (44915)</li>
      <li>VERB-Fin--NOUN-Nom-ADP(в) (2)</li>
      <li>VERB-Fin--NOUN-Nom-ADP(за) (3)</li>
      <li>VERB-Fin--NOUN-Nom-ADP(как) (3)</li>
      <li>VERB-Fin--NOUN-Nom-ADP(по) (1)</li>
      <li>VERB-Fin--NOUN-Nom-ADP(с) (1)</li>
      <li>VERB-Fin--NOUN-Nom-ADP(спустя) (1)</li>
      <li>VERB-Fin--NOUN-Par (29)</li>
      <li>VERB-Fin--PRON-Acc (1)</li>
      <li>VERB-Fin--PRON-Acc-ADP(про) (1)</li>
      <li>VERB-Fin--PRON-Dat (2)</li>
      <li>VERB-Fin--PRON-Gen (292)</li>
      <li>VERB-Fin--PRON-Nom (31014)</li>
      <li>VERB-Fin--PRON-Nom-ADP(плюс) (1)</li>
      <li>VERB-Inf--NOUN (1)</li>
      <li>VERB-Inf--NOUN-Gen (5)</li>
      <li>VERB-Inf--NOUN-Nom (212)</li>
      <li>VERB-Inf--PRON-Gen (1)</li>
      <li>VERB-Inf--PRON-Nom (452)</li>
      <li>VERB-Part--NOUN-Gen (2)</li>
      <li>VERB-Part--NOUN-Nom (50)</li>
      <li>VERB-Part--PRON-Nom (17)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (5)</li>
      <li>VERB--NOUN-Acc (93)</li>
      <li>VERB--NOUN-Gen (22)</li>
      <li>VERB--NOUN-Gen-ADP(до) (1)</li>
      <li>VERB--NOUN-Loc-ADP(на) (1)</li>
      <li>VERB--NOUN-Nom (265)</li>
      <li>VERB--NOUN-Par (1)</li>
      <li>VERB--PRON-Acc (42)</li>
      <li>VERB--PRON-Gen (13)</li>
      <li>VERB--PRON-Nom (7)</li>
      <li>VERB--PRON-Par (1)</li>
      <li>VERB-Conv--NOUN (2)</li>
      <li>VERB-Conv--NOUN-Acc (2766)</li>
      <li>VERB-Conv--NOUN-Acc-ADP(из) (1)</li>
      <li>VERB-Conv--NOUN-Dat (1)</li>
      <li>VERB-Conv--NOUN-Gen (352)</li>
      <li>VERB-Conv--NOUN-Ins (118)</li>
      <li>VERB-Conv--NOUN-Nom (4)</li>
      <li>VERB-Conv--NOUN-Par (1)</li>
      <li>VERB-Conv--PRON-Acc (446)</li>
      <li>VERB-Conv--PRON-Gen (52)</li>
      <li>VERB-Conv--PRON-Ins (7)</li>
      <li>VERB-Conv--PRON-Nom (17)</li>
      <li>VERB-Fin--NOUN (52)</li>
      <li>VERB-Fin--NOUN-Acc (25516)</li>
      <li>VERB-Fin--NOUN-Acc-ADP(в) (2)</li>
      <li>VERB-Fin--NOUN-Acc-ADP(из) (1)</li>
      <li>VERB-Fin--NOUN-Acc-ADP(к) (1)</li>
      <li>VERB-Fin--NOUN-Acc-ADP(как) (1)</li>
      <li>VERB-Fin--NOUN-Acc-ADP(на) (1)</li>
      <li>VERB-Fin--NOUN-Acc-ADP(от) (2)</li>
      <li>VERB-Fin--NOUN-Acc-ADP(по) (1)</li>
      <li>VERB-Fin--NOUN-Acc-ADP(ради) (1)</li>
      <li>VERB-Fin--NOUN-Acc-ADP(типа) (1)</li>
      <li>VERB-Fin--NOUN-Dat (12)</li>
      <li>VERB-Fin--NOUN-Dat-ADP(по) (7)</li>
      <li>VERB-Fin--NOUN-Gen (2886)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(до) (5)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(из) (1)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(на) (1)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(около) (23)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(от) (1)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(по) (8)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(сверх) (1)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(свыше) (6)</li>
      <li>VERB-Fin--NOUN-Ins (592)</li>
      <li>VERB-Fin--NOUN-Loc (1)</li>
      <li>VERB-Fin--NOUN-Nom (103)</li>
      <li>VERB-Fin--NOUN-Par (52)</li>
      <li>VERB-Fin--NOUN-Voc (1)</li>
      <li>VERB-Fin--PRON-Acc (8093)</li>
      <li>VERB-Fin--PRON-Acc-ADP(в) (1)</li>
      <li>VERB-Fin--PRON-Acc-ADP(у) (1)</li>
      <li>VERB-Fin--PRON-Dat (2)</li>
      <li>VERB-Fin--PRON-Gen (708)</li>
      <li>VERB-Fin--PRON-Ins (40)</li>
      <li>VERB-Fin--PRON-Nom (80)</li>
      <li>VERB-Inf--NOUN (27)</li>
      <li>VERB-Inf--NOUN-ADP(по) (1)</li>
      <li>VERB-Inf--NOUN-Acc (9398)</li>
      <li>VERB-Inf--NOUN-Acc-ADP(на) (1)</li>
      <li>VERB-Inf--NOUN-Acc-ADP(с) (1)</li>
      <li>VERB-Inf--NOUN-Dat (1)</li>
      <li>VERB-Inf--NOUN-Dat-ADP(по) (1)</li>
      <li>VERB-Inf--NOUN-Gen (713)</li>
      <li>VERB-Inf--NOUN-Gen-ADP(до) (1)</li>
      <li>VERB-Inf--NOUN-Gen-ADP(по) (2)</li>
      <li>VERB-Inf--NOUN-Gen-ADP(порядка) (1)</li>
      <li>VERB-Inf--NOUN-Gen-ADP(у) (1)</li>
      <li>VERB-Inf--NOUN-Ins (95)</li>
      <li>VERB-Inf--NOUN-Loc-ADP(в) (1)</li>
      <li>VERB-Inf--NOUN-Nom (29)</li>
      <li>VERB-Inf--NOUN-Par (13)</li>
      <li>VERB-Inf--PRON (1)</li>
      <li>VERB-Inf--PRON-Acc (2922)</li>
      <li>VERB-Inf--PRON-Dat (1)</li>
      <li>VERB-Inf--PRON-Gen (221)</li>
      <li>VERB-Inf--PRON-Gen-ADP(вокруг) (1)</li>
      <li>VERB-Inf--PRON-Ins (12)</li>
      <li>VERB-Inf--PRON-Nom (25)</li>
      <li>VERB-Part--NOUN-Acc (2141)</li>
      <li>VERB-Part--NOUN-Acc-ADP(в) (1)</li>
      <li>VERB-Part--NOUN-Acc-ADP(за) (1)</li>
      <li>VERB-Part--NOUN-Dat (2)</li>
      <li>VERB-Part--NOUN-Gen (234)</li>
      <li>VERB-Part--NOUN-Gen-ADP(до) (1)</li>
      <li>VERB-Part--NOUN-Gen-ADP(около) (1)</li>
      <li>VERB-Part--NOUN-Gen-ADP(свыше) (1)</li>
      <li>VERB-Part--NOUN-Ins (90)</li>
      <li>VERB-Part--NOUN-Nom (11)</li>
      <li>VERB-Part--PRON-Acc (306)</li>
      <li>VERB-Part--PRON-Gen (27)</li>
      <li>VERB-Part--PRON-Ins (3)</li>
      <li>VERB-Part--PRON-Nom (10)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--NOUN-Dat (60)</li>
      <li>VERB--NOUN-Ins (12)</li>
      <li>VERB--PRON-Dat (358)</li>
      <li>VERB--PRON-Ins (2)</li>
      <li>VERB-Conv--NOUN-Dat (168)</li>
      <li>VERB-Conv--NOUN-Gen (3)</li>
      <li>VERB-Conv--NOUN-Ins (668)</li>
      <li>VERB-Conv--NOUN-Ins-ADP(от) (1)</li>
      <li>VERB-Conv--NOUN-Ins-ADP(со) (1)</li>
      <li>VERB-Conv--PRON-Dat (138)</li>
      <li>VERB-Conv--PRON-Ins (45)</li>
      <li>VERB-Conv--PRON-Nom (4)</li>
      <li>VERB-Fin--NOUN (3)</li>
      <li>VERB-Fin--NOUN-Acc (1)</li>
      <li>VERB-Fin--NOUN-Dat (2473)</li>
      <li>VERB-Fin--NOUN-Dat-ADP(благодаря) (1)</li>
      <li>VERB-Fin--NOUN-Dat-ADP(в) (1)</li>
      <li>VERB-Fin--NOUN-Dat-ADP(соответственно) (1)</li>
      <li>VERB-Fin--NOUN-Gen (31)</li>
      <li>VERB-Fin--NOUN-Ins (4363)</li>
      <li>VERB-Fin--NOUN-Nom (5)</li>
      <li>VERB-Fin--NOUN-Par (2)</li>
      <li>VERB-Fin--PRON-Acc (3)</li>
      <li>VERB-Fin--PRON-Dat (4826)</li>
      <li>VERB-Fin--PRON-Ins (405)</li>
      <li>VERB-Fin--PRON-Nom (31)</li>
      <li>VERB-Inf--NOUN (4)</li>
      <li>VERB-Inf--NOUN-Acc (1)</li>
      <li>VERB-Inf--NOUN-Dat (711)</li>
      <li>VERB-Inf--NOUN-Dat-ADP(к) (1)</li>
      <li>VERB-Inf--NOUN-Gen (10)</li>
      <li>VERB-Inf--NOUN-Ins (999)</li>
      <li>VERB-Inf--NOUN-Ins-ADP(за) (1)</li>
      <li>VERB-Inf--NOUN-Ins-ADP(около) (1)</li>
      <li>VERB-Inf--NOUN-Nom (1)</li>
      <li>VERB-Inf--PRON-Dat (1017)</li>
      <li>VERB-Inf--PRON-Ins (156)</li>
      <li>VERB-Inf--PRON-Nom (16)</li>
      <li>VERB-Part--NOUN (1)</li>
      <li>VERB-Part--NOUN-Dat (492)</li>
      <li>VERB-Part--NOUN-Gen (56)</li>
      <li>VERB-Part--NOUN-Ins (951)</li>
      <li>VERB-Part--NOUN-Ins-ADP(с) (1)</li>
      <li>VERB-Part--NOUN-Nom (1)</li>
      <li>VERB-Part--PRON-Dat (276)</li>
      <li>VERB-Part--PRON-Ins (36)</li>
      <li>VERB-Part--PRON-Nom (12)</li>
    </ul>
  </li>
</ul>



<h3>Verbs with Reflexive Core Objects</h3>

<ul>
  <li>This corpus contains 437 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: вести себя, чувствовать себя, представить себе, представлять себе, считать себя, ощущать себя, найти себе, взять себе, помнить себя, почувствовать себя, называть себя, купить себе, посвятить себя, позволять себе, проявить себя, проявлять себя, добиться своего, знать себя, назвать себя, позволить себе, показать себя, взять себя, видеть себя, зарекомендовать себя, дать себе, держать себя, жалкий себя, заставить себя, находить себе, отдавать себе, представлять собой, ворчать себе, именовать себя, контролировать себя, облегчить себе, отказывать себе, подчинять себе, признать себя, присваивать себе, причислять себя, сделать себе, хлопнуть себя, беречь себя, владеть собой, владеть собою, выбрать себе, выдавать себя, говорить себе, давать себе, забрать себе</li>
    <ul>
      <li>Out of those, 2 lemmas occurred more than once, but never without a reflexive dependent. Examples: зарекомендовать, возомнить</li>
    </ul>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 16 relation subtypes: <a>acl:relcl</a>, <a>aux:pass</a>, <a>csubj:outer</a>, <a>csubj:pass</a>, <a>flat:foreign</a>, <a>flat:goeswith</a>, <a>flat:name</a>, <a>nsubj:outer</a>, <a>nsubj:pass</a>, <a>nummod:gov</a>, <a>obl:agent</a>, <a>obl:depict</a>, <a>obl:float</a>, <a>obl:pronmod</a>, <a>obl:tmod</a>, <a>parataxis:discourse</a></li>
<li>The following 1 relation types are not used in this corpus at all: <a>clf</a></li>
</ul>
