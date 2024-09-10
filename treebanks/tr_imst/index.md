---
layout: base
title:  'UD_Turkish-IMST'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Turkish IMST

Language: [Turkish](/tr/index.html) (code: `tr`)<br/>
Family: Turkic, Southwestern

This treebank has been part of Universal Dependencies since the UD v1.3 release.

The following people have contributed to making this treebank part of UD: Utku Türk, Şaziye Betül Özateş, Büşra Marşan, Salih Furkan Akkurt, Çağrı Çöltekin, Gülşen Cebiroğlu Eryiğit, Memduh Gökırmak, Hüner Kaşıkara, Umut Sulubacak, Francis Tyers.

Repository: [UD_Turkish-IMST](https://github.com/UniversalDependencies/UD_Turkish-IMST)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udtr_imst214)<br />
Download all treebanks: [UD 2.14](/#download)

License: CC BY-NC-SA 4.0

Genre: nonfiction, news

Questions, comments?
General annotation questions (either Turkish-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Turkish-IMST/issues).
If you want to collaborate, please contact [memduhg&nbsp;(æt)&nbsp;gmail&nbsp;•&nbsp;com].
Development of the treebank happens outside the UD repository.
If there are bugs, either the original data source or the conversion procedure must be fixed.
Do not submit pull requests against the UD repository.

| Annotation | Source |
|------------|--------|
| Lemmas | annotated manually in non-UD style, automatically converted to UD |
| UPOS | annotated manually in non-UD style, automatically converted to UD |
| XPOS | annotated manually |
| Features | annotated manually in non-UD style, automatically converted to UD |
| Relations | annotated manually in non-UD style, automatically converted to UD |

## Description

The UD Turkish Treebank, also called the IMST-UD Treebank, is a semi-automatic conversion of the IMST Treebank (Sulubacak&Eryiğit, 2018; Sulubacak et al., 2016).




The UD Turkish Treebank, also called the IMST-UD Treebank, is a semi-automatic conversion of the IMST Treebank (Sulubacak & Eryiğit, 2018; Sulubacak et al., 2016), which is itself a reannotated version of the METU-Sabancı Turkish Treebank (Oflazer et al., 2003). All three treebanks share the same raw data, a set of 5635 sentences collected from daily news reports and novels.

Validation errors in the dataset were corrected by BOUN TABILAB/TULAP team in UD v2.11 release.

The sentences were reorganized by Furkan Akkurt for v2.13 based on the original [METU Turkish Corpus (MTC)](https://ii.metu.edu.tr/metu-corpora-research-group) so that sentences from the same document once again form a contiguous segment in the original order. Document ids were added and documents are no longer split between train, dev and test (that is, the data split had to be exceptionally changed between releases). Moreover, the new data split is compatible with the data split of the ITCC dataset in [CorefUD 1.1](https://ufal.mff.cuni.cz/corefud), which is partially based on the same documents from MTC. The scripts used to do the reorganization are kept [here](https://github.com/furkanakkurt1335/imst-mtc-reorganization).


## Acknowledgments

The IMST-UD Treebank is licensed under Creative Commons (BY-NC-SA 4.0). A summary for the terms of the license is given below (see here for more information). Under the terms of the license,

If you would use this treebank in any form of publication, please cite the following papers:

-Umut Sulubacak, Gülşen Eryiğit. Implementing Universal Dependency, Morphology and Multiword Expression Annotation Standards for Turkish Language Processing. Turkish Journal of Electrical Engineering & Computer Sciences, DOI: 10.3906/elk-1706-81):1–23. May 2018.

-Umut Sulubacak, Memduh Gökırmak, Francis Tyers, Çağrı Çöltekin, Joakim Nivre, and Gülşen Eryiğit. Universal Dependencies for Turkish. In Proceedings of COLING 2016, the 26th International Conference on Computational Linguistics. Osaka, Japan, December 2016.

This treebank follows a set of morphosyntactic annotation guidelines based on those established by Çağrı Çöltekin, and later revised and restructured by Memduh Gökırmak, Francis Tyers, and Umut Sulubacak. The conversion from the IMST Treebank (available from http://tools.nlp.itu.edu.tr/Datasets) was done by Umut Sulubacak. The contributors would also like to thank Birsel Karakoç, Hüner Kaşıkara, and Tuğba Pamay for their discussions and insights.




# Statistics of UD Turkish IMST

## POS Tags

[ADJ](tr_imst-pos-ADJ.html) – [ADP](tr_imst-pos-ADP.html) – [ADV](tr_imst-pos-ADV.html) – [AUX](tr_imst-pos-AUX.html) – [CCONJ](tr_imst-pos-CCONJ.html) – [DET](tr_imst-pos-DET.html) – [INTJ](tr_imst-pos-INTJ.html) – [NOUN](tr_imst-pos-NOUN.html) – [NUM](tr_imst-pos-NUM.html) – [PRON](tr_imst-pos-PRON.html) – [PROPN](tr_imst-pos-PROPN.html) – [PUNCT](tr_imst-pos-PUNCT.html) – [VERB](tr_imst-pos-VERB.html) – [X](tr_imst-pos-X.html)

## Features

[Abbr](tr_imst-feat-Abbr.html) – [Aspect](tr_imst-feat-Aspect.html) – [Case](tr_imst-feat-Case.html) – [Echo](tr_imst-feat-Echo.html) – [Evident](tr_imst-feat-Evident.html) – [Mood](tr_imst-feat-Mood.html) – [Number](tr_imst-feat-Number.html) – [Number[psor]](tr_imst-feat-Number-psor.html) – [NumType](tr_imst-feat-NumType.html) – [Person](tr_imst-feat-Person.html) – [Person[psor]](tr_imst-feat-Person-psor.html) – [Polarity](tr_imst-feat-Polarity.html) – [Polite](tr_imst-feat-Polite.html) – [PronType](tr_imst-feat-PronType.html) – [Reflex](tr_imst-feat-Reflex.html) – [Tense](tr_imst-feat-Tense.html) – [VerbForm](tr_imst-feat-VerbForm.html) – [Voice](tr_imst-feat-Voice.html)

## Relations

[acl](tr_imst-dep-acl.html) – [advcl](tr_imst-dep-advcl.html) – [advmod](tr_imst-dep-advmod.html) – [advmod:emph](tr_imst-dep-advmod-emph.html) – [amod](tr_imst-dep-amod.html) – [appos](tr_imst-dep-appos.html) – [aux](tr_imst-dep-aux.html) – [aux:q](tr_imst-dep-aux-q.html) – [case](tr_imst-dep-case.html) – [cc](tr_imst-dep-cc.html) – [cc:preconj](tr_imst-dep-cc-preconj.html) – [ccomp](tr_imst-dep-ccomp.html) – [clf](tr_imst-dep-clf.html) – [compound](tr_imst-dep-compound.html) – [compound:lvc](tr_imst-dep-compound-lvc.html) – [compound:redup](tr_imst-dep-compound-redup.html) – [conj](tr_imst-dep-conj.html) – [cop](tr_imst-dep-cop.html) – [csubj](tr_imst-dep-csubj.html) – [dep](tr_imst-dep-dep.html) – [det](tr_imst-dep-det.html) – [discourse](tr_imst-dep-discourse.html) – [dislocated](tr_imst-dep-dislocated.html) – [fixed](tr_imst-dep-fixed.html) – [flat](tr_imst-dep-flat.html) – [iobj](tr_imst-dep-iobj.html) – [mark](tr_imst-dep-mark.html) – [nmod](tr_imst-dep-nmod.html) – [nmod:poss](tr_imst-dep-nmod-poss.html) – [nsubj](tr_imst-dep-nsubj.html) – [nsubj:outer](tr_imst-dep-nsubj-outer.html) – [nummod](tr_imst-dep-nummod.html) – [obj](tr_imst-dep-obj.html) – [obl](tr_imst-dep-obl.html) – [orphan](tr_imst-dep-orphan.html) – [parataxis](tr_imst-dep-parataxis.html) – [punct](tr_imst-dep-punct.html) – [root](tr_imst-dep-root.html) – [vocative](tr_imst-dep-vocative.html) – [xcomp](tr_imst-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 5635 sentences, 56422 tokens and 58096 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 10115 tokens (18%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 611 types of words that contain both letters and punctuation. Examples: Türkiye'nin, Türkiye'de, Taşhan'ın, Erdoğan'ın, Türkiye'ye, 'li, İstanbul'a, Diyarbakır'a, Ankara'ya, Avrupa'da, Mahmut'un, ABD'nin, Ankara'da, Devrim'in, Diyarbakır'da, Gül'ün, Hülya'nın, Irak'ta, Recep'in, Yunak'ın, İstanbul'da, Arınç'ın, Hablemitoğlu'nun, Kemal'in, NA'nın, İstanbul'dan, AB'ye, Akgündüz'ün, Ali'nin, Almanya'da, Anadolu'da, Avrupa'dan, Bakanlığı'na, Erbakan'ın, Erdoğan'ı, Hazine'nin, KKTC'de, Meclis'e, Parkı'na, Sezer'in, Tanrı'nın, 'lı, Alev'in, Başbakanlık'ta, Bey'in, Cumhuriyet'in, Dr., Erbakan'la, Erdoğan'a, Esin'le</li>
</ul>

<ul>
<li>This corpus contains 1639 multi-word tokens. On average, one multi-word token consists of 2.02 syntactic words.</li>
<li>There are 1119 types of multi-word tokens. Examples: önemli, yoktu, vardı, vardır, yoksa, benim, vadeli, önceki, arasındaki, gibiydi, hafifçe, sessiz, yoktur, içindeki, saatlik, üzerindeki, ?edir, adlı, demektir, dolarlık, olanlar, yıllardır, altındaki, aptalca, buradaki, buydu, bölgedeki, iyice, parmaklı, rahatça, tehlikeli, yanındaki, zamanki, üretici, Katana, adamdı, başlıklı, camlı, doluydu, elindeki, imkansız, içindeydi, kazadaki, olanları, sağlıklı, sebzedir, tarihli, yavaşça, yaşındaydı, yıldır.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 14 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>VERB</a>, <a>X</a></li>
<li>This corpus does not use the following tags: SCONJ, PART, SYM</li>
</ul>

<ul>
</ul>

<ul>
<li>This corpus contains 27 lemmas tagged as pronouns (PRON): bazı, ben, bir, birbiri, biri, birkaçı, birçoğu, biz, bizler, bu, hangi, hep, hepsi, herbiri, hiçbiri, kendi, kim, kimi, ne, nere, o, sen, siz, tümü, çoğu, öbür, şu</li>
</ul>

<ul>
<li>This corpus contains 26 lemmas tagged as determiners (DET): bazı, başka, bir, biraz, birkaç, birtakım, birçok, bu, böyle, bütün, her, herhangi, hiç, hiçbir, iki, ilk, kaç, kimi, o, tüm, çok, çoğu, öbür, öyle, şey, şu</li>
</ul>

<ul>
<li>Out of the above, 8 lemmas occurred sometimes as PRON and sometimes as DET: bazı, bir, bu, kimi, o, çoğu, öbür, şu</li>
</ul>

<ul>
<li>This corpus contains 4 lemmas tagged as auxiliaries (AUX): değil, i, mi, ol</li>
</ul>

<ul>
<li>Out of the above, 2 lemmas occurred sometimes as AUX and sometimes as VERB: değil, ol</li>
</ul>

<ul>
<li>There are 3 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Conv
  <ul>
    <li>AUX: ken, yken, irerken, okurken, ymişçesine</li>
    <li>VERB: gidip, olup, dönüp, diyerek, ederek, edip, gelip, kalkıp, koşarak, belirterek</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>AUX: olan</li>
    <li>VERB: olan, olduğunu, olduğu, gelen, eden, yapılan, olmadığını, yapan, alan, yapılacak</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Vnoun
  <ul>
    <li>VERB: demek, olması, olmak, savunma, almak, görmek, yapmak, etmek, kurtulmak, etmeye</li>
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
      <li>ADJ: erkekler, kadınlar, aralarında, kadınların, erkeklerin, Türkler, başkalarının, Çinliler, gençlerin, kadınları</li>
      <li>ADP: lar, ler, ları, ların, kiler, kilerin, leri, lerin, kileri, kilere</li>
      <li>AUX: musunuz, lar, sınız, ız, ler, yız, iz, lerdir, ydik, yiz</li>
      <li>NOUN: şeyler, gözleri, yıllar, çocuklar, insanların, duygularını, insanlar, ellerini, gözlerini, çocukları</li>
      <li>NUM: onlarla, 118'lere, 70'lere, elli'leri, onların, yirmilerinde</li>
      <li>PRON: biz, siz, bunlar, bize, bizim, onların, onlar, size, bunları, hepsi</li>
      <li>PROPN: Ali'lerin, Atila'lar, Aztek'lerin, Evenkler, KOBİ'ler, KİT'ler, Yukagirler, Özer'lerden, Özer'lerin</li>
      <li>VERB: bakın, bakalım, gidiyoruz, gidelim, girdik, gittik, biliyorsunuz, diyorlar, geldik, geldiniz</li>
      <li>VERB-Conv: atlarlarken, çıkarlarken</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: içinde, kadın, var, arasında, kız, yok, ortaya, arada, içine, yanında</li>
      <li>ADP: lık, lik, a, ki, ı, e, i, kinden, ını, 'lik</li>
      <li>AUX: mi, mı, dır, dir, değil, ydi, dı, ydı, tu, mu</li>
      <li>AUX-Conv: ymişçesine</li>
      <li>NOUN: şey, zaman, gün, adam, gece, yıl, bilim, ev, evet, önem</li>
      <li>NUM: yüzde, bir, biri, iki, ikibiniki, otuz, bin, birincisi, on, _</li>
      <li>PRON: ben, o, ne, bana, beni, bu, onu, onun, benim, ona</li>
      <li>PROPN: Kerem, Türkiye, Ayhan, Kemal, Ramiz, Recep, Türkiye'nin, Mebrure, Gül, Naci</li>
      <li>VERB: dedi, dedim, oldu, söyledi, olur, etti, geldi, var, verdi, diyor</li>
      <li>VERB-Conv: giderken, konuşurken, çıkarken, koşarken, söylerken, uyurken, yaparken, alırken, bakarken, ederken</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Abl
    <ul>
      <li>ADJ: ortadan, yandan, arasından, yoktan, altından, yakından, önünden, üstünden, arkasından, yanından</li>
      <li>ADP: kinden, den, dan, lardan, lerden, liğinden</li>
      <li>NOUN: tarafından, yüzünden, oradan, yerden, yüzden, ardından, başından, yerinden, elinden, evden</li>
      <li>NUM: 4'ten, bindokuzyuzotuzalti'dan, doksanaltı'dan, ikibinbir'den, ikisinden, otuz'dan, sıfırdan, İkimizden</li>
      <li>PRON: ondan, neden, nereden, benden, bundan, bunlardan, ?, Nerden, Onlardan, bizden</li>
      <li>PROPN: İstanbul'dan, Avrupa'dan, Türkiye'den, Almanya'dan, Mebrure'den, Yakutsk'tan, ANAP'tan, Allah'tan, Ana'dan, Arjantin'den</li>
      <li>VERB-Part: olduğundan, olduktan, bildiğinden, geçtikten, gittikten, olmayacağından, söyledikten, çarpıştıktan, Uyandığınızdan, anlayacaklarından</li>
      <li>VERB-Vnoun: olmaktan, buzlanmadan, buzlanmasından, artmasından, düşünmekten, gitmekten, konuşmaktan, Gitmeden, Koşmaktan, Tartışmaktan</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>ADJ: olacağını, geleceğini, acısını, deliği, kızı, arkasını, eşini, gerçeği, kadınları, önünü</li>
      <li>ADP: ları, ı, kileri, leri, ını, i, kini</li>
      <li>NOUN: şeyi, evi, başını, duygularını, kapıyı, mektubu, ellerini, gözlerini, konuyu, sözünü</li>
      <li>NUM: biri, bini, birini, ikimizi, milyarını, 91'i, beşi, elli'yi, ikisini, kırkıncıyı</li>
      <li>PRON: beni, onu, bunu, seni, kendini, bunları, onları, bizi, kendimi, kendisini</li>
      <li>PROPN: Erdoğan'ı, Kahve'yi, Tibet'i, Ali'yi, Ana'yı, Bey'i, Denktaş'ı, Güzide'yi, ANAP'ı, Adviye'yi</li>
      <li>VERB-Part: olduğunu, olmadığını, gerektiğini, istediğimi, geldiğini, yaptığını, ettiğini, istediklerini, yapacaklarını, aldığını</li>
      <li>VERB-Vnoun: olmasını, konuşmayı, olmayı, sormayı, tartışmayı, yapmayı, bitmesini, durmasını, etmesini, gelişmelerini</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>ADJ: ortaya, içine, üstüne, önüne, yanına, yana, arasına, altına, sonuna, öne</li>
      <li>ADP: a, e, kine, ya, kilere, lara, lere, lığıma, lığına, ye</li>
      <li>NOUN: yerine, üzerine, yere, oraya, eve, buraya, başına, ele, içeriye, işe</li>
      <li>NUM: birine, ikiye, milyona, 118'lere, 2005'e, 375'e, 70'lere, atmışbeş'e, dokuz'a, elli'ye</li>
      <li>PRON: bana, ona, sana, bize, buna, kendisine, size, kendine, onlara, nereye</li>
      <li>PROPN: Türkiye'ye, İstanbul'a, Diyarbakır'a, Ankara'ya, Meclis'e, Erdoğan'a, Avrupa'ya, Celal'e, Irak'a, Kahve'ye</li>
      <li>VERB-Part: olduğuna, anlattığına, gerektiğine, olabileceğine, yapıldığına, öldüğüne, Uzaklaştığıma, alınacağına, anlatacağıma, anlattıklarına</li>
      <li>VERB-Vnoun: etmeye, almaya, anlatmaya, düşünmeye, incelemeye, yapmaya, yaşamaya, çıkmasına, anlamaya, dolaşmaya</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Equ
    <ul>
      <li>ADJ: başkalarınca, bilgece, düşmanca, yurtseverce</li>
      <li>NOUN: Babaca, Cumhurbaşkanı'nca, Felsefece, Mahkemesi'nce, Sakaca, Tatarca, kişilerce, makamlarca, organlarınca, sayıca</li>
      <li>PRON: bence, onca, Hepimizce, kendince</li>
      <li>VERB-Part: elverdiğince</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>ADJ: kızın, kadınların, kadının, erkeklerin, başkalarının, Arının, gençlerin, geçmişin, kahramanının, sevgilinin</li>
      <li>ADP: ların, kilerin, lerin, in, liğin, lüğünün, lığının, ın</li>
      <li>NOUN: uçağın, bilimin, insanın, masanın, olayın, insanların, adamın, dünyanın, evin, kapının</li>
      <li>NUM: otuz'un, 10'unun, ikimizin, ikisinin, yetmiş'inin, İkisinin</li>
      <li>PRON: onun, benim, senin, bizim, bunun, onların, sizin, bunların, hepsinin, kendisinin</li>
      <li>PROPN: Türkiye'nin, Taşhan'ın, Erdoğan'ın, Mahmut'un, Devrim'in, Gül'ün, Hülya'nın, Recep'in, Yunak'ın, Arınç'ın</li>
      <li>VERB-Part: olduğunun, olmadığının, anlattıklarımın, açtığının, dediğinin, duyulduğunun, kötüleşebileceğinin, oturacakların, söylediğimin, yapacağının</li>
      <li>VERB-Vnoun: yaşamanın, olmanın, olmasının, ulaşmanın, çatışmanın, Kıskanmanın, Sevişmenin, almanın, alınmamasının, aramaların</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ins
    <ul>
      <li>ADJ: kadınla, acıyla, eşiyle, kızla, kızlarla, zorla, arayla, başkasıyla, bütünüyle, güçle</li>
      <li>ADP: ıyla, larla, le, leriyle, lerle, İzninizle</li>
      <li>NOUN: nedeniyle, annemle, eliyle, nedenle, hızla, uçakla, yoluyla, amaçla, duygularıyla, amacıyla</li>
      <li>NUM: onlarla</li>
      <li>PRON: onunla, seninle, benimle, birbirleriyle, bununla, sizinle, birbiriyle, bizle, kendileriyle, kendisiyle</li>
      <li>PROPN: Erbakan'la, Esin'le, Devrim'le, Recep'le, Anayasa'yla, Baykal'la, Celal'le, Darwin'le, Duran'la, Erdoğan'la</li>
      <li>VERB-Part: duyduklarınızla, düşündüklerimle</li>
      <li>VERB-Vnoun: gelmesiyle, Seyretmekle, anlamakla, anlatmakla, aramakla, beklemekle, boşanmayla, durmakla, düzeltmeyle, düzenlemeyle</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Loc
    <ul>
      <li>ADJ: içinde, arasında, arada, yanında, önünde, üstünde, altında, dışında, karşısında, zorunda</li>
      <li>ADP: kinde</li>
      <li>NOUN: burada, üzerinde, orada, anda, evde, konusunda, durumunda, elinde, konuda, halinde</li>
      <li>NUM: yüzde, altında, birinde, 2002'de, ikibinüç'te, yedide, 1854'te, 1912'de, 1950'de, 1956'da</li>
      <li>PRON: ?, nerede, onda, bende, onlarda, Bizde, birinde, Nerde, bunda, hepsinde</li>
      <li>PROPN: Türkiye'de, Avrupa'da, Ankara'da, Diyarbakır'da, Irak'ta, İstanbul'da, Almanya'da, Anadolu'da, ?, Başbakanlık'ta</li>
      <li>VERB-Part: bakıldığında, geldiğinde, geldiğimizde, gördüğümde, kıyaslandığında, olduğunda, sorduğunda, çıktığımda, Buluştuğumuzda, alındığında</li>
      <li>VERB-Vnoun: açıklamada, belirlenmesinde, düzenlemelerde, Kamulaştırmalarda, araştırmada, açıklamasında, beklemesinde, belirlemede, düzenlemede, edinmemizde</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>ADJ: kadın, var, kız, yok, erkekler, erkek, ilgili, doğrusu, acı, kadınlar</li>
      <li>ADP: lık, lik, lar, ler, ki, kiler, 'lik, Hayır, anlışlanabilirlik, leri</li>
      <li>NOUN: şey, zaman, gün, adam, gece, yıl, bilim, ev, evet, önem</li>
      <li>NUM: bir, iki, ikibiniki, otuz, bin, birincisi, on, _, beş, İkimiz</li>
      <li>PRON: ben, o, ne, bu, sen, kendi, biz, siz, bunlar, biri</li>
      <li>PROPN: Kerem, Türkiye, Ayhan, Kemal, Ramiz, Recep, Mebrure, Gül, Naci, Saffet</li>
      <li>VERB-Part: olduğu, ettiği, oldukları, olmadığı, anlatacaklarım, aldırdığı, anlatacağım, ayırdığı, beğendiği, ettikleri</li>
      <li>VERB-Vnoun: demek, olması, olmak, savunma, almak, görmek, yapmak, etmek, kurtulmak, alınması</li>
    </ul>
  </li>
</ul>



<h3>Degree and Polarity</h3>



<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>AUX: değil, değildir, değildi, değilim, değilse, değilmiş, değildim, değiliz, değiller, değilsin</li>
      <li>VERB: olmaz, olmadığını, bilmiyorum, olmadığı, olmayan, olmadı, olmuyor, değil, istemiyorum, olmayacak</li>
      <li>VERB-Conv: olmadan, almadan, düşünmeden, bırakmadan, edilmedikçe, etmeksizin, geçirmeden, geçmeden, girmeden, gitmeden</li>
      <li>VERB-Part: olmadığını, olmadığı, olmayan, inanılmaz, bilmediği, bitmeyen, açmaz, bilmez, değmeyecek, görmediğim</li>
      <li>VERB-Vnoun: olmaması, verilmemesi, Duyulmaması, alınmamasının, anlayamaması, anımsamamanız, asılmaması, açılmamak, açılmaması, bakmaması</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>AUX: olan, olsa</li>
      <li>AUX-Part: olan</li>
      <li>VERB: dedi, olan, dedim, olduğunu, oldu, olduğu, söyledi, gelen, olur, etti</li>
      <li>VERB-Conv: gidip, olup, dönüp, diyerek, ederek, edip, gelip, kalkıp, koşarak, belirterek</li>
      <li>VERB-Part: olan, olduğunu, olduğu, gelen, eden, yapılan, yapan, alan, yapılacak, çıkan</li>
      <li>VERB-Vnoun: demek, olması, olmak, savunma, almak, görmek, yapmak, etmek, kurtulmak, etmeye</li>
    </ul>
  </li>
</ul>


<h3>Verbal Features</h3>


<ul>
  <li><a>Aspect</a></li>
</ul>

<ul>
  <li>Dur
    <ul>
      <li>VERB: uyuyakaldığı, uyuyakaldığını, uyuyakalmıştı</li>
      <li>VERB-Part: uyuyakaldığı, uyuyakaldığını</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Hab
    <ul>
      <li>VERB: olur, olmaz, olabilir, eder, ister, gerekir, gelir, sanırım, yeter, ?</li>
      <li>VERB-Conv: giderken, konuşurken, çıkarken, koşarken, söylerken, uyurken, yaparken, alırken, bakarken, ederken</li>
      <li>VERB-Part: benzer, ?, inanılmaz, açmaz, bilmez, götürür, kaynar, sığmaz, Anlar, Görünmez</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Perf
    <ul>
      <li>AUX: mi, mı, dır, dir, değil, ydi, dı, ydı, tu, mu</li>
      <li>AUX-Conv: ken, yken, irerken, okurken, ymişçesine</li>
      <li>AUX-Part: olan</li>
      <li>VERB: dedi, olan, dedim, olduğunu, oldu, olduğu, söyledi, gelen, etti, geldi</li>
      <li>VERB-Conv: gidip, olup, dönüp, diyerek, ederek, edip, gelip, kalkıp, koşarak, belirterek</li>
      <li>VERB-Part: olan, olduğunu, olduğu, gelen, eden, yapılan, olmadığını, yapan, alan, yapılacak</li>
      <li>VERB-Vnoun: demek, olması, olmak, savunma, almak, görmek, yapmak, etmek, kurtulmak, etmeye</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prog
    <ul>
      <li>VERB: diyor, oluyor, bilmiyorum, geliyor, biliyorum, biliyor, istiyorum, gidiyoruz, yapıyor, ediyor</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prosp
    <ul>
      <li>VERB: olacaktı, öğrenecekti, Feshedeceklermiş, anlatacaktım, anlatacaktın, anlatmayacaktım, bekleyecektim, bitmeyecekmiş, bulabileceklerdi, diyecektik</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rapid
    <ul>
      <li>VERB: alıverdi, doluverdi, ediver, edivermişti, gidiverdi, giriverir, oluverip, siliniverir, tıraşlayıvermiştin, yapıverir</li>
      <li>VERB-Conv: oluverip</li>
      <li>VERB-Part: yumuşayıveren</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Cnd
    <ul>
      <li>AUX: sa, se, değilse, yse, ise, imse, sem, siyse, ysa</li>
      <li>VERB: verirse, kalırsa, olmazsa, olursa, bakarsanız, geliyorsa, isterse, isterseniz, yaparsam, İstersen</li>
    </ul>
  </li>
</ul>

<ul>
  <li>CndPot
    <ul>
      <li>VERB: Gelemeyecekse, becerebilirse, bulamazsam, keşfedemezseniz, yaratabiliyorsanız</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Des
    <ul>
      <li>AUX: olsa</li>
      <li>VERB: olsa, varsa, konuşsaydınız, olsaydım, anlatsam, baksam, bağlansa, bıraksa, desek, dönsem</li>
    </ul>
  </li>
</ul>

<ul>
  <li>DesPot
    <ul>
      <li>VERB: bilemese, dokundurabilselerdi, yayabilsek, yuvarlayabilsem</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>AUX: dır, dir, dur, tir, değildir, tur, tır, dür, edir, lerdir</li>
      <li>VERB: olmuştur, olacaktır, açmıştır, gerçekleşmiştir, ulaşmıştır, başlamıştır, değildir, doğurmuştur, gelmiştir, girmiştir</li>
    </ul>
  </li>
</ul>

<ul>
  <li>GenNec
    <ul>
      <li>VERB: alınmalıdırlar, bulunmalıdır, olmalıdır, uyarlanmalıdır</li>
    </ul>
  </li>
</ul>

<ul>
  <li>GenNecPot
    <ul>
      <li>VERB: söyleyebilmelidir</li>
    </ul>
  </li>
</ul>

<ul>
  <li>GenPot
    <ul>
      <li>VERB: okşayabilmiştir</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>VERB: var, olsun, bakın, bak, gerek, gel, al, at, bırakın, geç</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX: mi, mı, değil, ydi, dı, ydı, tu, mu, ydu, im</li>
      <li>AUX-Conv: ken, yken, irerken, okurken, ymişçesine</li>
      <li>AUX-Part: olan</li>
      <li>VERB: dedi, olan, dedim, olduğunu, oldu, olduğu, söyledi, gelen, olur, etti</li>
      <li>VERB-Conv: gidip, olup, dönüp, diyerek, ederek, edip, gelip, kalkıp, koşarak, belirterek</li>
      <li>VERB-Part: olan, olduğunu, olduğu, gelen, eden, yapılan, olmadığını, yapan, alan, yapılacak</li>
      <li>VERB-Vnoun: demek, olması, olmak, savunma, almak, görmek, yapmak, etmek, kurtulmak, etmeye</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nec
    <ul>
      <li>VERB: olmalı, olmalıydı, gitmeliyim, bulmalıyım, dönmeliyim, Anlatılmalı, Edilmeli, almalı, anlatmalıydım, anlatmalıyım</li>
    </ul>
  </li>
</ul>

<ul>
  <li>NecPot
    <ul>
      <li>VERB: konuşabilmeli</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Opt
    <ul>
      <li>VERB: bakalım, gidelim, yazayım, alalım, anlatayım, diye, bakıla, bileyim, edelim, girelim</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pot
    <ul>
      <li>VERB: olabilir, giremiyorum, alabilen, bilemiyorum, giremiyor, ?, anlatamadım, edemiyor, girebilir, girebilmek</li>
      <li>VERB-Conv: anlatamadan, bulamadan, bulamayıp, diyemeden, gelişemeden, öğrenemeden</li>
      <li>VERB-Part: alabilen, ?, alabileceklerini, gelebileceğini, gidebileceği, gösterebilen, olabileceği, olabileceğine, olabileceğini, verebileceklerini</li>
      <li>VERB-Vnoun: girebilmek, olabilmek, anlayamaması, belirleyebilmek, bulabilmek, bulamaması, bulunabilmek, danışabilmek, edebilmek, edememe</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>VERB: Baksana, düşünsene</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>VERB: olacak, yapılacak, gelecek, verecek, yapacak, olmayacak, sürecek, yapacağız, alacak, olacaktır</li>
      <li>VERB-Part: yapılacak, sürecek, alınacak, yapacak, yapacaklarını, anlatacaklarım, anlatacağım, anlatacağımı, verecek, yapacağı</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX: ydi, dı, ydı, tu, ydu, tı, değildi, di, ti, ydim</li>
      <li>AUX-Conv: ymişçesine</li>
      <li>VERB: dedi, dedim, olduğunu, oldu, olduğu, söyledi, etti, geldi, verdi, baktı</li>
      <li>VERB-Conv: etmişçesine, artmışken, etmemişken, girmişken, okumuşçasına</li>
      <li>VERB-Part: olduğunu, olduğu, olmadığını, ettiği, verdiği, yaptığı, olmadığı, gerektiğini, olduğuna, olduğum</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pqp
    <ul>
      <li>VERB: başlamıştı, demişti, gelmişti, etmişti, geçmişti, kalkmıştı, çıkmıştı, başlamışlardı, dönmüştü, heyecanlanmıştı</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX: mi, mı, dır, dir, değil, mu, dur, sa, tir, im</li>
      <li>AUX-Conv: ken, yken, irerken, okurken</li>
      <li>AUX-Part: olan</li>
      <li>VERB: olan, gelen, olur, var, diyor, eden, demek, olmaz, olsun, yapılan</li>
      <li>VERB-Conv: gidip, olup, dönüp, diyerek, ederek, edip, gelip, kalkıp, koşarak, belirterek</li>
      <li>VERB-Part: olan, gelen, eden, yapılan, yapan, alan, çıkan, yaşayan, kalan, olmayan</li>
      <li>VERB-Vnoun: demek, olması, olmak, savunma, almak, görmek, yapmak, etmek, kurtulmak, etmeye</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Cau
    <ul>
      <li>VERB: belirtti, belirten, bildirdi, belirterek, Uzatma, üret, oluşturan, uzattı, öldürme, bildiren</li>
      <li>VERB-Conv: belirterek, belirtip, birleştirip, değiştirip, kapatarak, uzatıp, anımsatarak, azaltıp, azdırıp, ağlatınca</li>
      <li>VERB-Part: belirten, oluşturan, bildiren, ürettiği, aldırdığı, andıran, barındıran, biriktirdiği, dolduran, hazırlattığı</li>
      <li>VERB-Vnoun: Uzatma, öldürme, doldurmaya, uydurma, öldürmek, Ulaştırma, bastırmak, biçimlendirmek, canlandırmaya, düzeltmeye</li>
    </ul>
  </li>
</ul>

<ul>
  <li>CauPass
    <ul>
      <li>VERB: belirtildi, yerleştirilmiş, gerçekleştirilmesi, kaldırıldı, kaldırılsın, bastırılmış, cezalandırılması, değerlendirildi, geliştirilen, genişletiliyor</li>
      <li>VERB-Conv: giydirilerek, kaldırılmaksızın, kaldırılırken, oluşturulup, uydurularak, yumuşatılarak</li>
      <li>VERB-Part: yerleştirilmiş, bastırılmış, geliştirilen, yansıtıldığını, alıştırılacak, atlatılacağı, başlatıldığını, bekletileceği, bekletilen, belirtilen</li>
      <li>VERB-Vnoun: gerçekleştirilmesi, cezalandırılması, kaldırılması, kapatılmaya, değerlendirilmesi, değiştirilmesi, diriltilmesi, doldurulmayı, düzeltilmesini, geliştirilmesi</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>VERB: yapılan, yapılacak, edildi, verilen, alınması, ediliyor, edilmiş, hazırlanan, inanılmaz, katıldı</li>
      <li>VERB-Conv: açılınca, uzanıp, yapılarak, edilmedikçe, gerilip, gösterilerek, serpilip, yapılmadan, Eğilip, Sokuldukça</li>
      <li>VERB-Part: yapılan, yapılacak, verilen, edilmiş, hazırlanan, kurulan, alınacak, edilen, inanılmaz, yaşanan</li>
      <li>VERB-Vnoun: alınması, edilmesi, yapılması, getirilmesi, sağlanması, belirlenmesinde, edilme, gönderilmesi, katılması, kurulması</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Evident</a></li>
</ul>

<ul>
  <li>Nfh
    <ul>
      <li>AUX: mış, ymiş, ymış, değilmiş, eymiş, miş, ymuş, ayoşmuş, edenmiş, immiş</li>
      <li>AUX-Conv: ymişçesine</li>
      <li>VERB: olmuş, demiş, gelmiş, etmiş, çıkmış, başlamış, gitmiş, kalmış, almış, bayılmış</li>
      <li>VERB-Conv: etmişçesine, artmışken, etmemişken, girmişken, okumuşçasına</li>
      <li>VERB-Part: edilmiş, gelmiş, kalmış, çıkmış, kesilmiş, olmuş, yerleştirilmiş, çekilmiş, bastırılmış, başlamış</li>
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
      <li>PRON: bu, o, bunu, bunlar, buna, bunun, bunları, onu, onun, şunları</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>PRON: biri, hepsi, birbirimize, birbirlerine, kimi, hiçbiri, birbirine, birisi, hepimiz, hepsinin</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>PRON: ben, bana, o, beni, benim, onu, onun, ona, sen, sana</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: bir, iki, bin, üç, on, dört, beş, yüzde, altı, milyon</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dist
    <ul>
      <li>NUM: birer, ikişer, otuzbeşer, yirmisekizer</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>NUM: birincisi, onyedi., ikincisi, İkincisi, birinci, doksandokuz., dokuz., oniki., onikinci., onsekiz.</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>PRON: kendi, kendini, kendisine, kendimi, kendine, kendisini, kendilerine, kendisi, kendileri, kendilerini</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX: im, yim, yım, ydim, değilim, ım, mıyım, ız, yız, iz</li>
      <li>PRON: ben, bana, beni, benim, biz, bize, bizim, bence, bizi, kendimi</li>
      <li>VERB: dedim, bilmiyorum, biliyorum, ettim, sordum, gördüm, bakalım, istiyorum, gidiyoruz, anlattım</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX: musun, musunuz, sınız, misin, sın, erdeydin, imsiniz, mısın, misiniz, sin</li>
      <li>PRON: sen, sana, senin, siz, seni, size, sizi, seninle, sizin, kendini</li>
      <li>VERB: var, bakın, bak, anlattın, biliyorsunuz, gerek, gel, geldiniz, al, at</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>ADJ: içinde, kadın, var, arasında, kız, yok, ortaya, arada, içine, yanında</li>
      <li>ADP: lık, lik, lar, a, ler, ki, ları, ların, ı, e</li>
      <li>AUX: mi, mı, dır, dir, değil, ydi, dı, ydı, tu, mu</li>
      <li>AUX-Conv: ymişçesine</li>
      <li>NOUN: şey, zaman, gün, adam, gece, yıl, bilim, ev, evet, önem</li>
      <li>NUM: yüzde, bir, biri, onlarla, iki, ikibiniki, otuz, bin, birincisi, on</li>
      <li>PRON: o, ne, bu, onu, onun, ona, kendi, bunu, bunlar, biri</li>
      <li>PROPN: Kerem, Türkiye, Ayhan, Kemal, Ramiz, Recep, Türkiye'nin, Mebrure, Gül, Naci</li>
      <li>VERB: dedi, oldu, söyledi, olur, etti, geldi, verdi, diyor, baktı, olacak</li>
      <li>VERB-Conv: giderken, konuşurken, çıkarken, koşarken, söylerken, uyurken, yaparken, alırken, bakarken, ederken</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polite</a></li>
</ul>

<ul>
  <li>Form
    <ul>
      <li>VERB: kapsamaktadır, andırmaktadır, anlatmakta, atmakta, barışmakta, canlanmakta, dayanmaktadır, desteklemektedir, edinmekte, etmekte</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Infm
    <ul>
      <li>VERB: diyor, oluyor, bilmiyorum, geliyor, biliyorum, biliyor, istiyorum, gidiyoruz, yapıyor, ediyor</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number[psor]</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: aralarında, önümüzde, aramızda, yetkilileri, Başkalarının, aramıza, eşlerine, karşılarında, kızımız, yanımıza</li>
      <li>ADP: ları, leri, lığınız, İzninizle</li>
      <li>NOUN: günümüzde, ellerinde, davranışları, hayatlarının, ihtiyaçları, ilkeleri, milletvekilleri, sesleri, seslerini, yerlerini</li>
      <li>NUM: İkimiz, ikimizi, elli'leri, ikimiz, ikimizin, yirmilerinde, Üçümüz, İkimizden</li>
      <li>PRON: hepsi, kendilerine, birbirimize, birbirlerine, kendileri, hepimiz, hepsinin, kendilerini, birbirleriyle, kendimizi</li>
      <li>VERB-Part: verdikleri, Yürüdüğümüz, oldukları, olduğumuz, yapacaklarını, istediklerini, olduğumuzu, sevdiğiniz, alabileceklerini, aldığımız</li>
      <li>VERB-Vnoun: olmaları, almamız, anımsamamanız, araştırmalarını, bakmalarını, bildirmeleri, bilmenizi, bulmamız, edinmelerini, edinmemizde</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: içinde, arasında, içine, yanında, üstüne, önünde, önüne, doğrusu, yanına, üstünde</li>
      <li>ADP: ını, si, ı, ıyla, Tanrım, anlışlanabilirliği, i, leri, leriyle, liğinden</li>
      <li>NOUN: yerine, başkanı, annem, üzerinde, üzerine, Bakanı, gözleri, nedeniyle, oğlum, başına</li>
      <li>NUM: birincisi, altında, birinde, birine, birini, ikincisi, ikisi, İkincisi, 500'ü, biri</li>
      <li>PRON: kendi, biri, kendini, kendisine, kendimi, kendine, kendisini, kendisi, kimi, hiçbiri</li>
      <li>PROPN: Çilingiroğlu, Kozanoğlu, Beyoğlu, Beyoğlu'na, Beyoğlu'nda, Beyoğlu'sunda, Faranjiti, Hanım'ın, Köşkü'ne, Milliyet'i</li>
      <li>VERB-Part: olduğunu, olduğu, olmadığını, ettiği, verdiği, yaptığı, olmadığı, gerektiğini, olduğuna, olduğum</li>
      <li>VERB-Vnoun: olması, olmasını, alınması, etmesi, edilmesi, yapılması, çalışması, çıkması, çıkmasına, buzlanmasından</li>
    </ul>
  </li>
</ul>

<h3>Other Features</h3>


<ul>
  <li><a>Abbr</a>
    <ul>
      <li>Yes
        <ul>
          <li>NOUN: CHP, AB, ABD, ABD'nin, AB'ye, DYP, IMF, KKTC'de, MCB, THY</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Echo</a>
    <ul>
      <li>Rdp
        <ul>
          <li>X: fıkır, pırıl, pıtır, takır, tıklım, Abuk, apar, haşır, pörçük, sabuk</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person[psor]</a>
    <ul>
      <li>1
        <ul>
          <li>ADJ: önümüzde, arkamda, sevgilim, yanımda, aramızda, arkamdan, önüme, İçim, aramıza, eminim</li>
          <li>ADP: Tanrım, lığıma</li>
          <li>NOUN: annem, oğlum, babam, aklıma, anneme, canım, babama, annemle, dikkatimi, yüzüme</li>
          <li>NUM: İkimiz, ikimizi, ikimiz, ikimizin, Üçümüz, İkimizden</li>
          <li>PRON: kendimi, birbirimize, hepimiz, kendime, kendimizi, kendim, birbirimizi, birbirimizin, Bazılarımız, Hepimizce</li>
          <li>VERB-Part: olduğum, istediğimi, Yürüdüğümüz, gördüğüm, olduğumuz, anlatacaklarım, anlatacağım, anlatacağımı, duyduğum, ettiğim</li>
          <li>VERB-Vnoun: anlatmam, konuşmam, olmam, çalışmam, almama, almamız, araştırmalarıma, ayıklamalarım, bahsetmemin, bağırmama</li>
        </ul>
      </li>
      <li>2
        <ul>
          <li>ADJ: dışında, kenarında, yaşında, önüne, Harbinden, Kahramanlarınızın, Kahverenginden, Karşınızda, Komşun, Kızın</li>
          <li>ADP: lığınız, İzninizle</li>
          <li>NOUN: lan, Baban, Babanız, Canın, Ellerini, Oğlunuza, aklından, aklınızdan, amcan, babanızla</li>
          <li>NUM: altında, milyarını, birine, on'unu, onların, yetmiş'inin</li>
          <li>PRON: kendini, kendine, kendinizi, kendiniz, kendinize, Hepinizi, Neyin, birinizle, hepiniz, kendinle</li>
          <li>PROPN: Hanım'ın</li>
          <li>VERB-Part: sevdiğiniz, Yazdığın, dediğin, ettiğiniz, korktuğunuz, Dolaştığın, Geldiğin, Gördüğünüz, Uyandığınızdan, aldığınız</li>
          <li>VERB-Vnoun: anımsamamanız, bilmenizi, bunalman, etkilenmemen, etmeniz, gitmen, görmen, görünmeni, hatırlamanız, izlemen</li>
        </ul>
      </li>
      <li>3
        <ul>
          <li>ADJ: içinde, arasında, içine, yanında, üstüne, doğrusu, önünde, önüne, eşi, yanına</li>
          <li>ADP: ını, leri, si, ı, ıyla, anlışlanabilirliği, i, ları, leriyle, liğinden</li>
          <li>NOUN: yerine, başkanı, üzerinde, üzerine, Bakanı, gözleri, nedeniyle, tarafından, başına, konusunda</li>
          <li>NUM: birincisi, birinde, birini, ikincisi, ikisi, İkincisi, 500'ü, biri, birine, İkisi</li>
          <li>PRON: kendi, biri, kendini, kendisine, hepsi, kendisini, kendilerine, kendine, birbirlerine, kendisi</li>
          <li>PROPN: Çilingiroğlu, Kozanoğlu, Beyoğlu, Beyoğlu'na, Beyoğlu'nda, Beyoğlu'sunda, Faranjiti, Köşkü'ne, Milliyet'i, Türkiye'sinde</li>
          <li>VERB-Part: olduğunu, olduğu, olmadığını, ettiği, verdiği, yaptığı, olmadığı, gerektiğini, olduğuna, aldığı</li>
          <li>VERB-Vnoun: olması, olmasını, alınması, etmesi, edilmesi, olmaları, yapılması, çalışması, çıkması, çıkmasına</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 3 lemmas as copulas (<a>cop</a>). Examples: i, değil, ol.</li>
</ul>

<ul>
<li>This corpus uses 4 lemmas as auxiliaries (<a>aux</a>). Examples: i, değil, mi, ol.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN-Abl (1)</li>
      <li>VERB--NOUN-Acc (29)</li>
      <li>VERB--NOUN-Dat (3)</li>
      <li>VERB--NOUN-Dat-ADP(_) (1)</li>
      <li>VERB--NOUN-Gen (6)</li>
      <li>VERB--NOUN-Ins (2)</li>
      <li>VERB--NOUN-Loc-ADP(ki) (2)</li>
      <li>VERB--NOUN-Nom (1064)</li>
      <li>VERB--NOUN-Nom-ADP(_) (2)</li>
      <li>VERB--NOUN-Nom-ADP(ile)-ADP(birlikte) (1)</li>
      <li>VERB--PRON-Acc (1)</li>
      <li>VERB--PRON-Gen (3)</li>
      <li>VERB--PRON-Gen-ADP(ki) (1)</li>
      <li>VERB--PRON-Ins (1)</li>
      <li>VERB--PRON-Nom (306)</li>
      <li>VERB--PRON-Nom-ADP(kadar) (1)</li>
      <li>VERB-Conv--NOUN-Abl (1)</li>
      <li>VERB-Conv--NOUN-Acc (4)</li>
      <li>VERB-Conv--NOUN-Gen (11)</li>
      <li>VERB-Conv--NOUN-Ins (1)</li>
      <li>VERB-Conv--NOUN-Nom (62)</li>
      <li>VERB-Conv--NOUN-Nom-ADP(önce) (1)</li>
      <li>VERB-Conv--PRON-Gen (1)</li>
      <li>VERB-Conv--PRON-Nom (16)</li>
      <li>VERB-Part--NOUN-Abl (1)</li>
      <li>VERB-Part--NOUN-Acc (11)</li>
      <li>VERB-Part--NOUN-Gen (207)</li>
      <li>VERB-Part--NOUN-Ins (1)</li>
      <li>VERB-Part--NOUN-Loc (1)</li>
      <li>VERB-Part--NOUN-Loc-ADP(_) (1)</li>
      <li>VERB-Part--NOUN-Nom (132)</li>
      <li>VERB-Part--NOUN-Nom-ADP(li) (1)</li>
      <li>VERB-Part--NOUN-Nom-ADP(li)-ADP(_) (1)</li>
      <li>VERB-Part--PRON-Acc (1)</li>
      <li>VERB-Part--PRON-Dat (1)</li>
      <li>VERB-Part--PRON-Gen (31)</li>
      <li>VERB-Part--PRON-Nom (14)</li>
      <li>VERB-Vnoun--NOUN-Acc (2)</li>
      <li>VERB-Vnoun--NOUN-Gen (94)</li>
      <li>VERB-Vnoun--NOUN-Ins (1)</li>
      <li>VERB-Vnoun--NOUN-Nom (47)</li>
      <li>VERB-Vnoun--NOUN-Nom-ADP(lik) (1)</li>
      <li>VERB-Vnoun--PRON-Gen (8)</li>
      <li>VERB-Vnoun--PRON-Nom (5)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN-Abl (8)</li>
      <li>VERB--NOUN-Acc (578)</li>
      <li>VERB--NOUN-Dat (36)</li>
      <li>VERB--NOUN-Dat-ADP(_) (1)</li>
      <li>VERB--NOUN-Dat-ADP(dair) (2)</li>
      <li>VERB--NOUN-Gen (1)</li>
      <li>VERB--NOUN-Ins (5)</li>
      <li>VERB--NOUN-Loc (2)</li>
      <li>VERB--NOUN-Loc-ADP(ki) (1)</li>
      <li>VERB--NOUN-Nom (489)</li>
      <li>VERB--NOUN-Nom-ADP(ci) (1)</li>
      <li>VERB--NOUN-Nom-ADP(ile) (1)</li>
      <li>VERB--NOUN-Nom-ADP(olarak) (1)</li>
      <li>VERB--PRON-Abl (2)</li>
      <li>VERB--PRON-Acc (213)</li>
      <li>VERB--PRON-Dat (7)</li>
      <li>VERB--PRON-Nom (39)</li>
      <li>VERB--PRON-Nom-ADP(siz) (1)</li>
      <li>VERB-Conv--NOUN-Acc (112)</li>
      <li>VERB-Conv--NOUN-Dat (3)</li>
      <li>VERB-Conv--NOUN-Ins (2)</li>
      <li>VERB-Conv--NOUN-Loc-ADP(ki) (1)</li>
      <li>VERB-Conv--NOUN-Nom (55)</li>
      <li>VERB-Conv--PRON-Acc (14)</li>
      <li>VERB-Part--NOUN-Abl (5)</li>
      <li>VERB-Part--NOUN-Acc (169)</li>
      <li>VERB-Part--NOUN-Dat (8)</li>
      <li>VERB-Part--NOUN-Gen (4)</li>
      <li>VERB-Part--NOUN-Ins (7)</li>
      <li>VERB-Part--NOUN-Loc-ADP(ki) (1)</li>
      <li>VERB-Part--NOUN-Nom (187)</li>
      <li>VERB-Part--NOUN-Nom-ADP(li) (1)</li>
      <li>VERB-Part--NOUN-Nom-ADP(siz) (1)</li>
      <li>VERB-Part--PRON-Acc (43)</li>
      <li>VERB-Part--PRON-Ins (1)</li>
      <li>VERB-Part--PRON-Nom (18)</li>
      <li>VERB-Part--PRON-Nom-ADP(ile) (1)</li>
      <li>VERB-Vnoun--NOUN-Abl (3)</li>
      <li>VERB-Vnoun--NOUN-Acc (120)</li>
      <li>VERB-Vnoun--NOUN-Dat (8)</li>
      <li>VERB-Vnoun--NOUN-Equ (1)</li>
      <li>VERB-Vnoun--NOUN-Gen (1)</li>
      <li>VERB-Vnoun--NOUN-Ins (2)</li>
      <li>VERB-Vnoun--NOUN-Nom (112)</li>
      <li>VERB-Vnoun--NOUN-Nom-ADP(ile) (1)</li>
      <li>VERB-Vnoun--NOUN-Nom-ADP(siz)-ADP(_) (1)</li>
      <li>VERB-Vnoun--PRON-Abl (1)</li>
      <li>VERB-Vnoun--PRON-Acc (41)</li>
      <li>VERB-Vnoun--PRON-Dat (1)</li>
      <li>VERB-Vnoun--PRON-Ins (2)</li>
      <li>VERB-Vnoun--PRON-Nom (3)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--NOUN-Dat (81)</li>
      <li>VERB--NOUN-Dat-ADP(başka) (1)</li>
      <li>VERB--NOUN-Nom (5)</li>
      <li>VERB--PRON-Acc (2)</li>
      <li>VERB--PRON-Dat (51)</li>
      <li>VERB--PRON-Gen-ADP(ki) (1)</li>
      <li>VERB-Conv--NOUN-Dat (8)</li>
      <li>VERB-Conv--NOUN-Gen (1)</li>
      <li>VERB-Conv--PRON-Dat (2)</li>
      <li>VERB-Part--NOUN-Dat (18)</li>
      <li>VERB-Part--NOUN-Dat-ADP(karşı) (2)</li>
      <li>VERB-Part--NOUN-Nom (2)</li>
      <li>VERB-Part--PRON-Dat (7)</li>
      <li>VERB-Vnoun--NOUN-Abl (1)</li>
      <li>VERB-Vnoun--NOUN-Dat (14)</li>
      <li>VERB-Vnoun--NOUN-Nom (1)</li>
      <li>VERB-Vnoun--PRON-Dat (1)</li>
    </ul>
  </li>
</ul>



<h3>Verbs with Reflexive Core Objects</h3>

<ul>
  <li>This corpus contains 53 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: as kendini, at kendini, yer kendimi, alıştırma kendini, anla kendilerini, anlat kendisini, at kendinizi, bağla kendisine, benze kendini, beğen kendimi, bul kendimizi, bul kendine, bırak kendimi, getir kendisine, getir kendisini, gör kendilerini, gör kendimi, görüş kendileriyle, güven kendilerine, hisset kendimi, hisset kendimizi, hisset kendini, hisset kendisini, ilan kendini, inan kendini, iptal kendilerini, izle kendilerini, kan kendimi, karış kendini, koru kendilerini, kurtar kendimi, kurtar kendinizi, kutla kendisini, mücadele kendisiyle, nimet kendini, ol kendileri, rahatla kendisini, sal kendini, sat kendi, savun kendini, teslim kendinizi, toparla kendisini, tut kendimi, tutsaklaş kendisini, uğurla kendisini, ver kendini, ye kendine, yokla kendimizi, çek kendimizi, çek kendini</li>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 7 relation subtypes: <a>advmod:emph</a>, <a>aux:q</a>, <a>cc:preconj</a>, <a>compound:lvc</a>, <a>compound:redup</a>, <a>nmod:poss</a>, <a>nsubj:outer</a></li>
<li>The following 4 relation types are not used in this corpus at all: <a>expl</a>, <a>list</a>, <a>goeswith</a>, <a>reparandum</a></li>
</ul>
