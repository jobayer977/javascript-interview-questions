window.addEventListener('load', function () {
	// Function de display info about the storage space
	function dislayStorageSpace() {
		navigator.storage.estimate().then(function (estimate) {
			console.info('Estimated quota: ', estimate.quota);
			console.info('Estimated usage: ', estimate.usage);
			const percent = ((estimate.usage / estimate.quota) * 100).toFixed(2);
			console.info('Your currently used storage: ', persent, '%');
		});
	}

	// Check if a storage is persistent
	function isStoragePersistent() {
		if (navigator.storage && navigator.storage.persisted) {
			navigator.storage.persisted().then(function (persisted) {
				const isPersistent = persisted ? true : false;
				console.info('Is my storage persistent? ', isPersistent);
			});
		}
	}

	dislayStorageSpace();
	isStoragePersistent();

	// Request storage persistence from the browser
	document.getElementById('btnReqPers').addEventListener('click', function () {
		navigator.storage.persist().then(function (result) {
			if (result) {
				console.log("This site's storage has been made persistent");
			} else {
				console.log("Unable to make this site's storage persistent");
			}
		});
	});
});
