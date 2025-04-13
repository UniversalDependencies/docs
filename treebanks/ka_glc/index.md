---
layout: base
title:  'UD_Georgian-GLC'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Georgian GLC

Language: [Georgian](/ka/index.html) (code: `ka`)<br/>
Family: Kartvelian

This treebank has been part of Universal Dependencies since the UD v2.13 release.

The following people have contributed to making this treebank part of UD: Irina Lobzhanidze.

Repository: [UD_Georgian-GLC](https://github.com/UniversalDependencies/UD_Georgian-GLC)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udka_glc215)<br />
Download all treebanks: [UD 2.15](/#download)

License: CC BY-SA 4.0

Genre: fiction, nonfiction

Questions, comments?
General annotation questions (either Georgian-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Georgian-GLC/issues).
If you want to collaborate, please contact [irina_lobzhanidze&nbsp;(æt)&nbsp;iliauni&nbsp;•&nbsp;edu&nbsp;•&nbsp;ge].
Development of the treebank happens directly in the UD repository, so you may submit bug fixes as pull requests against the dev branch.

| Annotation | Source |
|------------|--------|
| Lemmas | assigned by a program, not checked manually |
| UPOS | assigned by a program, with some manual corrections, but not a full manual verification |
| XPOS | assigned by a program, not checked manually |
| Features | assigned by a program, with some manual corrections, but not a full manual verification |
| Relations | assigned by a program, with some manual corrections, but not a full manual verification |

## Description

The Georgian UD Treebank (UD_Georgian-GLC) is the first syntactically annotated corpus of Georgian, based on a collection of annotated sentences selected from the Georgian Language Corpus (GLC) available at http://corpora.iliauni.edu.ge/ and sentences selected from Wiki in accordance with the 132 scientific fields.



The Georgian UD Treebank (UD_Georgian-GLC) serves as the first syntactically annotated corpus of the Georgian language. It includes 151 utterances randomly selected from the GLC (Doborjginidze et al. 2013), providing detailed annotations encompassing the grammatical structure and dependencies within the sentences.

The treebank's annotations align with the Universal Dependencies (UD) specifications, allowing for greater consistency and compatibility with other UD treebanks. Although the tokenization and segmentation principles of the GLC differ slightly from those of the UD, the UD_Georgian-GLC follows the UD approach, particularly regarding multiword tokens, to minimize differences.

Morpho-syntactic annotations, as discussed in Lobzhanidze (2022), have been automatically adapted to UD requirements. This includes annotations for lemmas (LEMMA), part-of-speech categories (UPOS; XPOS), morphological features (FEATS), transliteration, and tokenization issues (MISC). Furthermore, heads of words (HEADS), dependency relations (DEPREL), and enhanced dependency graphs (DEPS) were automatically converted and then reviewed and manually corrected.

The current version of the UD_Georgian-GLC treebank includes 151 utterances (sentences) or 2123 tokens and 3013 sentences or 44030 tokens from Wikipedia arranged in accordance with the 131 scientific domains. These sentences served as a training set, enriching the treebank and offering a more comprehensive representation of the Georgian language. The primary objective is to provide a more comprehensive and representative dataset for training and analysis purposes.

## Acknowledgments

The UD_Georgian-GLC release is based on the data from the Georgian Language Corpus (GLC) developed with the financial support of the Shota Rustaveli National Science Foundation (Project Nos. DP2016_23, LE/17/1-30/13, AR/320/4-105/11, Y-04-10).

Special gratitudes goes to Prof. Dr. Stavros Skopeteas from the University of Göttingen for his support and valuable comments on the initial data of the UD_Georgian-GLC treebank, Prof. Dr. Benjamin Roth from the University of Vienna for his feedback concerning the training dataset of the UD_Georgian-GLC treebank and to Prof. Dr. Dan Zeman for his invaluable contributions in making the dataset available on GitHub and offering valuable suggestions.

## References
Doborjginidze, N., Lobzhanidze, I., Gunia, I. (2012). Georgian language corpus. See, http://corpora.iliauni.edu.ge/. Accessed 15 July 2023.

Doborjginidze, N., Lobzhanidze, I., Mirianashvili, G. (2014). Corpus of Georgian Chronicles. See, http://corpora.iliauni.edu.ge/. Accessed 15 July 2023.

Lobzhanidze, I. (2022). Finite-State Computational Morphology: An Analyzer and Generator for Georgian. Cham: Springer.


# Statistics of UD Georgian GLC

## POS Tags

[ADJ](ka_glc-pos-ADJ.html) – [ADP](ka_glc-pos-ADP.html) – [ADV](ka_glc-pos-ADV.html) – [AUX](ka_glc-pos-AUX.html) – [CCONJ](ka_glc-pos-CCONJ.html) – [INTJ](ka_glc-pos-INTJ.html) – [NOUN](ka_glc-pos-NOUN.html) – [NUM](ka_glc-pos-NUM.html) – [PART](ka_glc-pos-PART.html) – [PRON](ka_glc-pos-PRON.html) – [PROPN](ka_glc-pos-PROPN.html) – [PUNCT](ka_glc-pos-PUNCT.html) – [SCONJ](ka_glc-pos-SCONJ.html) – [SYM](ka_glc-pos-SYM.html) – [VERB](ka_glc-pos-VERB.html) – [X](ka_glc-pos-X.html)

## Features

[Abbr](ka_glc-feat-Abbr.html) – [AdpType](ka_glc-feat-AdpType.html) – [AdvType](ka_glc-feat-AdvType.html) – [Animacy](ka_glc-feat-Animacy.html) – [Aspect](ka_glc-feat-Aspect.html) – [Case](ka_glc-feat-Case.html) – [Degree](ka_glc-feat-Degree.html) – [Evident](ka_glc-feat-Evident.html) – [Foreign](ka_glc-feat-Foreign.html) – [Mood](ka_glc-feat-Mood.html) – [NameType](ka_glc-feat-NameType.html) – [Number](ka_glc-feat-Number.html) – [Number[io]](ka_glc-feat-Number-io.html) – [Number[obj]](ka_glc-feat-Number-obj.html) – [Number[subj]](ka_glc-feat-Number-subj.html) – [NumForm](ka_glc-feat-NumForm.html) – [NumType](ka_glc-feat-NumType.html) – [PartType](ka_glc-feat-PartType.html) – [Person](ka_glc-feat-Person.html) – [Person[io]](ka_glc-feat-Person-io.html) – [Person[obj]](ka_glc-feat-Person-obj.html) – [Person[subj]](ka_glc-feat-Person-subj.html) – [Poss](ka_glc-feat-Poss.html) – [PronType](ka_glc-feat-PronType.html) – [PunctType](ka_glc-feat-PunctType.html) – [Subcat](ka_glc-feat-Subcat.html) – [Tense](ka_glc-feat-Tense.html) – [VerbForm](ka_glc-feat-VerbForm.html) – [Voice](ka_glc-feat-Voice.html)

## Relations

[acl](ka_glc-dep-acl.html) – [acl:relcl](ka_glc-dep-acl-relcl.html) – [advcl](ka_glc-dep-advcl.html) – [advmod](ka_glc-dep-advmod.html) – [advmod:lmod](ka_glc-dep-advmod-lmod.html) – [amod](ka_glc-dep-amod.html) – [appos](ka_glc-dep-appos.html) – [aux](ka_glc-dep-aux.html) – [case](ka_glc-dep-case.html) – [cc](ka_glc-dep-cc.html) – [ccomp](ka_glc-dep-ccomp.html) – [compound](ka_glc-dep-compound.html) – [conj](ka_glc-dep-conj.html) – [cop](ka_glc-dep-cop.html) – [csubj](ka_glc-dep-csubj.html) – [dep](ka_glc-dep-dep.html) – [det](ka_glc-dep-det.html) – [det:poss](ka_glc-dep-det-poss.html) – [discourse](ka_glc-dep-discourse.html) – [expl](ka_glc-dep-expl.html) – [fixed](ka_glc-dep-fixed.html) – [flat](ka_glc-dep-flat.html) – [flat:foreign](ka_glc-dep-flat-foreign.html) – [flat:name](ka_glc-dep-flat-name.html) – [iobj](ka_glc-dep-iobj.html) – [mark](ka_glc-dep-mark.html) – [nmod](ka_glc-dep-nmod.html) – [nsubj](ka_glc-dep-nsubj.html) – [nsubj:outer](ka_glc-dep-nsubj-outer.html) – [nsubj:pass](ka_glc-dep-nsubj-pass.html) – [nummod](ka_glc-dep-nummod.html) – [obj](ka_glc-dep-obj.html) – [obl](ka_glc-dep-obl.html) – [obl:tmod](ka_glc-dep-obl-tmod.html) – [orphan](ka_glc-dep-orphan.html) – [parataxis](ka_glc-dep-parataxis.html) – [punct](ka_glc-dep-punct.html) – [root](ka_glc-dep-root.html) – [xcomp](ka_glc-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 3164 sentences, 56174 tokens and 60173 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 9789 tokens (17%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 473 types of words that contain both letters and punctuation. Examples: ბერძნ., ერთ-ერთი, სასოფლო-სამეურნეო, ძვ., ინგლ., ლათ., მაგ., ე.წ., სხვ., წ., ა.შ, ერთ-ერთ, ა., ა.შ., ი., ე.ი., სამეცნიერო-კვლევითი, გ., დნმ-ის, ს., ფიზიკურ-გეოგრაფიული, 30-იან, დ., კ., რ., VI-ის, ვ., ზოოტექნიკურ-სავეტერინარო, მ., წწ., 1960-იან, აშშ-, აშშ-ის, სამეცნიერო-კვლევით, ფიზიკურ-ქიმიურ, ჯ., ჰ., I-ის, XVI-XVII, ახ., ბ., დაახლ., ერთ–ერთი, თსუ-, ისტორიულ-ეთნოგრაფიული, იხ., ლ., მოვლა-მოყვანის, მტკვარ-არაქსის, ნ.</li>
</ul>

<ul>
<li>This corpus contains 3969 multi-word tokens. On average, one multi-word token consists of 2.01 syntactic words.</li>
<li>There are 2163 types of multi-word tokens. Examples: საქართველოში, წლებში, ყველაზე, განმავლობაში, საუკუნეში, მიზანია, რომელშიც, როგორიცაა, საფუძველზე, დარგია, პერიოდში, ტერიტორიაზე, შემთხვევაში, წლიდან, პროცესში, დაკავშირებულია, საუკუნეებში, დარგში, დასაწყისში, შესაძლებელია, შესაძლოა, მასში, სამყაროში, ამოცანაა, მსოფლიოში, ქვეყანაში, წლებიდან, ამასთან, განვითარებაში, ერთმანეთთან, თავიდან, ორგანიზმში, როგორებიცაა, სისტემაში, სფეროში, დროში, მანძილზე, სივრცეში, ფარგლებში, ცნობილია, არაა, აღსანიშნავია, ბაზაზე, დროიდან, ზედაპირზე, პირობებში, საგანია, აუცილებელია, ბუნებაში, დონეზე.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 16 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a>, <a>X</a></li>
<li>This corpus does not use the following tags: DET</li>
</ul>

<ul>
<li>This corpus contains 13 word types tagged as particles (PART): ალბათ, არ, არა, არც, აღარ, ვერ, ვერც, თურმე, კი, მაინც, ო, რა, ხომ</li>
</ul>

<ul>
<li>This corpus contains 73 lemmas tagged as pronouns (PRON): ამათი, ამგვარი, ამდენი, არა, არავინ, არაფერი, არცერთი, ასეთი, ერთ-ერთი, ერთადერთი, ერთგვარი, ერთერთი, ერთი, ერთიმეორე, ერთმანეთი, ეს, ეს(ე), ესა, ესე, ესენი, ვინ, ვინმე, ვისი, ზოგი, ზოგიერთი, თავად, თავი, თავიანთი, თავისი, თვით, თვითონ, თითოეული, თქვენ, იგი, იგინი, იმათი, იმდენი, იმისი, ის, ის(ი), ისეთი, ისი, ისინი, მათ, მათი, მე, მისი, რა, რაიმე, რამაც, რამდენი, რამდენიმე, რამე, რამოდენიმე, რანაირი, რაღაც, რითი, რისი, როგორ, როგორი, რომელი, რომელიც, რომლებიც, სხვა, ურთიერთი, ყველა, ყველაფერი, ყოველი, ყოველივე, შენ, ჩემი, ჩვენ, ჩვენი</li>
</ul>

<ul>
<li>This corpus contains 0 lemmas tagged as determiners (DET): </li>
</ul>

<ul>
</ul>

<ul>
<li>This corpus contains 2 lemmas tagged as auxiliaries (AUX): არის, უნდა</li>
</ul>

<ul>
</ul>

<ul>
<li>There are 2 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>VERB: დანალექი, ასახული, დამუხტული, დამზადებული, სარწყავი, წამკითხავი, წამყვან, არაევკლიდური, გარემოსდაცვითი, დამსახურებული</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Vnoun
  <ul>
    <li>VERB: გამოსხივების, დარაიონება, გამოსხივებას, დაგეგმარების, დაკრისტალების, დაპროექტებისა, მოკვლევისა, მორწყვის, შეკავშირების, შესიტყვება</li>
  </ul>
  </li>
</ul>

<h3>Nominal Features</h3>



<ul>
  <li><a>Animacy</a></li>
</ul>

<ul>
  <li>Anim
    <ul>
      <li>NOUN: ადამიანის, საზოგადოების, ცხოველთა, ადამიანთა, საზოგადოება, ადამიანი, ავტორი, ხალხის, ცხოველების, მეცნიერმა</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Inan
    <ul>
      <li>NOUN: წელს, მეცნიერება, საუკუნის, დარგი, განვითარების, დედამიწის, დროს, სისტემა, წლის, ტერმინი</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: თავიანთ, საშუალებით, საწყისები, უკანასკნელთა, უსაფრთხოების, ძველთა, დაინტერესებულნი, მწოველები, ნაშრომები, სახელმწიფოები</li>
      <li>NOUN: წლებ, მცენარეთა, მეცნიერებათა, პროცესების, ქანების, ცხოველთა, მეთოდების, ადამიანთა, პროცესებს, დაავადებათა</li>
      <li>NUM: მე-3-4, პირველთაგანი</li>
      <li>PRON: მათ, რომლებიც, მათი, რომელთა, ისინი, ჩვენ, რომელთაც, რომლებსაც, ჩვენი, სხვათა</li>
      <li>PROPN: კლარკები, ოსმანთა, ალდეჰიდების, ანდრონიკაშვილების, ბრუნების, ენეადები, ვედები, თერგდალეულთა, თურმანიძეთა, იაგუაშვილები</li>
      <li>VERB-Part: დამუხტულებს, მონაცემების, ნამზადების, ნაწევები, ქსოვილების, ჩანაწერების</li>
      <li>VERB-Vnoun: გამოსხივებები, განხრების, დაძაბვები, შესიტყვებებად, ჩადაბლებებისა</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: სხვადასხვა, საერთაშორისო, ქიმიური, დიდი, თანამედროვე, ძირითადი, სამეცნიერო, ახალი, ფიზიკური, სახელმწიფო</li>
      <li>AUX: ა</li>
      <li>NOUN: წელს, მეცნიერება, საუკუნის, ადამიანის, დარგი, განვითარების, დედამიწის, დროს, სისტემა, წლის</li>
      <li>NUM: პირველი, მეორე, ორი, ერთი, სამი, პირველ, ერთ, ბევრი, ორ, ხუთი</li>
      <li>PRON: რომელიც, სხვა, ამ, მისი, ყველა, იგი, ეს, იმ, მის, მას</li>
      <li>PROPN: საქართველოს, საქართველო, თბილისის, ალექსანდრე, ევროპა, აზერბაიჯანის, გიორგი, ამერიკის, ვახტანგ, თბილის</li>
      <li>VERB-Part: დანალექი, ასახული, დამუხტული, დამზადებული, სარწყავი, წამკითხავი, წამყვან, არაევკლიდური, გარემოსდაცვითი, დამსახურებული</li>
      <li>VERB-Vnoun: გამოსხივების, დარაიონება, გამოსხივებას, დაგეგმარების, დაკრისტალების, დაპროექტებისა, მოკვლევისა, მორწყვის, შეკავშირების, შესიტყვება</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>ADJ: სხვადასხვა, თანამედროვე, ქიმიურ, ძველ, ზოგად, ფიზიკურ, ცოცხალ, ახალ, მრავალ, საერთაშორისო</li>
      <li>ADP: ში, ზე, თან, შორის, შიც, შუა, ზეც, თანავე, ზევე, თანაც</li>
      <li>NOUN: წელს, დროს, წლებ, საუკუნე, განმავლობა, საფუძველ, პერიოდ, შემთხვევა, პროცეს, ტერიტორია</li>
      <li>NUM: მეორე, ერთ, პირველ, ორ, ბევრ, ათას, მესამე, ოთხ, მილიარდ, სამ</li>
      <li>PRON: მათ, მას, რომლის, სხვა, რომელსაც, ყველა, ამ, რომელ, იმ, მის</li>
      <li>PROPN: საქართველო, ევროპა, თბილის, საქართველოს, გერმანია, ამერიკა, რუსეთ, საბერძნეთ, არისტოტელეს, ბაბილონ</li>
      <li>VERB-Part: წამყვან, საცდელ, წამყვანი, ამღერებულ, გაურეცხავ, დამდეგს, დამლევს, დამუხტულ, დამუხტულებს, დაუსწრებელ</li>
      <li>VERB-Vnoun: გამოსხივებას, ამონთხევისას, გადახურება, გადმოკვეთისას, გამოდენას, გამოდნობას, განმუხტვისას, დაგზავნას, მონელებას, შეჯიბრებას</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Erg
    <ul>
      <li>ADJ: გერმანელმა, რუსმა, ამერიკელმა, ინგლისელმა, არნახულმა, აღიარებულმა, ახალმა, ბიოფარმულმა, ბირთვულმა, ბიჰევიორისტულმა</li>
      <li>NOUN: მეცნიერმა, განვითარებამ, მექანიკამ, ქიმიკოსმა, გამოყენებამ, ფიზიკოსმა, ადამიანმა, ასტრონომმა, აღმოჩენებმა, გამოგონებამ</li>
      <li>NUM: პირველმა, VI-მ</li>
      <li>PRON: მან, რომელმაც, ამ, რამაც, მანვე, მათ, ამან, მე, მისმა, რამ</li>
      <li>PROPN: ალექსანდრე, ივანე, ჯონ, ანტონ, ბარიმ, გოეთემ, გრიგორ, დე, იოზეფ, ლაისტერმა</li>
      <li>VERB-Part: გახშირებულმა, დისკრეტულმა</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ess
    <ul>
      <li>ADJ: დამოუკიდებელ, უმთავრესად, ბოლო, თანამედროვე, ისტორიულად, მეტად, უმეტესად, ძირითად, ახლად, ბუნებრივად</li>
      <li>ADP: მდე, დმი, დან</li>
      <li>NOUN: შედეგად, მაგალითად, საფუძვლად, მეცნიერებად, მიზნად, დღე, დაწყება, ფუძემდებლად, წლება, დისციპლინად</li>
      <li>NUM: პირველ, ორ, ერთ, ათასა, მეორე, პირველად, 1859-1870-, 300-, 500-, ბევრად</li>
      <li>PRON: ერთ-ერთ, თავად, ასეთ, სხვა, ერთ, ერთადერთ, თავადვე, იმ, რამდენიმე, რანაირად</li>
      <li>PROPN: ანგსტრემა, ინდოეთა</li>
      <li>VERB-Part: ასაჭრელად, დამუხტულ</li>
      <li>VERB-Vnoun: შესიტყვებებად</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>ADJ: სხვადასხვა, ქიმიური, საერთაშორისო, ახალი, მსოფლიო, ისტორიული, ფიზიკური, ქართული, თანამედროვე, სამეცნიერო</li>
      <li>ADP: თვის, გან, შესახებ, მიერ, გამო, მიმართ, კენ, გარდა, გამოც, განაც</li>
      <li>NOUN: საუკუნის, ადამიანის, განვითარების, დედამიწის, წლის, სამართლის, ხელოვნების, ენის, კვლევის, მეურნეობის</li>
      <li>NUM: მეორე, პირველი, ორი, ერთი, სამი, VI-ის, ხუთი, I-ის, მეოცე, ათასი</li>
      <li>PRON: მისი, ამ, მათი, სხვა, მის, იმ, მათ, ყველა, რომელთა, ერთი</li>
      <li>PROPN: საქართველოს, თბილისის, აზერბაიჯანის, ამერიკის, კავკასიის, ვახტანგ, ნიუტონის, ალექსანდრე, ევროპის, კონფუცის</li>
      <li>VERB-Part: დანალექი, დამუხტული, სარწყავი, დაუსწრებელი, საკვები, ამომწყდარი, გადაშენებული, გაკუთხული, გამთბარი, გამომუშავებული</li>
      <li>VERB-Vnoun: გამოსხივების, დაგეგმარების, დაკრისტალების, დაპროექტებისა, მოკვლევისა, მორწყვის, შეკავშირების, ცვეთის, აგეგმვის, აგეგმვისა</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ins
    <ul>
      <li>ADJ: ფართო, სხვადასხვა, უძველესი, ბერძნული, სპეციალური, ფიზიკური, ქიმიური, ბოლო, გარკვეული, საერთო</li>
      <li>ADP: დან, დანვე, დანაც</li>
      <li>NOUN: მიზნით, საშუალებით, წლი, სახით, გაგებით, გამოყენებით, განსხვავებით, დაკავშირებით, შედარებით, წლები</li>
      <li>NUM: ერთი, ორი, სამი, პირველი, 103-, 199-, 20-, 2000–, 800-, მეორე</li>
      <li>PRON: ამ, სხვა, იმ, თავისი, ამით, ერთი, ისეთი, მისი, იმით, სხვ</li>
      <li>PROPN: ამიერკავკასიით, აფრიკი, აღმოსავლეთ, აღმოსავლეთით, ევროპი, რუსეთი</li>
      <li>VERB-Part: შესანიშნავი, დამლევი</li>
      <li>VERB-Vnoun: მორწყვით, მოძრაობით, ნაღველით, შერევით, შესუნთქვით, ჩანერგვით</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>ADJ: ძირითადი, დიდი, დაკავშირებული, მნიშვნელოვანი, მთავარი, საერთაშორისო, ცნობილი, ახალი, სამეცნიერო, ქიმიური</li>
      <li>ADP: ვით</li>
      <li>NOUN: მეცნიერება, დარგი, ტერმინი, ნაწილი, მნიშვნელობა, სამართალი, სისტემა, მიზანი, ისტორია, მოძღვრება</li>
      <li>NUM: პირველი, ორი, ერთი, ბევრი, მეორე, სამი, ცოტა, ხუთი, მილიონი, ოთხი</li>
      <li>PRON: რომელიც, იგი, რომლებიც, ეს, სხვა, ერთ-ერთი, ის, მისი, ისინი, ყველა</li>
      <li>PROPN: არისტოტელე, მაგმური, საქართველო, ალექსანდრე, გიორგი, იულიუს, აფრიკანუსი, მიხეილ, პლატონი, ფერმა</li>
      <li>VERB-Part: ასახული, დამზადებული, დანალექი, არაევკლიდური, დამსახურებული, დამუხტული, სარწყავი, საცდელი, წამკითხავი, აღმდგენი</li>
      <li>VERB-Vnoun: დარაიონება, შესიტყვება, აგეგმვა, აორთქლება, გადაქაჩვა, გაკაფვა, გამოსხივება, გამოსხივებაც, გამოსხივებები, გამოქცევა</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Voc
    <ul>
      <li>NOUN: ფაქტო</li>
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
      <li>ADJ: უფრო, მომრგვალო, უკეთესი</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADJ: დიდი, ახალი, ძველი, მთავარი, მნიშვნელოვანი, ფართო, მრავალი, ზოგადი, მეტი, საჭირო</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sup
    <ul>
      <li>ADJ: უძველესი, უმაღლეს, უმაღლესი, უდიდესი, უმნიშვნელოვანესი, უძველეს, უმთავრესად, უმარტივესი, უმნიშვნელოვანეს, უმცირესი</li>
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
      <li>VERB: შეიძლება, გამოიყენება, არსებობს, სწავლობს, იყენებენ, იკვლევს, ხდება, იყენებს, ეწოდება, უწოდებენ</li>
      <li>VERB-Vnoun: ცვეთის, ბეჭდვისა, გადაყვანის, განმუხტვისას, დაანგარიშება, დაძაბვები, დაძაბვის, დნობა, დნობის, კერვა</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Perf
    <ul>
      <li>VERB: შეისწავლის, წარმოადგენს, მოიცავს, ჩამოყალიბდა, დაიწყო, შედგება, შეიქმნა, გახდა, განსაზღვრავს, მიიღო</li>
      <li>VERB-Vnoun: გამოსხივების, დარაიონება, გამოსხივებას, დაგეგმარების, დაკრისტალების, დაპროექტებისა, მოკვლევისა, მორწყვის, შეკავშირების, შესიტყვება</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>VERB: ითქვას, იქცეს, მოხდეს</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX: ა, არის, იყო, უნდა, იყოს, არიან, იქნა, იქნება, იყვნენ, იქნას</li>
      <li>VERB: შეისწავლის, აქვს, შეიძლება, წარმოადგენს, გამოიყენება, მოიცავს, არსებობს, სწავლობს, ჩამოყალიბდა, იყენებენ</li>
      <li>VERB-Part: დანალექი, ასახული, დამუხტული, დამზადებული, სარწყავი, წამკითხავი, წამყვან, არაევკლიდური, გარემოსდაცვითი, დამსახურებული</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sub
    <ul>
      <li>VERB: გადაჭრილიყო, გახსნას, ეცნობოს, მიჰფენოდნენ, მოეღრიცოს, შეედაროს, შეექმნა, შეეწყოს, შეფასდეს, წარმოქმნას</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>AUX: იქნება, იქნებოდა</li>
      <li>VERB: შეისწავლის, წარმოადგენს, მოიცავს, შეიცავს, განსაზღვრავს, მიეკუთვნება, შედგება, განარჩევენ, განასხვავებენ, წარმოადგენენ</li>
      <li>VERB-Part: სარწყავი, წამყვან, საკვები, საცდელ, საცდელი, შესანიშნავი, წამყვანი, ასაჭრელად, გადასაყვანი, გასაფრენი</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX: მინდოდა</li>
      <li>VERB: ჰქონდა, ხდებოდა, გამოიყენებოდა, იყენებდნენ, ვითარდებოდა, თვლიდა, არსებობდა, გულისხმობდა, იყენებდა, მდებარეობდა</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX: იყო, იყოს, იქნა, იყვნენ, იქნას, იქნეს</li>
      <li>VERB: ჩამოყალიბდა, დაიწყო, შეიქმნა, გახდა, მიიღო, დაარსდა, ჩაისახა, გაჩნდა, წარმოიშვა, შექმნა</li>
      <li>VERB-Part: ასახული, დამუხტული, დამზადებული, დამსახურებული, დამუხტულ, დანაკვთული, ამომწყდარი, ამღერებულ, აწეული, გადაშენებული</li>
    </ul>
  </li>
</ul>

<ul>
  <li>PastPerf
    <ul>
      <li>AUX: ყოფილა</li>
      <li>VERB: უკავია, შეუძლია, შეუძლიათ, უკავიათ, შექმნილა, აღმოუჩენია, გადაჭრილიყო, გამოჩენილა, დადგენილა, დამკვიდრებულა</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pqp
    <ul>
      <li>AUX: ყოფილიყო</li>
      <li>VERB: ჩაეყარა, გამოეყო, მიეცა, დაედო, მიეცათ, მიეძღვნა, აეყვანა, აეხსნათ, ამოეგდო, აღმოეჩინათ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX: ა, არის, უნდა, არიან, მინდა, ვარ, ხარ</li>
      <li>VERB: აქვს, შეიძლება, გამოიყენება, არსებობს, სწავლობს, იყენებენ, იკვლევს, ხდება, იყენებს, ეწოდება</li>
      <li>VERB-Part: დანალექი, წამკითხავი, არაევკლიდური, გარემოსდაცვითი, მღრღნელი, აღმდგენი, გადასაწყვეტი, გამთბარი, დამდეგს, დამლევი</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Act
    <ul>
      <li>VERB: შეისწავლის, შეიძლება, წარმოადგენს, გამოიყენება, მოიცავს, არსებობს, სწავლობს, იყენებენ, იკვლევს, დაიწყო</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Mid
    <ul>
      <li>VERB: ავიწყდება, ახსოვდა, გვწყუროდა, დამავიწყდა, მიეჩქარებოდათ, მქვია, მჯერა, სცხელოდა, წაადგებოდა</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>VERB: ჩამოყალიბდა, შეიქმნა, ეწოდება, გააჩნია, ითვლება, იძლევა, დაარსდა, წარმოიქმნება, წარმოიშვა, ჩაისახა</li>
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
      <li>VERB: მიიღო, ამყოფო, შეუწყო</li>
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
      <li>PRON: ამ, იმ, ეს, ისეთი, ასეთი, მათ, მის, ისეთ, ამავე, ის</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>PRON: ერთ-ერთი, რამდენიმე, ერთი, ზოგიერთი, ერთ-ერთ, ზოგიერთ, ზოგი, რაიმე, ერთ, ზოგ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>PRON: რომელ, რა, რის, რომელი, რომლებ, რომლებსაც, რამდენი, რითიც, ვის, რამ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>PRON: არავის, არაფერს, არავინ, არა, არაფრით, არცერთი</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>PRON: მისი, მათ, იგი, მათი, მას, მის, ის, ისინი, ეს, თავისი</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rcp
    <ul>
      <li>PRON: ერთმანეთ, ერთმანეთს, ერთმანეთის, ერთმანეთისა, ურთიერთ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>PRON: რომელიც, რომლებიც, რომლის, რომელსაც, რომელთაც, რომელთა, რა, რომელმაც, რომლებსაც, რამაც</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
      <li>PRON: სხვა, ყველა, ყოველი, თვით, თითოეული, სხვათა, ყოვლისა, ყველაფერი, ყოველ, თავად</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: XIX, XX, ორი, ერთი, სამი, ერთ, XVII, XVIII, II, ორ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Mult
    <ul>
      <li>NUM: ორჯერ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>NUM: პირველი, მეორე, პირველ, ბევრი, მესამე, ბევრ, მეოცე, ორივე, პირველმა, მე-20</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>PRON: მისი, მათი, თავისი, მის, თავის, მათ, ჩვენი, ჩემი, თავიანთი, თავად</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>PRON: ჩვენ, ჩვენი, მე, ჩემი, თავიანთი, ჩემ, ჩვენს, მეც, ჩემს, ჩემა</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>PRON: შენს, თქვენ, შენ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX: ა</li>
      <li>PRON: ამ, მისი, მათ, იგი, ეს, მათი, იმ, მის, მას, ის</li>
    </ul>
  </li>
</ul>




<h3>Other Features</h3>


<ul>
  <li><a>Abbr</a>
    <ul>
      <li>Yes
        <ul>
          <li>ADJ: ბერძნ., ძვ., ინგლ., ლათ., ე.წ., ახ., ლიტ., ფრანგ., სხვ., აზერ.</li>
          <li>ADV: ა.შ.</li>
          <li>NOUN: მაგ., წ., ა.შ, ა., ი., ა.შ., გ., დ., კ., რ.</li>
          <li>PRON: სხვ., სხვ</li>
          <li>PROPN: პ., შ., აშშ-ის</li>
          <li>SCONJ: ე.ი.</li>
          <li>VERB: იხ.</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>AdpType</a>
    <ul>
      <li>Post
        <ul>
          <li>ADJ: დაწერილ, შემდეგ</li>
          <li>ADP: ში, ზე, თან, დან, თვის, გან, შესახებ, შორის, მიერ, მდე</li>
          <li>NOUN: კონტრასტ, ადგილ, ადგილებ, გარდაქმნა, ეფექტურობა, ზღვებ, კავშირ, კონტექსტ, ლარამდე, მასშტაბამდე</li>
          <li>PRON: ამასთანა, ერთმანეთ, ყველაფერ</li>
          <li>VERB-Vnoun: გადახურება, დაქცევისათვის</li>
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
          <li>ADV: აღსაწერად, გასავითარებლად, მოსაპოვებლად</li>
        </ul>
      </li>
      <li>Deg
        <ul>
          <li>ADV: ხშირად, საკმაოდ, მეტად, ამდენად, გაცილებით, იშვიათად, ათასობით, პირიქით, ნაწილობრივ, ოდნავ</li>
        </ul>
      </li>
      <li>Int
        <ul>
          <li>ADV: რატომ, როგორ, როდი, როდისა, სად, საიდან</li>
        </ul>
      </li>
      <li>Loc
        <ul>
          <li>ADV: აქ, აქედან, საზღვარგარეთ, ახლოს, გარშემო, ქვეშ, აქამდე, წინ, გარეთ, ირგვლივ</li>
        </ul>
      </li>
      <li>Man
        <ul>
          <li>ADV: ასევე, აგრეთვე, მიხედვით, მხოლოდ, ძირითადად, ერთად, ფართოდ, შესაბამისად, ისე, მეშვეობით</li>
        </ul>
      </li>
      <li>Rel
        <ul>
          <li>ADV: სადაც, რატომღაც, როგორც</li>
        </ul>
      </li>
      <li>Tim
        <ul>
          <li>ADV: შემდეგ, პირველად, ზოგჯერ, ჯერ, ამჟამად, უკვე, თავდაპირველად, დღეს, მოგვიანებით, ბოლოს</li>
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
          <li>X: the, logos, λόγος, of, de, art, fantasy, βίος, νόμος, -λογία</li>
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
          <li>PROPN: საქართველოს, საქართველო, თბილისის, ევროპა, აზერბაიჯანის, ამერიკის, თბილის, კავკასიის, ამერიკა, გერმანია</li>
        </ul>
      </li>
      <li>Prs
        <ul>
          <li>PROPN: ალექსანდრე, გიორგი, ვახტანგ, ჯონ, არისტოტელე, არისტოტელეს, დე, კონფუცის, მაგმური, გივი</li>
        </ul>
      </li>
      <li>Sur
        <ul>
          <li>PROPN: ნიუტონის, რუსთაველის, ტიურინგის, გალილეის, კლარკის, ტოლკინის, ჯანდიერის, გოგინაშვილი, გოგინაშვილის, თუმანიშვილის</li>
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
          <li>NUM: 1992, 1999, 2, 1, 2008, 30-იან, 11, 20, 2001, 2005</li>
        </ul>
      </li>
      <li>Roman
        <ul>
          <li>NUM: XIX, XX, XVII, XVIII, II, I, VI-ის, XVI, I-ის, III</li>
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
          <li>VERB: გვხვდება, გვევლინება, მოგვითხრობს, გვხვდებოდა, შემოგვინახა, გაგვანდო, გეხახუნებათ, გვაფიქრებინებს, გვიქმნის, გვიჩვენოს</li>
        </ul>
      </li>
      <li>Sing
        <ul>
          <li>VERB: მიჰყვება, დამჭირდება, მეკითხება, მეძახიან, მიაჩნდეს, მიუძღვით, სწამებენ</li>
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
          <li>VERB: გააჩნიათ, მიაჩნიათ, მოგვცეს, შემოგვთავაზა, აინტერესებდათ, გვაფრთხილებს, გვაწვდის, გვთავაზობს, დაგვანახოს, ევალებათ</li>
        </ul>
      </li>
      <li>Sing
        <ul>
          <li>VERB: გამოსცა, ახლავს, აღწევს, ახლდეს, გასდევს, გახადოს, დაუჭერს, მაინტერესებს, მითხოვია, მჭრის</li>
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
          <li>AUX: არიან, იყვნენ, იქნეს, ა</li>
          <li>VERB: იყენებენ, უწოდებენ, აქვთ, განარჩევენ, განასხვავებენ, წარმოადგენენ, ეკუთვნის, ვხვდებით, იყენებდნენ, განსაზღვრავენ</li>
        </ul>
      </li>
      <li>Sing
        <ul>
          <li>AUX: ა, არის, იყო, უნდა, იყოს, იქნა, იქნება, იქნას, იქნებოდა, მინდა</li>
          <li>VERB: შეისწავლის, აქვს, შეიძლება, წარმოადგენს, გამოიყენება, მოიცავს, არსებობს, სწავლობს, ჩამოყალიბდა, იკვლევს</li>
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
          <li>ADJ: მეტიც, ძველთა, განსხვავებულიც, გასაგებიცა, გასავლელადაც, საერთოც, სრულებითაც, უსასრულოც, შემდგომიც, შემცველიცა</li>
          <li>ADP: გამოც, შორისაც</li>
          <li>ADV: დღესაც, შემდეგაც, მიხედვითაც, მალევე, რატომღაც, ადრეც, გარეთაც, გასაუმჯობესებლადაც, თანახმადაც, იქვე</li>
          <li>NOUN: დროსაც, საფუძველ, გამოყენებაც, დადგენაც, დრო, მოვლენადაც, ობსერვატორიაც, საშუალებითაც, ფილოლოგიასაც, შედეგადაც</li>
          <li>NUM: მეორეც, ერთიცა, მეორე, პირველივე</li>
          <li>PART: კი, მაინც, არც, ვერც</li>
          <li>PRON: რომელ, რომლებ, მეც, ვინმე, ვინც, იგივე, იმავე, მასაც, რომელნიც, რომელსაც</li>
          <li>PROPN: დავითისივე, ევროპა, ზარანდიასაც, საქართველო</li>
        </ul>
      </li>
      <li>Int
        <ul>
          <li>PART: ალბათ, ხომ, თურმე</li>
        </ul>
      </li>
      <li>Neg
        <ul>
          <li>PART: არ, არა, ვერ, აღარ</li>
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
          <li>VERB: გვხვდება, გვევლინება, მოგვითხრობს, გვხვდებოდა, მიჰყვება, შემოგვინახა, გაგვანდო, გვაფიქრებინებს, გვაფრთხილებს, გვაწვდის</li>
        </ul>
      </li>
      <li>2
        <ul>
          <li>VERB: გაინტერესებთ, გეხახუნებათ</li>
        </ul>
      </li>
      <li>3
        <ul>
          <li>VERB: უწოდებენ, მიეკუთვნება, ახასიათებს, უკავშირდება, განეკუთვნება, ეკუთვნის, ემყარება, ეხება, ამუშავებს, არეგულირებს</li>
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
          <li>VERB: მოგვცეს, შემოგვთავაზა, აინტერესებდათ, გვთავაზობს, დაგვანახოს, მაინტერესებს, მოგვცა, მჭრის</li>
        </ul>
      </li>
      <li>2
        <ul>
          <li>VERB: გასდევს, შეგიძლიათ, შეექმნა, შეეწყო</li>
        </ul>
      </li>
      <li>3
        <ul>
          <li>AUX: უნდა, მინდა, მინდოდა</li>
          <li>VERB: შეისწავლის, აქვს, წარმოადგენს, მოიცავს, სწავლობს, იყენებენ, იკვლევს, იყენებს, დაიწყო, ეწოდება</li>
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
          <li>AUX: მინდა, ვარ, მინდოდა</li>
          <li>VERB: ვხვდებით, ვწერ, აღმოვაჩენთ, განვიხილოთ, გვაქვს, ვიქონიოთ, მაქვს, ავივსო, ამოვალთ, აღვნიშნოთ</li>
        </ul>
      </li>
      <li>2
        <ul>
          <li>AUX: ა, იყვნენ, იყო, ხარ</li>
          <li>VERB: მიიღო, შეიქმნა, ახასიათებთ, აერთიანებთ, აღმოაჩენ, შევიდა, შეუწყო, აამოძრაოთ, აირევი, ამყოფო</li>
        </ul>
      </li>
      <li>3
        <ul>
          <li>AUX: არის, იყო, უნდა, ა, იყოს, არიან, იქნა, იქნება, იქნას, იყვნენ</li>
          <li>VERB: შეისწავლის, აქვს, შეიძლება, წარმოადგენს, გამოიყენება, მოიცავს, არსებობს, სწავლობს, ჩამოყალიბდა, იყენებენ</li>
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
          <li>PUNCT: (, ), <, [, ], ></li>
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
          <li>PUNCT: —, -, –</li>
        </ul>
      </li>
      <li>Elip
        <ul>
          <li>PUNCT: ...</li>
        </ul>
      </li>
      <li>Excl
        <ul>
          <li>PUNCT: !</li>
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
          <li>PUNCT: „, “, ", ”, “-</li>
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
      <li>Indir
        <ul>
          <li>VERB: ხდება, გახდა, გვხვდება, შედგება, ხდებოდა, ვხვდებით, მოხდა, ჰქვია, ეყრდნობა, რჩება</li>
        </ul>
      </li>
      <li>Intr
        <ul>
          <li>AUX: ა, არის, იყო, იყოს, არიან, იქნა, იქნება, იყვნენ, იქნას, იქნეს</li>
          <li>VERB: აქვს, შეიძლება, გამოიყენება, არსებობს, ჩამოყალიბდა, შეიქმნა, ეწოდება, აქვთ, გულისხმობს, შედგება</li>
        </ul>
      </li>
      <li>Tran
        <ul>
          <li>AUX: უნდა, მინდა, მინდოდა</li>
          <li>VERB: შეისწავლის, წარმოადგენს, მოიცავს, სწავლობს, იყენებენ, იკვლევს, დაიწყო, იყენებს, განსაზღვრავს, უწოდებენ</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 1 lemmas as copulas (<a>cop</a>). Examples: არის.</li>
</ul>

<ul>
<li>This corpus uses 1 lemmas as auxiliaries (<a>aux</a>). Examples: უნდა.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (9)</li>
      <li>VERB--NOUN-Dat (169)</li>
      <li>VERB--NOUN-Erg (153)</li>
      <li>VERB--NOUN-Gen (1)</li>
      <li>VERB--NOUN-Nom (1514)</li>
      <li>VERB--PRON-Dat (52)</li>
      <li>VERB--PRON-Erg (38)</li>
      <li>VERB--PRON-Ess (1)</li>
      <li>VERB--PRON-Gen (12)</li>
      <li>VERB--PRON-Ins (1)</li>
      <li>VERB--PRON-Nom (513)</li>
      <li>VERB-Part--NOUN-Dat (1)</li>
      <li>VERB-Part--NOUN-Nom (15)</li>
      <li>VERB-Part--PRON-Nom (4)</li>
      <li>VERB-Vnoun--NOUN-Nom (2)</li>
      <li>VERB-Vnoun--PRON-Nom (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (2)</li>
      <li>VERB--NOUN-Dat (1281)</li>
      <li>VERB--NOUN-Dat-ADP(ზე) (1)</li>
      <li>VERB--NOUN-Dat-ADP(ში) (1)</li>
      <li>VERB--NOUN-Erg (3)</li>
      <li>VERB--NOUN-Ess (5)</li>
      <li>VERB--NOUN-Gen (5)</li>
      <li>VERB--NOUN-Ins (1)</li>
      <li>VERB--NOUN-Nom (630)</li>
      <li>VERB--NOUN-Nom-ADP(შესახებ) (1)</li>
      <li>VERB--PRON-Dat (83)</li>
      <li>VERB--PRON-Ess (2)</li>
      <li>VERB--PRON-Gen (5)</li>
      <li>VERB--PRON-Ins (2)</li>
      <li>VERB--PRON-Nom (19)</li>
      <li>VERB-Part--NOUN-Dat (2)</li>
      <li>VERB-Part--NOUN-Ess (1)</li>
      <li>VERB-Part--NOUN-Gen (1)</li>
      <li>VERB-Part--NOUN-Nom (2)</li>
      <li>VERB-Vnoun--NOUN-Dat (1)</li>
      <li>VERB-Vnoun--NOUN-Gen (2)</li>
      <li>VERB-Vnoun--NOUN-Nom (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--NOUN (2)</li>
      <li>VERB--NOUN-Dat (148)</li>
      <li>VERB--NOUN-Nom (5)</li>
      <li>VERB--PRON-Dat (16)</li>
      <li>VERB--PRON-Gen (1)</li>
      <li>VERB-Vnoun--NOUN-Dat (1)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 8 relation subtypes: <a>acl:relcl</a>, <a>advmod:lmod</a>, <a>det:poss</a>, <a>flat:foreign</a>, <a>flat:name</a>, <a>nsubj:outer</a>, <a>nsubj:pass</a>, <a>obl:tmod</a></li>
<li>The following 6 relation types are not used in this corpus at all: <a>vocative</a>, <a>dislocated</a>, <a>clf</a>, <a>list</a>, <a>goeswith</a>, <a>reparandum</a></li>
</ul>
