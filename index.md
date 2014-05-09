---
layout: base
title:  'Online dependency annotation manual'
---

# Online dependency annotation manual with visualizations

This is an online dependency annotation manual and example bank, built
using a combination of GitHub pages and embedded brat
visualizations. Here's a minimal example:

<div style="border:1px solid gray;margin:1em;padding:2em 2em 0.5em 2em;">

An adjectival complement of a verb is an adjectival phrase which functions as the complement (like an object of the verb).

<div class="sd-parse">
She looks very beautiful
acomp(looks, beautiful)
</div>

</div>

The data for the visualizations is represented in either the [Stanford Dependency](http://nlp.stanford.edu/software/stanford-dependencies.shtml) or CoNLL-X
format. For example, the above visualization is generated from this input:

    <div class="sd-parse">
    She looks very beautiful
    acomp(looks, beautiful)
    </div>

# Per-language documentation

* [English relations](en-all.html)
* [Finnish relations](fi-all.html)
* [Universal Stanford Dependencies](usd/index.html)

# How to contribute

[This page](embedsd.html) shows how the examples are created. The
manual consists of markdown pages in [this GitHub
project](https://github.com/fginter/sdmanualtest), where you can see
the full sources. For example, `index.md`, the source for this page is
[here](https://raw.githubusercontent.com/fginter/sdmanualtest/gh-pages/index.md).
The rest is taken care of by GitHub. Project members can contribute by
directly editing the sources, others are more than welcome to submit
their additions as pull requests.


## More information:

The following sources of documentation provide further details:

- [Markdown](http://daringfireball.net/projects/markdown/syntax)
- [Github pages](https://pages.github.com/)
- [Embedded brat](http://brat.nlplab.org/embed.html)
- [Stanford Dependencies](http://nlp.stanford.edu/software/stanford-dependencies.shtml)
