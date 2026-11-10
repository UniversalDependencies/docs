---
layout: base
title:  'UD_Old_Georgian-GLC'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Old Georgian GLC

Language: [Old Georgian](/oge/index.html) (code: `oge`)<br/>
Family: Kartvelian

This treebank has been part of Universal Dependencies since the UD v2.18 release.

The following people have contributed to making this treebank part of UD: Irina Lobzhanidze.

Repository: [UD_Old_Georgian-GLC](https://github.com/UniversalDependencies/UD_Old_Georgian-GLC)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udoge_glc219)<br />
Download all treebanks: [UD 2.19](/#download)

License: CC BY-SA 4.0

Genre: fiction

Questions, comments?
General annotation questions (either Old Georgian-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Old_Georgian-GLC/issues).
If you want to collaborate, please contact [irina_lobzhanidze&nbsp;(æt)&nbsp;iliauni&nbsp;•&nbsp;edu&nbsp;•&nbsp;ge].
Development of the treebank happens directly in the UD repository, so you may submit bug fixes as pull requests against the dev branch.

| Annotation | Source |
|------------|--------|
| Lemmas | assigned by a program, with some manual corrections, but not a full manual verification |
| UPOS | annotated manually in non-UD style, automatically converted to UD, with some manual corrections of the conversion |
| XPOS | assigned by a program, with some manual corrections, but not a full manual verification |
| Features | assigned by a program, with some manual corrections, but not a full manual verification |
| Relations | assigned by a program, with some manual corrections, but not a full manual verification |

## Description

The Old Georgian UD Treebank (UD_Old_Georgian-GLC) is the first syntactically annotated corpus of Georgian, based on a collection of annotated sentences selected from the Old Georgian Language Corpus (OGLC) available at https://oge.iliauni.edu.ge/.




The Old Georgian UD Treebank (UD_Old_Georgian-GLC) serves as the first syntactically annotated corpus of the Old Georgian language. It includes 1232 utterances (33630 tokens) selected from the OGLC (Doborjginidze et al. 2013), providing detailed annotations encompassing the grammatical structure and dependencies within the sentences.

| Text | Date | Tokens | Sentences |
|---|:---:|---:|---:|
| The Great Nomocanon: Cyril of Alexandria’s Epistle to Domnus | 883 | 6575 | 151 |
| The Great Nomocanon: Decree of the Council of Constantinople (394) | 883 | 615 | 14 |
| Gregory of Nazianzus, On the Resurrection | 10th–11th c. | 7804 | 322 |
| Martyrdom of Barlaam the Ascetic | 11th c. | 5623 | 188 |
| Andrew of Crete, On the Nativity of the Theotokos | 11th c. | 4585 | 188 |
| On the Exaltation of the Life-Giving Cross | 11th c. | 2637 | 122 |
| Book of Baruch | 12th c. | 4154 | 184 |
| Epistle to the Antiochians by Ignatius the God-Bearer | 12th–13th c. | 1486 | 63 |
| **Total** | | **33479** | **1232** |

The treebank's annotations align with the Universal Dependencies (UD) specifications, allowing for greater consistency and compatibility with other UD treebanks. Although the tokenization and segmentation principles of the original GLC corpus differ slightly from those of the UD, the UD_Old_Georgian-GLC treebank adopts UD-compliant tokenization and segmentation principles, including the treatment of multiword tokens.

Morpho-syntactic annotations, as discussed in Lobzhanidze (2022), have been automatically adapted to UD requirements. This includes annotations for lemmas (LEMMA), part-of-speech categories (UPOS; XPOS), morphological features (FEATS), transliteration, and tokenization issues (MISC). Furthermore, heads of words (HEADS), dependency relations (DEPREL), and enhanced dependency graphs (DEPS) were automatically converted and then reviewed and manually corrected.

The current treebank is divided into three datasets for training, development, and evaluation, following the Universal Dependencies framework.

Training set (train): 734 sentences, 20937 syntactic words.

Development set (dev): 122 sentences, 2577 syntactic words.

Test set (test): 376 sentences, 10116 syntactic words.


## Acknowledgments

The UD_Old_Georgian-GLC release is based on the data from the Georgian Language Corpus (GLC) developed with the financial support of the Shota Rustaveli National Science Foundation (Project Nos. DP2016_23, LE/17/1-30/13, AR/320/4-105/11, Y-04-10).

Special gratitudes goes to Prof. Dr. Dan Zeman for his invaluable contributions in making the language and dataset available on GitHub and offering valuable suggestions.

## References

Doborjginidze, N., Lobzhanidze. (2012-2026). Georgian language corpus. See, https://oge.iliauni.edu.ge/. Accessed 18 April 2026.

Doborjginidze, N., Lobzhanidze, I., Mirianashvili, G. (2014). Corpus of Georgian Chronicles. See, http://corpora.iliauni.edu.ge/. Accessed 18 April 2026.

Lobzhanidze, I. (2022). Finite-State Computational Morphology: An Analyzer and Generator for Georgian. Cham: Springer.



# Statistics of UD Old Georgian GLC

## POS Tags

[ADJ](oge_glc-pos-ADJ.html) – [ADP](oge_glc-pos-ADP.html) – [ADV](oge_glc-pos-ADV.html) – [AUX](oge_glc-pos-AUX.html) – [CCONJ](oge_glc-pos-CCONJ.html) – [INTJ](oge_glc-pos-INTJ.html) – [NOUN](oge_glc-pos-NOUN.html) – [NUM](oge_glc-pos-NUM.html) – [PART](oge_glc-pos-PART.html) – [PRON](oge_glc-pos-PRON.html) – [PROPN](oge_glc-pos-PROPN.html) – [PUNCT](oge_glc-pos-PUNCT.html) – [SCONJ](oge_glc-pos-SCONJ.html) – [VERB](oge_glc-pos-VERB.html) – [X](oge_glc-pos-X.html)

## Features

[AdpType](oge_glc-feat-AdpType.html) – [AdvType](oge_glc-feat-AdvType.html) – [Aspect](oge_glc-feat-Aspect.html) – [Case](oge_glc-feat-Case.html) – [Case[stack]](oge_glc-feat-Case-stack.html) – [Case[stackb]](oge_glc-feat-Case-stackb.html) – [Degree](oge_glc-feat-Degree.html) – [Evident](oge_glc-feat-Evident.html) – [ExtPos](oge_glc-feat-ExtPos.html) – [Mood](oge_glc-feat-Mood.html) – [NameType](oge_glc-feat-NameType.html) – [Number](oge_glc-feat-Number.html) – [Number[io]](oge_glc-feat-Number-io.html) – [Number[obj]](oge_glc-feat-Number-obj.html) – [Number[subj]](oge_glc-feat-Number-subj.html) – [NumForm](oge_glc-feat-NumForm.html) – [NumType](oge_glc-feat-NumType.html) – [PartType](oge_glc-feat-PartType.html) – [Person](oge_glc-feat-Person.html) – [Person[io]](oge_glc-feat-Person-io.html) – [Person[obj]](oge_glc-feat-Person-obj.html) – [Person[subj]](oge_glc-feat-Person-subj.html) – [Poss](oge_glc-feat-Poss.html) – [PronType](oge_glc-feat-PronType.html) – [PunctSide](oge_glc-feat-PunctSide.html) – [PunctType](oge_glc-feat-PunctType.html) – [Subcat](oge_glc-feat-Subcat.html) – [Tense](oge_glc-feat-Tense.html) – [Typo](oge_glc-feat-Typo.html) – [VerbForm](oge_glc-feat-VerbForm.html) – [VerbType](oge_glc-feat-VerbType.html) – [Voice](oge_glc-feat-Voice.html)

## Relations

[acl](oge_glc-dep-acl.html) – [acl:relcl](oge_glc-dep-acl-relcl.html) – [advcl](oge_glc-dep-advcl.html) – [advmod](oge_glc-dep-advmod.html) – [advmod:emph](oge_glc-dep-advmod-emph.html) – [advmod:neg](oge_glc-dep-advmod-neg.html) – [amod](oge_glc-dep-amod.html) – [appos](oge_glc-dep-appos.html) – [case](oge_glc-dep-case.html) – [cc](oge_glc-dep-cc.html) – [ccomp](oge_glc-dep-ccomp.html) – [compound](oge_glc-dep-compound.html) – [conj](oge_glc-dep-conj.html) – [cop](oge_glc-dep-cop.html) – [csubj](oge_glc-dep-csubj.html) – [dep](oge_glc-dep-dep.html) – [det](oge_glc-dep-det.html) – [det:poss](oge_glc-dep-det-poss.html) – [discourse](oge_glc-dep-discourse.html) – [dislocated](oge_glc-dep-dislocated.html) – [fixed](oge_glc-dep-fixed.html) – [flat](oge_glc-dep-flat.html) – [goeswith](oge_glc-dep-goeswith.html) – [iobj](oge_glc-dep-iobj.html) – [mark](oge_glc-dep-mark.html) – [nmod](oge_glc-dep-nmod.html) – [nsubj](oge_glc-dep-nsubj.html) – [nsubj:pass](oge_glc-dep-nsubj-pass.html) – [nummod](oge_glc-dep-nummod.html) – [obj](oge_glc-dep-obj.html) – [obl](oge_glc-dep-obl.html) – [orphan](oge_glc-dep-orphan.html) – [parataxis](oge_glc-dep-parataxis.html) – [punct](oge_glc-dep-punct.html) – [root](oge_glc-dep-root.html) – [vocative](oge_glc-dep-vocative.html) – [xcomp](oge_glc-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 1232 sentences, 32383 tokens and 33630 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 4812 tokens (15%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 89 types of words that contain both letters and punctuation. Examples: ცისად-ცისადთა, თანა-ზიარ, კაცად-კაცადი, კერძო-დიაკონნი, სათნო-იყო, შემდგომითი-შემდგომად, ა(1), აბრალებ-ა, ადგილ-ადგილადისა, ამბორის-მყოფელ, აღჳრ-ესხნენ, აღჳრ-სხმა, ბ(2), გ(3), გამოვიძიოთ-ღა, გარე-მოვიცვათ, დ(4), დედათ-დიაკონთა, დედათ-დიაკონი, დღითი-დღე, დღითი-დღედსა, დღითი-დღეობისა, ე(5), ვ(6), ვინ-ა, ვინ-მე, ზ(7), ზედა-მარბეველობისაჲთა, თ(9), თავს-დებად, თანა-აც, თანა-მწირველთა, თანა–აღდეგით, თაყუანის-მცემელთა, თაყუანის-საცემელ, ი(10), ია(11), იბ(12), იგ(13), იდ(14), იე(15), ივ(16), იზ(17), ით(19), იჱ(18), კ(20), კა(21), კბ(22), კგ(23), კდ(24)</li>
</ul>

<ul>
<li>This corpus contains 1239 multi-word tokens. On average, one multi-word token consists of 2.01 syntactic words.</li>
<li>There are 732 types of multi-word tokens. Examples: ვინაჲთგან, მისგან, ამისთჳს, ჯერ-არს, რომელი-იგი, მისთჳს, მათგან, რომლისათჳსცა, ამისთჳსცა, მათთჳს, რომელმან-იგი, ვითარ-იგი, რომლისათჳს, ღმრთისაგან, ცხორებისათჳს, უკუნისამდე, ჩუენთჳს, რომელნი-იგი, შენთჳს, ამიერითგან, რომელთა-იგი, ვითარცა-იგი, საქმეთაგან, ყოველთათჳს, შენგან, ჯერ-იყო, ამათგან, თქუენთჳს, მიზეზისათჳს, მისებრ, რაჲ-იგი, ქუეყანისაგან, ჩუენგან, ჯერისათჳს, ჴორცთათჳს, არარაჲსაგან, ვისგანმე, თავს-იდებდა, მამისათჳს, მისისაგან, მღდელობისაგან, ნუცა, ორთაგან, პირველითგან, რომელთაგანმე, რომელსა-იგი, რომლისაგან, საკრველთაგან, ჩემთჳს, ცოდვათაგან.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 15 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>VERB</a>, <a>X</a></li>
<li>This corpus does not use the following tags: DET, SYM</li>
</ul>

<ul>
<li>This corpus contains 37 word types tagged as particles (PART): არ, არა, არავე, არარაჲ, არაჲ, არღა, არღარა, არღასადა, არც, არცა, არცათუ, არცამცა, არცაღა, არცაღათუ, ვერ, ვერღარა, ვერცა, ვითამე, თჳთ, მცა, ნუ, ნუმვე, ნუმცა, ნურაჲთა, ნუუკუე, ნუუკუედა, ნუღარა, ნუღარამცა, ნუცა, ნუცამცა, ნუცაღა, ო, რაჲ, რაჲთამცა, რეცა, ცა, ხოლო</li>
</ul>

<ul>
<li>This corpus contains 94 lemmas tagged as pronouns (PRON): ამიერი, ამისი, არავინ, არარა, არვინ, არღარავინ, ეგე, ეგევითარი, ერთი, ეს, ესე, ესევე, ესევითარი, ესენი, ესოდენი, ვერარა, ვერვინ, ვიეთი, ვიეთიმე, ვიეთმე, ვიეთნიმე, ვითარი, ვინ, ვინ-მე, ვინა, ვინმე, ვინმცა, ვინცა, ვის, ვისი, ვისიმე, თავადი, თავი, თთჳ, თითოეული, თითუეული, თოთოეული, თქუენ, თქუენი, თჳთ, თჳსი, იგი, იგივე, იგინი, ის, ისინი, კაცად-კაცადი, მათ, მათი, მათო, მე, მევე, მისი, მრავალი, ნურარა, ორივე, რა, რაბამი, რავდენ, რავდენი, რავდენიცა, რათა, რათმე, რაოდენი, რაჲ-მე, რაჲმე, რაჲცა, რომელ, რომელი, რომელიეგე, რომელიმე, რომელიცა, სხუა, სხუად, სხუანი, სხჳა, სხჳსი, ურთიერთა, ურთიერთას, ურთიერთასი, უშენი, ყოველთავე, ყოველი, ყოველივე, შენ, შენთჳს, შენი, ჩემი, ჩვენ, ჩვენი, ჩუეი, ჩუენ, ჩუენი, ძუელი</li>
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
    <li>AUX: არს, იყო, არიან, ხარ, იყოს, იქმნა, იყვნენ, იქმნეს, იყვნეს, ყო</li>
    <li>VERB: თქუა, იტყჳს, გიხაროდენ, იქმნა, ჰრქუა, ვიტყჳ, იხილა, აქუნდეს, განიკუეთენ, ეტყოდა</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>ADJ: პატივცემული, აღებული, აღმომავალი, აღსრულებულთა, აღსრულებულსა, გამოცდილ, განათლებულნი, განგებული, განმზადებულსა, განმწმედელი</li>
    <li>VERB: კურთხეულ, შემძლებელ, შესაძლებელ, ქმნილ, შეკრებულთა, ჴელთდასხმულ, მყოფნი, ყოფადთა, აღწერილთა, ბრძანებულ</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Vnoun
  <ul>
    <li>VERB: ყოფად, ყოფაჲ, თქუმად, ქმნად, შეწირვად, აღსაშენებელად, ვნებაჲ, მიღებაჲ, მორჩილებაჲ, მოსლვად</li>
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
      <li>ADJ: წმიდათა, საღმრთოთა, წმიდანი, ბოროტთა, მრავალთა, ზესთა, კეთილთა, საღმრთონი, დიდთა, ღირსთა</li>
      <li>ADJ-Part: აღსრულებულთა, განათლებულნი, ლტოლვილნი, მყოფთა, მყოფნი, ქმნულნი, ხილულნი</li>
      <li>AUX-Fin: იყვნეს, ქმნეს</li>
      <li>NOUN: მამათა, საქმეთა, კაცთა, ჴორცთა, ვნებათა, ეპისკოპოსთა, თავთა, წარმართთა, ანგელოზთა, სიტყუათა</li>
      <li>NUM: ორთა, ორთავე, ოცდაათთა, ორნი, პირველნი, შჳდთა, ათორმეტთა, ათრვამეტთა, ას, ექუსას</li>
      <li>PRON: მათ, ჩუენ, ყოველთა, რომელთა, რომელნი, თქუენ, იგინი, ჩუენდა, მისთა, თჳსთა</li>
      <li>PROPN: ქრისტჱსითა, ისრაელისათა, ქრისტესითა, აგარისთა, ანტიოქიისათა, ბარლაამისითა, იერუსალჱმისათა, იექონიაჲსთა, იოაკიმისთა, ისრაილისათა</li>
      <li>VERB-Part: შეკრებულთა, მყოფნი, ყოფადთა, აღწერილთა, ღმერთშემოსილთა, შემოკრებულთა, დაბადებულნი, დასხმულთა, მყოფთა, პირველთქუმულთა</li>
      <li>VERB-Vnoun: აღძრვანი, გამორჩევათა, გამოძიებათა, განგებათა, ზრახვანი, ღებისანი, შემოკლებითთა, ხედვანი, ხილვათა</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: კეთილად, წმიდისა, ნეტარი, წმიდასა, წმიდაჲ, დიდისა, წმიდამან, უფროჲსად, ღირს, დიდი</li>
      <li>ADJ-Part: პატივცემული, აღებული, აღმომავალი, აღსრულებულსა, გამოცდილ, განგებული, განმზადებულსა, განმწმედელი, განყოფილი, განწმედილისა</li>
      <li>AUX-Fin: არს</li>
      <li>NOUN: ღმრთისა, ჯუარი, უფლისა, სიტყუაჲ, ღმერთი, ცხორებისა, ღმერთმან, უფალმან, ეპისკოპოსმან, ქუეყანასა</li>
      <li>NUM: პირველ, ერთი, პირველი, პირველისა, მეორე, ერთისა, ერთსა, პირველად, ერთ, მეორესა</li>
      <li>PRON: იგი, მის, მას, ესე, რომელი, შენ, ამის, ამას, მან, რომლისა</li>
      <li>PROPN: ქრისტეს, ქრისტე, ბარლაამ, იესუ, ქრისტესა, ქრისტემან, თეოფილე, მარიამ, მოსეს, მოსე</li>
      <li>VERB: ყოფად, ყოფაჲ, კურთხეულ, შემძლებელ, შესაძლებელ, თქუმად, ქმნილ, ჴელთდასხმულ, ქმნად, შეწირვად</li>
      <li>VERB-Part: კურთხეულ, შემძლებელ, შესაძლებელ, ქმნილ, ჴელთდასხმულ, ბრძანებულ, დაცვულისა, მიმადლებულო, მოჴსენებულისა, წერილ</li>
      <li>VERB-Vnoun: ყოფად, ყოფაჲ, თქუმად, ქმნად, შეწირვად, აღსაშენებელად, ვნებაჲ, მიღებაჲ, მორჩილებაჲ, მოსლვად</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Abs
    <ul>
      <li>ADJ: ღირს, დიდ, კეთილ, ცხად, საცნაურ, უმჯობეს, შეურაცხ, საჴმარ, სრულ, მრავალ</li>
      <li>ADJ-Part: გამოცდილ, მორტყმულ</li>
      <li>NOUN: სახელ, ძალ, პატივ, კუერთხ, ჟამ, საჴმარ, ღმერთებ, მიზეზ, მსახურ, სულ</li>
      <li>NUM: ერთ</li>
      <li>PRON: შენ, თჳთ, რომელ, ჩუენ</li>
      <li>PROPN: ნაბუქოდონოსორ, იაკობ, ბარლაამ, ემმანუელ, ვალტასარ, ვალტაშარ, ისრაილ, კრიტელ, ნაზარეთ, საბაოთ</li>
      <li>VERB-Part: კურთხეულ, შემძლებელ, შესაძლებელ, ქმნილ, ჴელთდასხმულ, ბრძანებულ, წერილ, დასჯილ, აღმომაცენებელ, აღრაცხილ</li>
      <li>VERB-Vnoun: განმწმედელ, მომასწავებელ, შესახეთქელ, შუვამდგომელ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>ADJ: წმიდასა, დიდსა, სამეუფოსა, სამღდელოსა, საღმრთოსა, ბოროტსა, ნეტარსა, საშინელსა, ახალსა, ესევითარსა</li>
      <li>ADJ-Part: აღსრულებულთა, აღსრულებულსა, განმზადებულსა, დამოკიდებულსა, მოსრულსა, პირველდაცემულსა</li>
      <li>ADP: შინა, თანა, წინაშე, შორის, მიმართ, მომართ, ქუეშე, თჳს, მიერ, გარეშე</li>
      <li>NOUN: ქუეყანასა, ღმერთსა, ადგილსა, თავს, ჟამსა, მთასა, ქალაქსა, პირსა, უფალსა, დღესა</li>
      <li>NUM: ერთსა, მეორესა, პირველსა, მეათესა, მესამესა, ათორმეტთა, ათცხრამეტსა, მეხუთესა, ორსავე, პირველ</li>
      <li>PRON: მას, ამას, მათ, რომელსა, ყოველთა, მე, მისსა, ჩუენდა, თქუენ, თჳსსა</li>
      <li>PROPN: ქრისტესა, ქრისტესსა, ბარლაამს, მოსეს, ნიკეას, ანტიოქიას, ბაბილონისასა, ბაბილონს, ბოსტრისასა, დავითისსა</li>
      <li>VERB-Part: დაცვულსა, დაცულსა, ბრძანებულსა, განსაზღვრებულსა, გარდასრულსა, ქმნილსა, შემოკრებულთა, შობილსა, აღთქუმულთა, აღმაშენებელსა</li>
      <li>VERB-Vnoun: განკუეთასა, მსახურებასა, შეწირვასა, აღმოსლვასაცა, ბრძოლასა, გამორჩევასა, განახლებასა, განმრავლებასა, დადგინებასა, დაკლვასა</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Erg
    <ul>
      <li>ADJ: წმიდამან, ნეტარმან, ღირსმან, ბოროტმან, დამოკიდებულმან, მხოლომან, სამოციქულომან, საღმრთომან, ყოველმან, ახოვანმან</li>
      <li>ADJ-Part: დამოკიდებულმან</li>
      <li>NOUN: ღმერთმან, უფალმან, ეპისკოპოსმან, სულმან, ბერმან, განჩინებამან, ეშმაკთამან, მეფემან, მთავარმან, ძემან</li>
      <li>NUM: ერთმან, მეორემან, პირველმან</li>
      <li>PRON: მან, რომელმან, ჩუენ, ჩუენმან, შენმან, მათ, თავადმან, რომელთაცა, შენ, ვინმე</li>
      <li>PROPN: ქრისტემან, ანკჳრიისამან, ადამ, ალექსანდრიისამან, ანტიოქიისამან, არაბიანე, თეოფილე, კოსტანტინეპოლისამან, კოსტანტინოპილისამან, ქრისტესმან</li>
      <li>VERB-Part: განკრძალულმან, მომპოვნებელმან, აღძრულმან, გამომეძიებელმან, განთავისუფლებულმან, განჴორციელებულმან, დამდებელმან, ლმობიერქმნილმანცა, მიმსგავსებულმან, მინიჭებულმან</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ess
    <ul>
      <li>ADJ: კეთილად, უფროჲსად, წმიდად, ჭეშმარიტად, განცხადებულად, ბოროტად, ღირსად, მტკიცედ, სულიერად, შეურყეველად</li>
      <li>ADP: მდე, მიმართ</li>
      <li>NOUN: ზეცად, სახედ, მუცლად, ქუეყანად, ხატად, ხილვად, საქმედ, სლვად, არსებად, ბრძოლად</li>
      <li>NUM: პირველ, პირველად, მეათხუთმეტედ, მეორედ, ორად, პირველადცა, მეხუთედ</li>
      <li>PRON: თჳსად, სხუად, არარად, რაჲმე, რომელთა</li>
      <li>PROPN: ბაბილონად, ალექსანდრიად, ეგჳპტედ, იერუსალჱმად, იერუსალჱმდ, ქანანისად, ქრისტედ, ჯუბიად</li>
      <li>VERB-Part: ქმნილად, განცხადებულად, დამჴსნელად, თქუმულად, მისატევებლად, მოსავაკებლად, მოცემულად, შეუძლებელად</li>
      <li>VERB-Vnoun: ყოფად, თქუმად, ქმნად, შეწირვად, აღსაშენებელად, მოსლვად, ხილვად, აღსაარებად, აღსლვად, აღსრულებად</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>ADJ: წმიდათა, წმიდისა, დიდისა, ნეტარისა, უფროჲსღა, მრავალთა, საღმრთოთა, ბოროტთა, ზესთა, კეთილთა</li>
      <li>ADJ-Part: განწმედილისა, დაბადებულისა, მყოფთა</li>
      <li>ADP: გან, თჳს, მიერ, მიმართ, შორის, შინა, თანა, თჳსცა, ებრ, თჳნიერ</li>
      <li>NOUN: ღმრთისა, უფლისა, ცხორებისა, მამათა, საქმეთა, სულისა, სოფლისა, ჴორცთა, მამისა, ძისა</li>
      <li>NUM: პირველისა, ორთა, პირველ, ერთისა, ორთავე, ოცდაათთა, პირველთა, მეოთხისა, პირველად, პირველვე</li>
      <li>PRON: მის, მათ, ამის, რომლისა, ჩუენისა, რომელთა, მისისა, თჳსისა, მისთა, ყოვლისა</li>
      <li>PROPN: ქრისტეს, იესუ, ქრისტჱს, ქრისტესი, მოსეს, ბარლაამის, დავითის, თევდოსის, იუსტინიანეს, კოსტანტინოპოლის</li>
      <li>VERB-Part: შეკრებულთა, ყოფადთა, აღწერილთა, დაცვულისა, მოჴსენებულისა, ღმერთშემოსილთა, გამოუთქუმელისა, გარდასრულისა, დასხმულთა, მყოფთა</li>
      <li>VERB-Vnoun: ყოფისა, აღდგომისა, განკაცებისა, ამაღლებისა, აღსლვისა, აღშჱნებისა, გამორჩევათა, გამოჩინებისა, გამოძიებათა, განახლებისა</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ins
    <ul>
      <li>ADJ: კერძო, საღმრთოჲთა, დიდითა, წმიდით, წმიდითა, წმიდისაჲთა, მაღლითა, თითოსახითა, თითოფერითა, მიერით</li>
      <li>ADJ-Part: მოღებულითა, შეერთებულითა, შეკრებულითა</li>
      <li>ADP: გან, ურთ, განვე, განნი, განცა, ვითარცა</li>
      <li>NOUN: სიტყჳთა, ძალითა, დიდებითა, მადლითა, სახითა, ქუეყანით, ჴორცითა, სახელითა, ღმრთისაჲთა, სიხარულით</li>
      <li>NUM: პირველით, მეორითა, პირველ, პირველი, პირველივე, პირველითა, სამითა</li>
      <li>PRON: მით, ვინაჲთ, თჳსითა, რომლითა, ყოვლით, თჳსით, შენითა, ამით, მისითა, ყოვლითა</li>
      <li>PROPN: ეგჳპტით, ქრისტესითა, ქრისტჱსითა, იერუსალჱმით, ბარლაამისითა, ედემისაჲთ, ედომით, თემანით, ისრაელითა, ლიბანით</li>
      <li>VERB-Part: გამოუთქუმელითა, აღმოსავალით, განჴორციელებულისა, წარწერილითა</li>
      <li>VERB-Vnoun: ყოფითა, შუებითა, დამარხვითა, მოსლვითა, ყოფით, შეცვალებითა, ხილვით, აღვსებითა, ბრძოლითა, გამოსახვითა</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>ADJ: ნეტარი, წმიდაჲ, წმიდა, დიდი, სათნო, ბოროტი, ესევითარი, სხუაჲ, საკჳრველი, წმიდანი</li>
      <li>ADJ-Part: პატივცემული, აღებული, აღმომავალი, განათლებულნი, განგებული, განმწმედელი, განყოფილი, დაფარული, ლტოლვილნი, მდრტჳნავი</li>
      <li>ADP: ებრ, მდე, მდი</li>
      <li>NOUN: ჯუარი, სიტყუაჲ, ღმერთი, უფალი, კაცი, ჴმაჲ, ღმრთისაჲ, დიდებაჲ, სული, სახელი</li>
      <li>NUM: ერთი, პირველი, მეორე, პირველ, პირველნი, ორნი, ორივე, შჳდნი, ერთისაჲ, მეორენი</li>
      <li>PRON: იგი, ესე, რომელი, შენ, რომელნი, რაჲ, იგინი, მისი, შენი, ჩუენ</li>
      <li>PROPN: ქრისტე, ბარლაამ, მარიამ, მოსე, ღმერთი, თეოფილე, იესუ, პავლე, გრიგოლი, ნეკტარი</li>
      <li>VERB-Part: მყოფნი, დაბადებულნი, მქონებელი, შეკრებული, განკუეთადი, დაკლული, დამტევებელნი, დასხმულნი, მდგომარე, მიღებული</li>
      <li>VERB-Vnoun: ყოფაჲ, ვნებაჲ, მიღებაჲ, მორჩილებაჲ, აღდგომაჲ, აღრიცხუვაჲ, აღსრულებაჲ, განპებაჲ, დაწყებაჲ, მოსპოლვაჲ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Voc
    <ul>
      <li>ADJ: სათნოო, დიდებულო, მპყრობელო, საკჳრველო, საყუარელნო, ყოვლისამპყრობელო, ჭეშმარიტო, აღსაბეჭდველო, ახალნო, ახალო</li>
      <li>ADJ-Part: შობილო</li>
      <li>NOUN: უფალო, ღმერთო, მამაო, შვილნო, ძმანო, სიტყუაო, სძალო, ღმრთისაო, ჯუარო, ასულო</li>
      <li>PRON: ჩემო, ჩუენდამო, ჩუენო, ჩემნო, ჩუენისაო, შენ, შენდამო, ჩვენო</li>
      <li>PROPN: ისრაილისაო, იერუსალიმ, იერუსალჱმ, ისრაჱლ, აჰრონისო, ბეთლემო, დავითისო, თემან, იაკობისო, იესესო</li>
      <li>VERB-Part: მიმადლებულო, მოქმნილო, დასხმულო, მიმოგანრთხმულო, მოსწავებულო, შემზადებულო, შემწყნარებელო</li>
      <li>VERB-Vnoun: ცხორებაო</li>
    </ul>
  </li>
</ul>



<h3>Degree and Polarity</h3>


<ul>
  <li><a>Degree</a></li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADJ: კეთილად, წმიდათა, წმიდისა, ნეტარი, წმიდასა, წმიდაჲ, დიდისა, კერძო, წმიდამან, ღირს</li>
      <li>ADJ-Part: პატივცემული, აღებული, აღმომავალი, აღსრულებულთა, აღსრულებულსა, გამოცდილ, განათლებულნი, განგებული, განმზადებულსა, განმწმედელი</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sup
    <ul>
      <li>ADJ: უზეშთაეს, უმჯობეს, უმჯობესისა, უსაკჳრველეს, უაღრესი, უდარესი, უდიდებულეს, უმაღლესად, უმეტესი, უმცირეს</li>
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
      <li>AUX: არს, არიან, ხარ, იყო, იყვნენ, ვარ, იყვნეს, ვართ, არსა, იყავნ</li>
      <li>AUX-Fin: არს, არიან, ხარ, იყო, იყვნენ, ვარ, იყვნეს, ვართ, იყავნ, არსა</li>
      <li>VERB: გიხაროდენ, იტყჳს, აქუნდეს, ვიტყჳ, ეტყოდა, ეწოდების, ამაღლდების, იტყოდა, უჴმს, აქუნდა</li>
      <li>VERB-Fin: გიხაროდენ, იტყჳს, აქუნდეს, ვიტყჳ, ეტყოდა, ეწოდების, ამაღლდების, იტყოდა, უჴმს, აქუნდა</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Iter
    <ul>
      <li>AUX-Fin: არნ, არიედ, არნა, იქმნებიედ</li>
      <li>VERB-Fin: ჰრქჳან, უწოდიან, გეშინინ, იპოვნიან, აბრალებნ, აღვლიან, აყუედრებდის, გამოეცხადოს, გამოვალნ, გარდავჰჴედით</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Perf
    <ul>
      <li>AUX-Fin: იყო, იქმნა, იყოს, იქმნეს, ყო, იქმნნეს, იქმნენ, იქმენინ, იქმნებიან, ყოს</li>
      <li>VERB: თქუა, იქმნა, ჰრქუა, იხილა, განიკუეთენ, მიეცა, მისცა, მოვიდეს, გესმეს, იხილე</li>
      <li>VERB-Fin: თქუა, იქმნა, ჰრქუა, იხილა, განიკუეთენ, მიეცა, მისცა, მოვიდეს, გესმეს, იხილე</li>
      <li>VERB-Part: ქმნილ, ქმნილნი, ბრძანებულ, დადგინებადსა, დასჯილ, ქმნილი, ქმნილსა, შეწყნარებულ, ცხორებულ</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: იქმენინ, იყავნ, იყვენით, იქმნებოდის, იყავ, ექმნენით, ეყავნ, იქმნებოდინ, იქმოდეთ, მეყავ</li>
      <li>VERB-Fin: გიხაროდენ, განიკუეთენ, იხილე, ისმინე, მიიღე, დასცხერინ, ეც, იქმენ, წარვედ, აღდეგ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX-Fin: არს, იყო, არიან, ხარ, იქმნა, ყო, ვარ, იყვნეს, იქმნნეს, იყვნენ</li>
      <li>VERB: თქუა, იტყჳს, იქმნა, ჰრქუა, ვიტყჳ, იხილა, ეტყოდა, მისცა, არს, ეწოდების</li>
      <li>VERB-Fin: თქუა, იტყჳს, იქმნა, ჰრქუა, ვიტყჳ, იხილა, ეტყოდა, მისცა, არს, ეწოდების</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sub
    <ul>
      <li>AUX-Fin: იყოს, იყვნენ, იქმნენ, იქმნეს, ყოს, იყვნეს, ვიყვნეთ, იქმნას, იქმნნეს, იყავნ</li>
      <li>VERB: აქუნდეს, ვთქუა, აგრძნა, გამოჩნდეს, გესმას, ვიქმნნეთ, ვყოთ, იკადროს, მოვიდეს, შევიდეს</li>
      <li>VERB-Fin: აქუნდეს, ვთქუა, აგრძნა, გამოჩნდეს, გესმას, ვიქმნნეთ, ვყოთ, იკადროს, მოვიდეს, შევიდეს</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>AUX-Fin: იყოს, ყოს, იქმნების, იქმნენ, იყავ, იყვნენ, ექმნენით, ვექმნნეთ, ვიქმნნეთ, ვიყვნეთ</li>
      <li>VERB: გიხაროდენ, იხილე, ისმინე, მიიღე, აგრძნა, წარვედ, აქუნდეს, აღდეგ, გამოჩნდეს, გესმას</li>
      <li>VERB-Fin: გიხაროდენ, იხილე, ისმინე, მიიღე, აგრძნა, წარვედ, აქუნდეს, აღდეგ, გამოჩნდეს, გესმას</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: იყო</li>
      <li>VERB: აღამაღლებდა, აღამაღლებდით, განასხმიდა, გარდამოვიდოდა, გეტყოდე, გეტყოდი, ედვა, ესმოდა, ეტყოდეს, ეჩუენებოდა</li>
      <li>VERB-Fin: აღამაღლებდა, აღამაღლებდით, განასხმიდა, გარდამოვიდოდა, გეტყოდე, გეტყოდი, ედვა, ესმოდა, ეტყოდეს, ეჩუენებოდა</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX-Fin: იყო, იქმნა, იყვნენ, ყო, იყვნეს, იქმნნეს, იქმნეს, იქმნებოდის, იყვენით, იყვნიან</li>
      <li>VERB: თქუა, იქმნა, ჰრქუა, იხილა, ეტყოდა, მიეცა, მისცა, იტყოდა, აქუნდა, მიიღო</li>
      <li>VERB-Fin: თქუა, იქმნა, ჰრქუა, იხილა, ეტყოდა, მიეცა, მისცა, იტყოდა, აქუნდა, მიიღო</li>
      <li>VERB-Part: ქმნილ, ქმნილნი, აღრაცხილ, აღსრულებული, განძებულ, დადგინებადსა, დანერგული, დაყენებული, თქუმულად, მიღებული</li>
    </ul>
  </li>
</ul>

<ul>
  <li>PastPerf
    <ul>
      <li>VERB-Fin: განერნენ, გამოეცხადოს, განუმზადებიან, დაეცეს, ებრძანოს, ეგულვოს, ეცნობოს, მიყოფიეს</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pqp
    <ul>
      <li>VERB-Fin: მიგცენ, გამოეკუეთა, დაედვა, დაეპყრნეს, ეპოვა, ეტჳრთა, ეფუცა, ეყო, მიეფარა, მიეღო</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX: არს, არიან, ხარ, იყოს, ვარ, იქმნეს, იყავნ, ვართ, იქმნენ, არნ</li>
      <li>AUX-Fin: არს, არიან, ხარ, იყოს, ვარ, იქმნეს, იყავნ, ვართ, იქმნენ, არნ</li>
      <li>VERB: იტყჳს, ვიტყჳ, განიკუეთენ, არს, ეწოდების, ამაღლდების, უჴმს, ედების, იკურთხევის, აქუნდეს</li>
      <li>VERB-Fin: იტყჳს, ვიტყჳ, განიკუეთენ, არს, ეწოდების, ამაღლდების, უჴმს, ედების, იკურთხევის, აქუნდეს</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Act
    <ul>
      <li>AUX: არს, იყო, იყოს, იყვნენ, ყო, არიან, იყვნეს, იყავნ, ყოს, არსა</li>
      <li>AUX-Fin: არს, იყო, იყოს, იყვნენ, ყო, არიან, იყვნეს, იყავნ, ყოს, არსა</li>
      <li>VERB: თქუა, იტყჳს, ჰრქუა, ვიტყჳ, იხილა, მისცა, ისმინე, აქუნდეს, იტყოდა, იხილე</li>
      <li>VERB-Fin: თქუა, იტყჳს, ჰრქუა, ვიტყჳ, იხილა, მისცა, ისმინე, აქუნდეს, იტყოდა, იხილე</li>
      <li>VERB-Part: მყოფნი, ყოფადთა, გარდასრულისა, მყოფთა, გარდასრულსა, მომავალთა, მქონებელი, მყოფისაჲ, შემოსრულთა, წარსრულთა</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Inv
    <ul>
      <li>VERB-Fin: გიც, მრწამს, შუენის</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Mid
    <ul>
      <li>AUX-Fin: არს, ხარ, არიან, ვარ, არნ, არნა, არსა, ვართ, იყავნ, იყვენით</li>
      <li>VERB: გესმეს, ეტყოდა, მოვიდეს, ესმა, აქუს, აღვიდა, განვიდეს, ეტყოდეს, ვიდოდეთ, მოვედ</li>
      <li>VERB-Fin: გესმეს, ეტყოდა, მოვიდეს, ესმა, აქუს, აღვიდა, განვიდეს, ეტყოდეს, ვიდოდეთ, მოვედ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>AUX-Fin: იქმნა, იყო, იქმნეს, იქმნნეს, იქმნენ, იქმნებიან, იყოს, იქმენინ, იქმნების, იქმნებოდის</li>
      <li>VERB: გიხაროდენ, იქმნა, განიკუეთენ, მიეცა, ეწოდების, ედების, შეკრებულთა, ჴელთდასხმულ, ამაღლდა, იკურთხევის</li>
      <li>VERB-Fin: გიხაროდენ, იქმნა, განიკუეთენ, მიეცა, ეწოდების, ედების, ამაღლდა, იკურთხევის, ამაღლდების, გამოჩნდა</li>
      <li>VERB-Part: შეკრებულთა, ჴელთდასხმულ, ქმნილ, აღწერილთა, დაცვულისა, მოჴსენებულისა, ღმერთშემოსილთა, წერილ, ბრძანებულ, დასხმულთა</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Evident</a></li>
</ul>

<ul>
  <li>Nfh
    <ul>
      <li>PART: ო</li>
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
      <li>PRON: იგი, მას, ესე, მის, ამის, ამას, მან, მათ, მით, ამათ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>PRON: ვინმე, რაჲმე, ვინ, სხუათა, რაჲ, სხუანი, ვიეთმე, ვისმე, მრავალთა, რასმე</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>PRON: რაჲ, ვინ, ვინაჲ, ვის, ვითარი, რა, რაოდენი, რასა, რაჲმცა, რაჲსა</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int,Rel
    <ul>
      <li>PRON: რაჲ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>PRON: არარაჲ, არავის, არარაჲსა, არარად, არავინ, არარაჲთ, არღარავინ, ვერარა, ვერარაჲ, ვერვინაჲთ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>PRON: მათ, შენ, ჩუენ, მის, მე, მისი, ჩუენისა, თქუენ, მისსა, მისისა</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rcp
    <ul>
      <li>PRON: ურთიერთას, ურთიერთარს</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>PRON: რომელი, რომლისა, რომელთა, რომელნი, რომელსა, ვინაჲთ, რომელმან, რომელ, ვინაჲცა, რომლითა</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
      <li>PRON: ყოველთა, ყოვლისა, ყოველნი, ყოველი, ყოველივე, ყოველსა, ყოვლისავე, ყოვლით, თითოეულისა, თითოეულსა</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: ერთი, ორთა, ერთსა, ერთისა, ერთ, ორთავე, ოცდაათთა, ერთმან, ორნი, ათორმეტთა</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>NUM: პირველ, პირველი, პირველისა, მეორე, პირველად, მეორესა, პირველთა, პირველნი, მეოთხისა, პირველვე</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>PRON: მისი, მისსა, მისისა, ჩუენისა, მისთა, შენი, თჳსთა, თჳსისა, თჳსსა, ჩუენ</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>PRON: ჩუენ, მე, ჩუენისა, ჩუენდა, ჩუენთა, ჩუენი, ჩემი, ჩემ, ჩემსა, ჩემდა</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>PRON: შენ, თქუენ, შენი, შენსა, შენისა, თქუენდა, შენნი, შენთა, შენდა, თქუენი</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX: არს, არსა, იყვნეს</li>
      <li>AUX-Fin: არს, იყვნეს</li>
      <li>PRON: იგი, მის, მას, მათ, მან, მისი, მისსა, მისთა, მისისა, მათთა</li>
      <li>VERB: მათდა, უჩუენებდა</li>
      <li>VERB-Fin: მათდა</li>
    </ul>
  </li>
</ul>




<h3>Other Features</h3>


<ul>
  <li><a>AdpType</a>
    <ul>
      <li>Post
        <ul>
          <li>ADP: გან, თჳს, მიერ, შინა, თანა, მიმართ, შორის, მდე, წინაშე, ებრ</li>
          <li>PRON: რომლისა, ამის</li>
          <li>VERB-Vnoun: აღშჱნებისა</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>AdvType</a>
    <ul>
      <li>Cau
        <ul>
          <li>ADV: რად, რადმე, რადღა, რაჲთურთით, რაჲსა, რაჲსათჳსმე</li>
        </ul>
      </li>
      <li>Int
        <ul>
          <li>ADV: ვითარ</li>
        </ul>
      </li>
      <li>Loc
        <ul>
          <li>ADV: ზედა, მუნ, სადა, აქა, წინა, თანა, ეგერა, ესერა, ამიერ, არასადა</li>
        </ul>
      </li>
      <li>Man
        <ul>
          <li>ADV: უკუე, ესრეთ, ყოვლად, ღმრთივ, ვითარ, ოდენ, ფრიად, ეგრეთვე, სრულიად, ესრჱთ</li>
        </ul>
      </li>
      <li>Rel
        <ul>
          <li>ADV: ვითარ, რაჟამს, რაოდენ, ვითარცა, სადა</li>
        </ul>
      </li>
      <li>Tim
        <ul>
          <li>ADV: კუალად, აწ, ჯერ, მარადის, შემდგომად, მეყსეულად, მაშინ, მერმე, ოდეს, მყის</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case[stack]</a>
    <ul>
      <li>Gen
        <ul>
          <li>ADJ: უფროჲსად, ძელისანი, წმიდისაჲთა, საუკუნოსაჲ, უფროჲსისა, ძელისათა, ამპარტავანისაჲ, ბაბილოვნელთაჲსა, ბოროტისათა, გამომეძიებელთაჲთა</li>
          <li>NOUN: ღმრთისაჲ, უფლისაჲ, ღმრთისაჲთა, ეკლესიისათა, კაცთაჲსა, ღმრთისასა, სოფლისაჲ, ღმრთისათა, ცეცხლისაჲ, ჯუარისაჲთა</li>
          <li>NUM: სამთასა, სამთაჲ, ასერგასისთა, ერგასისთა, ერთისაჲ, მეორისაჲ</li>
          <li>PRON: მისისაჲ, შენისაჲ, ჩუენისაჲ, ჩუენთასა, მისთაჲ, მათთასა, ჩემისაჲ, თჳსისაჲ, ყოველთასა, ჩუენისასა</li>
          <li>PROPN: ქრისტესსა, ანკჳრიისამან, იუდაჲსასა, ქრისტესითა, ბაბილონისასა, ისრაილისაო, ქრისტჱსითა, ალექსადრიისაჲ, ალექსანდრიისამან, ანდრიანოპოლისაჲ</li>
          <li>VERB-Part: მყოფისაჲ, განწესებულთასა, განწესებულთაჲ, განჴდილთა, დაბადებულთასა, დამწყებელისაჲ, დაფლულისაჲ, მიყვანებადისანი, მყოფთაჲ, რწმუნებულთაჲ</li>
          <li>VERB-Vnoun: აღდგომისაჲ, განსლვისაჲ, დადგომისაჲ, ზიარებისასა, მოცემისაჲთა, მსახურებისათა, მსახურებისაჲ, ქებისაჲ, ღებისანი, ყოფისასა</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case[stackb]</a>
    <ul>
      <li>Gen
        <ul>
          <li>ADJ: ძელისათასა</li>
          <li>NOUN: ეშმაკისათაჲ, ქუეყანისათაჲ</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>ExtPos</a>
    <ul>
      <li>ADV
        <ul>
          <li>ADJ: შემდგომითი, სულიერად</li>
          <li>ADV: ვითარ, რაჲზომ, დღითი, ვითარცა, ზედა, რავდენ, სადა, მცირედ, უკუანა, ქუეშე</li>
          <li>PART: არა, არცა, ნუ, ცა</li>
          <li>PRON: ყოვლით</li>
        </ul>
      </li>
      <li>PRON
        <ul>
          <li>PRON: რომელი, ვინაჲცა, ვინაჲ, რომელმან, რომელნი, ესე, რომელთა, რაჲ, რომელსა, რავდენი</li>
        </ul>
      </li>
      <li>SCONJ
        <ul>
          <li>CCONJ: ანუ</li>
          <li>SCONJ: ვითარ, ვითარცა, გინა, რაჟამს</li>
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
          <li>PROPN: ბაბილონად, ეგჳპტით, ნიკეას, ბაბილონისასა, ისრაილისაო, კესარია, კოსტანტინოპოლის, ალექსადრიისაჲ, ალექსანდრიისამან, ანდრიანოპოლისაჲ</li>
        </ul>
      </li>
      <li>Prs
        <ul>
          <li>PROPN: ქრისტეს, ქრისტე, ბარლაამ, იესუ, ქრისტესა, ქრისტემან, მარიამ, თეოფილე, ქრისტესსა, ღმერთი</li>
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
          <li>NUM: 13</li>
        </ul>
      </li>
      <li>Georgian
        <ul>
          <li>NUM: 14, ა(1), ბ(2), გ(3), დ(4), ე(5), ვ(6), ზ(7), თ(9), ი(10)</li>
        </ul>
      </li>
      <li>Word
        <ul>
          <li>NUM: პირველ, ერთი, პირველი, პირველისა, ორთა, მეორე, ერთისა, ერთსა, პირველად, ერთ</li>
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
          <li>VERB-Fin: აქუნდა, გამოგჳჩნდა, გუასწავებს, გუნებავს, გუსუროდის, გჳკჳრდეს, ეჩუენოს, ჰრქუეს, აქუნდეს, გამოგეცხადო</li>
        </ul>
      </li>
      <li>Sing
        <ul>
          <li>AUX-Fin: მექმნებიან</li>
          <li>VERB-Fin: ჰრქუა, ეტყოდა, აქუს, ეწოდების, აქუნდეს, ეც, მეშინის, მივსწერ, მიჩნს, სთნდა</li>
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
          <li>VERB-Fin: გევედრები, დათრგუნნეს, დამიტევნა, დაჰჴსნეს, იტყჳ, ყვნეს, ადიდებს, აღანთნა, აღაშენენ, აღმამაღლნეს</li>
        </ul>
      </li>
      <li>Sing
        <ul>
          <li>VERB: თქუა, მისცა, ვიტყჳ, პოვა, მოიღო, ჰყოფს, აქუნდა, აღადგინა, აღვასრულებთ, ვთქუა</li>
          <li>VERB-Fin: თქუა, მისცა, ვიტყჳ, პოვა, მოიღო, ჰყოფს, აქუნდა, აღადგინა, აღვასრულებთ, ვთქუა</li>
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
          <li>AUX-Fin: არიან, იყვნენ, იყვნეს, იქმნნეს, იქმნენ, ვართ, იქმნებიან, იყვენით, იქმნეს, იყვნიან</li>
          <li>VERB-Fin: განიკუეთენ, თქუეს, აღვასრულებთ, განვასაზღვრებთ, ეტყოდეს, ვიტყჳთ, ვიხილეთ, დავიცავთ, ვიდოდეთ, ვისმინეთ</li>
        </ul>
      </li>
      <li>Sing
        <ul>
          <li>AUX-Fin: არს, იყო, ხარ, იყოს, იქმნა, ყო, ვარ, იქმნეს, იყავნ, არნ</li>
          <li>VERB: თქუა, იტყჳს, გიხაროდენ, იქმნა, ჰრქუა, ვიტყჳ, იხილა, აქუნდეს, ეტყოდა, მიეცა</li>
          <li>VERB-Fin: თქუა, იტყჳს, გიხაროდენ, იქმნა, ჰრქუა, ვიტყჳ, იხილა, აქუნდეს, ეტყოდა, მიეცა</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>PartType</a>
    <ul>
      <li>Emp
        <ul>
          <li>ADJ: უფროჲსღა, უფროჲსად, უფროჲს, აწინდელიცა, გუშინდელიცა, მარტივნიცა, მიმხუეჭელნიცა, მოსაგონებელადცა, ნეტარიცა, საზოგადოჲთაცა</li>
          <li>ADP: თჳსცა, განცა, განმე, განვე, გან</li>
          <li>ADV: მერმეცა, ნამდჳლვე, მსგავსადვე, მუნცა, ყოვლადვე, ყოლადვე, შინაგანცა, ადვილადვე, ამიერცა, ვიდრეღა</li>
          <li>AUX-Fin: ხარა</li>
          <li>NOUN: ანგელოზნიცა, მეუღლისადა, სიმაღლეცა, არაჲვე, არგანცა, აღმზრდელიცა, აღსასრულადცა, გამოცხადებითაცა, განჴორციელებისაცა, გოონებანიცა</li>
          <li>NUM: ორთავე, პირველვე, ორივე, პირველადცა, პირველივე, ერთისაცა, ერთიცა, მეორეცა, ორნივე, ორსავე</li>
          <li>PART: ცა, თჳთ, ხოლო, ვითამე, ო, რაჲთამცა</li>
          <li>PRON: ყოველივე, ვინაჲცა, ყოვლისავე, რომელსაცა, რომელნიცა, ყოველსავე, ესეცა, ჩუენცა, რომელთაცა, ამასცა</li>
          <li>PROPN: აპოლინარიცა, დანიელსცა, დიონჳსისნიცა, ესაიცა, იესუჲსიცა, ისააკცა, ისაკისიცა, მოსეცა, ნესტორცა, სარდიკიასცა</li>
          <li>VERB-Fin: დაჰბრკოლდებია, ითქუმისცა</li>
          <li>VERB-Part: ლმობიერქმნილმანცა, სათნოყოფილთაცა, შეწირულიცა</li>
          <li>VERB-Vnoun: აღვსებაჲცა, აღმოსლვასაცა, გამომზრდელცა, განსლვაჲცა, ვედრებაჲცა, მიხედვადცა, ხილვადცა</li>
        </ul>
      </li>
      <li>Neg
        <ul>
          <li>PART: არა, არცა, ვერ, ნუ, ნუცა, ნუუკუე, არღარა, ნუმცა, არღა, არ</li>
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
          <li>AUX-Fin: მექმნებიან</li>
          <li>VERB-Fin: გუასწავებს, გამოგჳჩნდა, გუნებავს, გუსუროდის, გჳკჳრდეს, მეშინის, მიჩნს, გამოგჳცხადებდეს, გამოგჳცხადეს, განგაზრახებ</li>
        </ul>
      </li>
      <li>2
        <ul>
          <li>VERB-Fin: აღმოგიცენოს, გამოგაჩინა, გამოგეცხადო, გამოგივლინოს, განგაჩინა, გაქუს, გაჩუენა, გესმას, გეტყჳ, გეჩუენა</li>
        </ul>
      </li>
      <li>3
        <ul>
          <li>VERB-Fin: ჰრქუა, ეტყოდა, აქუნდა, აქუნდეს, აქუს, ეწოდების, ეჩუენოს, ეც, მივსწერ, მიუგე</li>
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
          <li>VERB: დამიტევნა, მომიგოთ, მრწამს, აღმამაღლნეს, გამომიძიეთ, განგუაახლნა, განმწმიდნეს, გუაკურთხენ, გუაქუნდენ, გუახარებს</li>
          <li>VERB-Fin: დამიტევნა, მომიგოთ, აღმამაღლნეს, გამომიძიეთ, განგუაახლნა, განმწმიდნეს, გუაკურთხენ, გუაქუნდენ, გუახარებს, გჳზიარნა</li>
        </ul>
      </li>
      <li>2
        <ul>
          <li>VERB-Fin: გევედრები, გამცნებს, გხადა, აღგზარდა, აღმიდგინა, გამოგაჩინა, განგაჩინა, გასწავა, გაჩუენა, გესმის</li>
        </ul>
      </li>
      <li>3
        <ul>
          <li>VERB: თქუა, გიხაროდენ, მისცა, ვიტყჳ, პოვა, მოიღო, ჰყოფს, აქუნდა, აღადგინა, აღვასრულებთ</li>
          <li>VERB-Fin: თქუა, გიხაროდენ, მისცა, ვიტყჳ, პოვა, მოიღო, ჰყოფს, აქუნდა, აღადგინა, აღვასრულებთ</li>
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
          <li>AUX-Fin: ვარ, ვართ, ვიქმნენით, ვიყვენით, ვიყვნეთ, ვექმნნეთ, ვიქმენ, ვიქმნე, ვიქმნებით, ვიქმნნეთ</li>
          <li>VERB: ვიტყჳ, მოვიკითხავ, გევედრები, ვჰგონებ, აღვასრულებთ, განვასაზღვრებთ, ვთქუა, ვიტყჳთ, ვიხილეთ, დავიცავთ</li>
          <li>VERB-Fin: ვიტყჳ, მოვიკითხავ, გევედრები, ვჰგონებ, აღვასრულებთ, განვასაზღვრებთ, ვთქუა, ვიტყჳთ, ვიხილეთ, დავიცავთ</li>
        </ul>
      </li>
      <li>2
        <ul>
          <li>AUX-Fin: ხარ, იყვენით, იყავ, ხართ, იქმენ, ექმნენით, იქმოდეთ, იყვნეთ, იყო, მეყავ</li>
          <li>VERB-Fin: გიხაროდენ, ისმინე, გესმეს, იხილე, იქმენ, მიიღე, წარვედ, აღდეგ, ეკრძალენით, ეც</li>
        </ul>
      </li>
      <li>3
        <ul>
          <li>AUX-Fin: არს, იყო, არიან, იყოს, იქმნა, იყვნენ, იქმნეს, იყვნეს, ყო, იქმნნეს</li>
          <li>VERB: თქუა, იტყჳს, იქმნა, ჰრქუა, იხილა, აქუნდეს, განიკუეთენ, ეტყოდა, მიეცა, მისცა</li>
          <li>VERB-Fin: თქუა, იტყჳს, იქმნა, ჰრქუა, იხილა, აქუნდეს, განიკუეთენ, ეტყოდა, მიეცა, მისცა</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>PunctSide</a>
    <ul>
      <li>Fin
        <ul>
          <li>PUNCT: “, !, ), ], -</li>
        </ul>
      </li>
      <li>Ini
        <ul>
          <li>PUNCT: „, (, [</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>PunctType</a>
    <ul>
      <li>Brck
        <ul>
          <li>PUNCT: (, ), [, ]</li>
        </ul>
      </li>
      <li>Colo
        <ul>
          <li>PUNCT: :</li>
        </ul>
      </li>
      <li>Comm
        <ul>
          <li>PUNCT: ,</li>
        </ul>
      </li>
      <li>Dash
        <ul>
          <li>PUNCT: -, –</li>
        </ul>
      </li>
      <li>Excl
        <ul>
          <li>PUNCT: !</li>
        </ul>
      </li>
      <li>Peri
        <ul>
          <li>PUNCT: ., -</li>
        </ul>
      </li>
      <li>Qest
        <ul>
          <li>PUNCT: ?</li>
        </ul>
      </li>
      <li>Quot
        <ul>
          <li>PUNCT: “, „</li>
        </ul>
      </li>
      <li>Semi
        <ul>
          <li>PUNCT: ;</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Subcat</a>
    <ul>
      <li>Intr
        <ul>
          <li>VERB-Fin: მეშინოდა, იშვების, შემოვიღე</li>
        </ul>
      </li>
      <li>Tran
        <ul>
          <li>AUX-Fin: მექმნებიან</li>
          <li>VERB-Fin: ამხილებს, დაწერნა, მიჴსნიან</li>
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
          <li>NOUN: მად, მამა</li>
          <li>SCONJ: ვითარ</li>
          <li>VERB-Fin: ვჰმადლობ</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>VerbType</a>
    <ul>
      <li>Aux
        <ul>
          <li>AUX-Fin: არს, არიან, იყო, იქმნა, ხარ, ყო, იყოს, ვარ, იქმნეს, იყვნეს</li>
          <li>VERB-Fin: აქუს, გაქუს, ვიქმნენით, ყავ, ყვნა, ჰყავ</li>
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
<li>This corpus does not contain auxiliaries.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN-Nom (3)</li>
      <li>VERB--PRON-Erg (1)</li>
      <li>VERB--PRON-Nom (1)</li>
      <li>VERB-Fin--NOUN-Abs (8)</li>
      <li>VERB-Fin--NOUN-Dat (10)</li>
      <li>VERB-Fin--NOUN-Erg (151)</li>
      <li>VERB-Fin--NOUN-Nom (447)</li>
      <li>VERB-Fin--NOUN-Nom-ADP(მიხედვით) (1)</li>
      <li>VERB-Fin--PRON-Dat (47)</li>
      <li>VERB-Fin--PRON-Erg (114)</li>
      <li>VERB-Fin--PRON-Nom (340)</li>
      <li>VERB-Part--NOUN-Nom (32)</li>
      <li>VERB-Part--PRON-Dat (3)</li>
      <li>VERB-Part--PRON-Nom (48)</li>
      <li>VERB-Vnoun--NOUN-Dat (1)</li>
      <li>VERB-Vnoun--NOUN-Nom (2)</li>
      <li>VERB-Vnoun--PRON-Nom (8)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN-Dat (2)</li>
      <li>VERB--NOUN-Nom (2)</li>
      <li>VERB-Fin--NOUN-Abs (28)</li>
      <li>VERB-Fin--NOUN-Dat (217)</li>
      <li>VERB-Fin--NOUN-Dat-ADP(მიმართ) (1)</li>
      <li>VERB-Fin--NOUN-Erg (1)</li>
      <li>VERB-Fin--NOUN-Gen (21)</li>
      <li>VERB-Fin--NOUN-Ins (1)</li>
      <li>VERB-Fin--NOUN-Nom (554)</li>
      <li>VERB-Fin--NOUN-Nom-ADP(გან) (1)</li>
      <li>VERB-Fin--NOUN-Nom-ADP(ნაცვლად) (1)</li>
      <li>VERB-Fin--NOUN-Nom-ADP(შორის) (1)</li>
      <li>VERB-Fin--PRON (3)</li>
      <li>VERB-Fin--PRON-Abs (5)</li>
      <li>VERB-Fin--PRON-Dat (101)</li>
      <li>VERB-Fin--PRON-Gen (4)</li>
      <li>VERB-Fin--PRON-Nom (189)</li>
      <li>VERB-Part--NOUN-Abs (1)</li>
      <li>VERB-Part--NOUN-Dat (5)</li>
      <li>VERB-Part--NOUN-Gen (2)</li>
      <li>VERB-Part--NOUN-Nom (1)</li>
      <li>VERB-Part--PRON-Nom (1)</li>
      <li>VERB-Vnoun--NOUN-Dat (6)</li>
      <li>VERB-Vnoun--NOUN-Nom (2)</li>
      <li>VERB-Vnoun--PRON-Dat (2)</li>
      <li>VERB-Vnoun--PRON-Nom (3)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--PRON-Dat (1)</li>
      <li>VERB-Fin--NOUN-Abs (1)</li>
      <li>VERB-Fin--NOUN-Dat (179)</li>
      <li>VERB-Fin--NOUN-Dat-ADP(შინა) (1)</li>
      <li>VERB-Fin--NOUN-Gen (18)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(თჳს) (1)</li>
      <li>VERB-Fin--NOUN-Nom (4)</li>
      <li>VERB-Fin--PRON (4)</li>
      <li>VERB-Fin--PRON-Dat (201)</li>
      <li>VERB-Fin--PRON-Dat-ADP(თჳს) (1)</li>
      <li>VERB-Fin--PRON-Erg (7)</li>
      <li>VERB-Fin--PRON-Gen (4)</li>
      <li>VERB-Fin--PRON-Nom (8)</li>
      <li>VERB-Part--NOUN-Dat (2)</li>
      <li>VERB-Part--PRON-Dat (5)</li>
      <li>VERB-Vnoun--NOUN-Gen (1)</li>
      <li>VERB-Vnoun--PRON-Dat (2)</li>
      <li>VERB-Vnoun--PRON-Nom (1)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 5 relation subtypes: <a>acl:relcl</a>, <a>advmod:emph</a>, <a>advmod:neg</a>, <a>det:poss</a>, <a>nsubj:pass</a></li>
<li>The following 5 relation types are not used in this corpus at all: <a>expl</a>, <a>aux</a>, <a>clf</a>, <a>list</a>, <a>reparandum</a></li>
</ul>
