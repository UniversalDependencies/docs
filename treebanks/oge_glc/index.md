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
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udoge_glc218)<br />
Download all treebanks: [UD 2.18](/#download)

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




The Old Georgian UD Treebank (UD_Georgian-GLC) serves as the first syntactically annotated corpus of the Old Georgian language. It includes 151 utterances (5809 tokens) randomly selected from the OGLC (Doborjginidze et al. 2013), providing detailed annotations encompassing the grammatical structure and dependencies within the sentences.

The treebank's annotations align with the Universal Dependencies (UD) specifications, allowing for greater consistency and compatibility with other UD treebanks. Although the tokenization and segmentation principles of the GLC differ slightly from those of the UD, the UD_Old_Georgian-GLC follows the UD approach, particularly regarding multiword tokens, to minimize differences.

Morpho-syntactic annotations, as discussed in Lobzhanidze (2022), have been automatically adapted to UD requirements. This includes annotations for lemmas (LEMMA), part-of-speech categories (UPOS; XPOS), morphological features (FEATS), transliteration, and tokenization issues (MISC). Furthermore, heads of words (HEADS), dependency relations (DEPREL), and enhanced dependency graphs (DEPS) were automatically converted and then reviewed and manually corrected.

The current version of the UD_Georgian-GLC treebank includes 151 utterances (sentences) consisting of 5809 tokens. These sentences served as a training set, enriching the treebank and offering a more comprehensive representation of the Old Georgian language. The primary objective is to provide a more comprehensive and representative dataset for training and analysis purposes.


## Acknowledgments

The UD_Georgian-GLC release is based on the data from the Georgian Language Corpus (GLC) developed with the financial support of the Shota Rustaveli National Science Foundation (Project Nos. DP2016_23, LE/17/1-30/13, AR/320/4-105/11, Y-04-10).

Special gratitudes goes to Prof. Dr. Dan Zeman for his invaluable contributions in making the dataset available on GitHub and offering valuable suggestions.

## References

Doborjginidze, N., Lobzhanidze. (2012-2026). Georgian language corpus. See, https://oge.iliauni.edu.ge/. Accessed 18 April 2026.

Doborjginidze, N., Lobzhanidze, I., Mirianashvili, G. (2014). Corpus of Georgian Chronicles. See, http://corpora.iliauni.edu.ge/. Accessed 18 April 2026.

Lobzhanidze, I. (2022). Finite-State Computational Morphology: An Analyzer and Generator for Georgian. Cham: Springer.



# Statistics of UD Old Georgian GLC

## POS Tags

[ADJ](oge_glc-pos-ADJ.html) – [ADP](oge_glc-pos-ADP.html) – [ADV](oge_glc-pos-ADV.html) – [AUX](oge_glc-pos-AUX.html) – [CCONJ](oge_glc-pos-CCONJ.html) – [NOUN](oge_glc-pos-NOUN.html) – [NUM](oge_glc-pos-NUM.html) – [PART](oge_glc-pos-PART.html) – [PRON](oge_glc-pos-PRON.html) – [PROPN](oge_glc-pos-PROPN.html) – [PUNCT](oge_glc-pos-PUNCT.html) – [SCONJ](oge_glc-pos-SCONJ.html) – [VERB](oge_glc-pos-VERB.html) – [X](oge_glc-pos-X.html)

## Features

[AdpType](oge_glc-feat-AdpType.html) – [AdvType](oge_glc-feat-AdvType.html) – [Aspect](oge_glc-feat-Aspect.html) – [Case](oge_glc-feat-Case.html) – [Case[stack]](oge_glc-feat-Case-stack.html) – [Degree](oge_glc-feat-Degree.html) – [ExtPos](oge_glc-feat-ExtPos.html) – [Mood](oge_glc-feat-Mood.html) – [Number](oge_glc-feat-Number.html) – [Number[io]](oge_glc-feat-Number-io.html) – [Number[obj]](oge_glc-feat-Number-obj.html) – [Number[subj]](oge_glc-feat-Number-subj.html) – [NumForm](oge_glc-feat-NumForm.html) – [NumType](oge_glc-feat-NumType.html) – [PartType](oge_glc-feat-PartType.html) – [Person](oge_glc-feat-Person.html) – [Person[io]](oge_glc-feat-Person-io.html) – [Person[obj]](oge_glc-feat-Person-obj.html) – [Person[subj]](oge_glc-feat-Person-subj.html) – [Poss](oge_glc-feat-Poss.html) – [PronType](oge_glc-feat-PronType.html) – [PunctSide](oge_glc-feat-PunctSide.html) – [PunctType](oge_glc-feat-PunctType.html) – [Subcat](oge_glc-feat-Subcat.html) – [Tense](oge_glc-feat-Tense.html) – [VerbForm](oge_glc-feat-VerbForm.html) – [Voice](oge_glc-feat-Voice.html)

## Relations

[acl](oge_glc-dep-acl.html) – [acl:relcl](oge_glc-dep-acl-relcl.html) – [advcl](oge_glc-dep-advcl.html) – [advmod](oge_glc-dep-advmod.html) – [advmod:emph](oge_glc-dep-advmod-emph.html) – [advmod:neg](oge_glc-dep-advmod-neg.html) – [amod](oge_glc-dep-amod.html) – [appos](oge_glc-dep-appos.html) – [case](oge_glc-dep-case.html) – [cc](oge_glc-dep-cc.html) – [ccomp](oge_glc-dep-ccomp.html) – [compound](oge_glc-dep-compound.html) – [conj](oge_glc-dep-conj.html) – [cop](oge_glc-dep-cop.html) – [csubj](oge_glc-dep-csubj.html) – [dep](oge_glc-dep-dep.html) – [det](oge_glc-dep-det.html) – [det:poss](oge_glc-dep-det-poss.html) – [discourse](oge_glc-dep-discourse.html) – [fixed](oge_glc-dep-fixed.html) – [flat](oge_glc-dep-flat.html) – [iobj](oge_glc-dep-iobj.html) – [mark](oge_glc-dep-mark.html) – [nmod](oge_glc-dep-nmod.html) – [nsubj](oge_glc-dep-nsubj.html) – [nsubj:pass](oge_glc-dep-nsubj-pass.html) – [nummod](oge_glc-dep-nummod.html) – [obj](oge_glc-dep-obj.html) – [obl](oge_glc-dep-obl.html) – [parataxis](oge_glc-dep-parataxis.html) – [punct](oge_glc-dep-punct.html) – [root](oge_glc-dep-root.html) – [vocative](oge_glc-dep-vocative.html) – [xcomp](oge_glc-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 151 sentences, 6575 tokens and 6884 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 757 tokens (12%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 43 types of words that contain both letters and punctuation. Examples: კერძო-დიაკონნი, ა(1), ადგილ-ადგილადისა, ბ(2), გ(3), დ(4), დედათ-დიაკონი, დღითი-დღედსა, ე(5), ვ(6), ზ(7), ზედა-მარბეველობისაჲთა, თ(9), თანა-შემატყუებელნი, ი(10), ია(11), იბ(12), იგ(13), იდ(14), იე(15), ივ(16), იზ(17), ით(19), იჱ(18), კ(20), კა(21), კბ(22), კგ(23), კდ(24), კე(25), კერძო-დიაკონთა, კერძო-დიაკონი, კერძო-დიაკონობისა, კერძო-დიაკონობისასა, კერძო-დიაკონსა, კვ(26), კზ(27), კთ(29), კჱ(28), ნათესავითი-ნათესავადმდე, ჟამად-ჟამად, ჟამად-ჟამადთა, ჱ(8)</li>
</ul>

<ul>
<li>This corpus contains 302 multi-word tokens. On average, one multi-word token consists of 2.02 syntactic words.</li>
<li>There are 221 types of multi-word tokens. Examples: ვინაჲთგან, ჯერ-არს, ამისთჳს, მისგან, რომელმან-იგი, ამიერითგან, რომელთა-იგი, ვითარ-იგი, მისთჳს, მათგან, მღდელობისაგან, რომლისათჳს, რომლისათჳსცა, ჴელთ-დასხმისა, ამიერითგანცა, დასისაგანნი, დიაკონთათჳს, ვინაჲცა, თჳსაგან, კანონისაებრ, მათთჳს, მიზეზისათჳს, მოქმედებისაგან, პატივისაგან, რომელნი-იგი, ღმრთისაგან, შემდგომითი-შემდგომად, შეყოფისაგან, ცხად-არს, ჴელ-ყოს, ჴელთ-დასხმაჲ, ადგილ-ეც, ამათგან, ამათთჳს, არიოზისთჳს, აღაპისთჳს, აღმატებადმდე, აღმოცენებულთათჳს, აღრაცხილ-ყოფაჲ, აღრაცხილთათჳს, აღსაარებისათჳს, აღსასრულადმდე, ბუნებათაგან, განგებისათჳს, განკრძალულ-ყოფაჲ, განსაზღვრებისაებრ, განსაკითხაობისაგანცა, განჩინებისაებრ, განჩინებულთაგანისა, განწმედილობისაგან.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 14 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>VERB</a>, <a>X</a></li>
<li>This corpus does not use the following tags: DET, INTJ, SYM</li>
</ul>

<ul>
<li>This corpus contains 23 word types tagged as particles (PART): არა, არარაჲ, არღარა, არღასადა, არცა, არცათუ, არცაღა, არცაღათუ, ვერ, ვითამე, თუ, თჳთ, ნუ, ნუმცა, ნუუკუე, ნუღარამცა, ნუცა, ნუცამცა, რაჲ, რაჲთამცა, რეცა, ცა, ხოლო</li>
</ul>

<ul>
<li>This corpus contains 58 lemmas tagged as pronouns (PRON): ამიერი, არავინ, არარაჲ, არღარავინ, ეგე, ეგევითარი, ერთი, ეს, ესე, ესევითარი, ვიეთი, ვიეთიმე, ვიეთნიმე, ვითარი, ვინ, ვინაჲ, ვინაჲთ, ვინმე, ვინცა, ვისთჳმე, ვისიმე, თავი, თთჳ, თითოეული, თქუენ, თქუენი, თჳსი, იგი, იგინი, ის, მათი, მე, მისი, მრავალი, რა, რათმე, რაოდენი, რაჲ, რაჲმე, რაჲცა, რომელი, სხუა, სხუად, სხუანი, სხუაჲ, სხჳა, სხჳსი, ურთიერთა, უშენი, ყოველთავე, ყოველი, ყოველივე, შენ, შენი, ჩემი, ჩუენ, ჩუენი, ძუელი</li>
</ul>

<ul>
<li>This corpus contains 0 lemmas tagged as determiners (DET): </li>
</ul>

<ul>
</ul>

<ul>
<li>This corpus contains 2 lemmas tagged as auxiliaries (AUX): არის, ყოფა</li>
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
    <li>AUX: არს, იყოს, იყვნენ, იყო, არიან, იქმნა, იქმნეს, იქმენინ, იქმნნეს, იქმნებიან</li>
    <li>VERB: განიკუეთენ, იტყჳს, აქუნდეს, თქუა, უჴმს, განვასაზღვრებთ, ვიტყჳთ, დავიცავთ, დასცხერინ, იკადროს</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>VERB: შეკრებულთა, ჴელთდასხმულ, აღწერილთა, დაცვულისა, მოჴსენებულისა, ქმნილ, ღმერთშემოსილთა, დასხმულთა, დაცვულსა, დაცულსა</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Vnoun
  <ul>
    <li>VERB: ყოფაჲ, ქმნად, ყოფად, აღსაშენებელად, ყოფისა, აღსაარებად, განკუეთასა, განსამტკიცებელად, თქუმად, მსახურებასა</li>
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
      <li>ADJ: წმიდათა, საღმრთოთა, ნეტართა, სამღდელოთა, მსოფლიოთა, საეკლესიოთა, სამოციქულოთა, საღმრთონი, ბუნებითნი, სჯულიერთა</li>
      <li>NOUN: მამათა, ეპისკოპოსთა, ეკლესიათა, ჴელთ, კანონნი, კანონთა, დიაკონთა, მსახურთა, საქმეთა, ეპისკოპოსნი</li>
      <li>NUM: ორთა, ოცდაათთა, ორნი, ათორმეტთა, ათრვამეტთა, ას, ექუსას, ორასთა, შჳდნი, ასერგასისთა</li>
      <li>PRON: მათ, რომელთა, ჩუენ, რომელნი, თჳსთა, ამათ, ყოველთა, ჩუენთა, ჩუენისა, სხუათა</li>
      <li>PROPN: იუსტინიანესთა, კოსტანიტენსთა, კჳრილესთა</li>
      <li>VERB-Part: შეკრებულთა, ღმერთშემოსილთა, აღწერილთა, დასხმულთა, მყოფთა, მყოფნი, პირველთქუმულთა, პირველმოჴსენებულთა, შემოკრებულთა, განჩინებულთა</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: წმიდისა, სათნო, სამეუფოსა, წმიდასა, დიდისა, სამღდელოსა, უზიარებელ, უმჯობესისა, წმიდაჲ, აწინდელისა</li>
      <li>NOUN: ღმრთისა, ეპისკოპოსმან, ქალაქსა, მეფისა, ეკლესიასა, ქმნაჲ, ეპისკოპოსისა, სიტყუაჲ, კრებაჲ, კრებისა</li>
      <li>NUM: მეოთხისა, პირველთა, პირველისა, ერთი, ერთისა, მეათხუთმეტედ, მეათხუთმეტედმდე, მეორე, მეორემან, მეორესა</li>
      <li>PRON: იგი, მის, ამას, ესე, მას, ამის, რომელი, ვინმე, რომელმან, ვინაჲთ</li>
      <li>PROPN: ქრისტეს, თეოფილე, გრიგოლი, იესუ, იუსტინიანეს, არაბიანე, თევდოსის, თეოდორე, კესარია, ნეკტარი</li>
      <li>VERB-Part: დაცვულისა, მოჴსენებულისა, დაცვულსა, დაცულსა, განსაზღვრებულსა, გარდასრულისა, მომპოვნებელმან, მქონებელი, პირველმოჴსენებულისა, სჯულდებულისა</li>
      <li>VERB-Vnoun: ყოფაჲ, ქმნად, ყოფად, აღსაშენებელად, ყოფისა, აღსაარებად, განკუეთასა, განსამტკიცებელად, თქუმად, მსახურებასა</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>ADJ: სამეუფოსა, წმიდასა, სამღდელოსა, უკუანაჲსკნელსა, დიდსა, სამღდელოთა, ახალსა, ბოროტსა, განკრძალულსა, განურღუეველთა</li>
      <li>ADP: შინა, თანა, ზედა, თჳს, მიმართ, მომართ, ქუეშე, თანათა, თანასა, შინ</li>
      <li>NOUN: ქალაქსა, ეკლესიასა, ჟამსა, ადგილსა, ეკლესიისათა, კანონსა, კრებასა, პატივსა, სამღდელოსა, სიტყუასა</li>
      <li>NUM: ათორმეტთა, მეორესა, მესამესა, ორსავე, პირველსა, სამას</li>
      <li>PRON: ამას, მას, მათ, თჳსსა, რომელსა, ჩუენდა, მისდა, რომელსაცა, ყოველთა, ჩუენ</li>
      <li>PROPN: ნიკეას, პეტრეს, ანკჳრიას, ანტიოქიას, აღაპის, ვაღადიოსს, ვაღადისსა, იუსტინიანეს, კართაგენს, კოსტანიტენსთა</li>
      <li>VERB-Part: დაცვულსა, დაცულსა, განსაზღვრებულსა, აღმაშენებელსა, აღმოთქუმულთა, აღრაცხილთა, აღრაცხილსა, განმამტკიცებელსა, განმყოფელსა, განუკრძალველთა</li>
      <li>VERB-Vnoun: განკუეთასა, მსახურებასა, გამორჩევასა, განმრავლებასა, დადგინებასა, დატევებასა, ზიარებასა, ზიარებისასა, მიმთხუევასა, მიქცევასა</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Erg
    <ul>
      <li>ADJ: წმიდამან, ღირსმან, გამოუთქუმელმან, ნეტარი, სამოციქულომან, საღმრთომან, სახიერმან</li>
      <li>NOUN: ეპისკოპოსმან, ღმერთმან, განჩინებამან, დედაქალაქისამან, მეფემან, მსახურმან, განჩინებისამან, დიაკონმან, ერმან, კანონმან</li>
      <li>NUM: მეორემან</li>
      <li>PRON: რომელმან, მან, ჩუენმან, ერთმან, ესე, თითოეულმან, თქუენმან, ყოველმან, შენმან</li>
      <li>PROPN: ანკჳრიისამან, ქრისტემან, ალექსანდრიისამან, ანტიოქიისამან, კოსტანტინეპოლისამან, კოსტანტინოპილისამან, კოსტანტინოპოვლისამან, ქრისტესმან</li>
      <li>VERB-Part: მომპოვნებელმან, აღძრულმან, გამომეძიებელმან, განთავისუფლებულმან, განკრძალულმან, დამდებელმან, ლმობიერქმნილმანცა, მსხდომარემან</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ess
    <ul>
      <li>ADJ: უფროჲსად, განუბნეველად, მოქმედად, ნაკლულევანად, სამადლობელად, უფროჲსადღა, ღირსად, ცხოველსმყოფელად, წარუგებელად, წინააღმდგომად</li>
      <li>ADP: მდე</li>
      <li>NOUN: მღდელად, ბრალობათად, ბრძოლად, დღედმდე, ელვარემყოფელად, ეპისკოპოსად, ერთჴმობად, ზედამდგომელად, ზეცად, თანამკჳდრად</li>
      <li>NUM: მეათხუთმეტედ, მეათხუთმეტედმდე</li>
      <li>PRON: თჳსად, სხუად</li>
      <li>PROPN: ალექსანდრიად, ქრისტედ</li>
      <li>VERB-Part: მისატევებლად, მოცემულად, ქმნილად</li>
      <li>VERB-Vnoun: ქმნად, ყოფად, აღსაშენებელად, აღსაარებად, განსამტკიცებელად, თქუმად, მღდელობად, სწავლად, წინააღსადგომელად, აღმატებად</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>ADJ: წმიდათა, უფროჲსღა, წმიდისა, დიდისა, საღმრთოთა, ნეტართა, უმჯობესისა, აწინდელისა, მსოფლიოთა, საეკლესიოთა</li>
      <li>ADP: მიერ, თჳს, მიმართ, შინა, გან, თჳნიერ, ზედა, თანა, ზე, განნი</li>
      <li>NOUN: მამათა, ღმრთისა, ეპისკოპოსთა, ეკლესიათა, მეფისა, ეპისკოპოსისა, კანონთა, კრებისა, მთავარეპისკოპოსისა, საქმეთა</li>
      <li>NUM: ორთა, ოცდაათთა, მეოთხისა, ათრვამეტთა, ას, ექუსას, ორასთა, პირველთა, პირველისა, ათას</li>
      <li>PRON: მის, მათ, რომელთა, ამის, ჩუენისა, თჳსთა, თჳსისა, ამათ, ვინაჲთ, რომლისა</li>
      <li>PROPN: ქრისტეს, თევდოსის, იუსტინიანეს, იესუ, კოსტანტინეს, კოსტანტინოპოლის, ალექსადრიისაჲ, ანდრიანოპოლისაჲ, ანკჳრიისაჲ, ანტიოქიისაჲ</li>
      <li>VERB-Part: შეკრებულთა, დაცვულისა, მოჴსენებულისა, ღმერთშემოსილთა, აღწერილთა, დასხმულთა, მყოფთა, პირველთქუმულთა, პირველმოჴსენებულთა, განჩინებულთა</li>
      <li>VERB-Vnoun: ყოფისა, გამოჩინებისა, განტევებისა, დგომისა, თქუმისა, მითხრობისა, მიღებისა, შეყოფისა</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ins
    <ul>
      <li>ADJ: წმიდითა, კანონებრივითა, მაღლითა, სათნო, საღმრთოთა, სწორითა, უმჯობესისაჲთა, ძმებრივითა, წინააღმდგომით, წმიდით</li>
      <li>ADP: გან, განნი, განცა</li>
      <li>NOUN: სიმართლით, კერძო, მიზეზითა, მსახურებით, მსახურებისაჲთა, სულითა, მადლითა, ნებსით, საღმრთოჲთა, სახელითა</li>
      <li>NUM: მეორითა</li>
      <li>PRON: ყოვლით, თჳსით, თჳსითა, ყოვლითა, ამით, ესევითარითა, ვინაჲთ, თქუენითა, თქუენისაჲთა, თჳსისაჲთა</li>
      <li>PROPN: ქრისტესითა</li>
      <li>VERB-Part: განჴორციელებულისა, წარწერილითა</li>
      <li>VERB-Vnoun: ყოფითა, გამოხუმითა, განშორებითა, გარდასლვითა, მოცემისაჲთა, ქცევითა, შედგომითა</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>ADJ: სათნო, უზიარებელ, წმიდაჲ, საღმრთონი, ღირს, შესაძლებელ, ბოროტი, ბუნებითნი, დამჴსნელ, დიდი</li>
      <li>ADP: ებრ</li>
      <li>NOUN: კანონნი, ქმნაჲ, სიტყუაჲ, კრებაჲ, ეპისკოპოსნი, ყოფაჲ, დიაკონი, დიაკონნი, თავი, ხუცესი</li>
      <li>NUM: ორნი, შჳდნი, ერთი, მეორე, ოთხმეოცდახუთნი, ორნივე, პირველი, პირველნი, სამნი</li>
      <li>PRON: იგი, ესე, ვინმე, რომელი, რომელნი, რაჲმე, ჩუენ, ვინ, იგინი, ერთი</li>
      <li>PROPN: თეოფილე, გრიგოლი, არაბიანე, თეოდორე, ნეკტარი, ქრისტე, ამფილოქე, დიოსკორე, იესუ, კესარია</li>
      <li>VERB-Part: მყოფნი, დასხმულნი, მქონებელი, შეკრებული, აღდგომილნი, აღვსებული, აღმოქუმული, აღმსაარებელნი, აღსრულნი, აღწერილნი</li>
      <li>VERB-Vnoun: ყოფაჲ, აღნადგინებსა, დამტკიცებაჲ, დასხმაჲ, დაწესებაჲ, ზიარებაჲ, მიღებაჲ, მოქცევაჲ, მსახურებაჲ, შესლვაჲ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Voc
    <ul>
      <li>NOUN: მეგობარო, ძმანო</li>
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
      <li>ADJ: წმიდათა, წმიდისა, სათნო, დიდისა, წმიდასა, წმიდაჲ, ნეტართა, ღირს, წმიდამან, ბოროტი</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sup
    <ul>
      <li>ADJ: უმჯობესისა, უპირატესთა, უდარესთა, უდარესისა, უდიდესია, უვაღრეს, უვაღრესისა, უმეტესი, უმცირეს, უმჯობესისაჲთა</li>
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
      <li>AUX-Fin: არს, იყვნენ, იყო, არიან, იქმნებოდის, იყავნ, არსა, იყვენით, იყოს, ეყავნ</li>
      <li>VERB-Fin: აქუნდეს, უჴმს, ვიტყჳთ, ჰნებავს, აქუნდენ, აღვიარებთ, ბრძანებს, გევედრები, გუნებავს, ეგნენ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Perf
    <ul>
      <li>AUX-Fin: იყოს, იქმნა, იქმნეს, იქმენინ, იქმნნეს, იქმნებიან, იქმნენ, იქმნების, ქმნას, არს</li>
      <li>VERB-Fin: განიკუეთენ, თქუა, იტყჳს, განვასაზღვრებთ, დასცხერინ, იკადროს, მოვიდეს, დავიცავთ, ასწავეს, განასაზღვრა</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: იქმენინ, იქმნებოდის, იყავნ, იყვენით, ეყავნ, იქმნებოდინ, იქმოდეთ</li>
      <li>VERB-Fin: განიკუეთენ, დასცხერინ, დაეცადენ, ეც, მიეცემოდედ, არწმუნე, აღდგეს, აღმოვედ, აჩუენებდინ, გამოარჩიენით</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX-Fin: არს, იყო, არიან, იქმნა, იყვნენ, იქმნნეს, იქმნებიან, იქმნების, არსა, იქმნებოდის</li>
      <li>VERB-Fin: იტყჳს, თქუა, უჴმს, განვასაზღვრებთ, ვიტყჳთ, დავიცავთ, ჰყოფს, განვაახლებთ, ჰნებავს, ასწავეს</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sub
    <ul>
      <li>AUX-Fin: იყოს, იყვნენ, იქმნეს, იქმნენ, ქმნას, არს, იქმნას, იქმნებიან, იქმნებოდედ, იქმნნეს</li>
      <li>VERB-Fin: აქუნდეს, იკადროს, მოვიდეს, განაჩინოს, განიკუეთოს, განლაღნეს, გრქუას, დაიცვას, იპოოს, მივიდეს</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>AUX-Fin: იქმნების, იყოს</li>
      <li>VERB-Fin: დავიცავთ, განამჴნობენ, განაქარვებენ, განვარდებიან, განვეკრძალნეთ, განიხრწნებიან, გარდასცვალებენ, დავადგინნეთ, დაჰბრკოლდებიან, შევლენ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>VERB-Fin: ვიდოდინ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX-Fin: იყვნენ, იყო, იქმნა, იქმნებოდის, იქმნნეს, იყვენით, იქმნებოდედ, იქმნებოდეს, იქმნებოდინ, იქმოდეთ</li>
      <li>VERB-Fin: თქუა, აქუნდეს, ასწავეს, აქუნდენ, განასაზღვრა, გხადა, ეგულებოდის, ვისწავეთ, ითქუა, იტყოდა</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX-Fin: არს, იყოს, არიან, იქმნეს, იქმენინ, იქმნებიან, იქმნენ, იყავნ, არსა, ქმნას</li>
      <li>VERB-Fin: განიკუეთენ, იტყჳს, უჴმს, განვასაზღვრებთ, ვიტყჳთ, დასცხერინ, იკადროს, მოვიდეს, ჰყოფს, აქუნდეს</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Act
    <ul>
      <li>AUX-Fin: არს, იყოს, იყვნენ, იყო, არიან, იყავნ, არსა, იყვენით, ქმნას, ეყავნ</li>
      <li>VERB-Fin: იტყჳს, აქუნდეს, თქუა, უჴმს, განვასაზღვრებთ, დავიცავთ, დასცხერინ, ვიტყჳთ, იკადროს, მოვიდეს</li>
      <li>VERB-Part: მყოფთა, მყოფნი, გარდასრულისა, მომავალთა, მქონებელი, ყოფადთა, აღდგომილნი, გამომავალნი, განმყოფელსა, განმხრწნელნი</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>AUX-Fin: იქმნა, იქმნეს, იქმენინ, იქმნნეს, იქმნებიან, იქმნებოდის, იქმნენ, იქმნების, ვიქმნებით, იქმნას</li>
      <li>VERB-Fin: განიკუეთენ, განეყენოს, განიკუეთოს, დაეცადენ, ითქუა, იპოოს, იჯმნიან, მიეცემოდედ, ამაღლდეს, აღესრულების</li>
      <li>VERB-Part: შეკრებულთა, ჴელთდასხმულ, აღწერილთა, დაცვულისა, მოჴსენებულისა, ქმნილ, ღმერთშემოსილთა, დასხმულთა, დაცვულსა, დაცულსა</li>
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
      <li>PRON: იგი, ესე, ამას, ამის, ამათ, მას, მათ, მის, იგინი, ეგევითარისა</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>PRON: ვინმე, სხუათა, რაჲმე, ერთი, ერთისა, ვინ, მრავალთა, სხუასა, ვიეთმე, რათმე</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>PRON: ვითარი, ვინ, ვის, რა, რათა, რაოდენისა, რომელი</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>PRON: არავის, არავინ, არარაჲ, არღარავინ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>PRON: მათ, მის, ჩუენ, თჳსთა, მას, ჩუენისა, თჳსისა, ჩუენთა, თჳსსა, ჩუენდა</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rcp
    <ul>
      <li>PRON: ურთიერთას</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>PRON: რომელთა, რომელი, რომელნი, რომელმან, ვინაჲთ, რომლისა, რომელსა, რომელსაცა, რომელნიცა, ვინცა</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
      <li>PRON: ყოველთა, ყოვლისა, ყოვლისავე, ყოველსა, თითოეულსა, ყოველთავე, ყოვლით, თითოეულნი, ყოველთაჲსა, ყოველი</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: ოცდაათთა, ორნი, ათორმეტთა, ათრვამეტთა, ას, ექუსას, ორასთა, ორთა, სამას, შჳდნი</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>NUM: მეოთხისა, პირველთა, პირველისა, ერთი, მეათხუთმეტედ, მეათხუთმეტედმდე, მეორე, მეორემან, მეორესა, მეორითა</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>PRON: თავს</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>PRON: ჩუენ, ჩუენისა, ჩუენთა, ჩუენდა, მე, ჩუენმან, ჩემ, ჩუენცა, ჩუენისასა, ჩუენისაჲ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>PRON: შენ, შენისა, თქუენ, შენსა, შენდა, შენი, თქუენითა, თქუენისაჲთა, თქუენმან, შენთა</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>PRON: თავს, მის</li>
    </ul>
  </li>
</ul>




<h3>Other Features</h3>


<ul>
  <li><a>AdpType</a>
    <ul>
      <li>Post
        <ul>
          <li>ADP: გან, შინა, მიერ, თჳს, თანა, ზედა, მიმართ, თჳნიერ, ებრ, ზე</li>
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
          <li>ADV: ამისთჳს</li>
        </ul>
      </li>
      <li>Loc
        <ul>
          <li>ADV: მუნ, არასადა, ეგერა, აქა, ზემორე, ზემოჲთ, ზეშთა, სადა, სადაცა, სადმე</li>
        </ul>
      </li>
      <li>Man
        <ul>
          <li>ADV: კეთილად, ღმრთივ, ესრეთ, ყოვლად, ეგრეთვე, მხოლოდ, ოდენ, ბოროტად, წმიდად, ამიერ</li>
        </ul>
      </li>
      <li>Rel
        <ul>
          <li>ADV: სადა</li>
        </ul>
      </li>
      <li>Tim
        <ul>
          <li>ADV: უკუე, ჯერ, აწ, რაჟამს, კუალად, პირველად, უწინარეს, მერმეცა, მარადის, მაშინ</li>
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
          <li>ADJ: უფროჲსად, უმჯობესისაჲთა, უფროჲსადღა</li>
          <li>NOUN: ეკლესიისათა, წელიწადთაჲსა, ალექსანდრიელისანი, მსახურებისაჲთა, დედაქალაქისამან, ეკლესიისასა, ეფესელთასა, კაცთასა, მამათანი, მიტროპოლიტისასა</li>
          <li>PRON: თჳსისასა, მათთასა, მისისა, ჩუენისასა, ამათსა, თქუენისაჲთა, თჳსისაჲ, თჳსისაჲთა, მისისაჲ, მრავალთასა</li>
          <li>PROPN: ანკჳრიისამან, ალექსანდრიისამან, ანტიოქიისამან, კოსტანტინეპოლისამან, კოსტანტინოპილისამან, კოსტანტინოპოვლისამან, ქრისტესითა</li>
          <li>VERB-Part: განწესებულთასა</li>
          <li>VERB-Vnoun: ზიარებისასა, მოცემისაჲთა, მსახურებისათა, ყოფისასა</li>
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
          <li>ADJ: შემდგომითი</li>
          <li>ADV: მცირედ</li>
          <li>PART: არა</li>
        </ul>
      </li>
      <li>PRON
        <ul>
          <li>PRON: ესე, რომელმან, რომელთა, ვინაჲ, რომელი, ვინცა, თავს, რაოდენისა, რაჲ, რაჲცა</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumForm</a>
    <ul>
      <li>Georgian
        <ul>
          <li>NUM: ა(1), ბ(2), გ(3), დ(4), ე(5), ვ(6), ზ(7), თ(9), ი(10), ია(11)</li>
        </ul>
      </li>
      <li>Word
        <ul>
          <li>NUM: მეოთხისა, პირველთა, პირველისა, ათორმეტთა, ათრვამეტთა, ერთი, მეათხუთმეტედ, მეათხუთმეტედმდე, მეორე, მეორემან</li>
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
          <li>VERB-Fin: გუნებავს, აქუნდა, გამოგეცხადო, გამოგჳცხადეს, განგჳნათლეს, გუასმიეს, გუაქუნდა, გუთნდა, გჳღირს, გჳჩნდა</li>
        </ul>
      </li>
      <li>Sing
        <ul>
          <li>AUX-Fin: მექმნებიან</li>
          <li>VERB-Fin: აქუნდეს, აღუჩნდეს, გშუენოდა, მეშინის, მიჩნს, სთნდა, უვის, უჩნდა, უჴმდა, უჴმს</li>
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
          <li>VERB-Fin: გევედრები, აღწერნეს, გამოაჩინნენ, განაგებდეს, განანათლნეს, განაშორნა, განაწყვნა, განვჰყრით, განუყოფენ, გჳჩუენნეს</li>
        </ul>
      </li>
      <li>Sing
        <ul>
          <li>VERB-Fin: ჰყოფს, აუწყონ, აღაშფოთებენ, აღგზარდა, აღიყვანა, აღმიდგინა, აღუწოდა, აჩუენებდინ, გამოგაჩინა, გამომიძიეთ</li>
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
          <li>AUX-Fin: იყვნენ, არიან, იქმნნეს, იქმნებიან, იქმნენ, იყვენით, ვიქმნებით, იქმნებოდეს, იქმნებოდინ, იქმოდეთ</li>
          <li>VERB-Fin: განიკუეთენ, განვასაზღვრებთ, ვიტყჳთ, დავიცავთ, განვაახლებთ, ასწავეს, აქუნდენ, აღვიარებთ, დაეცადენ, დავამტკიცებთ</li>
        </ul>
      </li>
      <li>Sing
        <ul>
          <li>AUX-Fin: არს, იყოს, იყო, იქმნა, იქმნეს, იქმენინ, იქმნებოდის, იქმნების, იყავნ, არსა</li>
          <li>VERB-Fin: იტყჳს, აქუნდეს, თქუა, უჴმს, დასცხერინ, იკადროს, ჰყოფს, მოვიდეს, ჰნებავს, ბრძანებს</li>
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
          <li>ADJ: უფროჲსღა, უფროჲსად, უფროჲს, უფროჲსადღა, ძუელსავე, წერილებრივიცა, წმიდისაცა</li>
          <li>ADP: განცა, თჳსცა, გან, განმე</li>
          <li>ADV: მერმეცა, ამიერცა, კუალადცა, მაშინღა, მისდადვე, მსგავსადვე, პირველვე</li>
          <li>NOUN: განჴორციელებისაცა, დაჴსნისაცა, დედაქალაქსაცა, ეპისკოპოსისაცა, ლაოდიკიასცა, მიმართნიცა, მკითხველობასავე, საჭურისთაცა, სჳნიდისსაცა, ქალაქსაცა</li>
          <li>PART: თჳთ, ცა, რაჲთამცა</li>
          <li>PRON: რომელსაცა, რომელნიცა, ჩუენცა, ამასცა, ესევე, ესეცა, რომლისაცა, მათვე, მასვე, სხუათაცა</li>
          <li>PROPN: აპოლინარიცა, დიონჳსისნიცა, ნესტორცა, სარდიკიასცა</li>
          <li>VERB-Part: ლმობიერქმნილმანცა, სათნოყოფილთაცა</li>
        </ul>
      </li>
      <li>Neg
        <ul>
          <li>ADV: არღარა</li>
          <li>PART: არა, არცა, ნუცა, ნუ, ნუმცა, ვერ, ნუუკუე, ნუღარამცა, არარაჲ, არღარა</li>
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
          <li>VERB-Fin: გუნებავს, გამოგჳცხადეს, განგჳნათლეს, გუასმიეს, გუაქუნდა, გუთნდა, გჳღირს, გჳჩნდა, გჳჩნს, გჳჩუენნეს</li>
        </ul>
      </li>
      <li>2
        <ul>
          <li>VERB-Fin: გამოგეცხადო, გშუენოდა</li>
        </ul>
      </li>
      <li>3
        <ul>
          <li>VERB-Fin: ამხილებს, აქუნდა, აქუნდეს, აღუჩნდეს, ესწავოს, ვეყოფი, მოუწოდეს, სთნდა, უბრძანებთ, უვის</li>
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
          <li>VERB-Fin: გამომიძიეთ, გჳწამებს, დამიტევნა, მასწავნა, მიხილნა, მოგუმადლა, მომიგოთ, შეგვედრა</li>
        </ul>
      </li>
      <li>2
        <ul>
          <li>VERB-Fin: გევედრები, აღგზარდა, აღმიდგინა, გამოგაჩინა, გასწავა, გრქუას, გხადა, გხადონ, წარგგრაგნა</li>
        </ul>
      </li>
      <li>3
        <ul>
          <li>VERB-Fin: ჰყოფს, აუწყონ, აღაშფოთებენ, აღიყვანა, აღუწოდა, აღწერნეს, აჩუენებდინ, გამოაჩინნენ, განაგებდეს, განანათლნეს</li>
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
          <li>AUX-Fin: ვარ, ვიქმნებით</li>
          <li>VERB-Fin: განვასაზღვრებთ, ვიტყჳთ, დავიცავთ, განვაახლებთ, აღვიარებთ, გევედრები, დავამტკიცებთ, დავჰბეჭდავთ, ვისწავეთ, აღვწერენით</li>
        </ul>
      </li>
      <li>2
        <ul>
          <li>AUX-Fin: იყვენით, იქმოდეთ, ხარ</li>
          <li>VERB-Fin: არწმუნე, აღემატე, აღმოვედ, გამოარჩიენით, გამოიძიეთ, გამომიძიეთ, განარინე, განჰგუმირე, გეგულებოდის, გიხარინ</li>
        </ul>
      </li>
      <li>3
        <ul>
          <li>AUX-Fin: არს, იყოს, იყვნენ, იყო, არიან, იქმნა, იქმნეს, იქმენინ, იქმნნეს, იქმნებიან</li>
          <li>VERB-Fin: განიკუეთენ, იტყჳს, აქუნდეს, თქუა, უჴმს, დასცხერინ, იკადროს, მოვიდეს, ჰყოფს, ჰნებავს</li>
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
          <li>PUNCT: “</li>
        </ul>
      </li>
      <li>Ini
        <ul>
          <li>PUNCT: „</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>PunctType</a>
    <ul>
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
          <li>PUNCT: –</li>
        </ul>
      </li>
      <li>Peri
        <ul>
          <li>PUNCT: .</li>
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
          <li>VERB-Fin: იშვების, მეშინოდა</li>
        </ul>
      </li>
      <li>Tran
        <ul>
          <li>AUX-Fin: მექმნებიან</li>
          <li>VERB-Fin: ამხილებს, მიჴსნიან</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 2 lemmas as copulas (<a>cop</a>). Examples: ყოფა, არის.</li>
</ul>

<ul>
<li>This corpus does not contain auxiliaries.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB-Fin--NOUN-Dat (1)</li>
      <li>VERB-Fin--NOUN-Erg (16)</li>
      <li>VERB-Fin--NOUN-Gen (1)</li>
      <li>VERB-Fin--NOUN-Nom (72)</li>
      <li>VERB-Fin--NOUN-Nom-ADP(მიერ) (1)</li>
      <li>VERB-Fin--PRON-Dat (3)</li>
      <li>VERB-Fin--PRON-Erg (14)</li>
      <li>VERB-Fin--PRON-Nom (70)</li>
      <li>VERB-Part--NOUN-Nom (7)</li>
      <li>VERB-Part--PRON-Nom (17)</li>
      <li>VERB-Vnoun--PRON-Nom (2)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB-Fin--NOUN-Dat (57)</li>
      <li>VERB-Fin--NOUN-Gen (7)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(გან) (1)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(მიერ) (1)</li>
      <li>VERB-Fin--NOUN-Nom (70)</li>
      <li>VERB-Fin--PRON-Dat (16)</li>
      <li>VERB-Fin--PRON-Erg (1)</li>
      <li>VERB-Fin--PRON-Gen (1)</li>
      <li>VERB-Fin--PRON-Nom (19)</li>
      <li>VERB-Part--NOUN-Dat (5)</li>
      <li>VERB-Part--NOUN-Gen (9)</li>
      <li>VERB-Part--PRON-Nom (1)</li>
      <li>VERB-Vnoun--NOUN-Dat (5)</li>
      <li>VERB-Vnoun--NOUN-Gen (10)</li>
      <li>VERB-Vnoun--NOUN-Nom (2)</li>
      <li>VERB-Vnoun--PRON-Dat (2)</li>
      <li>VERB-Vnoun--PRON-Nom (2)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB-Fin--NOUN-Dat (33)</li>
      <li>VERB-Fin--NOUN-Dat-ADP(შინა) (1)</li>
      <li>VERB-Fin--NOUN-Gen (1)</li>
      <li>VERB-Fin--PRON-Dat (47)</li>
      <li>VERB-Fin--PRON-Dat-ADP(თჳს) (1)</li>
      <li>VERB-Fin--PRON-Gen (2)</li>
      <li>VERB-Fin--PRON-Nom (3)</li>
      <li>VERB-Part--NOUN-Dat (1)</li>
      <li>VERB-Part--PRON-Dat (5)</li>
      <li>VERB-Vnoun--PRON-Dat (1)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 5 relation subtypes: <a>acl:relcl</a>, <a>advmod:emph</a>, <a>advmod:neg</a>, <a>det:poss</a>, <a>nsubj:pass</a></li>
<li>The following 8 relation types are not used in this corpus at all: <a>expl</a>, <a>dislocated</a>, <a>aux</a>, <a>clf</a>, <a>list</a>, <a>orphan</a>, <a>goeswith</a>, <a>reparandum</a></li>
</ul>
