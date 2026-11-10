---
layout: base
title:  'UD_Old_Georgian-OGLauRo'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Old Georgian OGLauRo

Language: [Old Georgian](/oge/index.html) (code: `oge`)<br/>
Family: Kartvelian

This treebank has been part of Universal Dependencies since the UD v2.19 release.

The following people have contributed to making this treebank part of UD: Chia-Wei Lin, Diego Luinetti.

Repository: [UD_Old_Georgian-OGLauRo](https://github.com/UniversalDependencies/UD_Old_Georgian-OGLauRo)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udoge_oglauro219)<br />
Download all treebanks: [UD 2.19](/#download)

License: CC BY-NC-SA 4.0

Genre: bible

Questions, comments?
General annotation questions (either Old Georgian-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Old_Georgian-OGLauRo/issues).
If you want to collaborate, please contact [chia-wei&nbsp;•&nbsp;lin&nbsp;(æt)&nbsp;unil&nbsp;•&nbsp;ch; d&nbsp;•&nbsp;luinetti&nbsp;(æt)&nbsp;unimarconi&nbsp;•&nbsp;it].
Development of the treebank happens directly in the UD repository, so you may submit bug fixes as pull requests against the dev branch.

| Annotation | Source |
|------------|--------|
| Lemmas | annotated manually |
| UPOS | annotated manually, natively in UD style |
| XPOS | annotated manually |
| Features | annotated manually, natively in UD style |
| Relations | annotated manually, natively in UD style |

## Description

A treebank for Old Georgian, containing morphosyntactic annotations of the Book of Ezra in the Oshki Bible.




UD_Old_Georgian-OGLauro is a treebank based on the Book of Ezra in the Oshki Bible. The text is retrieved from [TITUS](https://titus.uni-frankfurt.de/texte/etcs/cauc/ageo/at/oskijer/oskij.htm). The sentences are annotated through a semi-automated workflow: [UD_Georgian-GNC](https://github.com/UniversalDependencies/UD_Georgian-GNC) is used as few-shot examples, together with additional guidelines specific for Old Georgian and Ilia Abuladze's [ძველი ქართული ენის ლექსიკონი (მასალები)](http://www.nplg.gov.ge/gwdict/index.php?a=index&d=57) , to prompt Large Language Models (LLMs) to prepare a draft annotation, which is then corrected manually.

## Acknowledgments

We are grateful to Dr. Paul Meurer for his discussion and guidance and to Prof. Dr. Jost Gippert for generously making the Old Georgian corpus available online on TITUS

## References

For the details of annotation principles, see Lin, Chia-Wei and Diego Luinetti (2026).

``` bibtex
@article{Lin-2026,
author = {Lin, Chia-Wei and Luinetti, Diego},
doi = {10.5334/johd.559},
journal = {Journal of Open Humanities Data},
keyword = {en},
month = {Jul},
title = {Building a Treebank for the Book of Ezra in the Old Georgian Oshki Bible},
year = {2026}
}

```



# Statistics of UD Old Georgian OGLauRo

## POS Tags

[ADJ](oge_oglauro-pos-ADJ.html) – [ADP](oge_oglauro-pos-ADP.html) – [ADV](oge_oglauro-pos-ADV.html) – [AUX](oge_oglauro-pos-AUX.html) – [CCONJ](oge_oglauro-pos-CCONJ.html) – [INTJ](oge_oglauro-pos-INTJ.html) – [NOUN](oge_oglauro-pos-NOUN.html) – [NUM](oge_oglauro-pos-NUM.html) – [PART](oge_oglauro-pos-PART.html) – [PRON](oge_oglauro-pos-PRON.html) – [PROPN](oge_oglauro-pos-PROPN.html) – [PUNCT](oge_oglauro-pos-PUNCT.html) – [SCONJ](oge_oglauro-pos-SCONJ.html) – [VERB](oge_oglauro-pos-VERB.html) – [X](oge_oglauro-pos-X.html)

## Features

[AdpType](oge_oglauro-feat-AdpType.html) – [AdvType](oge_oglauro-feat-AdvType.html) – [Aspect](oge_oglauro-feat-Aspect.html) – [Case](oge_oglauro-feat-Case.html) – [Case[dsauf]](oge_oglauro-feat-Case-dsauf.html) – [Case[sauf]](oge_oglauro-feat-Case-sauf.html) – [Degree](oge_oglauro-feat-Degree.html) – [Mood](oge_oglauro-feat-Mood.html) – [NameType](oge_oglauro-feat-NameType.html) – [Number](oge_oglauro-feat-Number.html) – [Number[dsauf]](oge_oglauro-feat-Number-dsauf.html) – [Number[io]](oge_oglauro-feat-Number-io.html) – [Number[obj]](oge_oglauro-feat-Number-obj.html) – [Number[sauf]](oge_oglauro-feat-Number-sauf.html) – [Number[subj]](oge_oglauro-feat-Number-subj.html) – [NumType](oge_oglauro-feat-NumType.html) – [Person](oge_oglauro-feat-Person.html) – [Person[io]](oge_oglauro-feat-Person-io.html) – [Person[obj]](oge_oglauro-feat-Person-obj.html) – [Person[subj]](oge_oglauro-feat-Person-subj.html) – [Polarity](oge_oglauro-feat-Polarity.html) – [Poss](oge_oglauro-feat-Poss.html) – [PronType](oge_oglauro-feat-PronType.html) – [Tense](oge_oglauro-feat-Tense.html) – [VerbForm](oge_oglauro-feat-VerbForm.html) – [Voice](oge_oglauro-feat-Voice.html)

## Relations

[acl](oge_oglauro-dep-acl.html) – [acl:relcl](oge_oglauro-dep-acl-relcl.html) – [advcl](oge_oglauro-dep-advcl.html) – [advmod](oge_oglauro-dep-advmod.html) – [advmod:neg](oge_oglauro-dep-advmod-neg.html) – [amod](oge_oglauro-dep-amod.html) – [appos](oge_oglauro-dep-appos.html) – [aux](oge_oglauro-dep-aux.html) – [case](oge_oglauro-dep-case.html) – [cc](oge_oglauro-dep-cc.html) – [ccomp](oge_oglauro-dep-ccomp.html) – [compound](oge_oglauro-dep-compound.html) – [compound:lvc](oge_oglauro-dep-compound-lvc.html) – [conj](oge_oglauro-dep-conj.html) – [cop](oge_oglauro-dep-cop.html) – [csubj](oge_oglauro-dep-csubj.html) – [dep](oge_oglauro-dep-dep.html) – [det](oge_oglauro-dep-det.html) – [discourse](oge_oglauro-dep-discourse.html) – [dislocated](oge_oglauro-dep-dislocated.html) – [flat](oge_oglauro-dep-flat.html) – [iobj](oge_oglauro-dep-iobj.html) – [mark](oge_oglauro-dep-mark.html) – [nmod](oge_oglauro-dep-nmod.html) – [nsubj](oge_oglauro-dep-nsubj.html) – [nsubj:pass](oge_oglauro-dep-nsubj-pass.html) – [nummod](oge_oglauro-dep-nummod.html) – [obj](oge_oglauro-dep-obj.html) – [obl](oge_oglauro-dep-obl.html) – [parataxis](oge_oglauro-dep-parataxis.html) – [punct](oge_oglauro-dep-punct.html) – [root](oge_oglauro-dep-root.html) – [vocative](oge_oglauro-dep-vocative.html) – [xcomp](oge_oglauro-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 652 sentences, 11411 tokens and 11817 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 1806 tokens (16%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 45 types of words that contain both letters and punctuation. Examples: რომელნი-იგი, რომელ-იგი, რომელი-იგი, მონა-მჴევალნი, ადგილდ-ადგილდ, დიდ-დიდნი, ვითარ-იგი, სადა-იგი, წინა-აღუდგეს, [მ]ცა, [მრ...], არა-ღირსი, გარე-წარაქციედ, გულის-წყრომისაგან, დღე-მოკლედ, დღითი-დღედ, ერთ-გული, ვითარცა-ესე, ვითარცა-იგი, ვინაჲ-ცა-იგი, თანა-მდებ, თანა-წარიღენ, თესლ-ტომსა, თმა-გარდატევებული, იგი-ცა, კაცად-კაცადი, მამა-მძუძესა, მტკი..., ნავთ-სადგურისა, პატივ-ცემულნი, პირ-მსივანნი, რაჲ-იგი, რაჲ-მე, რაჲს-მე, რომელ-რაჲ, რომელნი-ესე, რომელსა-იგი, რომლითა-იგი, ურჩულ[ო]მან, ფაქერათა-საბუმისნი, ქალაქად-ქალაქად, ქუე-საგებელად, წეს-არს, წულილ-წულილად, ჯერ-გიჩნდეს</li>
</ul>

<ul>
<li>This corpus contains 403 multi-word tokens. On average, one multi-word token consists of 2.01 syntactic words.</li>
<li>There are 229 types of multi-word tokens. Examples: მათგან, მისგან, მათგანი, რაჲთა-მცა, არცა, მათგანნი, დღედმდე, მაშინ-ღა, ყოვლისათჳს, თუ-მცა, მისთჳს, ტყუეობისაგან, ღმრთისაგან, თავს-იდვა, იგი-ცა, მეფისაგან, მეცა, პირისაგან, საწყაულადმდე, უვარ-ყო, შენგან, ჩემთჳს, ჩუენთათჳს, ცოდვათათჳს, არს-ა, არცა-ღა, გულისჴმა-ჰყო, ეგრეთ-ვე, ზე-დგომითა, თაყუანის-სცა, ისრაელისაგან, მათთჳს, მე-მცა, მისისათჳს, ნათესავთაგან, ნუმცა, რას-მე, სახისათჳს, უვარ-ჰყავ, უკუნისამდე, უცხოთესლთაგან, ყოველი-ვე, შენთჳს, ჩემგან, ჩუენგან, ჩუენთაგან, ადგილთაგან, ადრე-ადრე, ამათგან, ამიერითგან.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 15 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>VERB</a>, <a>X</a></li>
<li>This corpus does not use the following tags: DET, SYM</li>
</ul>

<ul>
<li>This corpus contains 13 word types tagged as particles (PART): [მ]ცა, ა, არა, ესერა, ვე, მე, მცა, ნუცა, ოდენ, რე, ღა, ცა, ხოლო</li>
</ul>

<ul>
<li>This corpus contains 59 lemmas tagged as pronouns (PRON): مისი, არავინ, არარაჲ, არღარავინ, ეგე, ეგოდენი, ესე, ესევითარი, ესეთი, ვერვინ, ვერღარა, ვერღარაჲ, ვითარ-იგი, ვინ, ვინმე, ზოგი, თავადი, თავი, თქუენ, თქუენი, თჳთ, თჳსი, იგი, იგი-ცა, იგინი, კაცად-კაცადი, მაგისი, მათი, მე, მე-ცა, მისი, ნუვინ, ნურარაჲ, ნურას, რა, რავდენი, რავდენიცა, რაჲ, რაჲ-იგი, რაჲ-მე, რაჲმე, რაჲცა, რომელ-იგი, რომელ-რაჲ, რომელი, რომელი-ესე, რომელი-იგი, სხუა, სხუაჲ, ყოველ, ყოველი, ყოველივე, შენ, შენდამი, შენი, ჩემი, ჩუენ, ჩუენდა, ჩუენი</li>
</ul>

<ul>
<li>This corpus contains 0 lemmas tagged as determiners (DET): </li>
</ul>

<ul>
</ul>

<ul>
<li>This corpus contains 1 lemmas tagged as auxiliaries (AUX): ყოფა</li>
</ul>

<ul>
<li>Out of the above, 1 lemmas occurred sometimes as AUX and sometimes as VERB: ყოფა</li>
</ul>

<ul>
<li>There are 3 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: არს, იყვნეს, იყო, ხარ, ვარ, არიან, იყავნ, ხართ, ვიყავ, იყავ</li>
    <li>VERB: ჰრქუა, იყო, არს, მრქუა, მოვიდა, ვარქუ, თქუა, აღდგა, იყვნეს, მოიწია</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>VERB: გამოსრულ, დამკჳდრებულ, წერილ, უწყებულ, გამოსრულნი, განდგომილ, განმზადებულსა, დამონებულ, დასხმულ, კურთხეულ</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Vnoun
  <ul>
    <li>VERB: სიტყუად, ხილვად, ყოფად, განტევებაჲ, აღდგინებად, გამოსლვად, გინებად, დადებად, თრევათა, მჴდომად</li>
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
      <li>ADJ: დიდთა, წმიდათა, დიდ-დიდნი, მრავალნი, სავსენი, შორიელთა, წმიდანი, ბოროტთა, ბრმათა, ბრძენნო</li>
      <li>NOUN: ძენი, ძეთა, კაცთა, ჴელთა, მღდელთა, ლევიტელნი, მთავართა, შვილნი, ცოდვათა, ლევიტელთა</li>
      <li>NUM: ათნი, ათორმეტნი, ასერგასისნი, ერგასისთა, ექუსთა, ოთხთა, ორთა, პირველთა, პირველთაჲ, სამნი</li>
      <li>PRON: მათ, ჩუენ, რომელნი, ყოველთა, თქუენ, მისნი, მისთა, მათთა, რომელნი-იგი, იგინი</li>
      <li>PROPN: სპარსთაჲსა, სპარსთამან, ჰურიათა, ბაბილონელთაჲსა, ლევიტელთაჲ, ამორეველნი, ასურთაჲ, ბაბილოვნელთაჲსა, ბაბილონელთასა, ბაბილონისთაჲსა</li>
      <li>VERB: გამოსრულნი, თრევათა, გამოსრულთა, განათლებულნი, განზრდილნი, განმწარებულნი, განსივებულნი, განყჳთლებულნი, გუემათა, დათმენათა</li>
      <li>VERB-Part: გამოსრულნი, გამოსრულთა, განათლებულნი, განზრდილნი, განმწარებულნი, განსივებულნი, განყჳთლებულნი, დამღიერებულნი, დამჭნარნი, დაუღლევილთა</li>
      <li>VERB-Vnoun: თრევათა, გუემათა, დათმენათა, შეურაცხებათა</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: წმიდამან, წმიდაჲ, წმიდისა, დიდითა, წმიდასა, შემძლებელ, მრავალი, მცირჱ, ნეტარი, ჭეშმარიტი</li>
      <li>NOUN: ღმრთისა, უფლისა, სახლისა, ძჱ, მეფემან, მეფისა, სახლსა, უფალო, უფლისასა, ღმერთი</li>
      <li>NUM: ერთი, ერთსა, პირველისა, ასი, მეორესა, პირველსა, სამეოცდაათი, ას, ერთითა, მერვესა</li>
      <li>PRON: იგი, მას, მის, მე, შენ, ესე, მან, მისი, ყოველი, ჩემი</li>
      <li>PROPN: იერუსალემდ, იერუსალემს, ისრაელისა, ისრაელისათა, შუშანიკს, კჳროს, ქრისტჱს, შუშანიკის, შუშანიკისა, ბაბილონით</li>
      <li>VERB: განტევებაჲ, სიკუდილდ, სიტყუად, განმზადებულსა, განსუენებაჲ, დგომითა, მოსლვაჲ, შეკრვაჲ, შენებაჲ, ხილვად</li>
      <li>VERB-Part: განმზადებულსა, აღნთებულითა, აღსამაღლებელად, აღწერილი, გამოსრული, განზრდილი, განმამტკიცებელ, განმრთელებული, განმწმედელი, განსივებული</li>
      <li>VERB-Vnoun: განტევებაჲ, სიტყუად, სიკუდილდ, შეკრვაჲ, შენებაჲ, აღმართებაჲ, განმტკიცებად, განსუენებასა, განსუენებაჲ, გინებად</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Abs
    <ul>
      <li>ADJ: შემძლებელ, მხიარულ, კეთილ, მეცნიერ, მომკუდარ, მწუხარე, მჴდომ, საწყალობელ, ცოცხალ, წარმდებ</li>
      <li>NOUN: წყრთა, ადარ, დასაბამ, კაც, მონაწილე, სასთუნალ, ძალ, თანა-მდებ, მონა, სავანე</li>
      <li>NUM: ათას, ას, ერგასის, ორ, შჳდას, ექუსას, სამას, ათორმეტ, ექუს, ორას</li>
      <li>PRON: რომელ, რომელნი, რომელ-იგი</li>
      <li>VERB-Part: გამოსრულ, დამკჳდრებულ, წერილ, უწყებულ, განდგომილ, დამონებულ, დასხმულ, კურთხეულ, ყოფილ, აღმაღლებულ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>ADJ: წმიდასა, დიდთა, დიდსა, კეთილსა, ნეტარსა, ბოროტსა, უღმრთოსა, ახოვანსა, ბნელსა, ბრმათა</li>
      <li>ADP: ზედა, შინა, თანა, ვითარცა, წიაღ, მახლობელად, შორის, წინაშე, გან, გარეშე</li>
      <li>NOUN: სახლსა, ჟამსა, ღმერთსა, ჴელთა, ადგილსა, დღესა, თთუესა, პირსა, უფალსა, ეპისკოპოსსა</li>
      <li>NUM: ერთსა, მეორესა, პირველსა, მერვესა, მეშჳდესა, ათჩჳდმეტსა, ათცხრამეტსა, მეათოთხმეტესა, მეექუსესა, მეოთხესა</li>
      <li>PRON: მას, მათ, მე, ამას, რომელსა, ყოველთა, მისსა, თჳსსა, ჩუენ, მისთა</li>
      <li>PROPN: იერუსალემს, შუშანიკს, ეზრას, იერუსალემსა, ისრაელსა, ჰურიათა, ჰურიასტანს, ბაბილონს, ვარსქენს, სამნასარს</li>
      <li>VERB-Part: განმზადებულსა, მოქცეულთა, შემწყნარებელსა, წარსავალსა</li>
      <li>VERB-Vnoun: განსუენებასა, შეჭმასა</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Erg
    <ul>
      <li>ADJ: წმიდამან, დიდმან, იოსედეკეანმან, სანატრელმან, მჴნეთა, პატიოსანმან, სავსემან, სალათიელეანმან, სხუათა, ურჩულ[ო]მან</li>
      <li>NOUN: მეფემან, ღმერთმან, პიტიახშმან, უფალმან, ძეთა, კაცმან, მღდელთა, ლევიტელთა, მწერალმან, ცოლმან</li>
      <li>NUM: ერთმან, ოთხთა, ორთა</li>
      <li>PRON: მან, მათ, მე, რომელმან, რომელთა, ვინ, მისმან, ყოველმან, შენ, შენმან</li>
      <li>PROPN: შუშანიკ, კჳროს, ქრისტემან, ასარდან, დავითმან, ეზრა, ვარსქენ, ისრაელმან, ნაბუქოდონოსორ, სათრაბუზმან</li>
      <li>VERB-Part: გამოსრულთა, დაუღლევილთა</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ess
    <ul>
      <li>ADJ: მგლოვარედ, მოდღენდელად, ადგილდ-ადგილდ, გებულად, დაუცხრომელად, დიდად, დღე-მოკლედ, კეთილად, კრძალულად, კუალად</li>
      <li>ADP: მდე, ვიდრე, კერძო, მიმართ</li>
      <li>NOUN: ტაძრად, დღედ, ცოლად, საქმედ, კარად, საწყაულად, სახედ, შეწირვად, ციხედ, ადგილად</li>
      <li>NUM: მეორედ, მესამედ</li>
      <li>PRON: ჩემდა, ჩუენდა, შენდა, თქუენდა, თჳსა, მისა, თქუენ, თჳსად, შენდამი</li>
      <li>PROPN: იერუსალემდ, ბაბილონდ, ჰურიასტანდ, თელმელექდ, იერუსალჱმდ, ლარესად, მეჰერდ, ქერობდ, ჩორდ</li>
      <li>VERB: ყოფად, ხილვად, სიტყუად, აღშენებად, სიკუდილდ, აღდგინებად, აღმაღლებად, გამოსლვად, გინებად, დადგომად</li>
      <li>VERB-Part: აღსამაღლებელად, აღწერილი, დამტკიცებულად, სადიდებელად, საქებელად, საყუედრელად, საცემელად, შესაგრაგნელად</li>
      <li>VERB-Vnoun: სიტყუად, ხილვად, ყოფად, აღდგინებად, გამოსლვად, გინებად, დადებად, მჴდომად, სიკუდილდ, სმენად</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>ADJ: წმიდისა, სანატრელისა, ზესკნელისა, ნეტარისა, წმიდათა, ბოროტთა, დიდთა, დიდისაჲ, ესევითარისა, თხუთმეტეულისასა</li>
      <li>ADP: გან, თჳს, თანა, წინაშე, განი, განნი, მიმართ, ზედა, შემდგომად, მიერ</li>
      <li>NOUN: ღმრთისა, უფლისა, ძეთა, სახლისა, მეფისა, კაცთა, უფლისასა, ღმრთისაჲ, უფლისაჲ, ტყუეობისა</li>
      <li>NUM: პირველისა, ერგასისთა, ერთისა, ექუსთა, მეათისა, მეხუთისა, ორისა, პირველთაჲ, პირველისასა, სამისა</li>
      <li>PRON: მის, მათ, მისა, ამის, მისთა, მათთა, ჩუენისა, ყოველთა, ყოვლისა, ჩემ</li>
      <li>PROPN: ისრაელისა, ისრაელისათა, სპარსთაჲსა, ქრისტჱს, შუშანიკის, შუშანიკისა, ელამისთაჲ, ისრაელისამან, ისრაელისაჲ, სპარსთამან</li>
      <li>VERB: თრევათა, გამოსლვისა, განწირულისაჲ, გუემათა, დათმენათა, მოოჴრებულისა, მოღებისა, შეურაცხებათა, ძლევისა, წარმოჩინებისა</li>
      <li>VERB-Part: განწირულისაჲ, მოოჴრებულისა</li>
      <li>VERB-Vnoun: თრევათა, გუემათა, დათმენათა, მოღებისა, შეურაცხებათა, ძლევისა, წოდებისა</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ins
    <ul>
      <li>ADJ: დიდითა, მრავლითა, მწარითა, სულიერითა, ამიერით, დაპებულითა, რჩეულითა, სადიასპანოჲთა, საღმრთოჲთა, სულნელითა</li>
      <li>ADP: გან, კერძო, ურთ, კერძოთა, კერძონი, კერძოსა, კერძოჲ, კერძოჲსა, მაგიერ, მიერ</li>
      <li>NOUN: მდინარით, თრევით, ციხით, ჴელითა, ჴმითა, რისხვით, სიტყჳთა, ტირილითა, ფერჴითა, ცრემლითა</li>
      <li>NUM: ერთითა</li>
      <li>PRON: მით, თჳსითა, ყოვლითა, თჳთ, მაგით, ყოვლით, ამით, თჳსით, ეგოდენითა, ვინაჲთ</li>
      <li>PROPN: ბაბილონით, იერუსალემით, ევფრატით, იოპეთ, ლიბანით</li>
      <li>VERB: დგომითა, აღნთებულითა, გალობითა, დაშურომითა, ლოცვით, მარხვით, მარხვითა, მსხემობით, ტანჯვითა, ტირილით</li>
      <li>VERB-Part: აღნთებულითა</li>
      <li>VERB-Vnoun: დგომითა, ლოცვით, მარხვით, მსხემობით, ტანჯვითა, ტირილით, ყოფით, ყოფითა, შეწევნითა, ცემითა</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>ADJ: წმიდაჲ, მრავალი, მცირჱ, ნეტარი, ჭეშმარიტი, დიდ-დიდნი, დიდძალი, იოსედეკეანი, მარტოჲ, მრავალნი</li>
      <li>ADP: ვითარცა, ებრ, კერძოჲ</li>
      <li>NOUN: ძენი, ძჱ, ღმერთი, ცოლი, ერი, ჭურჭერი, ლევიტელნი, შვილნი, ვეცხლი, კაცი</li>
      <li>NUM: ერთი, ასი, სამეოცდაათი, ას, ერთ, ექუსი, მეშჳდე, ორას, ორასი, ოც</li>
      <li>PRON: იგი, ესე, მისი, ყოველი, რომელნი, მისნი, ჩემი, ჩუენ, რომელნი-იგი, შენი</li>
      <li>PROPN: შუშანიკ, ჯოჯიკ, ეზრა, ნათანიმ, ამორეველნი, არტახშეს, არტახშესისი, ასაბიაჲ, ატუუს, ბენიამენ</li>
      <li>VERB: განტევებაჲ, გამოსრულნი, განსუენებაჲ, მოსლვაჲ, შეკრვაჲ, შენებაჲ, აღმართებაჲ, გამოსრული, გამწარებული, განათლებულნი</li>
      <li>VERB-Part: გამოსრულნი, გამოსრული, განათლებულნი, განზრდილი, განზრდილნი, განმრთელებული, განმწარებულნი, განმწმედელი, განსივებული, განსივებულნი</li>
      <li>VERB-Vnoun: განტევებაჲ, შეკრვაჲ, შენებაჲ, აღმართებაჲ, განსუენებაჲ, დატევებაჲ, დაცვაჲ, კურნებაჲ, ლხინებაჲ, მონადირებაჲ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Voc
    <ul>
      <li>ADJ: უბადოო, ბრძენნო, სანატრელო, საყუარელნო, უბადრუკო, უგულისჴმოო, წმიდაო</li>
      <li>NOUN: უფალო, ღმერთო, ხუცეს, დანო, დედოფალო, კაცნო, მარტჳლო, მეფე, მოწამეო, მჴევალო</li>
      <li>PRON: ჩუენო, ჩემნო, ჩემო</li>
    </ul>
  </li>
</ul>



<h3>Degree and Polarity</h3>


<ul>
  <li><a>Degree</a></li>
</ul>

<ul>
  <li>Sup
    <ul>
      <li>ADJ: უდიდჱს, უმჯობჱს</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>ADV: არა, ნუ, ვერ, არცა, არ, არღარა, ვერღარა, ნუუკუე, არღა, არღარად</li>
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
      <li>VERB-Fin: ევედრებოდა, აგინებდა, აიძულებდა, დასთრგუნვიდა, ეტყოდიან, ვისწრაფდი, ვტიროდე, იბრძოდეს, იდვა, იზახდა</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Iter
    <ul>
      <li>VERB-Fin: მიიღის, ჰრქჳან, განამჴნნის, დავდევით, დავშუერით, დაიდგნის, დაიდვის, დაიძინის, დაჯდის, ევედრებინ</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: იყავნ, იყავ, იყვენით</li>
      <li>VERB-Fin: აღდეგ, იყავნ, მიეცით, მივედით, მიიღეთ, მოვედ, ყავ, არქუთ, აღიშენენ, ეტყჳ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX-Fin: არს, იყვნეს, იყო, ხარ, ვარ, არიან, ხართ, ვიყავ, ვართ, ვიყვენით</li>
      <li>VERB-Fin: ჰრქუა, იყო, არს, მრქუა, ვარქუ, თქუა, მოვიდა, აღდგა, იყვნეს, მოიწია</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sub
    <ul>
      <li>AUX-Fin: იყოს, ეყო, ხართ</li>
      <li>VERB-Fin: იყოს, ჰყო, მივემთხჳო, შევიდეს, აღუდგენ, იპოოს, იქმნა, მიეცემოდის, მოკუდეს, პოოს</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>VERB-Part: აღსამაღლებელად, განსარინებელ, საგონებელ, სადიდებელად, საქებელად, საყუედრელად, საცემელად, შესაგრაგნელად, წარსავალსა</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: იყავნ</li>
      <li>VERB-Fin: ეტყოდა, იტყოდა, აქუნდა, ევედრებოდა, ვტიროდე, სცემდა, ტიროდეს, აკურთხევდეს, ასწავებდა, აშენებდეს</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX-Fin: იყვნეს, იყო, ვიყავ, იყავ, იყავნ, ეყო, ვიყვენით, იყვენით, იყოს</li>
      <li>VERB-Fin: ჰრქუა, იყო, მრქუა, მოვიდა, ვარქუ, თქუა, აღდგა, იყვნეს, მოიწია, მისცა</li>
      <li>VERB-Part: გამოსრულ, დამკჳდრებულ, წერილ, უწყებულ, გამოსრულნი, განდგომილ, განმზადებულსა, დამონებულ, დასხმულ, კურთხეულ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pf
    <ul>
      <li>VERB-Fin: აღგჳსრულებიეს, მიბრძანებიეს</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pqp
    <ul>
      <li>VERB-Fin: მოეძღუანა, აღმემართა, გარდაევლნეს, გიპყრიეს, დაგიტევებიეს, დაგიჯერებიეს, ეჭამა, ეხილვა, მასმიეს, მიცნობიეს</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX-Fin: არს, ხარ, ვარ, არიან, ხართ, იყავნ, ვართ, იყოს</li>
      <li>VERB-Fin: არს, არიან, ვართ, უწყი, ეტყჳ, იტყჳ, წარვალ, აშენებენ, გაუწყებთ, გეტყჳ</li>
      <li>VERB-Part: განმამტკიცებელ, განმწმედელი, დამაშურალ, დამაშურალი, დამშრშალი, შემწყნარებელსა</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Cau
    <ul>
      <li>VERB-Fin: მიავლინა, აღადგინე, დაადგინნა, მიაქცინა, მიაქცინეს, მოავლინნა, მოავლინნეს, მოვაქცინე, წარადგინნა</li>
      <li>VERB-Vnoun: აღდგინებად</li>
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
      <li>PRON: იგი, მათ, მას, მის, ესე, მან, ამას, ამის, იგინი, მისა</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>PRON: ვინმე, რას, რაჲმე, რაჲ, სხუაჲ, სხუათა, სხუანი, ყოველივე, ვერვინ, ვერღარაჲ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>PRON: ვინ, რაჲ, რაჲსა, ვის, ვისითა, რაჲ-მე</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>PRON: არავინ, არარაჲ, არღარავინ, არარას, არარაჲსაჲ, ვერღარას, ნუვის, ნურარაჲ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>PRON: მე, ჩუენ, შენ, მისი, მათ, თქუენ, მისნი, ჩემი, მისთა, შენი</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>PRON: რომელნი, რომელნი-იგი, რომელი, რომელსა, რომელ-იგი, რომელ, რომელმან, რომელთა, რომელი-იგი, რომლისა</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
      <li>PRON: ყოველი, ყოველთა, ყოველნი, ყოვლისა, ყოველივე, ყოველსა, ყოვლითა, ყოველთავე, ყოველნივე, ყოვლით</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: ერთი, ათას, ას, ერგასის, ორ, შჳდას, ექუსას, ორას, სამას, სამ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>NUM: პირველისა, მეორესა, პირველსა, მეორედ, მერვესა, მესამედ, მეშჳდე, მეშჳდესა, მეათერთმეტჱ, მეათისა</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>PRON: მისი, მისნი, ჩემი, მისთა, შენი, მათთა, თჳსი, მათი, მისსა, თჳსსა</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>PRON: მე, ჩუენ, ჩემი, ჩემ, ჩემდა, ჩუენდა, ჩუენთა, ჩუენისა, ჩემნი, ჩუენი</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>PRON: შენ, თქუენ, შენი, შენსა, შენდა, შენნი, შენთა, თქუენდა, შენისა, შენისასა</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>PRON: მისი, მათ, მისნი, მისთა, მისსა, მათთა, მის, მისა, მისისა, მათი</li>
    </ul>
  </li>
</ul>




<h3>Other Features</h3>


<ul>
  <li><a>AdpType</a>
    <ul>
      <li>Post
        <ul>
          <li>ADP: გან, თჳს, თანა, ზედა, შინა, მდე, განი, განნი, მიმართ, კერძო</li>
        </ul>
      </li>
      <li>Pre
        <ul>
          <li>ADP: წინაშე, ვითარცა, ზედა, ვიდრე, წიაღ, შემდგომად, მსგავსად, მახლობელად, უწინარეს, შორის</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>AdvType</a>
    <ul>
      <li>Loc
        <ul>
          <li>ADV: მუნ</li>
        </ul>
      </li>
      <li>Tim
        <ul>
          <li>ADV: მარადის, პირველად</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case[dsauf]</a>
    <ul>
      <li>Nom
        <ul>
          <li>NOUN: ვეცხლისათანი</li>
          <li>PROPN: ადონიკამისთაჲ, ელამისთაჲ, სოლომონისთანი, ადეაჲსთაჲ, აზგადისთაჲ, ასემისთაჲ, ბაანისთაჲ, ბაბეისთაჲ, ბაბინესთაჲ, ბაბისთაჲ</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case[sauf]</a>
    <ul>
      <li>Dat
        <ul>
          <li>ADJ: თხუთმეტეულისასა</li>
          <li>ADP: განსა, კერძოსა</li>
          <li>NOUN: უფლისასა, მეფისასა, ღმრთისასა, ქუეყანისასა, თთჳსასა, თჳსასა, მდინარისასა, მეფასეთასა, აპნისისასა, ზაფხულისასა</li>
          <li>NUM: პირველისასა</li>
          <li>PRON: ჩუენისასა, შენისასა, თჳსისასა, თჳსთა, თჳსთასა, მათისასა, მათსა, მისთასა, მისისასა, ყოვლისასა</li>
          <li>PROPN: ისრაელისათა, ისრაელისასა, მოსესსა, ქრისტჱსსა, ჰურიასტანისასა, ანგეაჲსთა, ართასასისთა, ასარსურაისსა, ბაბილონელთასა, ბატანაიელთასა</li>
        </ul>
      </li>
      <li>Erg
        <ul>
          <li>NOUN: ზეცისამან, მეფისამან, ფასისათა</li>
          <li>PROPN: ისრაელისათა, ისრაელისამან, სპარსთამან, ასურასტანისამან, ბაბილონისამან, ბანუისთა, ელიაჲსმან, იერუსალემისთა, სემეისთა, ჯოჯიკისმან</li>
        </ul>
      </li>
      <li>Ess
        <ul>
          <li>NOUN: გულითად</li>
          <li>PROPN: ჰურიასტანისად</li>
        </ul>
      </li>
      <li>Gen
        <ul>
          <li>ADP: განისა, კერძოთა, კერძოჲსა</li>
          <li>NOUN: ზეცათაჲსა, ქუეყანისათა, მეფისაჲსა, მღდელთაჲსა, უცხოთესლთაჲსა, აღვსებისათა, ვეცხლისათანი, ზამთრისაჲსა, ლევიტელთაჲსა, მდინარისათა</li>
          <li>PRON: ჩუენთაჲსა, თჳსისათა, თჳსისასა, თჳსისაჲსა, მათისა, მათისაჲსა, მისისაჲსა, ჩემისაჲსა, ჩუენისათა</li>
          <li>PROPN: სპარსთაჲსა, ისრაელისათა, ადონიკამისთაჲ, ბაბილონელთაჲსა, ელამისთაჲ, ისრაელისაჲსა, სოლომონისთანი, ადდოვეაჲსისა, ადეაჲსთაჲ, აზგადისთაჲ</li>
        </ul>
      </li>
      <li>Ins
        <ul>
          <li>ADJ: წმიდისაჲთა</li>
          <li>NOUN: მეფასისაჲთა, ღმრთისაჲთა, წიგნთაჲთა, წინაწარმეტყუელთაჲთა, წინაწარმეტყუელისაჲთა</li>
          <li>PRON: ვისითა, ჩუენისაჲთა, მისისაჲთა, ჩემისათა</li>
          <li>PROPN: ეზრაჲსითა, ვარსქენისითა, ნათანისით, ქრისტჱსითა, შუშანიკისითა</li>
        </ul>
      </li>
      <li>Nom
        <ul>
          <li>ADJ: დიდისაჲ, სრულისაჲ, ძლიერთაჲ</li>
          <li>ADP: განი, განნი, კერძონი, კერძოჲ</li>
          <li>NOUN: ღმრთისაჲ, უფლისაჲ, ოქროჲსაჲ, ვეცხლისაჲ, სახლისაჲ, თთჳსაჲ, მეფისაჲ, მღდელთანი, ქუეყანისაჲ, ბრძანებისაჲ</li>
          <li>NUM: პირველთაჲ</li>
          <li>PRON: ჩუენისაჲ, მათისაჲ, რომლისაჲ, თჳსისაჲ, მისთაჲ, ყოველთაჲ, ჩემთაჲ, ჩემისაჲ, ამისნი, არარაჲსაჲ</li>
          <li>PROPN: ისრაელისაჲ, შუშანიკისი, არისისნი, ასაისნი, ასაფისნი, ზარეაჲსი, ისრაელისანი, იუდაჲსნი, ლევიტელთაჲ, ქრისტჱსი</li>
          <li>VERB-Part: განწირულისაჲ</li>
        </ul>
      </li>
      <li>Voc
        <ul>
          <li>NOUN: ღმრთისაო</li>
          <li>PROPN: ისრაელისაო, ქრისტჱსო</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NameType</a>
    <ul>
      <li>Geo
        <ul>
          <li>PROPN: იერუსალემდ, იერუსალემს, ისრაელისა, ისრაელისათა, სპარსთაჲსა, ბაბილონით, იერუსალემით, იერუსალემსა, ისრაელისამან, ისრაელისაჲ</li>
        </ul>
      </li>
      <li>Prs
        <ul>
          <li>PROPN: შუშანიკ, კჳროს, ჯოჯიკ, ეზრა, დარელ, ვარსქენ, ისუ, ზაქარია, იესუ, შუშანიკს</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Number[dsauf]</a>
    <ul>
      <li>Plur
        <ul>
          <li>NOUN: ვეცხლისათანი</li>
          <li>PROPN: სოლომონისთანი, მოაბისათაჲ</li>
        </ul>
      </li>
      <li>Sing
        <ul>
          <li>PROPN: ადონიკამისთაჲ, ელამისთაჲ, ადეაჲსთაჲ, აზგადისთაჲ, ასემისთაჲ, ბაანისთაჲ, ბაბეისთაჲ, ბაბინესთაჲ, ბაბისთაჲ, ბაგვისთაჲ</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Number[io]</a>
    <ul>
      <li>Plur
        <ul>
          <li>VERB-Fin: მოგჳტევენ, განუქარვედ, გეტყჳ, გიბრძანონ, გუეშინის, გუნებავს, გურქუა, გურცხუენის, გჳთხრა, გჳწოდა</li>
        </ul>
      </li>
      <li>Sing
        <ul>
          <li>VERB-Fin: მრქუა, ჰრქუა, მისცა, სცა, უბრძანა, მიეც, მიუგო, მომცა, აღმემართა, აღსწონოთ</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Number[obj]</a>
    <ul>
      <li>Plur
        <ul>
          <li>VERB-Fin: გაუწყებთ, დააბრკოლნეს, დაამკჳდრნა, დააყენნეს, მიაქცინა, მოგუეც, შევკრიბენ, აკურთხნა, აფუცნა, აღაშჱნნა</li>
        </ul>
      </li>
      <li>Sing
        <ul>
          <li>VERB-Fin: ყო, ამცნო, აუწყონ, აღასრულეს, აღგჳსრულებიეს, აღიღო, აჭამეს, განეტევა, განმითრიო, გარდაასხ</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Number[sauf]</a>
    <ul>
      <li>Plur
        <ul>
          <li>ADP: განნი, კერძოთა, კერძონი</li>
          <li>NOUN: ქუეყანისათა, მღდელთანი, უფლისათა, ღმრთისათა, ადგილისანი, აღვსებისათა, დედოფლისანი, ვერძთანი, ვეცხლისათანი, ვეცხლისანი</li>
          <li>PRON: თჳსისათა, ამისნი, თჳსთა, მაგისნი, შენისათა, ჩუენისათა, ჩუენისანი</li>
          <li>PROPN: ისრაელისათა, ადონიკამისთაჲ, არისისნი, ასაისნი, ასაფისნი, ელამისთაჲ, ზაქარიაჲსთა, ისრაელისანი, იუდაჲსნი, სოლომონისთანი</li>
        </ul>
      </li>
      <li>Sing
        <ul>
          <li>ADJ: დიდისაჲ, თხუთმეტეულისასა, სრულისაჲ, ძლიერთაჲ, წმიდისაჲთა</li>
          <li>ADP: განი, განისა, განსა, კერძოსა, კერძოჲ, კერძოჲსა</li>
          <li>NOUN: უფლისასა, ღმრთისაჲ, უფლისაჲ, ოქროჲსაჲ, მეფისასა, ღმრთისასა, ვეცხლისაჲ, ზეცათაჲსა, სახლისაჲ, თთჳსაჲ</li>
          <li>NUM: პირველთაჲ, პირველისასა</li>
          <li>PRON: ჩუენისაჲ, ჩუენისასა, ჩუენთაჲსა, თჳსისასა, მათისაჲ, რომლისაჲ, შენისასა, ვისითა, თჳსისაჲ, მისთაჲ</li>
          <li>PROPN: სპარსთაჲსა, ისრაელისამან, ისრაელისაჲ, სპარსთამან, შუშანიკისი, ბაბილონელთაჲსა, ზარეაჲსი, ისრაელისასა, ისრაელისაჲსა, ლევიტელთაჲ</li>
          <li>VERB-Part: განწირულისაჲ</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Number[subj]</a>
    <ul>
      <li>Plur
        <ul>
          <li>AUX-Fin: იყვნეს, არიან, ხართ, ვართ, ვიყვენით, იყვენით</li>
          <li>VERB-Fin: იყვნეს, არიან, ყვეს, მოვიდეს, შეწირეს, ვართ, იწყეს, მივედით, შევიდეს, ჰრქუეს</li>
        </ul>
      </li>
      <li>Sing
        <ul>
          <li>AUX-Fin: არს, იყო, ხარ, ვარ, იყავნ, ვიყავ, იყავ, იყოს, ეყო</li>
          <li>VERB-Fin: ჰრქუა, იყო, არს, მრქუა, მოვიდა, ვარქუ, თქუა, აღდგა, მოიწია, მისცა</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person[io]</a>
    <ul>
      <li>1
        <ul>
          <li>VERB-Fin: მრქუა, მოგჳტევენ, მომცა, აღმემართა, გამომეც, განმაშორებ, გუეშინის, გუნებავს, გურქუა, გურცხუენის</li>
        </ul>
      </li>
      <li>2
        <ul>
          <li>VERB-Fin: გეტყჳ, გიბრძანა, გამოგიღონ, გაუწყეთ, გეგულების, გერგო, გიბრძანონ, გითხრა, გინებს, გიჩნ</li>
        </ul>
      </li>
      <li>3
        <ul>
          <li>AUX-Fin: ეყო</li>
          <li>VERB-Fin: ჰრქუა, მისცა, უბრძანა, ეტყოდა, ევედრებოდა, ესმა, მიუგე, სცა, ჰრქუეს, ეტყჳ</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person[obj]</a>
    <ul>
      <li>1
        <ul>
          <li>VERB-Fin: მოგუეც, მრქუეს, აღგუამაღლნა, განმარინნეს, განმითრიო, გუაკურთხენ, გუხედევდ, გჳბრძანა, დაგუამტკიცენ, დაგუთხიენ</li>
        </ul>
      </li>
      <li>2
        <ul>
          <li>VERB-Fin: აღგავსენინ, გაუწყებ, გაუწყებთ, გგლიან, გიყო, გმადლობ, გნებავს, გყავ, გძაგ, მიგიგოთ</li>
        </ul>
      </li>
      <li>3
        <ul>
          <li>VERB-Fin: სცემდა, აღიღო, დაამკჳდრნა, ვაიძულე, მიაქცინა, ყო, შევკრიბენ, შესწირვიდა, აგინებდა, ადიდა</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person[subj]</a>
    <ul>
      <li>1
        <ul>
          <li>AUX-Fin: ვარ, ვიყავ, ვართ, ვიყვენით</li>
          <li>VERB-Fin: ვარქუ, ვართ, ვიხილე, ვტიროდე, მივედ, ვარქუთ, ვთქუ, მივემთხჳო, მივეც, მიუგე</li>
        </ul>
      </li>
      <li>2
        <ul>
          <li>AUX-Fin: ხარ, ხართ, იყავ, იყვენით, იყო</li>
          <li>VERB-Fin: ჰყო, აღდეგ, ეტყჳ, იტყჳ, მიეცით, მივედით, მიიღეთ, მოგუეც, მოგჳტევენ, მოვედ</li>
        </ul>
      </li>
      <li>3
        <ul>
          <li>AUX-Fin: არს, იყვნეს, იყო, არიან, იყავნ, იყოს, ეყო</li>
          <li>VERB-Fin: ჰრქუა, იყო, არს, მრქუა, მოვიდა, თქუა, აღდგა, იყვნეს, მოიწია, მისცა</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 1 lemmas as copulas (<a>cop</a>). Examples: ყოფა.</li>
</ul>

<ul>
<li>This corpus uses 1 lemmas as auxiliaries (<a>aux</a>). Examples: ყოფა.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB-Fin--NOUN-Dat (1)</li>
      <li>VERB-Fin--NOUN-Erg (58)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(გან) (1)</li>
      <li>VERB-Fin--NOUN-Nom (134)</li>
      <li>VERB-Fin--PRON (54)</li>
      <li>VERB-Fin--PRON-Abs (4)</li>
      <li>VERB-Fin--PRON-Dat (3)</li>
      <li>VERB-Fin--PRON-Erg (56)</li>
      <li>VERB-Fin--PRON-Nom (121)</li>
      <li>VERB-Part--NOUN-Nom (15)</li>
      <li>VERB-Part--PRON (2)</li>
      <li>VERB-Part--PRON-Abs (1)</li>
      <li>VERB-Part--PRON-Nom (23)</li>
      <li>VERB-Vnoun--NOUN-Gen (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN-Dat (1)</li>
      <li>VERB--NOUN-Gen (3)</li>
      <li>VERB--NOUN-Nom (2)</li>
      <li>VERB-Fin--NOUN-Abs (1)</li>
      <li>VERB-Fin--NOUN-Dat (51)</li>
      <li>VERB-Fin--NOUN-Gen (3)</li>
      <li>VERB-Fin--NOUN-Nom (247)</li>
      <li>VERB-Fin--PRON (13)</li>
      <li>VERB-Fin--PRON-Abs (6)</li>
      <li>VERB-Fin--PRON-Dat (22)</li>
      <li>VERB-Fin--PRON-Nom (92)</li>
      <li>VERB-Part--NOUN-Gen (2)</li>
      <li>VERB-Vnoun--NOUN-Dat (4)</li>
      <li>VERB-Vnoun--NOUN-Gen (21)</li>
      <li>VERB-Vnoun--NOUN-Nom (4)</li>
      <li>VERB-Vnoun--PRON-Gen (7)</li>
      <li>VERB-Vnoun--PRON-Nom (3)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--PRON-Ess (1)</li>
      <li>VERB-Fin--NOUN-Dat (73)</li>
      <li>VERB-Fin--NOUN-Dat-ADP(თანა) (1)</li>
      <li>VERB-Fin--PRON (27)</li>
      <li>VERB-Fin--PRON-Dat (106)</li>
      <li>VERB-Fin--PRON-Ess (1)</li>
      <li>VERB-Part--NOUN-Gen (1)</li>
      <li>VERB-Vnoun--NOUN-Dat (2)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 4 relation subtypes: <a>acl:relcl</a>, <a>advmod:neg</a>, <a>compound:lvc</a>, <a>nsubj:pass</a></li>
<li>The following 7 relation types are not used in this corpus at all: <a>expl</a>, <a>clf</a>, <a>fixed</a>, <a>list</a>, <a>orphan</a>, <a>goeswith</a>, <a>reparandum</a></li>
</ul>
