---
title: BinaryAge - tools for developers
layout: default
---

<div class="relative">
	<div id="products">
		<div class="product">
			<div class="product-logo">
				<div class="logo">
				  	<img src="/shared/img/firerainbow-icon.png" width="32" height="32"/>
					<h1>FireRainbow</h1>
					<h2>brings javascript syntax highlighting to Firebug</h2>
				</div>
			</div>
			<div class="product-image">
				<div class="main-screenshot">
					<img src="/shared/img/firerainbow-mainshot.png">
				</div>
			</div>
			<a class="product-link" href="http://firerainbow.binaryage.com">firerainbow.binaryage.com</a>
		</div>
		<div class="product">
			<div class="product-logo">
				<div class="logo">
				  	<img src="/shared/img/visor-icon.png" width="32" height="32"/>
					<h1>Visor for OSX</h1>
					<h2>a system-wide terminal accessible via a hot-key</h2>
				</div>
			</div>
			<div class="product-image">
				<div class="main-screenshot">
					<img src="/shared/img/visor-mainshot.png">
				</div>
			</div>
			<a class="product-link" href="http://visor.binaryage.com">visor.binaryage.com</a>
		</div>
		<div class="product">
			<div class="product-logo">
				<div class="logo">
				  	<img src="/shared/img/firequery-icon.png" width="32" height="32"/>
					<h1>FireQuery</h1>
					<h2>a collection of Firebug enhancements for jQuery</h2>
				</div>
			</div>
			<div class="product-image">
				<div class="main-screenshot">
					<img src="/shared/img/firequery-mainshot.png">
				</div>
			</div>
			<a class="product-link" href="http://firequery.binaryage.com">firequery.binaryage.com</a>
		</div>
		<div class="product">
			<div class="product-logo">
				<div class="logo">
				  	<img src="/shared/img/xrefresh-icon.png" width="32" height="32"/>
					<h1>XRefresh</h1>
					<h2>browser refresh automation for web developers</h2>
				</div>
			</div>
			<div class="product-image">
				<div class="main-screenshot">
					<img src="/shared/img/xrefresh-mainshot.png">
				</div>
			</div>
			<a class="product-link" href="http://xrefresh.binaryage.com">xrefresh.binaryage.com</a>
		</div>
		<div class="product">
			<div class="product-logo">
				<div class="logo">
				  	<img src="/shared/img/firepython-icon.png" width="32" height="32"/>
					<h1>FirePython</h1>
					<h2>a sexy Python logger console integrated into Firebug</h2>
				</div>
			</div>
			<div class="product-image">
				<div class="main-screenshot">
					<img src="/shared/img/firepython-mainshot.png">
				</div>
			</div>
			<a class="product-link" href="http://firepython.binaryage.com">firepython.binaryage.com</a>
		</div>
		<div class="product">
			<div class="product-logo">
				<div class="logo">
				  	<img src="/shared/img/drydrop-icon.png" width="32" height="32"/>
					<h1>DryDrop</h1>
					<h2>deploy GAE sites by pushing to GitHub</h2>
				</div>
			</div>
			<div class="product-image">
				<div class="main-screenshot">
					<img src="/shared/img/drydrop-mainshot.png">
				</div>
			</div>
			<a class="product-link" href="http://drydrop.binaryage.com">drydrop.binaryage.com</a>
		</div>
		<div class="product">
			<div class="product-logo">
				<div class="logo">
				  	<img src="/shared/img/firelogger4php-icon.png" width="32" height="32"/>
					<h1>FireLogger for PHP</h1>
					<h2>a sexy PHP logger console integrated into Firebug</h2>
				</div>
			</div>
			<div class="product-image">
				<div class="main-screenshot">
					<img src="/shared/img/firelogger4php-mainshot.png">
				</div>
			</div>
			<a class="product-link" href="http://firelogger4php.binaryage.com">firelogger4php.binaryage.com</a>
		</div>
	</div>
</div>

<div class="clear"></div>

<script>
$(function() {		
	$(".product").bind("click", function() {
		document.location = $(this).find('.product-link').attr('href');
	});	
});
</script>