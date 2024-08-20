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
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udka_glc214)<br />
Download all treebanks: [UD 2.14](/#download)

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

The current version of the UD_Georgian-GLC treebank includes 151 utterances (sentences) or 2123 tokens. By the end of August, the UD_Georgian-GLC will expand to include 3,000 additional sentences selected from geo_wikipedia data. These sentences will serve as a training set, enriching the treebank and offering a more comprehensive representation of the Georgian language. The primary objective is to provide a more comprehensive and representative dataset for training and analysis purposes.

## Acknowledgments

The UD_Georgian-GLC release is based on the data from the Georgian Language Corpus (GLC) developed with the financial support of the Shota Rustaveli National Science Foundation (Project Nos. DP2016_23, LE/17/1-30/13, AR/320/4-105/11, Y-04-10).

Special gratitudes goes to Prof. Dr. Stavros Skopeteas from the University of Göttingen for his support and valuable comments on the initial data of the UD_Georgian-GLC treebank, Prof. Dr. Benjamin Roth from the University of Vienna for his feedback concerning the training dataset of the UD_Georgian-GLC treebank and to Prof. Dr. Dan Zeman for his invaluable contributions in making the dataset available on GitHub and offering valuable suggestions.

## References
Doborjginidze, N., Lobzhanidze, I., Gunia, I. (2012). Georgian language corpus. See, http://corpora.iliauni.edu.ge/. Accessed 15 July 2023.

Doborjginidze, N., Lobzhanidze, I., Mirianashvili, G. (2014). Corpus of Georgian Chronicles. See, http://corpora.iliauni.edu.ge/. Accessed 15 July 2023.

Lobzhanidze, I. (2022). Finite-State Computational Morphology: An Analyzer and Generator for Georgian. Cham: Springer.


# Statistics of UD Georgian GLC

## POS Tags

[ADJ](ka_glc-pos-ADJ.html) – [ADP](ka_glc-pos-ADP.html) – [ADV](ka_glc-pos-ADV.html) – [AUX](ka_glc-pos-AUX.html) – [CCONJ](ka_glc-pos-CCONJ.html) – [NOUN](ka_glc-pos-NOUN.html) – [NUM](ka_glc-pos-NUM.html) – [PART](ka_glc-pos-PART.html) – [PRON](ka_glc-pos-PRON.html) – [PROPN](ka_glc-pos-PROPN.html) – [PUNCT](ka_glc-pos-PUNCT.html) – [SCONJ](ka_glc-pos-SCONJ.html) – [VERB](ka_glc-pos-VERB.html)

## Features

[Abbr](ka_glc-feat-Abbr.html) – [AdpType](ka_glc-feat-AdpType.html) – [AdvType](ka_glc-feat-AdvType.html) – [Animacy](ka_glc-feat-Animacy.html) – [Aspect](ka_glc-feat-Aspect.html) – [Case](ka_glc-feat-Case.html) – [Degree](ka_glc-feat-Degree.html) – [Evident](ka_glc-feat-Evident.html) – [Mood](ka_glc-feat-Mood.html) – [NameType](ka_glc-feat-NameType.html) – [Number](ka_glc-feat-Number.html) – [Number[io]](ka_glc-feat-Number-io.html) – [Number[obj]](ka_glc-feat-Number-obj.html) – [Number[subj]](ka_glc-feat-Number-subj.html) – [NumForm](ka_glc-feat-NumForm.html) – [NumType](ka_glc-feat-NumType.html) – [PartType](ka_glc-feat-PartType.html) – [Person](ka_glc-feat-Person.html) – [Person[io]](ka_glc-feat-Person-io.html) – [Person[obj]](ka_glc-feat-Person-obj.html) – [Person[subj]](ka_glc-feat-Person-subj.html) – [Poss](ka_glc-feat-Poss.html) – [PronType](ka_glc-feat-PronType.html) – [PunctType](ka_glc-feat-PunctType.html) – [Subcat](ka_glc-feat-Subcat.html) – [Tense](ka_glc-feat-Tense.html) – [VerbForm](ka_glc-feat-VerbForm.html) – [Voice](ka_glc-feat-Voice.html)

## Relations

[acl](ka_glc-dep-acl.html) – [advcl](ka_glc-dep-advcl.html) – [advmod](ka_glc-dep-advmod.html) – [advmod:lmod](ka_glc-dep-advmod-lmod.html) – [amod](ka_glc-dep-amod.html) – [aux](ka_glc-dep-aux.html) – [case](ka_glc-dep-case.html) – [cc](ka_glc-dep-cc.html) – [ccomp](ka_glc-dep-ccomp.html) – [conj](ka_glc-dep-conj.html) – [cop](ka_glc-dep-cop.html) – [csubj](ka_glc-dep-csubj.html) – [det:poss](ka_glc-dep-det-poss.html) – [flat:name](ka_glc-dep-flat-name.html) – [iobj](ka_glc-dep-iobj.html) – [mark](ka_glc-dep-mark.html) – [nmod](ka_glc-dep-nmod.html) – [nsubj](ka_glc-dep-nsubj.html) – [nsubj:pass](ka_glc-dep-nsubj-pass.html) – [nummod](ka_glc-dep-nummod.html) – [obj](ka_glc-dep-obj.html) – [obl](ka_glc-dep-obl.html) – [parataxis](ka_glc-dep-parataxis.html) – [punct](ka_glc-dep-punct.html) – [root](ka_glc-dep-root.html) – [xcomp](ka_glc-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 151 sentences, 2152 tokens and 2335 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 336 tokens (16%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 20 types of words that contain both letters and punctuation. Examples: ა., ბაქო-ბათუმის, დატვირთვა-გადმოტვირთვის, ერთ-ერთი, ეროვნულ-გამათავისუფლებელ, ეროვნულ-გამათავისუფლებელი, ვ., თ., კვლევა-ძიებას, კმ-ი, კორუმპირებულ-კრიმინალური, მატერიალურ-ტექნიკური, მეზობელ-ნათესავები, მეტ-ნაკლებად, ნება-სურვილის, სამეცნიერო-კვლევითი, სახეობრივ-მეტაფორული, სიცილ-კისკისით, შეკავება-გაწონასწორების, ჩასატვირთ-გადმოსატვირთი</li>
</ul>

<ul>
<li>This corpus contains 183 multi-word tokens. On average, one multi-word token consists of 2.00 syntactic words.</li>
<li>There are 169 types of multi-word tokens. Examples: აღსანიშნავია, ჩემში, საქართველოში, არაა, გვერდზე, იმაზე, მხრიდან, ტერიტორიაზე, შემთხვევაში, ადამიანისთვის, ადვოკატებისგან, ავადმყოფთან, ავადმყოფთანაც, ავტორთან, აკადემიაში, ამასთან, ამბავში, ამისათვის, არისო, აღჭურვილია, ბეჭზე, ბოლომდე, ბრალდებებზე, ბუნებრივია, გადარჩენაზე, გამოა, გამოცემებში, გამოცვლაზე, განმავლობაში, გაქვსო, გზაზე, გზაში, გულთან, დაბადებაო, დაგეგმვისათვის, დამკვიდრებისათვის, დამოკიდებულებებზე, დაყენებაში, დღიდან, ევროპაში, ეზოში, ენებთან, ვინმეა, ზდოროვიეში, ზედაპირზე, ზონებში, თავდადებულია, თავზე, თავიდან, თავისუფლებაზე.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 13 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>VERB</a></li>
<li>This corpus does not use the following tags: DET, INTJ, SYM, X</li>
</ul>

<ul>
<li>This corpus contains 9 word types tagged as particles (PART): ალბათ, არ, არა, ვერც, თურმე, კი, მაინც, ო, ხომ</li>
</ul>

<ul>
<li>This corpus contains 38 lemmas tagged as pronouns (PRON): ამდენი, არა, არავინ, არაფერი, ერთ-ერთი, ერთერთი, ერთმანეთი, ეს, ეს(ე), ვინ, ზოგიერთი, თავი, თავისი, თქვენ, იგი, იგინი, იმათი, ის, ის(ი), ისინი, მე, მისი, რა, რამაც, რამდენი, რამდენიმე, რამოდენიმე, რაღაც, როგორ, რომელი, სხვა, ყველა, ყველაფერი, ყოველი, შენ, ჩემი, ჩვენ, ჩვენი</li>
</ul>

<ul>
<li>This corpus contains 0 lemmas tagged as determiners (DET): </li>
</ul>

<ul>
</ul>

<ul>
<li>This corpus contains 4 lemmas tagged as auxiliaries (AUX): არის, აქვს, უნდა, შეუძლია</li>
</ul>

<ul>
<li>Out of the above, 1 lemmas occurred sometimes as AUX and sometimes as VERB: აქვს</li>
</ul>

<ul>
<li>There are 2 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>VERB: ამღერებულ, გადასაწყვეტი, გამთბარ, დაუზუსტებელი, მონათლული, შესანიშნავი</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Vnoun
  <ul>
    <li>VERB: გადაქაჩვა, დახარჯვის</li>
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
      <li>NOUN: ადამიანის, ხელისუფლების, მასწავლებელი, ავადმყოფ, კაცი, მინისტრი, წარმომადგენლები, ადამიანი, ავტორ, ავტორთა</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Inan
    <ul>
      <li>NOUN: საქმიანობის, საუბარი, სექტორის, უნივერსიტეტის, შეფასება, შეფასების, გზა, ენის, კისერი, სიტყვები</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: ახალგაზრდებით, ზემოთ, ლამაზთა, სრულებითაც</li>
      <li>NOUN: სიტყვები, უფლებათა, კომენტარები, მალების, ორგანიზაციები, პრინციპების, სამუშაოები, წარმომადგენლები, ადამიანთა, ადვოკატების</li>
      <li>PRON: ისინი, ჩვენ, ჩვენი, მათ, ჩვენს, თქვენ, იმათი, რომელნიც, სხვათა, ჩვენა</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: ქართული, აღსანიშნავი, ახალი, განსაკუთრებული, დაინტერესებული, დემოგრაფიული, დიდი, მრავალმხრივი, საერთაშორისო, ძველი</li>
      <li>NOUN: ადამიანის, საქმიანობის, საუბარი, სექტორის, უნივერსიტეტის, შეფასება, შეფასების, ხელისუფლების, გზა, ენის</li>
      <li>NUM: ერთი, მეორე, ცოტა, ერთ, მეშვიდე, ორ, ორი, პირველივე, სამი</li>
      <li>PRON: ამ, მე, ეს, სხვა, მის, იგი, იმ, მისი, ყველა, ჩემ</li>
      <li>PROPN: საქართველოს, საქართველო, აბაშიძე, ალექსანდრე, ახვლედიანის, ბათუმი, ბათუმის, ბაქო-ბათუმის, ბექიშვილს, გრიგოლ</li>
      <li>VERB-Part: ამღერებულ, გადასაწყვეტი, გამთბარ, დაუზუსტებელი, მონათლული, შესანიშნავი</li>
      <li>VERB-Vnoun: გადაქაჩვა, დახარჯვის</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>ADJ: ქართველ, ქართულ, ყოფილ, ამბულატორულ, არადამაკმაყოფილებელ, არსებულ, ახალ, გადაუმოწმებელ, განსხვავებულ, განცდილსა</li>
      <li>ADP: ში, ზე, თან, შორის, ზეც, თანაც</li>
      <li>NOUN: შესწავლას, ავადმყოფ, გვერდ, გზა, დღეს, სიცოცხლეს, ტერიტორია, ქვეყანას, ღვინოს, შემთხვევა</li>
      <li>NUM: ერთ, მეორე, მეშვიდე, ორ</li>
      <li>PRON: ამ, მე, მის, ჩემ, მათ, მას, ჩემს, ამას, არაფერს, თავის</li>
      <li>PROPN: საქართველო, საქართველოს, ბექიშვილს, ევროპა, კავკასია, ოდისეა</li>
      <li>VERB-Part: ამღერებულ, გამთბარ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Erg
    <ul>
      <li>ADJ: დაკავშირებულმა, საინტერესო, უწყინარმა</li>
      <li>NOUN: დამამკვიდრებლებმა, ინფორმაციამ, მოსწავლეებმა, მძღოლმა, სულმა, სწრაფვამ, ქალმა, ჩიჩინმა</li>
      <li>PRON: მან, მე, რამ, ამდენმა, არავინ, რამაც, სხვა, ჩვენ, ჩვენმა, ჩვენც</li>
      <li>PROPN: ჩიტაიამ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ess
    <ul>
      <li>ADJ: არასასურველ, ასაშენებლად, ახლად, ბოლო, კლასიკურ, მეცნიერულად, ნამდვილ, საზღვაო, საუკეთესო, საშინლად</li>
      <li>ADP: მდე</li>
      <li>NOUN: დაავადებად, კურორტად, მაგალითად, მიზნად, პერიოდა, რევოლუცია, სამშობლოდ, სულიერებადა, ქვეყნად, შედეგად</li>
      <li>PRON: ჩემა, ჩვენა</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>ADJ: ქართული, ახალი, განსაკუთრებული, დაინტერესებული, დემოგრაფიული, კავკასიური, რევოლუციური, სამართალდამცავი, ადამიანური, ანკარა</li>
      <li>ADP: თვის, გან, გამო, კენ, შესახებ, გამოც, გარდა</li>
      <li>NOUN: ადამიანის, საქმიანობის, სექტორის, უნივერსიტეტის, შეფასების, ხელისუფლების, ენის, უსაფრთხოების, უფლებათა, ბრძოლის</li>
      <li>NUM: ერთი</li>
      <li>PRON: ამ, მისი, იმ, რის, ჩვენი, ამისა, ვის, ზოგიერთი, თავისი, იმათი</li>
      <li>PROPN: ალექსანდრე, ახვლედიანის, ბათუმის, ბაქო-ბათუმის, ვეხის, მცხეთის, რუსეთის, საქართველოს, წინანდლისა, ჭავჭავაძის</li>
      <li>VERB-Part: დაუზუსტებელი</li>
      <li>VERB-Vnoun: დახარჯვის</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ins
    <ul>
      <li>ADJ: ახალგაზრდებით, განსაკუთრებული, დამცავი, დიდი, თანამედროვე, კლიმატური, მეგობრული, მექანიზებული, მძლავრი, პატარა</li>
      <li>ADP: დან</li>
      <li>NOUN: ენით, მხრი, არგუმენტებით, აღტაცებით, ბარგით, გზებით, დახმარებით, დღი, თავი, თანამებრძოლებით</li>
      <li>NUM: ერთი, ორი</li>
      <li>PRON: იმ, იმით, თავისი, რომლითაც, სხვა</li>
      <li>VERB-Part: შესანიშნავი</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>ADJ: აღსანიშნავი, დადებითი, დამოკიდებული, დამფრთხალი, დიდი, მაღალკვალიფიციური, მრავალმხრივი, საერთაშორისო, საჭირო, ავთვისებიანი</li>
      <li>ADP: ვით</li>
      <li>NOUN: საუბარი, შეფასება, კისერი, მასწავლებელი, სიტყვები, ბრძოლა, თოვლი, კაცი, კომენტარები, მინისტრი</li>
      <li>NUM: ერთი, ცოტა, მეორე, პირველივე, სამი</li>
      <li>PRON: ეს, იგი, ისინი, ჩემი, ის, რამდენი, თავისი, მეც, მისი, სხვა</li>
      <li>PROPN: აბაშიძე, ბათუმი, გრიგოლ, დავითი, ვაჟა, თომა, ილია, ლევანი, ფშაველა, შანიძე</li>
      <li>VERB-Part: გადასაწყვეტი, მონათლული</li>
      <li>VERB-Vnoun: გადაქაჩვა</li>
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
      <li>ADJ: ახალი, დიდი, ძველი, საჭირო, ანკარა, აშკარა, ახალ, ახლად, დიდ, თანამედროვე</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sup
    <ul>
      <li>ADJ: საუკეთესო, უდიდესი, უმაღლეს, უმაღლესი, უმთავრესად, უშორესი, უძველეს</li>
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
      <li>AUX: შეიძლება</li>
      <li>VERB: ჩანს, ხდებოდა, აღნიშნავდნენ, იდგა, ითვლება, წარმოებს, ხდება, ავიწყდება, ანიჭებენ, ანიჭებს</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Perf
    <ul>
      <li>VERB: აღმოაჩენ, მოიცავს, წარმოადგენს, ავივსო, აირჩიეს, ამაღლდა, ამოეგდო, აფართხალდა, აღასრულებს, აღემატება</li>
      <li>VERB-Vnoun: გადაქაჩვა, დახარჯვის</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX: ა, იყო, უნდა, არის, იქნება, შეიძლება, ვარ, მინდა, მინდოდა, შეიძლებოდა</li>
      <li>VERB: ჩანს, ხდებოდა, აქვს, აღმოაჩენ, აღნიშნავდნენ, გადის, იდგა, ითვლება, მაქვს, მოდიან</li>
      <li>VERB-Part: ამღერებულ, გადასაწყვეტი, გამთბარ, მონათლული, შესანიშნავი</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sub
    <ul>
      <li>VERB: მიჰფენოდნენ, მოეღრიცოს</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>AUX: იქნება</li>
      <li>VERB: აღმოაჩენ, მოიცავს, წარმოადგენს, ასიამოვნებს, აღასრულებს, აღემატება, აღინიშნება, აღწერს, გააერთიანებს, გამოარჩევდა</li>
      <li>VERB-Part: შესანიშნავი</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX: მინდოდა, ჰქონდა</li>
      <li>VERB: ხდებოდა, აღნიშნავდნენ, აპრიალებდნენ, აძლევდა, ახსოვდა, გაურბოდნენ, გვქონდა, გვწყუროდა, ეალერსებოდა, ეყრდნობოდნენ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX: იყო, შეიძლებოდა</li>
      <li>VERB: იდგა, ავივსო, აირჩიეს, ამაღლდა, ამღერებულ, აფართხალდა, აღინიშნა, გააფერმკრთალა, გააჩნდა, გააძნელა</li>
      <li>VERB-Part: ამღერებულ, მონათლული</li>
    </ul>
  </li>
</ul>

<ul>
  <li>PastPerf
    <ul>
      <li>VERB: მითხოვია, მიჰფენოდნენ, მოეღრიცოს, მოსულა</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pqp
    <ul>
      <li>VERB: ამოეგდო, გამხდარიყო, გაჩენილიყო, დაეწყო, დამტკიცებულიყო, მიეყვანა, მიეცათ, მიმეთითებინა, მოეცვა, წაადგებოდა</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX: ა, უნდა, არის, შეიძლება, ვარ, მინდა, ხარ</li>
      <li>VERB: ჩანს, აქვს, გადის, ითვლება, მაქვს, მოდიან, წარმოებს, ხდება, ავიწყდება, ამბობენ</li>
      <li>VERB-Part: გადასაწყვეტი, გამთბარ</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Act
    <ul>
      <li>AUX: შეიძლება</li>
      <li>VERB: ჩანს, ხდებოდა, აღმოაჩენ, აღნიშნავდნენ, იდგა, მოიცავს, წარმოადგენს, წარმოებს, ხდება, აირჩიეს</li>
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
      <li>VERB: ითვლება, ავივსო, აღინიშნა, აღინიშნება, გამოედო, გაჩენილიყო, დაიბადა, ეტანება, იბადება, იკვეთებოდა</li>
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
      <li>PRON: ამ, ეს, იმ, იმით, ის, ამდენმა, ამდენს, იმავე, იმის, იმისა</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>PRON: რაღაც, ერთ-ერთი, ერთერთი, ზოგიერთი, რამდენიმე, რამოდენიმე</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>PRON: რამდენი, რა, რამ, რის, ვინც, ვის, რამაც, რას, რომელნიც, რომელსაც</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>PRON: არავინ, არაფერს, არა</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>PRON: მე, იგი, ისინი, ჩვენ, მათ, მას, მეც, ამას, თავს, იმა</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rcp
    <ul>
      <li>PRON: ერთმანეთს</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>PRON: რა, როგორც, ვინმე, როგორ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
      <li>PRON: სხვა, ყველა, სხვათა, ყველას, ყველაფერი, ყოველ, ყოველი, ყოველივე, ყოვლისა</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: ერთი, ცოტა, 100.000, 1907, 2003, 2004-2005, 30, 363, ერთ, ორ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>NUM: მეორე, მეშვიდე, პირველივე</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>PRON: მის, მისი, ჩემი, თავისი, ჩემ, ჩვენი, ჩემს, თავის, იმათი, ჩემა</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>PRON: მე, ჩემ, ჩემი, ჩვენ, ჩვენი, მეც, ჩემს, ჩვენს, ჩემა, ჩვენა</li>
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
      <li>PRON: ამ, ეს, მის, იგი, იმ, ისინი, მისი, ის, მათ, მას</li>
    </ul>
  </li>
</ul>




<h3>Other Features</h3>


<ul>
  <li><a>Abbr</a>
    <ul>
      <li>Yes
        <ul>
          <li>NOUN: პროფ, ა., ვ., თ., კმ-ი</li>
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
          <li>ADP: ში, ზე, თვის, თან, დან, მდე, გან, შორის, გამო, კენ</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>AdvType</a>
    <ul>
      <li>Deg
        <ul>
          <li>ADV: ხშირად, პირიქით, ამდენად, სავსებით, საკმაოდ</li>
        </ul>
      </li>
      <li>Int
        <ul>
          <li>ADV: სად</li>
        </ul>
      </li>
      <li>Loc
        <ul>
          <li>ADV: აქ, ახლოს, აქედან, გარეთ, გარშემო, ზევით, იქ, სადღაც, საზღვარგარეთ, ფეხქვეშ</li>
        </ul>
      </li>
      <li>Man
        <ul>
          <li>ADV: სულ, ერთად, კიდევ, მხოლოდ, ასე, ასევე, ისე, სრულიად, სულაც, სწორედ</li>
        </ul>
      </li>
      <li>Rel
        <ul>
          <li>ADV: სადაც, რატომღაც</li>
        </ul>
      </li>
      <li>Tim
        <ul>
          <li>ADV: ამჟამად, შემდეგ, დღეს, მუდამ, ძირითადად, ჯერ, ახლა, ბოლოს, დილას, დღეიდან</li>
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
          <li>PROPN: საქართველო, საქართველოს, ბათუმი, ბათუმის, ბაქო-ბათუმის, ევროპა, კავკასია, მცხეთის, რუსეთის, წინანდალი</li>
        </ul>
      </li>
      <li>Prs
        <ul>
          <li>PROPN: ალექსანდრე, გრიგოლ, დავითი, ვაჟა, თომა, ილია, ლევანი, ოდისეა, საქართველოს</li>
        </ul>
      </li>
      <li>Sur
        <ul>
          <li>PROPN: აბაშიძე, ახვლედიანის, ბექიშვილს, ვეხის, ფშაველა, შანიძე, ჩიტაიამ, ჭავჭავაძე, ჭავჭავაძის</li>
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
          <li>NUM: 100.000, 1907, 2003, 2004-2005, 30, 363</li>
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
          <li>VERB: გაგვანდო, გვაფიქრებინებს, გვხვდებოდა, მიგვიყვანოს, შემოგვაგებეს</li>
        </ul>
      </li>
      <li>Sing
        <ul>
          <li>VERB: დამჭირდება, მეკითხება, მეძახიან, მიჰყვება, სწამებენ</li>
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
          <li>VERB: მიეჩქარებოდათ</li>
        </ul>
      </li>
      <li>Sing
        <ul>
          <li>VERB: მაინტერესებს, მითხოვია, მჭრის</li>
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
          <li>VERB: აღნიშნავდნენ, მოდიან, აირჩიეს, ამბობენ, ანიჭებენ, აპრიალებდნენ, აყვედრიან, გავემგზავრეთ, გაზიდეს, გამოვიყენოთ</li>
        </ul>
      </li>
      <li>Sing
        <ul>
          <li>AUX: ა, იყო, უნდა, არის, იქნება, შეიძლება, ვარ, მინდა, მინდოდა, შეიძლებოდა</li>
          <li>VERB: ჩანს, ხდებოდა, აქვს, აღმოაჩენ, გადის, იდგა, ითვლება, მაქვს, მოიცავს, წარმოადგენს</li>
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
          <li>ADJ: სრულებითაც</li>
          <li>ADP: გამოც</li>
          <li>ADV: რატომღაც, დღესაც, იქვე, მაშინაც</li>
          <li>NOUN: ავადმყოფ, გავრცელებაც, დროსაც, მთარგმნელსაც, ნადირიც, ნაშრომებსაც, ჟესტიც, საფუძველ, შეფასებასაც, ცვლილებაცა</li>
          <li>NUM: პირველივე</li>
          <li>PART: კი, მაინც, ვერც</li>
          <li>PRON: მეც, როგორც, ვინმე, ვინც, იგივე, იმავე, მასაც, რომელნიც, რომელსაც, რომლითაც</li>
        </ul>
      </li>
      <li>Int
        <ul>
          <li>PART: ხომ, ალბათ, თურმე</li>
        </ul>
      </li>
      <li>Neg
        <ul>
          <li>PART: არ, არა</li>
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
          <li>VERB: გაგვანდო, გვაფიქრებინებს, გვხვდებოდა, დამჭირდება, მეკითხება, მეძახიან, მიგვიყვანოს, მიჰყვება, შემოგვაგებეს</li>
        </ul>
      </li>
      <li>2
        <ul>
          <li>VERB: გაინტერესებთ</li>
        </ul>
      </li>
      <li>3
        <ul>
          <li>VERB: ანიჭებენ, ანიჭებს, ასრულებს, ასწორებს, აფარებს, აფასებს, აღემატება, აღწერს, გავემგზავრეთ, გავუფრთხილდე</li>
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
          <li>VERB: მაინტერესებს, მჭრის</li>
        </ul>
      </li>
      <li>3
        <ul>
          <li>AUX: უნდა, მინდა, მინდოდა, ჰქონდა</li>
          <li>VERB: აქვს, აღმოაჩენ, აღნიშნავდნენ, მაქვს, მოიცავს, ჩანს, წარმოადგენს, ავიწყდება, აირჩიეს, ამბობენ</li>
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
          <li>AUX: ვარ, მინდა, მინდოდა</li>
          <li>VERB: მაქვს, ავივსო, გავემგზავრეთ, გავუფრთხილდე, გაინტერესებთ, გამოვიყენოთ, გვქონდა, გვწყუროდა, დავინახე, დამავიწყდა</li>
        </ul>
      </li>
      <li>2
        <ul>
          <li>AUX: ა, იყო, ხარ</li>
          <li>VERB: აღმოაჩენ, გამოედო, გაქვს, დაინახა, დაიწყო, მოავლო, მოსულა</li>
        </ul>
      </li>
      <li>3
        <ul>
          <li>AUX: იყო, უნდა, არის, იქნება, შეიძლება, შეიძლებოდა, ჰქონდა</li>
          <li>VERB: ჩანს, ხდებოდა, აქვს, აღნიშნავდნენ, გადის, იდგა, ითვლება, მოდიან, მოიცავს, წარმოადგენს</li>
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
          <li>PUNCT: (, )</li>
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
          <li>PUNCT: “, „</li>
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
          <li>VERB: ხდებოდა, ხდება, ავიწყდება, ახსოვდა, გადაწყდეს, გამხდარიყო, გახდა, გვწყუროდა, გვხვდებოდა, დამავიწყდა</li>
        </ul>
      </li>
      <li>Intr
        <ul>
          <li>AUX: ა, იყო, არის, იქნება, შეიძლება, ვარ, შეიძლებოდა, ხარ, ჰქონდა</li>
          <li>VERB: აქვს, გადის, იდგა, ითვლება, მაქვს, მოდიან, წარმოებს, ავივსო, ამაღლდა, აფართხალდა</li>
        </ul>
      </li>
      <li>Tran
        <ul>
          <li>AUX: უნდა, მინდა, მინდოდა</li>
          <li>VERB: ჩანს, აღმოაჩენ, აღნიშნავდნენ, მოიცავს, წარმოადგენს, აირჩიეს, ამბობენ, ამოეგდო, ანიჭებენ, ანიჭებს</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 2 lemmas as copulas (<a>cop</a>). Examples: არის, აქვს.</li>
</ul>

<ul>
<li>This corpus uses 2 lemmas as auxiliaries (<a>aux</a>). Examples: უნდა, შეუძლია.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN-Dat (7)</li>
      <li>VERB--NOUN-Erg (8)</li>
      <li>VERB--NOUN-Nom (85)</li>
      <li>VERB--PRON-Dat (7)</li>
      <li>VERB--PRON-Erg (8)</li>
      <li>VERB--PRON-Nom (16)</li>
      <li>VERB-Part--PRON-Dat (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN-Dat (64)</li>
      <li>VERB--NOUN-Dat-ADP(შესახებ) (1)</li>
      <li>VERB--NOUN-Nom (38)</li>
      <li>VERB--PRON-Dat (9)</li>
      <li>VERB--PRON-Nom (2)</li>
      <li>VERB-Part--NOUN-Nom (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--NOUN (1)</li>
      <li>VERB--NOUN-Dat (15)</li>
      <li>VERB--PRON-Dat (6)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 4 relation subtypes: <a>advmod:lmod</a>, <a>det:poss</a>, <a>flat:name</a>, <a>nsubj:pass</a></li>
<li>The following 2 main types are not used alone, they are always subtyped: <a>det</a>, <a>flat</a></li>
<li>The following 13 relation types are not used in this corpus at all: <a>vocative</a>, <a>expl</a>, <a>dislocated</a>, <a>discourse</a>, <a>appos</a>, <a>clf</a>, <a>fixed</a>, <a>compound</a>, <a>list</a>, <a>orphan</a>, <a>goeswith</a>, <a>reparandum</a>, <a>dep</a></li>
</ul>
