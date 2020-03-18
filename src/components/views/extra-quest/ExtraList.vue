<template>
    <div class="content-wrapper">
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-12">
                        <h1 class="m-0 text-dark">Extra Quests List</h1>
                    </div>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-3 col-6">
                        <div class="small-box bg-olive">
                            <div class="inner">
                                <h3>
                                    5 POIN
                                    <font-awesome-icon icon="info-circle" style="position: absolute; right: .5rem; cursor: pointer; font-size: 1.5rem" data-toggle="modal" data-target="#sc"/>
                                </h3>
                                <p>Special Contributions</p>
                            </div>
                            <div class="icon">

                            </div>
                            <router-link to="/extraspecial" class="small-box-footer">
                                Start Quest
                                <font-awesome-icon icon="arrow-circle-right" />
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>


            <div class="modal fade" id="sc">
                <div class="modal-dialog" style="margin-top: 50vh; transform: translateY(-50%)">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">Special Contributions</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <font-awesome-icon icon="times" aria-hidden="true" />
                            </button>
                        </div>
                        <div class="modal-body pt-0">
                            <h5>Quest Description</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </div>
</template>